import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaFolder,
  FaList,
  FaMobile,
} from "react-icons/fa";
import "../Styles//Navbar.css";
import { Link } from "react-scroll";
import { DownloadIcon } from '@chakra-ui/icons';


const Navbar = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const onClickhandler = () => {
    // return window.open(
    //   "https://1drv.ms/b/s!AiSQDUviI7FkaxKlaRjkZfvl3nM?e=RKg89O",
    //   "_blank"
    // );
  };

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }

    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <div
        id="nav-menu"
        className="navbarContainer"
      >
        <div className="logo">
          <span>L</span>okesh
        </div>
        <div className="nav">
          <div>
            <Link activeClass="active" smooth spy to="home" offset={-100} className="nav-link home"><FaHome /> Home </Link>
          </div>
          <div>
            <Link activeClass="active" smooth spy to="about" duration={600} offset={-100} className="nav-link about" >
              <FaUser /> About Me
            </Link>
          </div>
          <div>
            <Link activeClass="active" smooth spy to="skills" duration={800} offset={-100} className="nav-link skills"><FaList /> Skills</Link>
          </div>
          <div>
            <Link activeClass="active" smooth spy to="projects" duration={2500} offset={-100} className="nav-link projects"><FaFolder /> Projects </Link>
          </div>
          <div>
            <Link activeClass="active" smooth spy to="contact" duration={3500} offset={-100} className="nav-link contact"><FaMobile /> Contact </Link>
          </div>
          <div className="nav-link resume">
            <a
              target="_blank"
              rel="noreferrer"
              alt="Resume"
              href="/download/Lokesh-Patidar-Resume.pdf"
              download={true}
              onClick={onClickhandler}
            >
              <DownloadIcon /> Resume
            </a>
          </div>
        </div>
      </div>

      {/* -------------------------------------moddle screen--------------------------------------------  */}

      <div id="box-1second" className="navbarContainersecond">
        <div className="logosecond">
          <span>L</span>okesh
        </div>
        <div className="navsecond">
          <div>
            {" "}
            <Link activeClass="active" smooth spy to="home" offset={-100} className="nav-link home"><span>H</span>ome</Link>
          </div>
          <div>
            {" "}
            <Link activeClass="active" smooth spy to="about" className="nav-link about" duration={600} offset={-100}><span>A</span>bout Me </Link>
          </div>
          <div>
            {" "}
            <Link activeClass="active" smooth spy to="skills" duration={800} offset={-100} className="nav-link skills"><span>S</span>kills</Link>
          </div>
          <div>
            {" "}
            <Link activeClass="active" smooth spy to="projects" duration={2500} offset={-100} className="nav-link projects"><span>P</span>rojects </Link>
          </div>
          <div>
            {" "}
            <Link activeClass="active" smooth spy to="contact" duration={3500} offset={-100} className="nav-link contact"><span>C</span>ontact </Link>
          </div>
          <div className="nav-link resume">
            <a
              href="/download/Lokesh-Patidar-Resume.pdf"
              download={true}
              onClick={onClickhandler}
              target="_blank"
              rel="noreferrer"
              alt="Resume"
            >
              <span>R</span>esume
            </a>
          </div>
        </div>
      </div>

      {/* ---------------------------------------mobile screen------------------------------------------  */}

      <div
        id="box-2"
        className="mainNavbarBox"
        style={{ width: "100%", height: "100vh" }}
      >
        <div className="burgerNav">
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
          <div>
            <div className="navlogo">
              <span>L</span>okesh
            </div>
          </div>
        </div>

        <div id="menu-class" style={{ height: "100vh" }} className={menu_class}>
          <div className="navinside">
            <div>
              <Link onClick={updateMenu} activeClass="active" smooth spy to="home" offset={-100} className="nav-link home"><span>H</span>ome</Link>
            </div>
            <div>
              <Link onClick={updateMenu} activeClass="active" smooth spy to="about" duration={600} offset={-100} className="nav-link about"><span>A</span>bout Me </Link>
            </div>
            <div>
              <Link onClick={updateMenu} activeClass="active" smooth spy to="skills" duration={800} offset={-100} className="nav-link skills"><span>S</span>kills</Link>
            </div>
            <div>
              <Link onClick={updateMenu} activeClass="active" smooth spy to="projects" duration={2500} offset={-100} className="nav-link projects"><span>P</span>rojects </Link>
            </div>
            <div>
              <Link onClick={updateMenu} activeClass="active" smooth spy to="contact" duration={3500} offset={-100} className="nav-link contact"><span>C</span>ontact </Link>
            </div>
            <div onClick={updateMenu} className="nav-link resume">
              <a
                href="/download/Lokesh-Patidar-Resume.pdf"
                download={true}
                onClick={onClickhandler}
                target="_blank"
                rel="noreferrer"
                alt="Resume"
              >
                <DownloadIcon marginRight="5%" />Resume
              </a>
            </div>
          </div>
          <div className="navinside1">
            <span>L</span>okesh &nbsp;<span>P</span>atidar
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
