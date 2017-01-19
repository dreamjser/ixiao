import User from '../controllers/user';

export default app => {

  app.put('/user', (req, res) => {
    const params = req.body;

    User.addUser(params)
      .then(data => {
        res.send({
          code: 0,
          data
        });
      }, err => {
        res.send({
          code: 1,
          err: err.message
        })
      });
  });

  app.get('/user', (req, res) => {
    const name = req.query.name;

    User.getUserByName(name)
      .then(data => {
        res.send(data)
      });
  })
}
