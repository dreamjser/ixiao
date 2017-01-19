import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  identity: {
    type: Number,
    default: 1
  },
  email: String,
  createTime: Date,
  likes: Array

});

const User = mongoose.model('users', UserSchema);

export default User;
