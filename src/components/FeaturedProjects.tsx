import React from 'react';
import '/src/styles/FeaturedProjects.css';

const projects = [
    {
        name: 'Project One',
        description: 'This is a description for project one. It is a modern and responsive web application.',
        imageUrl: 'https://via.placeholder.com/300',
        link: 'https://github.com/username/project-one'
    },
    {
        name: 'Project Two',
        description: 'This is a description for project two. It is a cutting-edge mobile application.',
        imageUrl: 'https://via.placeholder.com/300',
        link: 'https://github.com/username/project-two'
    }
];

const FeaturedProjects: React.FC = () => {
    return (
        <section className="featured-projects">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.imageUrl} alt={project.name} className="project-image" />
                        <div className="project-content">
                            <h3 className="project-name">{project.name}</h3>
                            <p className="project-description">{project.description}</p>
                            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedProjects;