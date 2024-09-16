// FeaturedProjects.jsx
import '../styles/FeaturedProjects.css';

const FeaturedProjects = () => {
  const projects = [
    {
      name: 'Spotify - Playlists Explorer',
      description: 'In this project, I built a web application that allows users to search for playlists on Spotify using the Spotify API. The user can search for playlists by entering a search term and clicking the search button. The application will then display a list of playlists that match the search term. The user can click on a playlist to view more details about the playlist, including the playlist name, description, and tracks.',
      imageUrl: 'https://github.com/jpcardozx/react-portfolio-app/blob/main/src/assets/spotify-banner.png?raw=true',
      technologies: ['React', 'TypeScript', 'Spotify API', 'Figma', 'CSS'],
      link: 'https://github.com/jpcardozx/ravenous'
    },
    {
      name: 'SEO Optimized Landing Page | Conversion Boost 🚀',
      description: 'A modern, SEO-optimized real estate landing page built with React, TypeScript, and advanced UI/UX principles to enhance user engagement and boost conversions. The project features a responsive design, smooth animations, and an intuitive interface that seamlessly guides users through property listings. Key functionalities include dynamic content rendering, parallax effects, and a sleek CTA for lead generation.',
      imageUrl: 'https://github.com/jpcardozx/react-portfolio-app/blob/main/src/assets/realestate.png?raw=true',
      technologies: ['React', 'TypeScript', 'Figma', 'UI/UX Design', 'CSS'],
      link: 'https://github.com/jpcardozx/ravenous'
    }

    // Add more projects here
  ];

  return (
    <section className="featured-projects">
      <h2 className="section-title">Featured Project - React + API</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-container">
              <img src={project.imageUrl} alt={project.name} className="project-image" />
            </div>
            <div className="project-content">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
                <span className="arrow-icon">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
