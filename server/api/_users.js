import md5 from 'md5';
import {
  createClient
} from 'redis';
import User from '../controllers/users';
import checkLogin from '../middlewares/checkLogin';

const client = createClient();

// 检查token是否一致
const checkToken = (req, res, token) => {
  let check = true;

  if (token !== req.session.token) {
    res.send({
      code: 2,
      msg: 'token已过期，请刷新'
    });
    check = false;
  }

  return check;
};

// 登录、注册成功后设置相关cookie
const setAuthCookie = (res, params) => {
  const maxAge = 30 * 24 * 60 * 60 * 1000;

  res.cookie('email', params.email, {
    maxAge
  });

  res.cookie('data', JSON.stringify(params), {
    maxAge
  });

  res.cookie('auth', md5(params._id), {
    httpOnly: true,
    maxAge
  })

  client.set(params.email, md5(params._id));
};

const clearAuthCookie = (res, email) => {
  const maxAge = -1;

  res.cookie('email', '', {
    maxAge
  });

  res.cookie('data', '', {
    maxAge
  });

  res.cookie('auth', '', {
    maxAge
  })

  client.del(email);
};

export default app => {

  // GET: /checkEmailUnique?email=xxxx
  app.get('/checkEmailUnique', (req, res, next) => {
    const email = req.query.email;
    const params = {
      email
    };

    User.getUser(params)
      .then(r => res.send(r));
  });

  // POST: /doRegister
  // params :{email,password,token}
  app.post('/doRegister', (req, res) => {
    const params = req.body;
    const emailMatch = params.email.match(/([\w.-]+)@/);

    params.password = md5(params.password);

    if (!checkToken(req, res, params.token)) {
      return;
    }

    delete params.token;

    emailMatch && (params.nickname = emailMatch[1]);

    User.addUser(params)
      .then(r => {
        if (r.code === 0) {
          r.data && setAuthCookie(res, r.data);
        }
        res.send(r)
      });
  });

  // POST: /doRegister
  // params :{email,password,token}
  app.post('/doLogin', (req, res) => {
    const params = req.body;

    params.password = md5(params.password);

    if (!checkToken(req, res, params.token)) {
      return;
    }

    delete params.token;

    User.getUser(params)
      .then(r => {
        if (r.code === 0) {
          r.data && setAuthCookie(res, r.data);
        }
        res.send(r)
      });
  });

  app.post('/doLogout', (req, res) => {
    let email = '';

    if('email' in req.cookies){
      email = req.cookies.email;
    }

    clearAuthCookie(res, email);

    res.send({
      code: 0
    });
  });

  app.get('/getUserInfo', checkLogin, (req, res) => {
    const email = req.cookies.email;

    User.getUser({
      email
    })
      .then(r => res.send(r));
  });
}
