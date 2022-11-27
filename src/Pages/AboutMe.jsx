import "./AboutMe.css";
import React from "react";
import Lokesh_Patidar_Resume from "../download/Lokesh_Patidar_Resume.pdf";
import zoom_marathon from "../Image/zoom_marathon.png";
import tinder_certificate from "../Image/tinder_certificate.png";
import communication from "../Image/communication.png";

export const AboutMe = () => {
  return (
    <div id="aboutMe">
    <div className="aboutMeContainer">
      <h1>About Me</h1>
      <div className="aboutMeDecription">
        <div className="developerImage"><img src="https://img.freepik.com/premium-photo/developer-programmer-with-laptop-program-code-script-data-screen-young-freelancer-glasses_229760-905.jpg?w=2000" alt="developers img" /></div>
        <div className="MyDescription">
          <h3>My name is Lokesh Patidar</h3>
          <h4>Mern-Stack developer</h4>
          <div className="aboutmeDetails">
          I'm a passionate Full Stack Web developer skilled in MERN stack who likes to do experiments and is always ready for learning new things. I focus on writing clean, elegant, and efficient code I learned web development at Masai school it was a 7 months journey in Masai, In Masai, I have done 15 hours of daily coding and logics in data-structure & algorithms with an aspiration to build new features ideation to production, implementation of frameworks, and design flows that enable users to have a seamless experience. I take into consideration writing reusable and efficient code. I have been passionately combining good design, technology, and innovation in all my projects.
          </div>
          <div className="buttons">
            <button><a href="#contactPageSection">Hire me</a></button>
            <button>
              <a href={Lokesh_Patidar_Resume} download>
                Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="certificate">
        <h4>Certificates</h4>
        <div className="certificate_container">
          <div><a target="_blank" href="https://drive.google.com/file/d/1hTOsGprsY2UkkNbZCoOgRWLaYHozv191/view?usp=sharing"><img src={communication} alt="" /></a></div>
          <div><a target="_blank" href="https://drive.google.com/file/d/15ebGKCd0W6C5kUjKL_y6aB7vl3j9gL-H/view?usp=sharing"><img src={zoom_marathon} alt="" /></a></div>
          <div><a target="_blank" href="https://drive.google.com/file/d/1htVZsuBzVyIthaOk8c8-iNGw9iaNicRi/view?usp=sharing"><img src={tinder_certificate} alt="" /></a></div>
        </div>
      </div>
    <br id="skillsPageSection"/>
    </div>
  );
}