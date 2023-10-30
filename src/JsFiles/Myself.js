import React from 'react';
import '../Styling/Myself.css';
import Image from "../Assets/Image.png";
import { FaUserAlt,  FaNetworkWired, FaDatabase } from 'react-icons/fa';

function Myself() {
  return (
    <section className="about">
      <div className="about-content">
        <div className="about-image">
          <img
            src={Image}
            alt="Profile"
            className="profile-image"
          />
        </div>
        <div className="about-description">
          <h1 style={{color:"rgb(68, 68, 182)"}}>Nandimandalam Silpa</h1>
          <h1 style={{ marginTop:"10px"}}>Microsoft Full-Stack Developer</h1>
          <div className="info-box">
            <div className="info-item">
             
              <p className="info-text">  <FaUserAlt className="info-icon" />I am a passionate Full Stack Developer with one year of experience in .NET Core, React, and SQL technologies. I have a strong foundation in building robust web applications using .NET Core on the server-side and React on the client-side, with proficiency in managing and querying SQL databases. My skills and expertise in these technologies enable me to create scalable and efficient solutions for a wide range of projects.</p>
            </div>
            <div className="info-item">
            
              <p className="info-text">  < FaNetworkWired className="info-icon" />I excel in constructing web applications by seamlessly integrating .NET Core and React technologies. This expertise allows me to design and develop sophisticated digital solutions, leveraging the powerful combination of .NET Core's server-side capabilities and React's dynamic front-end framework.</p>
            </div>
            <div className="info-item">
             
              <p className="info-text"> <FaDatabase className="info-icon" /> Experienced in managing and querying SQL databases for efficient solutions.</p>
            </div>
          </div>
      
        </div>
      </div>
    </section>
  );
}

export default Myself;
