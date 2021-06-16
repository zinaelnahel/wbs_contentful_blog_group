import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="aboutpage">
      <div className="team">
        {/* Minja*/}
        <div className="staff">
          <h3>Minja</h3>
          <img className='profilpicture' src="./contact.jpeg" alt="bla" ></img>
          
        </div>
        {/* Zina*/}
        <div className="staff">
          <h3>Zina</h3>
          <img className='profilpicture' src='./zinapicture.jpeg' alt='zinas picture'></img>
          
        </div>
        {/* Jonas*/}
        <div className="staff">
          <h3>Jonas</h3>
          <img className='profilpicture' src='./jonas.png' alt='jonas profil'></img>
          
        </div>
      </div>
    </div>
  );
};

export default About;
