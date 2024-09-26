import React from 'react';
import { motion } from 'framer-motion';

const StructureSection: React.FC = () => {
    return (
        <motion.section 
            id="structure"
            className="section reveal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h2>Struktur Kelas</h2>
            <div className="tree">
                <ul>
                    <li>
                        <div>Muhammad Aziz Insana S.Kom (WALI KELAS)</div>
                        <ul>
                            <li>
                                <div>Evan Satria (KETUA KELAS)</div>
                                <ul>
                                    <li><div>Anggota 1</div></li>
                                    <li><div>Anggota 2</div></li>
                                </ul>
                            </li>
                            <li>
                                <div>Akhmad Tirta Kurniawan (WAKIL)</div>
                                <ul>
                                    <li><div>Anggota 3</div></li>
                                    <li><div>Anggota 4</div></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </motion.section>
    );
};

export default StructureSection;