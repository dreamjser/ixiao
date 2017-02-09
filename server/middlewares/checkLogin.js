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

  const redisAuth = client.get(email);

  console.log(`auth:${redisAuth}`);
  if(auth === redisAuth){
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

	// User.getUser({
	// 		email
	// 	})
	// 	.then(r => {
	// 		if (r.code === 0 && r.data) {
	// 			if (auth !== md5(r.data._id)) {
	// 				error = {
	//            code: 100,
	//            msg: '登录失败'
	//          }
	// 			}
	// 		}else{
	//        error = {
	//          code: 101,
	//          msg: '登录已过期'
	//        }
	//      }

	//      if(error){
	//        throw error;
	//      }
	// 	})


}
