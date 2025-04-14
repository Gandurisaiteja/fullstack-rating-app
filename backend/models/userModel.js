const db = require('../config/db');

const createUser = (user, callback) => {
  const sql = 'INSERT INTO users (username, password, role) VALUES (?, ?, ?)';
  db.query(sql, [user.username, user.password, user.role], callback);
};

const getUserByUsername = (username, callback) => {
  const sql = 'SELECT * FROM users WHERE username = ?';
  db.query(sql, [username], callback);
};

module.exports = { createUser, getUserByUsername };
