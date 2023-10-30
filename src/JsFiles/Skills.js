import React from 'react';
import '../Styling/Skills.css'; // Create a CSS file named Skills.css for your styles
import Database from "../Assets/Database.jpg";
import ReactJs from "../Assets/ReactJs.jpg";
import Fullstack from "../Assets/Fullstack.jpg";

const Skills = () => {
  return (
    <div id="skills" >
      <div className='skills-text'>
        <h2>Skills</h2>
      </div>

      <div className="skills-container">
        <div className="skill">
          <div className="left">
            <img src={ReactJs} alt="Skill 1" />
          </div>
          <div className="right">
            <h2>React JS</h2>
            <p>Html, Css, Javascript, React Bootstrap</p>
          </div>
        </div>

        <div className="skill">
          <div className="right">
            <h2>Microsoft Full Stack</h2>
            <p>.NET Core Web API, React Js, MySQL</p>
          </div>
          <div className="left">
            <img src={Fullstack} alt="Skill 2" />
          </div>
        </div>

        <div className="skill">
          <div className="left">
            <img src={Database} alt="Skill 3" />
          </div>
          <div className="right">
            <h2>Database Management</h2>
            <p>MySQL, SQL Server</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
