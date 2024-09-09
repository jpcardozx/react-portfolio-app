import React from 'react';
import '../styles/DecorativeSection.css';
import { FaCheckCircle } from 'react-icons/fa';

const DecorativeSection: React.FC = () => {
  return (
    <section className="decorative-section">
      <div className="overlay"></div>
      <div className="decorative-card">
        <h2 className="decorative-title">Is Your Property Ready to Shine?</h2>
        <p className="decorative-description">
          Discover how our tailored strategies can help you showcase and maximize the value of your property.
        </p>
        <ul className="decorative-list">
          <li><FaCheckCircle className="icon" /> Residential Services</li>
          <li><FaCheckCircle className="icon" /> Commercial Solutions</li>
          <li><FaCheckCircle className="icon" /> Tailored Strategies</li>
        </ul>
        <div className="cta-buttons">
          <a href="#book-valuation" className="cta-btn primary-btn">Book Now</a>
          <a href="#learn-more" className="cta-btn secondary-btn">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default DecorativeSection;
