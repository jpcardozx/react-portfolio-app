import React from 'react';
import { Link } from 'react-router-dom';
import '/src/styles/ProjectCard.css';

interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    linkUrl: string;
  };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  const handleButtonClick = () => {
    window.open(project.linkUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="project-card">
      <img src={project.imageUrl} alt={project.title} className="project-image" />
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {/* Link interno para uma página de detalhes do projeto */}
        <Link to={`/project/${project.id}`} className="view-more">Ver mais</Link>
        {/* Botão para o link externo */}
        <button className="view-more" onClick={handleButtonClick}>Ver Projeto</button>
      </div>
    </div>
  );
};

export default ProjectCard;
