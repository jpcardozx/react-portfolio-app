import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import './styles/App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <FeaturedProjects />
                <DecorativeSection />
                <SkillsSection />
                <ProjectList />
                <OfferForm />
              </>
            } />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;