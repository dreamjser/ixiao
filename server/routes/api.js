import User from '../controllers/user';

console.log(User);

const setApiRouter = app => {
  app.put('/user', (req, res) => {
    const params = req.query;

    User.addUser(params)
      .then(data => {res.send(data)});
  });

  app.get('/user', (req, res) => {
    const name = req.query.name;

    User.getUserByName(name)
      .then(data => res.render(data));
  })
}

export default setApiRouter;
