import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
    return (
        <motion.section 
            id="about"
            className="section reveal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h2>Tentang Kami</h2>
            <p>Kami adalah kelas X yang penuh semangat belajar dan berkarya bersama untuk mencapai prestasi. Kami bekerja sama dalam berbagai projek untuk mengembangkan pengetahuan dan kreativitas kami.</p>
        </motion.section>
    );
};

export default AboutSection;