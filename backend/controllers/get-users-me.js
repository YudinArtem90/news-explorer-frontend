const path = require('path');
const User = require('../models/user');
const checkErrors = require('../helpers/checkErrors');

const { getData } = require(path.join(__dirname, '..', 'helpers', 'getData'));
const { NotFoundError } = require('../helpers/errors');

module.exports.getUsersMe = (req, res, next) => {
  User
    .findOne({ _id: req.user._id })
    .orFail(() => new NotFoundError('Пользователь не найден.'))
    .then((user) => getData(res, { name: user.name, email: user.email }))
    .catch((err) => next(checkErrors(err, next)));
};
