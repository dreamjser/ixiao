import User from '../models/users';

export default {

  // 添加用户
	addUser(params) {
		const user = new User(params);
		return user.save()
			.then(data => ({
				code: 0,
				data
			}), err => ({
				code: 1,
				err
			}));
	},

  // 根据昵称获取用户信息
	getUserByNickname(nickname) {
		return User.findOne({
			nickname: nickname
		}).exec()
      .then(data => ({
        code: 0,
        data
      }), err => ({
        code: 1,
        err
      }));
	}

}
