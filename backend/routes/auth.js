const express = require('express');
const { signup, login } = require('../controllers/authController');

const router = express.Router();
const { getUsername } = require('../controllers/authController');




router.post('/get-username', getUsername);

router.post('/signup', signup);
router.post('/login', login);

module.exports = router;
