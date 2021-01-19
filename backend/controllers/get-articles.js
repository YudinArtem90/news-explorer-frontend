const path = require('path');
const Article = require('../models/article');
const checkErrors = require('../helpers/checkErrors');

const { getData } = require(path.join(__dirname, '..', 'helpers', 'getData'));

module.exports.getArticles = (req, res, next) => {
  Article.find({ owner: req.user._id })
    .then((article) => getData(res, article))
    .catch((err) => next(checkErrors(err, next)));
};
