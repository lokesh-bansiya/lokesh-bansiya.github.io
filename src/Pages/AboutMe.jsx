import "../Styles/AboutMe.css";
import React from "react";
import { DownloadIcon } from "@chakra-ui/icons";
import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { Experience } from "../constants";

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
            <h3 id="user-detail-name">My self Lokesh Patidar</h3>
            {/* <h4>Mern-Stack developer</h4> */}
            <div className="aboutmeDetails" id="user-detail-intro">
              As a passionate Full Stack Web Developer skilled in the{" "}
              <span style={{ color: "#05579e" }}>MERN-Stack</span> with more
              than 2 years of experience, I thrive on experimentation and
              continual learning. My journey includes completing web development
              at Masai School, where I dedicated myself to coding, logic in data
              structures & algorithms, and developing new features from ideation
              to production. My focus lies in crafting clean, elegant, and
              efficient code, always prioritizing reusability and performance.
              I've seamlessly blended good design, technology, and innovation
              throughout my projects to deliver exceptional user experiences.
            </div>
            <div className="buttons">
              <button>
                <a href="#contactPageSection">Hire me</a>
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
                  Resume
                  <DownloadIcon />
                </a>
              </button>
            </div>
          </div>
        </div>
        <Box
          p="5%"
          bg="white"
          mt="3%"
          pt="3%"
          display="flex"
          flexDirection="column"
        >
          <Text
            display="flex"
            justifyContent="center"
            p="1%"
            bg="#edf0ee"
            fontWeight={500}
            color="#0a0c82"
          >
            PROFESSIONAL EXPERIENCE
          </Text>
          {Experience.map((expItem) => {
            return (
              <Box mt="1%" key={expItem.id}>
                <Box display="flex" flexWrap="wrap">
                  <Text as={"h6"} pr="1%" w="fit-content" color="black" pt={0}>
                    {expItem.heading}
                  </Text>
                  <Text
                    as={"h6"}
                    color="teal"
                    w="fit-content"
                    pt={0}
                  >{`( ${expItem.company} )`}</Text>
                </Box>
                <Box justifyContent="left" display="flex" flexDir="column">
                  <span
                    style={{
                      marginRight: "2%",
                      color: "teal",
                      marginBottom: "1%",
                    }}
                  >
                    {expItem.timePeriod}
                  </span>
                  <UnorderedList mt={0}>
                    {expItem?.description?.map((desc, i) => (
                      <ListItem key={i}>{desc}</ListItem>
                    ))}
                  </UnorderedList>
                </Box>
              </Box>
            );
          })}
        </Box>
      </div>
    </div>
  );
};
