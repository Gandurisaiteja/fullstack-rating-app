const db = require('../config/db');

const addRating = (userId, rating, callback) => {
  const sql = 'INSERT INTO ratings (user_id, rating) VALUES (?, ?)';
  db.query(sql, [userId, rating], callback);
};

const getAllRatings = (callback) => {
  const sql = 'SELECT * FROM ratings';
  db.query(sql, callback);
};

module.exports = { addRating, getAllRatings };
