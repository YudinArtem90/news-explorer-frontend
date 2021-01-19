const jwt = require('jsonwebtoken');
const User = require('../models/user');
const checkErrors = require('../helpers/checkErrors');
const getJwtSecret = require('../helpers/getJwtSecret');

module.exports.signin = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        getJwtSecret(),
        { expiresIn: '7d' },
      );

      res.send({ token });
    })
    .catch((err) => next(checkErrors(err, next)));
};
