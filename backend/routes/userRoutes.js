const express = require('express');
const router = express.Router();
const { registerUser, loginUser, rateUser } = require('../controllers/userController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/rate', rateUser);

module.exports = router;
