const express = require('express');
const { submitRating, viewRatings } = require('../controllers/ratingController');
const { verifyToken, requireRole } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', verifyToken, submitRating);
router.get('/', verifyToken, requireRole('admin'), viewRatings);

module.exports = router;
