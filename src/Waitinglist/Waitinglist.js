import React, { useState } from 'react';
import axios from 'axios';
import './Waitinglist.css';

const WaitingList = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/waitlist', formData);
      console.log('User joined waiting list:', response.data);
      alert(response.data.message);
      setFormData({ name: '', email: '', phone: '' });
    } catch (error) {
      if (error.response) {
        // Request made and server responded with a status code that falls out of the range of 2xx
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
        alert(error.response.data.message || 'There was an error adding the user to the waiting list!');
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Request data:', error.request);
        alert('No response from the server. Please try again later.');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', error.message);
        alert('There was an error processing your request. Please try again later.');
      }
    }
  };

  return (
    <div className="waiting-list">
      <h1>Join the GameFlow Waiting List</h1>
      <p>Be the first to experience next-level cloud gaming. Sign up now!</p>
      <form className="waiting-list-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Mobile Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn btn-primary">Join Now</button>
      </form>
    </div>
  );
};

export default WaitingList;
