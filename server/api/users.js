import User from '../controllers/users';

export default app => {

  // POST: /user
  // params :{email,nickname,password}
	app.post('/user', (req, res) => {
		const params = req.body;
		User.addUser(params)
			.then(r => res.send(r));
	});

  // GET: /user?nickname=xxx
	app.get('/user', (req, res) => {
		const nickname = req.query.nickname;
		User.getUserByNickname(nickname)
			.then(r => res.send(r));
	})
}
