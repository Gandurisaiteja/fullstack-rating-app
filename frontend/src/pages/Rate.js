import React, { useState } from 'react';
import API from '../api';

function Rate() {
  const [rating, setRating] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await API.post(
        '/users/rate',
        { rating },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit Rating</h2>
      <input
        type="number"
        min="1"
        max="5"
        value={rating}
        onChange={e => setRating(e.target.value)}
        placeholder="Rate 1-5"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Rate;
