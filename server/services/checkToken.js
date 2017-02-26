export default (req, res, token) => {
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
