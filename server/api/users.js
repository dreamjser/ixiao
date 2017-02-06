import User from '../controllers/users';

export default app => {

  // GET: /checkEmailUnique?email=xxxx
	app.get('/checkEmailUnique', (req, res, next) => {
		const email = req.query.email;

		User.getUserByEmail(email)
			.then(r => res.send(r));
	});

  // POST: /register
  // params :{email,nickname,password}
  app.post('/register', (req, res) => {
    const params = req.body;
    User.addUser(params)
      .then(r => res.send(r));
  });
}
