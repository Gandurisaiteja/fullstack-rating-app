const jwt = require('jsonwebtoken');
const User = require('../models/userModel'); // Import your User model

const verifyRole = (roles) => {
  return async (req, res, next) => {
    try {
      const token = req.header('x-auth-token');
      if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.user.id);
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }

      if (!roles.includes(user.role)) {
        return res.status(403).json({ message: "Access denied." });
      }

      req.user = user; // Attach user info to request
      next();
    } catch (error) {
      return res.status(400).json({ message: "Invalid token." });
    }
  };
};

module.exports = verifyRole;
