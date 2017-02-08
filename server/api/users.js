import md5 from 'md5';
import User from '../controllers/users';

// 检查token是否一致
const checkToken = (req, res, token) => {
	let check = true;

	if (token !== req.session.token) {
		res.send({
			code: 2,
			msg: 'token已过期，请刷新'
		});
		check = false;
	}

	return check;
};

// 登录、注册成功后设置相关cookie
const setAuthCookie = (res, params) => {
	const maxAge = 30 * 24 * 60 * 60 * 1000;

	res.cookie('email', params.email, {
		maxAge
	});

	res.cookie('auth', md5(params._id), {
		httpOnly: true,
		maxAge
	})
};

export default app => {

	app.get('/checkLogin', (req, res) => {
		const {
			email,
			auth
		} = req.cookies;

		User.getUser({
				email
			})
			.then(r => {

        let data = {
          code: 1,
          msg: '未登录'
        }

				if (r.code === 0 && r.data) {
					if (auth === md5(r.data._id)) {
						data = {
              code: 0,
              msg: '已登录'
            }
					}
				}

				res.send(data)
			})
	});

	// GET: /checkEmailUnique?email=xxxx
	app.get('/checkEmailUnique', (req, res, next) => {
		const email = req.query.email;
		const params = {
			email
		};

		User.getUser(params)
			.then(r => res.send(r));
	});

	// POST: /doRegister
	// params :{email,password,token}
	app.post('/doRegister', (req, res) => {
		const params = req.body;
		params.password = md5(params.password);

		if (!checkToken(req, res, params.token)) {
			return;
		}

		delete params.token;

		User.addUser(params)
			.then(r => {
				if (r.code === 0) {
					r.data && setAuthCookie(res, r.data);
				}
				res.send(r)
			});
	});

	// POST: /doRegister
	// params :{email,password,token}
	app.post('/doLogin', (req, res) => {
		const params = req.body;
		params.password = md5(params.password);

		if (!checkToken(req, res, params.token)) {
			return;
		}

		delete params.token;

		User.getUser(params)
			.then(r => {
				if (r.code === 0) {
					r.data && setAuthCookie(res, r.data);
				}
				res.send(r)
			});
	});
}
