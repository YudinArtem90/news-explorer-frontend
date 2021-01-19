const path = require('path');
const User = require('../models/user');
const checkErrors = require('../helpers/checkErrors');

const { getData } = require(path.join(__dirname, '..', 'helpers', 'getData'));

module.exports.signup = (req, res, next) => {
  User.create(req.body)
    .then(() => getData(res, { message: 'Учетная запись создана' }))
    .catch((err) => next(checkErrors(err, next)));
};
