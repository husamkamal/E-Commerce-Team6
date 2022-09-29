// const { join } = require('path');
const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const { join } = require('path');
const { auth } = require('./middlewares/verifyToken');

const app = express();
require('dotenv').config();
const router = require('./routers');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());
if (process.env.NODE_ENV === 'development') {
  const morgan = require('morgan');

  app.use(morgan('dev'));
}
app.use(auth);
// app.get('/', (req, res) => res.json({ message: 'HELLO SERVER!' }));
app.use('/api/v1', router);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.use('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

module.exports = app;
