import User from '../controllers/users';

export default app => {

  // GET: /user/nickname
	app.get('/user/:nickname', (req, res, next) => {
		const nickname = req.params.nickname;

		User.getUserByNickname(nickname)
			.then(r => res.send(r));
	});

  // POST: /user
  // params :{email,nickname,password}
  app.post('/user', (req, res) => {
    const params = req.body;
    User.addUser(params)
      .then(r => res.send(r));
  });
}
