const logoutController = (req, res) => {
  res.clearCookie('token').json('logout successfully');
};

module.exports = logoutController;
