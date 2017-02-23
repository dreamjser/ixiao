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
      const r = getResult(error, {});

      cb(r);
    });
  }

  selectUser(email, cb){
    const sql = `select email,nickname from users where email = '${email}' limit 1`;

    this.connect.query(sql, (error, results, fields) => {
      const result = !error? results[0]: {};
      const r = getResult(error, result);

      cb(r);
    });
  }
}

export default MUsers;
