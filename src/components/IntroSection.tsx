import React from 'react';
import { motion } from 'framer-motion';

const IntroSection: React.FC = () => {
    return (
        <motion.section 
            className="intro"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1>Kelas X RPL 1</h1>
            <p>Belajar Bersama, Berkembang Bersama</p>
            <button>Lihat Karya Kami</button>
        </motion.section>
    );
};

export default IntroSection;