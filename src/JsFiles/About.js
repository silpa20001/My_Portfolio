import React from 'react';
import "../Styling/About.css";

const projectsData = [
  {
    projectName: 'Order Management System - OMS',
    role: 'Developer',
    environment: 'Windows 10',
    technology: 'MySQL, Asp .net Core web API, React JS',
    duration: 'January 2023 to March 2023',
    toolsUsed: 'VS Code, Git',
    description:
      'Order Management System is a web application developed individually as a part of the Mavericks Competency Training using Asp .net Core, React JS, and MySQL. Users can view their orders, create orders with multiple products, check order status, view order details, and cancel orders.',
    responsibilities: [
      'Setting up the MySQL database tables.',
      'Developing the Order Management Application for users, and add, delete & modify the order using Asp .Net Core.',
      'Integrating the developed modules with other functionalities of the application.',
      'Developing the view layer for them in React JS.',
      'Creating responsive UI using React-Bootstrap.',
      'Making requests using Axios.',
    ],
  },
  {
    projectName: 'Movie Booking System - MBS',
    role: 'Developer',
    environment: 'Windows 10',
    technology: 'React JS',
    duration: 'Sep 2022 to Nov 2022',
    toolsUsed: 'VS Code, Git',
    description:
      'Movie Booking System is a web application developed by me  using React JS. In this application, Users can view their profile, able to book movies, and the admin can manage user details and can add movies in the application.',
    responsibilities: [
      'Developing the view layer in React JS.',
      'Creating responsive UI using React-Bootstrap and CSS.',
    ],
  }
];

function Projects() {
  return (
    <div id="Projects" className="projects-container">
      <h2 className='headings'>Projects</h2>
      {projectsData.map((project, index) => (
        <div className="project" key={index} className='paragraph-text'>
          <h3>{project.projectName}</h3>
          <p>
            <strong>Role:</strong> {project.role}
          </p>
          <p>
            <strong>Environment:</strong> {project.environment}
          </p>
          <p>
            <strong>Technology:</strong> {project.technology}
          </p>
          <p>
            <strong>Duration:</strong> {project.duration}
          </p>
          <p>
            <strong>Tools Used:</strong> {project.toolsUsed}
          </p>
          <p>{project.description}</p>
          <h3>Roles and Responsibilities:</h3>
          <ul>
            {project.responsibilities.map((responsibility, idx) => (
              <li key={idx}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function About() {
  return (
    <div id="about"   className="myself-container" >
        <h2 className='silpa'>About Me</h2>
      <div >
        <h2 className='headings'>Education </h2> 
        <p className='paragraph-text'>As a Computer Science Engineering student, I have completed Bachelor's of Technology in the year of 2022 which consists of various core subjects, equipping me with a solid understanding of the fundamentals of computer science. My coursework covers essential programming languages such as C, Java, and Python, enabling me to develop robust software applications and algorithms. I have honed my skills in data structures, which are vital for efficient data organization and manipulation. Additionally, I have acquired knowledge in Database Management Systems (DBMS), which empowers me to design and manage databases efficiently. This well-rounded education has provided me with a deep understanding of software development and data management, making me a versatile and capable computer scientist, ready to contribute to innovative and technically demanding projects.</p>
      </div>
      <div  >
        <h2 className='headings'>Work Experience</h2>
        <p className='paragraph-text'>I have had the privilege of working at Hexaware Technologies for the past year, during which I have undergone comprehensive training in a range of technologies. My journey began with in-depth training in Java and SQL providing me with a strong foundation in these essential programming languages. Later, I expanded my skill set through additional training in .NET, React, and React Bootstrap, where I had the opportunity to apply my knowledge to practical projects. What truly sets my experience apart is the hands-on application of my skills in the real world. I actively contributed to the development of three substantial case studies – an Appointment Management System, a Loan Management System, and an Order Management System. These projects pushed me to not only apply my technical skills but also develop problem-solving capabilities and project management expertise. Working on these projects was a valuable lesson in the practical implementation of technology to address real-world challenges.These experiences not only deepened my technical expertise but also honed my problem-solving and project management skills. I continue to be passionate about learning and growing within these technologies, remaining committed to staying up-to-date with the latest developments in the field</p>
      </div>
    
      <div >
      <Projects />
      </div>
     
    </div>
  );
}

export default About;
