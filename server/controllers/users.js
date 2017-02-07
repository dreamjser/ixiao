import User from '../models/users';

export default {
  // 添加用户
	addUser(params) {
		const user = new User(params);
		return user.save()
			.then(data => ({
				code: 0,
				data:{
          _id: data._id,
          email: data.email
        }
			}))
      .catch(err => {
        if(!('code' in err)){
          err.code = 1;
        }
        return err;
      });
	},

  // 获取用户数据
  getUser(params){
    return User.findOne(params,{
      email: 1
    }).exec()
      .then(data => ({
        code: 0,
        data
      }))
      .catch(err => err);
  }

}
