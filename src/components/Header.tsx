import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">Tentang Kami</Link></li>
                    <li><Link to="/structure">Struktur Kelas</Link></li>
                    <li><Link to="/skills">Mata Pelajaran</Link></li>
                    <li><Link to="/projects">Karya</Link></li>
                    <li><Link to="/contact">Kontak</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;