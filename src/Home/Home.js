import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <motion.header
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <h1>Welcome to GameFlow</h1>
          <p>Be the first to experience next-gen cloud gaming. Join the waitlist today!</p>
          <div className="hero-buttons">
            <Link to="/waitlist" className="btn btn-primary">Join Waiting List</Link>
          </div>
        </div>
      </motion.header>

        {/* What is Cloud Gaming Section */}
        <section className="cloud-gaming-section">
        <h2>What is Cloud Gaming?</h2>
        <div className="cloud-gaming-content">
          <p>
            Cloud gaming is a revolutionary technology that lets you play high-quality games 
            without expensive hardware. Instead of downloading and installing games, 
            they are streamed directly to your device from powerful servers in the cloud.
          </p>
          <p>
            Whether you're on a smartphone, tablet, or PC, you can enjoy seamless gaming experiences 
            with minimal lag, thanks to cutting-edge advancements in 5G and cloud computing.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          GameFlow is transforming the gaming experience by delivering high-quality cloud gaming 
          without expensive hardware. Play free as much as you like until you need to upgrade.
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          Have questions? Reach out to us at <a href="mailto:contact@gameflow.com">contact@gameflow.com</a>.
        </p>
      </section>
    </div>
  );
};

export default Home;
