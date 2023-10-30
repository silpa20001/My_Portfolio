import React from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Import the up arrow icon
import "../Styling/Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <p>&copy;Nandimanadalam Silpa| All Rights Reserved</p>
      <button className="scroll-to-top-button fixed-bottom" onClick={scrollToTop}>
        <FaArrowUp size={24} />
      </button>
    </footer>
  );
}

export default Footer;
