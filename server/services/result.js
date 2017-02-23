export default (error, data) => {
  let result;

  if(error){
    result = {
      code: 102,
      msg: '数据错误'
    };
  }else{
    result = {
      code: 0,
      data
    }
  }

  return result;
}
