import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '10px', background: '#eee' }}>
    <Link to="/register" style={{ margin: '10px' }}>Register</Link>
    <Link to="/login" style={{ margin: '10px' }}>Login</Link>
    <Link to="/rate" style={{ margin: '10px' }}>Rate</Link>
  </nav>
);

export default Navbar;
