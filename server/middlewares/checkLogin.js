import md5 from 'md5';
import {
  createClient
} from 'redis';
import User from '../controllers/users';

const client = createClient();

export default (req, res, next) => {
  let error = null;
  const ERROR = {
    code: 110,
    msg: '未登录'
  };

  if(!('email' in req.cookies)){
    res.send(ERROR);
    return;
  }

  const {
    email,
    auth
  } = req.cookies;

  client.get(email, (err, r) => {
    if (auth !== r) {
      error = ERROR;
    }

    if (error) {
      res.send(error);
    } else {
      next();
    }
  });
}
