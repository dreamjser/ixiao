import User from '../models/user';

export default {
  addUser(params) {
    const user = new User(params);
    return user.save();
  },
  getUserByName(name) {
    return User.find({name: 'name'}).exec();
  }
}
