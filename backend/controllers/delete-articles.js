const path = require('path');
const Article = require('../models/article');
const checkErrors = require('../helpers/checkErrors');

const { getData } = require(path.join(__dirname, '..', 'helpers', 'getData'));
const { NotFoundError, Forbidden } = require('../helpers/errors');

module.exports.deleteArticles = (req, res, next) => {
  const { articleId } = req.params;
  const userId = req.user._id;

  Article.findById({ _id: articleId })
    .select('+owner')
    .orFail(() => new NotFoundError('Статьи нет в базе.'))
    .then((article) => {
      if (article.owner.toString() !== userId.toString()) {
        throw new Forbidden('Нельзя удалить данную статью, так как она создана не Вами.');
      }

      Article.findOneAndDelete({
        _id: articleId,
        owner: userId,
      })
        .then(() => getData(res, { message: 'Статья успешно удалена' }))
        .catch(next);
    })
    .catch((err) => next(checkErrors(err, next)));
};
