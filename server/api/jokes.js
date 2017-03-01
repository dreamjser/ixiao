import CJokes from '../controllers/jokes';
import checkLogin from '../middlewares/checkLogin';

export default (app, connect) => {
  const joke = new CJokes(connect);

  app.post('/addJoke', checkLogin, (req, res) => {
    joke.addJoke(req, res);
  })
}
