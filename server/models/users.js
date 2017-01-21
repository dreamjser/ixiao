import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    index: true,
    unique: true,
    trim: true,
    match: [/^[\w-.]+@[\w-]+(.[a-zA-Z0-9]+)+$/, '邮箱格式错误']
  },
  nickname: {
    type: String,
    index: true,
    unique: true,
    trim: true,
    match: [/^.{2,8}$/, '昵称为2-8位的字符'],
  },
  password: {
    type: String,
    required: true,
  },
  // 1-普通用户 2-管理员 3-超级管理员
  identity: {
    type: Number,
    default: 1
  },
  createTime: {
    type: Number,
    default: Date.now()
  },
  likes: Array
});

const Users = mongoose.model('users', UserSchema);

export default Users;
