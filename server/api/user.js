import User from '../controllers/user';

export default app => {

  app.put('/user', (req, res) => {
    const params = req.query;

    User.addUser(params)
      .then(data => {
        res.send(data)
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
