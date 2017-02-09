import md5 from 'md5';
import {
  createClient
} from 'redis';
import User from '../controllers/users';

const client = createClient();

export default (req, res, next) => {
  const {
    email,
    auth
  } = req.cookies;

  let error = null;

  client.get(email, (err, r) => {
    if (auth !== r) {
      error = {
        code: 101,
        msg: '登录已过期'
      };
    }

    if (error) {
      res.send(error);
    } else {
      next();
    }
  });
  return;
  console.log(redisAuth, auth);
  if (auth !== redisAuth) {
    error = {
      code: 101,
      msg: '登录已过期'
    };
  }

  if (error) {
    res.send(error);
  } else {
    next();
  }
}
