const userModel = require('../models/userModel'); // Your userModel.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register User
const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  // Check if the user already exists
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new userModel({
    name,
    email,
    password: hashedPassword,
    role: role || 'user' // default to 'user' if no role is specified
  });

  try {
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error during registration' });
  }
};

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Check if the user exists
  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Check if password matches
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Generate JWT token
  const token = jwt.sign(
    { userId: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({
    message: 'Login successful',
    token
  });
};

// Rate User
const rateUser = async (req, res) => {
  const { rating } = req.body;
  const { userId } = req.user; // the logged-in user from the token

  if (!rating || rating < 1 || rating > 5) {
    return res.status(400).json({ message: 'Invalid rating value. Rating should be between 1 and 5.' });
  }

  try {
    // Assuming you have a Rating model or some other method to store ratings
    const ratingRecord = await Rating.create({
      user: userId,
      ratedUser: req.params.userId,
      rating
    });

    res.status(201).json({ message: 'User rated successfully', rating: ratingRecord });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error in rating user' });
  }
};

module.exports = {
  registerUser,
  loginUser,
  rateUser
};
