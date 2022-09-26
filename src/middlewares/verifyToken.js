const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const { token } = req.cookies;
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (!err) {
      req.token = decoded;
    }
    next();
  });
};

const authorize = (req, res, next) => {
  if (!req.token) {
    res.status(401).send();
  } else {
    next();
  }
};

module.exports = { auth, authorize };
