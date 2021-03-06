const path = require('path');
const Article = require('../models/article');
const checkErrors = require('../helpers/checkErrors');

const { getData } = require(path.join(__dirname, '..', 'helpers', 'getData'));

module.exports.addArticles = (req, res, next) => {
  req.body.owner = req.user._id;

  Article
    .create(req.body)
    .then((result) => getData(res, result))
    .catch((err) => next(checkErrors(err, next)));
};
