const express = require('express');

const router = express.Router();
const { addArticles } = require('../controllers/add-articles');
const { regExpUrl } = require('../helpers/constants/index');
// eslint-disable-next-line import/order
const { celebrate, Joi } = require('celebrate');

router.post('/articles', celebrate({
  body: Joi.object().keys({
    keyword: Joi
      .string()
      .trim()
      .min(2)
      .max(30)
      .required(),
    title: Joi
      .string()
      .trim()
      .required(),
    text: Joi
      .string()
      .trim()
      .required(),
    date: Joi
      .string()
      .trim()
      .required(),
    source: Joi
      .string()
      .trim()
      .required(),
    link: Joi
      .string()
      .trim()
      .required()
      .pattern(new RegExp(regExpUrl)),
    image: Joi
      .string()
      .trim()
      .required()
      .pattern(new RegExp(regExpUrl)),
  }),
}), addArticles);

module.exports = router;
