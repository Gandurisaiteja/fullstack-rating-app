const { addRating, getAllRatings } = require('../models/ratingModel');

const submitRating = (req, res) => {
  const userId = req.user.id;
  const { rating } = req.body;

  addRating(userId, rating, (err) => {
    if (err) return res.status(500).send(err);
    res.send('Rating submitted!');
  });
};

const viewRatings = (req, res) => {
  getAllRatings((err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

module.exports = { submitRating, viewRatings };
