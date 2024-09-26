import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { name: 'Matematika', icon: 'https://img.icons8.com/color/48/000000/math.png' },
    { name: 'IPA', icon: 'https://img.icons8.com/color/60/000000/physics.png' },
    { name: 'Bahasa Indonesia', icon: 'https://img.icons8.com/color/48/000000/literature.png' },
    { name: 'Bahasa Inggris', icon: 'https://img.icons8.com/?size=100&id=8Bh3VSaF8BFQ&format=png&color=000000' },
    { name: 'PKN', icon: 'https://img.icons8.com/?size=100&id=DnJPM13RY6Ux&format=png&color=000000' },
    { name: 'Desain Grafis', icon: 'https://img.icons8.com/color/48/000000/design.png' },
    { name: 'Penjaskes', icon: 'https://img.icons8.com/color/48/000000/sport.png' },
    { name: 'Pemrograman Dasar', icon: 'https://img.icons8.com/color/48/000000/code.png' },
    { name: 'Informatika', icon: 'https://img.icons8.com/color/48/000000/computer.png' },
    { name: 'Sejarah', icon: 'https://img.icons8.com/?size=100&id=107455&format=png&color=000000' },
    { name: 'Mulok', icon: 'https://img.icons8.com/?size=100&id=k5h9r4P1t9vC&format=png&color=000000' },
    { name: 'PAI', icon: 'https://img.icons8.com/color/48/000000/mosque.png' },
    { name: 'Seni', icon: 'https://img.icons8.com/color/48/000000/paint.png' }
];

const SkillsSection: React.FC = () => {
    return (
        <motion.section 
            id="skills"
            className="section reveal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h2>Mata Pelajaran</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <motion.div 
                        key={index} 
                        className="skill-card"
                        whileHover={{ scale: 1.05 }}
                    >
                        <img src={skill.icon} alt={skill.name} />
                        <h3>{skill.name}</h3>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default SkillsSection;