import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Projek Ilmu Pengetahuan Alam',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
        description: 'Projek eksperimen sains yang dilakukan untuk mempelajari hukum-hukum fisika.'
    },
    {
        title: 'Projek Bahasa Indonesia',
        image: 'https://images.unsplash.com/photo-1506773090264-ac0b07293a64',
        description: 'Membuat karya puisi dan cerpen untuk meningkatkan kemampuan literasi siswa.'
    }
];

const ProjectsSection: React.FC = () => {
    return (
        <motion.section 
            id="projects"
            className="section reveal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h2>Karya Kami</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div 
                        key={index} 
                        className="project-card"
                        whileHover={{ scale: 1.05 }}
                    >
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default ProjectsSection;