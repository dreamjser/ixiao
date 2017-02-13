export default app => {
  // GET: /token
  app.get('/getToken', (req, res) => {
    if(!req.session.token){
      req.session.token = +new Date();
    }

    res.send({
      token: req.session.token
    });
  });
}
