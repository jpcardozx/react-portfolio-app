import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
	setMenuOpen(!menuOpen);
  };

  return (
	<header className="header">
	  <div className="container">
		<div className="logo">
		  <Link to="/">
			<img src='https://github.com/jpcardozx/react-portfolio-app/blob/main/src/assets/black-logo.png?raw=true' alt="Logo" />
		  </Link>
		</div>
		<nav className={`nav ${menuOpen ? 'open' : ''}`}>
		  <ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/services">Services</Link></li>
			<li><Link to="/blog">Trending</Link></li>
			<li><a href="">Skills</a></li>
			<li><a href="https://jpcardozx.github.io/contact">Contact</a></li>
		  </ul>
		</nav>
		<div className="footer-cta">
          <a href="https://calendly.com/joaopaula00/30min?back=1&month=2024-09" target="_blank" rel="noopener noreferrer">
            <button className="get-in-touch-btn">Schedule a Call!</button>
          </a>
        </div>
		<button className="menu-toggle" onClick={toggleMenu}>
		  &#9776; {/* Ícone de menu */}
		</button>
	  </div>
	</header>
  );
};

export default Header;