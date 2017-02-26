import getResult from '../services/result';

class MJokes{
  constructor(connect){
    this.connect = connect;
  }

  insertJoke(params, cb){
    let {
      title,
      joke
    } = params;
    const connect = this.connect;
    title = connect.escape(title);
    joke = connect.escape(joke);

    const sql = `insert into jokes (title,joke) values (${title},${joke})`;
    connect.query(sql, (error, results, fields) => {
      const result = {
        title,
        joke
      };
      const r = getResult(error, result);

      cb(r);
    });
  }
}

export default MJokes;
