import React from 'react';
import '/src/styles/HeroSection.css'; // Estilos avançados

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Building Future-Ready Digital Experiences 🚀</h1>
        <p>
        Hello, I'm Pedro Cardozo (@jpcardox), a front-end developer committed to transforming ideas into high-performance, responsive, and visually stunning web solutions.</p>
        <p>With expertise in React, Figma, and TypeScript, we can build dynamic, scalable user experiences designed to captivate users and build trust through quality craftsmanship.</p>
        <a href="#projects" className="cta-button">
          Explore My Work
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
