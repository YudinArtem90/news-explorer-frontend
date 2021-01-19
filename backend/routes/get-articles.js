const express = require('express');

const router = express.Router();
const { getArticles } = require('../controllers/get-articles');

router.get('/articles', getArticles);
module.exports = router;
