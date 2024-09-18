import React from 'react';
import '../styles/DecorativeSection.css';
import { FaCheckCircle } from 'react-icons/fa';

const DecorativeSection: React.FC<{ scrollToForm: () => void }> = ({ scrollToForm }) => {
  return (
    <section className="decorative-section">
      <div className="decorative-overlay"></div>
      <div className="decorative-content">
        <div className="decorative-text">
          <h2 className="decorative-heading">Ready to Make a Bold Move?</h2>
          <p className="decorative-subtext">
            Elevate your digital presence with strategies designed to get results. Let’s turn your vision into success. 🌟
          </p>
        </div>
        <ul className="decorative-features">
          <li className="feature-item">
            <FaCheckCircle className="feature-icon" />
            <span className="feature-text">Tailored Solutions</span>
          </li>
          <li className="feature-item">
            <FaCheckCircle className="feature-icon" />
            <span className="feature-text">Data-Driven Strategies</span>
          </li>
          <li className="feature-item">
            <FaCheckCircle className="feature-icon" />
            <span className="feature-text">Client-Centered Focus</span>
          </li>
        </ul>
        <div className="cta-container">
          <button onClick={scrollToForm} className="cta-button primary-cta">Let’s Talk</button>
          <button onClick={scrollToForm} className="cta-button secondary-cta">Discover More</button>
        </div>
      </div>
    </section>
  );
};

export default DecorativeSection;
