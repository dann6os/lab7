import React from "react";
import Skills from "../components/Skills";

const About = () => {
  return (
    <div className="container">
      <div className="about-header">
        <h1>About Me</h1>
        <p>My Projects Done in School</p>
      </div>

      <div className="two-column-container">
        <div className="two-column-item">
          <h2>About Myself</h2>
          <p>My name is Danny Zhang, I am a third-year Applied Computer Science student at 
        Dalhousie University in Halifax. I was born and raised in the Annapolis Valley 
        (about an hour from Halifax), and I enjoy traveling!
      </p>
        </div>
      </div>
      <br></br>



      <div className="two-column-container">
        <div className="two-column-item">
          <h2>🎓 Education</h2>
          <p>Currently in year 3 of 4 in the Applied Computer Science degree.</p>
        </div>

        <div className="two-column-item">
          <h2>Experience</h2>
          <p>Worked on Geriatric Psychiatry Project as a Junior Dev.</p>
        </div>

        <div className="two-column-item">
          <Skills />
          </div>

          <div className="two-column-item">
          <h2>Career Goals</h2>
          <p>Currently still gauging options, animal science or working with veterinary software</p>
        </div>


      </div>
    </div>
  );
};

export default About;
