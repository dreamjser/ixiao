import md5 from 'md5';
import MUsers from '../models/users';
import checkLogin from '../middlewares/checkLogin';
import validator from '../services/validator';
import auth from '../services/auth';
import checkToken from '../services/checkToken';
import {
  vEmail,
  vPassword
} from '../../common/constants/validation';

validator.config = {
  email: {
    match: vEmail.match,
    msg: vEmail.matchMsg
  },
  password: {
    match: vPassword.match,
    msg: vPassword.matchMsg
  }
}

class CUsers {
  constructor(connect){
    this.user = new MUsers(connect);
  }

  // 检查用户
  checkUser(req, res){
    const email = req.query.email;

    this.user.selectUserByEmail(email, r => res.send(r));
  }

  // 检查登录
  checkLogin(req, res){
    const params = req.body;

    if (!checkToken(req, res, params.token)) {
      return;
    }

    const vData = {
      email: params.email,
      password: params.password
    };

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

  // 登出
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

    if (!checkToken(req, res, params.token)) {
      return;
    }

    const vData = {
      email: params.email,
      password: params.password
    };

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
