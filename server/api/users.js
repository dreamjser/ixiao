import CUsers from '../controllers/users';

export default (app, connect) => {
  const user = new CUsers(connect);

  app.post('/doRegister', (req, res) => {
    user.addUser(req, res);
  });

  app.get('/checkEmailUnique', (req, res) => {
    user.checkUser(req, res);
  });
}
