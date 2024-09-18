import React, { Suspense } from 'react';
import '/src/styles/ProjectList.css';

// Lazy Loading dos cards
const ProjectCard = React.lazy(() => import('./ProjectCard'));

const projects = [
  {
    id: 1,
    title: "Social Links Profile",
    description: "An intuitive profile page designed to centralize your essential social media links in one responsive, easy-to-navigate space. Perfect for enhancing your online presence and boosting engagement.",
    imageUrl: "https://github.com/jpcardozx/react-portfolio-app/blob/main/src/assets/social-media-links.png?raw=true",
    linkUrl: "https://jpcardozx.github.io/social-links-profile/"
  },
  {
    id: 2,
    title: "Product Ad | UI/UX Design",
    description: "A highly optimized product ad landing page, built with a focus on user engagement and lead conversion. This design combines modern UI/UX principles for a smooth and effective experience.",
    imageUrl: "https://github.com/jpcardozx/react-portfolio-app/blob/main/src/assets/ad-prvw.png?raw=true",
    linkUrl: "https://jpcardozx.github.io/product-ad-preview/"
  },
  {
    id: 3,
    title: "Testimonials Grid | Advanced CSS",
    description: "A sleek, responsive grid showcasing client testimonials using advanced CSS. This layout enhances credibility and fits seamlessly across all screen sizes, perfect for businesses highlighting social proof.",
    imageUrl: "https://github.com/jpcardozx/react-portfolio-app/blob/main/src/assets/tgrid.png?raw=true",
    linkUrl: "https://jpcardozx.github.io/testimonials-grid-section/"
  },
  {
    id: 4,
    title: "Blog Preview Card | CSS Flexbox",
    description: "A customizable blog preview card, designed to highlight key content elements such as publication dates and author info. Built with Flexbox for a responsive and modern presentation.",
    imageUrl: "",
    linkUrl: "https://jpcardozx.github.io/blog-preview/"
  }
];
;

const ProjectList: React.FC = () => {
  return (
    <>
      <h2 className='section-title'>Single Component | HTML & CSS @frontendmentor Projects</h2>
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
