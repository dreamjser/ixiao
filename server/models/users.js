import mongoose from 'mongoose';
import {
  emailValidation,
  nicknameValidation
} from '../../common/constants/validation';


const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    index: true,
    unique: true,
    trim: true,
    match: [emailValidation.match, emailValidation.matchMsg]
  },
  nickname: {
    type: String,
    index: true,
    trim: true,
    match: [nicknameValidation.match, nicknameValidation.matchMsg],
  },
  password: {
    type: String,
    required: true
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
