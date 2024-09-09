import React from 'react';
import '/src/styles/HeroSection.css'; // Estilos avançados

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Building Dynamic, Future-Ready Web Solutions</h1>
        <p>
          Hi, I’m @jpcardox, a passionate Front-End Developer focused on
          creating fast, responsive, and interactive websites with modern
          technologies like React, Figma and TypeScript.
        </p>
        <a href="#projects" className="cta-button">
          Explore My Work
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
