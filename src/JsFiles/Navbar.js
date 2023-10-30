import React, { useState } from 'react';
import { FaBars, FaTimes, FaBriefcase } from 'react-icons/fa'; // Import icons

import '../Styling/Navbar.css'; // Your shared styles

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <FaBriefcase size={30} /> Portfolio
      </div>

      <div className={`menu-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
      </div>

      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#Certifications" onClick={toggleMenu}>Certifications</a></li>
        <li><a href="#Contact" onClick={toggleMenu}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
