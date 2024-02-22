import "../Styles/AboutMe.css";
import React from "react";
import { DownloadIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";

export const AboutMe = () => {

  // const onClickhandler = () => {
  //   return window.open(
  //     "https://1drv.ms/b/s!AiSQDUviI7FkaxKlaRjkZfvl3nM?e=RKg89O",
  //     "_blank"
  //   );
  // };

  return (
    <div id="aboutMe" className="nav-link about">
      <div className="aboutMeContainer">
        <h1>About Me</h1>
        <div className="aboutMeDecription">
          <div className="developerImage">
            <img src="assets/img_about_me.webp" alt="developers img" />
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
                  href="/download/Lokesh-Patidar-Resume.pdf"
                  download={true}
                  // onClick={onClickhandler}
                  id="resume-link-2"
                  rel="noreferrer"
                >
                  Resume<DownloadIcon />
                </a>
              </button>
            </div>
          </div>
        </div>
        <Box p="5%" bg="white" mt="3%" pt="3%" display='flex' flexDirection="column">
          <Text display="flex" justifyContent="center" p="1%" bg="#edf0ee" fontWeight={500} color="#0a0c82">PROFESSIONAL EXPERIENCE</Text>
          <Box mt="1%">
            <Box display="flex" flexWrap="wrap">
              <Text as={"h6"} pr="1%" w='fit-content' color="black">MERN-Stack Developer</Text>
              <Text as={"h6"} color="teal" w='fit-content'>{"( Webient Technologies )"}</Text>
            </Box>
            <Box mt="2%" justifyContent="left">
              May 2023 – Nov 2023 | Gurgaon, Haryana Highly skilled MERN-Stack Developer with a proven track
              record of success during a dedicated six-month tenure at
              Webient Technologies in Gurgaon, Haryana. Proficient in
              crafting robust admin panels tailored to the needs of various
              applications, including Pink Apron, Ub-Factory, and The St
              Lucian Hub-HubLA Admin Panel. Successfully executed a
              significant web3 project leveraging React.js for Bitgert.
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
}