const express = require('express');

const router = express.Router();
const { getUsersMe } = require('../controllers/get-users-me');

router.get('/users/me', getUsersMe);
module.exports = router;
