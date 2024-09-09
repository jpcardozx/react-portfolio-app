import React from 'react';
import { Link } from 'react-router-dom';
import '/src/styles/ProjectCard.css';

interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
  };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.imageUrl} alt={project.title} className="project-image" />
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <Link to={`/project/${project.id}`} className="view-more">View More</Link>
      </div>
    </div>
  );
};

export default ProjectCard;
