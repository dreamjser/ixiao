const validator = {
  // 第一个不通过验证的算法返回的信息
  message: '',
  // 验证器配置
  // 名称：{msg:错误信息, match: 正则}
  config: {},
  //对外接口
  validate: function(data) {
    let p, match, item,
      value, hasError = false;

    this.message = '';

    for (p in data) {
      value = data[p];
      item = this.config[p];
      match = item.match;

      if(!value.match(match)){
        this.message = item.msg;
        break;
      }
    }
  },
  hasError: function() {
    return this.message !== '';
  }
};

export default validator;
