import React from 'react';
import '/src/styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img 
            src="https://github.com/jpcardozx/react-portfolio-app/blob/main/src/assets/white-logo.png?raw=true" 
            alt="Your Company Logo" 
          />
        </div>
        <div className="footer-text">
          <h2 className="footer-title">Portfolio Web App | @jpcardozx</h2>
          <p className="footer-description">
            This is a Portfolio App built with React and TypeScript by me.
          </p>
        </div>
        <div className="footer-cta">
          <a href="https://jpcardozx.github.io/social-links-profile/" target="_blank" rel="noopener noreferrer">
            <button className="get-in-touch-btn">Get in Touch</button>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
