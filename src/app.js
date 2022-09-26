// const { join } = require('path');
const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const { auth } = require('./middlewares/verifyToken');

const app = express();
require('dotenv').config();
const router = require('./routers');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());

app.use(auth);
// app.use(express.static(join(__dirname, '../', 'client', 'build')));
app.use('/', (req, res) => {
  res.json({ msg: 'hello' });
});

app.use(router);

module.exports = app;
