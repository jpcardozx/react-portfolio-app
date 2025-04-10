import React from 'react';
import '../styles/HeroSection.css'; // Estilos avançados

const HeroSection: React.FC = () => {
  // Função para rolar suavemente até a seção de projetos
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Building Digital Experiences focused on Lead Generation/Conversion</h1>
        <p>
          Hello, I'm Pedro (@jpcardox), a web developer committed to transforming ideas into high-performance, responsive, and visually stunning solutions.
        </p>
        <p>
          With expertise in React and other frameworks we can build dynamic user experiences designed to captivate users and build trust through top-tier digital experiences that effectively appear on Google, since we apply SEO review in every piece of code!
        </p>
        {/* Alterado para um botão que executa a rolagem suave */}
        <button onClick={scrollToProjects} className="cta-button">
          Check My Work
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
