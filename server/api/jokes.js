import CJokes from '../controllers/jokes';

export default (app, connect) => {
  const joke = new CJokes(connect);

  app.post('/addJoke', (req, res) => {
    joke.addJoke(req, res);
  })
}
