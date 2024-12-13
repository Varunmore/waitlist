import React, { useState } from 'react';
import axios from 'axios';
import './Waitinglist.css';

const WaitingList = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone) => /^[0-9]{10}$/.test(phone);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!isValidPhone(formData.phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post('http://43.204.212.86:5000/waitlist', formData);
      alert(response.data.message);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error processing your request. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="waiting-list">
        <h1>Thank You for Joining!</h1>
        <p>We'll notify you as soon as GameFlow launches!</p>
      </div>
    );
  }

  return (
    <div className="waiting-list">
      <h1>Join the GameFlow Waiting List</h1>
      <p>Be the first to experience next-level cloud gaming. Sign up now!</p>
      <form className="waiting-list-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          placeholder="Mobile Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Join Now'}
        </button>
      </form>
    </div>
  );
};

export default WaitingList;
