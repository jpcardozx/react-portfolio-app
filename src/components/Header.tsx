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
			<li><a href="#projects">Projects</a></li>
			<li><Link to="/blog">Trends</Link></li>
			<li><a href="#skills">Skills</a></li>
			<li><a href="#contact">Contact</a></li>
		  </ul>
		</nav>
		<button className="menu-toggle" onClick={toggleMenu}>
		  &#9776; {/* Ícone de menu */}
		</button>
	  </div>
	</header>
  );
};

export default Header;