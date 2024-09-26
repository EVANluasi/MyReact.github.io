import React from 'react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
    return (
        <motion.section 
            id="contact"
            className="section reveal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h2>Kontak Kami</h2>
            <div className="social-media">
                <a href="https://www.instagram.com/sepuluhrplsatu/" target="_blank" rel="noopener noreferrer">
                    <motion.img 
                        src="https://img.icons8.com/fluency/48/000000/instagram-new.png" 
                        alt="Instagram"
                        whileHover={{ scale: 1.2 }}
                    />
                </a>
            </div>
        </motion.section>
    );
};

export default ContactSection;