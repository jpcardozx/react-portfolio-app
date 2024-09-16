import React, { Suspense } from 'react';
import '/src/styles/ProjectList.css';

// Lazy Loading dos cards
const ProjectCard = React.lazy(() => import('./ProjectCard'));

const projects = [
  { id: 1, title: "Social Links Profile", description: "An intuitive profile page designed to consolidate all your important social links in one place. Perfect for boosting online presence and engagement.", imageUrl: "/images/ravenous.png" },
  { id: 2, title: "Product Ad | UI/UX Design", description: "A visually captivating product ad landing page, crafted with a focus on UI/UX best practices to drive user engagement and conversion rates.", imageUrl: "/images/landingpage.png" },
  { id: 3, title: "Testimonials Grid | Advanced CSS", description: "An elegant grid layout that showcases client testimonials, utilizing advanced CSS techniques to create a visually appealing and responsive design.", imageUrl: "/images/todo.png" },
];

const ProjectList: React.FC = () => {
  return (
    <>
      <h2>Single Component | HTML & CSS @frontendmentor Projects</h2>
      <section id="projects" className="project-list">
        <Suspense fallback={<div>Loading projects...</div>}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Suspense>
      </section>
    </>
  );
}

export default ProjectList;
