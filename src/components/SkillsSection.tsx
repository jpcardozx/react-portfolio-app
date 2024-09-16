import React from 'react';
import '/src/styles/SkillsSection.css';

const skills = [
  { name: 'React', imageUrl: 'https://img.icons8.com/plasticine/100/react.png', description: 'Building dynamic and scalable UIs.' },
  { name: 'Vite', imageUrl: 'https://img.icons8.com/fluency/48/vite.png', description: 'Fast build tool for modern front-end development.' },
  { name: 'Figma', imageUrl: 'https://img.icons8.com/color/48/figma.png', description: 'Design tool for UI/UX design and prototyping.' },
  { name: 'HTML5', imageUrl: 'https://img.icons8.com/color/48/html-5.png', description: 'The standard language for creating web pages.' },
  { name: 'Bootstrap', imageUrl: 'https://img.icons8.com/color/48/bootstrap.png', description: 'CSS framework for developing responsive websites quickly.' },
  { name: 'TypeScript', imageUrl: 'https://img.icons8.com/?size=100&id=cHBUT9SmrD2V&format=png&color=000000', description: 'Strongly typed JavaScript for better development experience.' },
  { name: 'JavaScript', imageUrl: 'https://img.icons8.com/ios-glyphs/30/javascript.png', alt: 'javascript', description: 'Fundamental language for web development.' },
  { name: 'Responsive Web Design', imageUrl: 'https://img.icons8.com/external-phatplus-lineal-phatplus/64/external-web-design-encryption-phatplus-lineal-phatplus.png', description: 'Designing responsive, mobile-friendly web pages.' },
  { name: 'CSS', imageUrl: 'https://img.icons8.com/ios-filled/50/css3.png', alt: 'css3', description: 'Styling web pages with responsive design.' },
  { name: 'Git', imageUrl: 'https://img.icons8.com/ios-filled/50/git.png', description: 'Version control and collaborative development.' },
  ];

const SkillsSection: React.FC = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">My Tech Stack</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-content">
                <img src={skill.imageUrl} alt={skill.alt || skill.name} className="skill-icon" />
                <h3 className="skill-name">{skill.name}</h3>
                {skill.description && <p className="skill-description">{skill.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
