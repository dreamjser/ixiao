import md5 from 'md5';
import User from '../controllers/users';

export default app => {

  // GET: /checkEmailUnique?email=xxxx
	app.get('/checkEmailUnique', (req, res, next) => {
		const email = req.query.email;

		User.getUserByEmail(email)
			.then(r => res.send(r));
	});

  // POST: /doRegister
  // params :{email,nickname,password}
  app.post('/doRegister', (req, res) => {
    const params = req.body;
    params.password = md5(params.password);

    if(params.token !== req.session.token){
        res.send({
          code: 2,
          msg: 'token已过期，请刷新'
        })
        return;
    }

    User.addUser(params)
      .then(r => res.send(r));
  });
}
