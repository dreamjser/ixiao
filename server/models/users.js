import getResult from '../services/result';

class MUsers {
  constructor(connect){
    this.connect = connect;
  }

  // 插入用户数据
  insertUser(params, cb){
    const {
      email,
      nickname,
      password
    } = params;
    const createtime = +new Date();
    const sql = `insert into users (email,nickname,password,createtime) values ('${email}','${nickname}','${password}',${createtime})`;

    this.connect.query(sql, (error, results, fields) => {
      const result = {
        email,
        nickname
      };
      const r = getResult(error, result);

      cb(r);
    });
  }

  selectUserByEmail(email, cb){
    const sql = `select email,nickname from users where email = '${email}' limit 1`;

    this.connect.query(sql, (error, results, fields) => {
      const result = !error? (results[0] || null): null;
      const r = getResult(error, result);
      // console.log(error);
      cb(r);
    });
  }

  selectUserLogin(params, cb){
    const {
      email,
      password
    } = params;
    const sql = `select email,nickname from users where email='${email}' and password='${password}' limit 1`;

    this.connect.query(sql, (error, results, fields) => {
      const result = !error? (results[0] || null): null;
      const r = getResult(error, result);

      cb(r);
    });
  }
}

export default MUsers;
