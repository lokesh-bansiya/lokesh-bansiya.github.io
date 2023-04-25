import "../Styles/AboutMe.css";
import React from "react";
import Lokesh_Patidar_Resume from "../download/Lokesh_Patidar_Resume.pdf";
import logo from "../assets/img_about_me.webp";
import { DownloadIcon } from "@chakra-ui/icons";

export const AboutMe = () => {

  const onClickhandler = () => {
    return window.open(
      "https://1drv.ms/b/s!AiSQDUviI7FkaxKlaRjkZfvl3nM?e=RKg89O",
      "_blank"
    );
};

  return (
    <div id="aboutMe" className="nav-link about">
      <div className="aboutMeContainer">
        <h1>About Me</h1>
        <div className="aboutMeDecription">
          <div className="developerImage">
            <img src={logo} alt="developers img" />
          </div>
          <div className="MyDescription">
            <h3 id="user-detail-name">My name is Lokesh Patidar</h3>
            <h4>Mern-Stack developer</h4>
            <div className="aboutmeDetails" id="user-detail-intro">
            I'm a passionate Full Stack Web developer skilled in MERN stack, who likes to do experiments, and is always ready to learn new things. I focus on writing clean, elegant, and efficient code. I have completed web development at Masai school. At Masai, I did 15 hours of daily coding and logic in data structure & algorithms with an aspiration to build new features ideation to production and implementation of frameworks design flows that enable users to have a seamless experience. I take into consideration writing reusable and efficient code. I have passionately combined good design, technology, and innovation in all my projects.
            </div>
            <div className="buttons">
              <button>
                <a href="#contactPageSection">
                  Hire me
                </a>
              </button>
              <button id="resume-button-2">
                <a 
                  target="_blank"
                  alt="Resume"
                  href={Lokesh_Patidar_Resume}
                  download={true}
                  onClick={onClickhandler}
                  id="resume-link-2"
                  rel="noreferrer"
                >
                  Resume<DownloadIcon/>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}