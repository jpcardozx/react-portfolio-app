import '../styles/FeaturedProjects.css';

const FeaturedProjects = () => {
  const projects = [
    {
      name: 'Spotify - Playlists Explorer',
      description: 'In this project, I built a web application that allows users to search for playlists on Spotify using the Spotify API...',
      imageUrl: 'https://github.com/jpcardozx/react-portfolio-app/blob/main/src/assets/spotify-banner.png?raw=true',
      technologies: ['React', 'TypeScript', 'Spotify API', 'Figma', 'CSS'],
      link: 'https://jpcardozx.github.io/playlist-react-app/'
    },
    {
      name: 'SEO Optimized Landing Page | Conversion Boost 🚀',
      description: 'A modern, SEO-optimized real estate landing page built with React, TypeScript, and advanced UI/UX principles...',
      imageUrl: 'https://github.com/jpcardozx/react-portfolio-app/blob/main/src/assets/realestate.png?raw=true',
      technologies: ['React', 'TypeScript', 'Figma', 'UI/UX Design', 'CSS'],
      link: 'https://jpcardozx.github.io/re-agency/'
    }
  ];

  return (
    <section id="projects" className="featured-projects">
      <h2 className="section-title">Featured Projects - React + API</h2>
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
