import React, { Suspense } from 'react';
import '/src/styles/ProjectList.css';

// Lazy Loading dos cards
const ProjectCard = React.lazy(() => import('./ProjectCard'));

const projects = [
  { id: 1, title: "Ravenous", description: "Restaurant recommendation website with Yelp API.", imageUrl: "/images/ravenous.png" },
  { id: 2, title: "Optimized Landing Page", description: "Landing page optimized for lead generation and SEO.", imageUrl: "/images/landingpage.png" },
  { id: 3, title: "To-Do List App", description: "Simple task management app with local data persistence.", imageUrl: "/images/todo.png" },
  { id: 4, title: "Weather App", description: "Real-time weather app with API integration.", imageUrl: "/images/weather.png" }
];

const ProjectList: React.FC = () => {
  return (
    <section id="projects" className="project-list">
      <Suspense fallback={<div>Loading projects...</div>}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Suspense>
    </section>
  );
}

export default ProjectList;
