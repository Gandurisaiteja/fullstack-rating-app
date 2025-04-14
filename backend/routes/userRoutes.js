const express = require('express');
const router = express.Router();
const { registerUser, loginUser, rateUser } = require('../controllers/userController');
const verifyRole = require('../middleware/authMiddleware');

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Authenticated + role-based routes
router.post('/rate', verifyRole(['user', 'store_owner', 'admin']), rateUser);

// Admin-only route
router.get('/admin', verifyRole(['admin']), (req, res) => {
  res.json({ message: "Welcome, Admin!" });
});

// Store Owner route
router.get('/store-owner', verifyRole(['store_owner', 'admin']), (req, res) => {
  res.json({ message: "Welcome, Store Owner!" });
});

// User route
router.get('/user', verifyRole(['user', 'store_owner', 'admin']), (req, res) => {
  res.json({ message: "Welcome, User!" });
});

module.exports = router;
