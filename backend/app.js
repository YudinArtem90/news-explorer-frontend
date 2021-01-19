const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const cors = require('cors');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { NotFoundError } = require('./helpers/errors/index');
const auth = require('./middlewares/auth');
const limiter = require('./middlewares/limiter');
const { PORT } = require('./helpers/constants');

// что бы считывала инфу с .env файла
require('dotenv').config();

const {
  routerAddArticles,
  routerDeleteArticles,
  routerGetArticles,
  routerGetUsersMe,
  routerSignup,
  routerSignin,
} = require('./routes');

const app = express();

mongoose.connect('mongodb://localhost:27017/articlesUser', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(limiter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// что бы не ругался на CORS
app.use((req, res, next) => {
  res.header('Access-Control-Max-Age', '86400');
  next();
});
app.use(cors());

app.use(requestLogger); // подключаем логгер запросов, до обработчиков подключать

app.use('/signup', routerSignup);
app.use('/signin', routerSignin);

// проверка пользователя на авторизацию (все что ниже, могут видеть только авторизованные)
app.use(auth);

// роуты, которым авторизация нужна
app.use('/', routerAddArticles);
app.use('/', routerDeleteArticles);
app.use('/', routerGetArticles);
app.use('/', routerGetUsersMe);

app.use('/', () => {
  throw new NotFoundError('Запрашиваемый ресурс не найден');
});

// подключаем логгер ошибок. После обработчиков роутов и до обработчиков ошибок
app.use(errorLogger);

// обработчик ошибок celebrate
app.use(errors());

// централизованная обработка ошибок
app.use((err, req, res, next) => {
  if (err.statusCode) {
    res
      .status(err.statusCode)
      .send({ message: err.message });
  } else {
    const { statusCode = 500, message } = err;

    res
      .status(statusCode)
      .send({
        message: statusCode === 500
          ? 'На сервере произошла ошибка'
          : message,
      });
  }
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(PORT);
});
