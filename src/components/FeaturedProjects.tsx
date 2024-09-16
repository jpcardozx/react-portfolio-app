import React from 'react';
import '/src/styles/FeaturedProjects.css';

const projects = [
    {
        name: 'Ravenous',
        description: 'Ravenous is a dynamic restaurant recommendation app built with React and integrated with the Foursquare API. This project challenged me to handle complex API queries and display real-time data. It improved my ability to manage asynchronous JavaScript, API authentication, and user interface responsiveness.',
        imageUrl: 'https://via.placeholder.com/300', // Adicione uma imagem representativa para o projeto
        technologies: ['React', 'JavaScript', 'Foursquare API', 'CSS'],
        link: 'https://github.com/jpcardozx/ravenous'
    },
];

const FeaturedProjects: React.FC = () => {
    return (
        <section className="featured-projects">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.imageUrl} alt={project.name} className="project-image" />
                        <div className="project-content">
                            <h3 className="project-name">{project.name}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-technologies">
                                <h4>Technologies Used:</h4>
                                <ul>
                                    {project.technologies.map((tech, index) => (
                                        <li key={index} className="tech-item">{tech}</li>
                                    ))}
                                </ul>
                            </div>
                            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedProjects;
