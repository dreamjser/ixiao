export const vEmail = {
  required: true,
  requiredMsg: '请填写邮箱',
  match: /^[\w-.]+@[\w-]+(\.[a-zA-Z0-9]+)+$/,
  matchMsg: '邮箱格式错误'
};

export const vPassword = {
  required: true,
  requiredMsg: '请填写密码',
  match: /^.{6,16}$/,
  matchMsg: '密码为6-16位字符'
}

export const vTitle = {
  required: true,
  requiredMsg: '请填写标题',
  match: /^.{1,20}$/,
  matchMsg: '标题为20个之内的字符'
}

export const vJoke = {
  required: true,
  requiredMsg: '请填写笑话',
  match: /^.{1,500}$/,
  matchMsg: '笑话为500个之内的字符'
}
