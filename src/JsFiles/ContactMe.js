import React from 'react';
import { FaEnvelope, FaMobile, FaLinkedin, FaMapMarker, FaGithub } from 'react-icons/fa';
import '../Styling/ContactMe.css';

function ContactMe() {
  return (
    <div id="Contact" className="modal">
      
        <h2>Contact Information</h2>
        <div className="contact-info">
        
          <p>
            <span className="blue-icon">
              <FaLinkedin size={24} />
            </span>{' '}
            <a
              href="https://www.linkedin.com/in/silpa-nandimandalam-72b345181"
              target="_blank"
            >
              LinkedIn
            </a>
          </p>

          <p>
            <span className="blue-icon">
              <FaMobile size={24} />
            </span>{' '}
            +91 9100708030
          </p>
         
        </div>
        <div className="contact-info">
     
        <p>
            <span className="blue-icon">
              <FaGithub size={24} />
            </span>{' '}
            <a
              href="https://github.com/silpa20001"
              target="_blank"
            >
              Github
            </a>
          </p>
          
          <p>
            <span className="blue-icon">
              <FaEnvelope size={24} />
            </span>{' '}
            <a href="mailto:silpanandimandalam10@gmail.com">
              silpanandimandalam10@gmail.com
            </a>
          </p>
        </div>
        
      
        <div className='contact-info'>
        <p>
            <span style={{color:"rgb(68, 68, 182)"}} className="blue-icon">
              <FaMapMarker size={24} />
            </span>
            Narayaraju Podu, Kadapa, Andhra Pradesh-516105
        </p>
        </div>
      
    
    </div>
  );
}

export default ContactMe;

