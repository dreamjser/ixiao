export const emailValidation = {
  required: true,
  requiredMsg: '请填写邮箱',
  match: /^[\w-.]+@[\w-]+(\.[a-zA-Z0-9]+)+$/,
  matchMsg: '邮箱格式错误'
};

export const nicknameValidation = {
  match: /^\S{2,8}$/,
  matchMsg: '昵称为2-8位的非空白字符'
};

export const passwordValidation = {
  required: true,
  requiredMsg: '请填写密码',
  match: /^.{6,16}$/,
  matchMsg: '密码为6-16位字符'
}