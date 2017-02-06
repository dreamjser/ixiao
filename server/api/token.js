export default app => {
  // GET: /token
  app.get('/token', (req, res) => {
    req.session.token = +new Date();
    res.send({
      token: req.session.token
    })
  });
}
