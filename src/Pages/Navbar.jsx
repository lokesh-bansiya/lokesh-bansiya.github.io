import React from "react";
import {
  FaHome,
  FaUser,
  FaIdCard,
  FaFolder,
  FaList,
  FaBook,
} from "react-icons/fa";
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbarContainer">
          <div className="logo">
              <span>P</span>ortfolio
          </div>
          <div className="nav">
            <div>
                <a href="#Home"><FaHome /> Home</a>
            </div>
            <div>
                <a href="#Aboutme"><FaUser /> About Me</a>
            </div>
            <div>
                <FaList /> Skills
            </div>
            <div>
                <a href="#Projects"><FaFolder /> Projects</a>
            </div>
            <div>
                <FaIdCard /> Contact
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1LQC4qMoLclFHtr-zcAokIuGxgoP59AU-/view?usp=sharing"
                target="_blank"
                alt="Resume"
              >
                <FaBook />
                &nbsp; Resume
              </a>
            </div>
          </div>
        </div>
    );
}

export default Navbar;