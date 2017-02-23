import md5 from 'md5';
import MUsers from '../models/users';
import checkLogin from '../middlewares/checkLogin';
import validator from '../services/validator';
import auth from '../services/auth';
import {
  emailValidation,
  passwordValidation
} from '../../common/constants/validation';

validator.config = {
  email: {
    match: emailValidation.match,
    msg: emailValidation.matchMsg
  },
  password: {
    match: passwordValidation.match,
    msg: passwordValidation.matchMsg
  }
}

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

class CUsers {
  constructor(connect){
    this.user = new MUsers(connect);
  }

  // 检查用户
  checkUser(req, res){
    const email = req.query.email;

    this.user.selectUserByEmail(email, r => res.send(r));
  }

  checkLogin(req, res){
    const params = req.body;

    const vData = {
      email: params.email,
      password: params.password
    };

    if (!checkToken(req, res, params.token)) {
      return;
    }

    validator.validate(vData);

    if(validator.hasError()){
      res.send({
        code: 101,
        msg: validator.message
      });
      return;
    }

    params.password = md5(params.password);

    this.user.selectUserLogin(params, r => {
      if (r.code === 0) {
        r.data && auth.set(res, r.data);
      }
      res.send(r);
    });
  }

  doLogout(req, res){
    let email = '';

    if('email' in req.cookies){
      email = req.cookies.email;
    }

    auth.clear(res, email);

    res.send({
      code: 0
    });
  }

  // 添加用户
  addUser(req, res){
    const params = req.body;
    const emailMatch = params.email.match(/([\w.-]+)@/);

    const vData = {
      email: params.email,
      password: params.password
    };

    if (!checkToken(req, res, params.token)) {
      return;
    }

    validator.validate(vData);

    if(validator.hasError()){
      res.send({
        code: 101,
        msg: validator.message
      });
      return;
    }

    emailMatch && (params.nickname = emailMatch[1]);

    params.password = md5(params.password);

    this.user.insertUser(params, r => {
      if (r.code === 0) {
        r.data && auth.set(res, r.data);
      }
      res.send(r);
    });
  }
}

export default CUsers;
