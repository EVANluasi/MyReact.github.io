import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import AboutSection from './components/AboutSection';
import StructureSection from './components/StructureSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import './styles.css';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<IntroSection />} />
                <Route path="/about" element={<AboutSection />} />
                <Route path="/structure" element={<StructureSection />} />
                <Route path="/skills" element={<SkillsSection />} />
                <Route path="/projects" element={<ProjectsSection />} />
                <Route path="/contact" element={<ContactSection />} />
            </Routes>
        </Router>
    );
};

export default App;