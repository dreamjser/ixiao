import CUsers from '../controllers/users';

export default (app, connect) => {
  const user = new CUsers(connect);

  app.post('/doLogin', (req, res) => {
    user.checkLogin(req, res);
  });

  app.post('/doRegister', (req, res) => {
    user.addUser(req, res);
  });

  app.post('/doLogout', (req, res) => {
    user.doLogout(req, res);
  });

  app.get('/checkEmailUnique', (req, res) => {
    user.checkUser(req, res);
  });

}
