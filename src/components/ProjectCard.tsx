import React from 'react';
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
        <button className="view-more" onClick={handleButtonClick}>View More</button>
      </div>
    </div>
  );
};

export default ProjectCard;
