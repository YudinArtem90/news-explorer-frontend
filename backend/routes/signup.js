const express = require('express');

const router = express.Router();
const { signup } = require('../controllers/signup');

// eslint-disable-next-line import/order
const { celebrate, Joi } = require('celebrate');

router.post('/', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().trim()
      .messages({
        'string.email': 'Не правильный формат "email"',
        'string.empty': 'email не может быть пустым',
        'any.required': '"email" обязательное поле',
      }),
    password: Joi.string().required().trim().min(8)
      .messages({
        'string.empty': 'Пароль не может быть пустым',
        'any.required': 'Пароль обязательное поле',
        'string.min': 'Пароль не должен быть меньше {#limit} символов',
      }),
    name: Joi.string().trim().min(2).max(30)
      .required(),
  }).messages({
    'object.unknown': 'Все поля должны быть заполнены',
  }),
}), signup);

module.exports = router;
