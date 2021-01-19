const mongoose = require('mongoose');
const { validationUrl } = require('../helpers/validation');

const { Schema } = mongoose;
const user = require('./user');

const userSchema = new mongoose.Schema({
  keyword: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator(url) {
        return validationUrl(url);
      },
      message: 'Ошибка валидации link в userSchema',
    },
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator(url) {
        return validationUrl(url);
      },
      message: 'Ошибка валидации image в userSchema',
    },
  },
  owner: {
    type: Schema.Types.ObjectId,
    select: false,
    ref: 'user',
    require: true,
  },
});

module.exports = mongoose.model('article', userSchema);
