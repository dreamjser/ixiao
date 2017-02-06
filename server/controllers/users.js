import User from '../models/users';

export default {
  // 添加用户
	addUser(params) {
		const user = new User(params);
		return user.save()
			.then(data => ({
				code: 0,
				data
			}))
      .catch(err => {
        if(!('code' in err)){
          err.code = 1;
        }
        return err;
      });
	},

  // 根据email获取用户信息
	getUserByEmail(email) {
		return User.findOne({
			email: email
		}).exec()
      .then(data => ({
        code: 0,
        data
      }))
      .catch(err => err);
	}

}
