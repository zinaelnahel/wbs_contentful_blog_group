import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="aboutpage">
      <h2>About</h2>
      <div className="team">
        {/* Minja*/}
        <div className="staff">
          <h3>Minja</h3>
          <image></image>
          <p>Position: </p>
        </div>
        {/* Zina*/}
        <div className="staff">
          <h3>Zina</h3>
          <image></image>
          <p>Position: Content</p>
        </div>
        {/* Jonas*/}
        <div className="staff">
          <h3>Jonas</h3>
          <image></image>
          <p>Position: Content and Coffeemake</p>
        </div>
      </div>
    </div>
  );
};

export default About;
