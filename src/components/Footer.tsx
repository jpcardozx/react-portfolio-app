import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import '/src/styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© 2024 MyPortfolio. All rights reserved.</p>
      <div className="social-links">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:contact@myportfolio.com">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
