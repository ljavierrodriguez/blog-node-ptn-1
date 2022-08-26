const express = require('express');
const { home, blog, postById } = require('../controllers/index.controller');
const router = express.Router();

router.get('/', home);
router.get('/blog', blog);
router.get('/blog/:id/show', postById);

module.exports = router;
