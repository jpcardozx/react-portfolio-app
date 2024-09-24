import React, { useRef } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectList from './components/ProjectList';
import ProjectDetails from './components/ProjectDetails';
import Hero from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import FeaturedProjects from './components/FeaturedProjects';
import DecorativeSection from './components/DecorativeSection';
import OfferForm from './components/OfferForm';
import BlogPage from './pages/BlogPage';
import ServicesPage from './pages/ServicesPage'; // Importar a nova página
import './styles/App.css';

const App: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <FeaturedProjects />
                  <DecorativeSection scrollToForm={scrollToForm} />
                  <SkillsSection />
                  <ProjectList />
                  <OfferForm ref={formRef} />
                </>
              }
            />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/services" element={<ServicesPage />} /> {/* Nova rota para Serviços */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
