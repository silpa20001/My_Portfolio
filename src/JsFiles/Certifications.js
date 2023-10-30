import React from 'react';
import '../Styling/Certifications.css';

const certificationsData = [
  {
    title: 'Azure Fundamentals (AZ-900) ',
    issuingOrganization: 'Microsoft',
    date: 'December 2022',
  },
  {
    title: 'Microsoft AI Fundamentals (AI-900)',
    issuingOrganization: 'Microsoft',
    date: 'October 2023',
  },
  {
    title: ' Microsoft Data Fundamentals (DP-900)',
    issuingOrganization: 'Microsoft',
    date: 'October 2023',
  },
];

function Certifications() {
  return (
   <div>
     <h2>Certifications</h2>
       <div id="Certifications" className="certifications-container">
      
     
      {certificationsData.map((certification, index) => (
        <div className="certification" key={index}>
          <h2>{certification.title}</h2>
          <p>
            <strong>Issuing Organization:</strong> {certification.issuingOrganization}
          </p>
          <p>
            <strong>Date:</strong> {certification.date}
          </p>
        </div>
      ))}
    </div>
   </div>
  
  );
}

export default Certifications;
