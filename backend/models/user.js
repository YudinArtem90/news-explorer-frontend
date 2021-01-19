const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { Unauthorized, BadRequest } = require('../helpers/errors');
const { validationEmail } = require('../helpers/validation');
const checkErrors = require('../helpers/checkErrors');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator(email) {
        return validationEmail(email);
      },
      message: 'Ошибка валидации email в userSchema',
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    select: false,
  },
});

// eslint-disable-next-line func-names
userSchema.statics.findUserByCredentials = function (email, password, next) {
  return this.findOne({ email })
    .orFail(() => new Unauthorized('Неправильные почта или пароль'))
    .select('+password')
    .then((user) => bcrypt.compare(password, user.password)
      .then((matched) => {
        if (!matched) {
          throw new Unauthorized('Неправильные почта или пароль');
        }

        return user;
      }));
};

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    next();
  }

  if (this.password.length < 8) {
    next(new BadRequest('Пароль не может быть менее 8 символов.'));
  }

  bcrypt.hash(this.password, 10)
    .then((hash) => {
      this.password = hash;
      next();
    })
    .catch((err) => next(checkErrors(err, next)));
});

module.exports = mongoose.model('user', userSchema);
