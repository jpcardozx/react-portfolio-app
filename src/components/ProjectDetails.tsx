import React from 'react';
import { useParams } from 'react-router-dom';
import '/src/styles/ProjectDetails.css';


const ProjectDetails: React.FC = () => {
  const { id } = useParams<Record<string, string | undefined>>();

  return (
    <div className="project-details">
      <h2>Project Details - {id ? id : 'No ID found'}</h2>
      <p>This is the detailed page for project ID: {id ? id : 'No ID found'}</p>
      {/* Aqui você pode adicionar mais detalhes sobre o projeto */}
    </div>
  );
}

export default ProjectDetails;
