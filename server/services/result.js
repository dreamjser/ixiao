export default (error, data) => {
  let result;

  if(error){
    result = {
      code: 102,
      error
    };
  }else{
    result = {
      code: 0,
      data
    }
  }

  return result;
}
