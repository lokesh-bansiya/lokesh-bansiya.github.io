import "../Styles/AboutMe.css";
import React from "react";
import { DownloadIcon } from "@chakra-ui/icons";
import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { Experience } from "../constants";

export const AboutMe = () => {
  const onClickHandler = () => {
    return window.open(
      "https://1drv.ms/b/c/64b123e24b0d9024/EWHO4Oz1MwdIvDEhaDlzCc0BKvNZ6PulRiKIeuILn9CasA?e=D8xvuf",
      "_blank"
    );
  };

  return (
    <div id="aboutMe" className="nav-link about">
      <div className="aboutMeContainer">
        <h1>About Me</h1>
        <div className="aboutMeDescription">
          {/* <div className="developerImage">
            <img src="assets/img_about_me.webp" alt="developers img" />
          </div> */}
          <div className="MyDescription">
            <h3 id="user-detail-name">My self Lokesh Patidar</h3>
            {/* <h4>Mern-Stack developer</h4> */}
            <div className="aboutMeDetails" id="user-detail-intro">
              {/* As a passionate Full Stack Web Developer skilled in the{" "}
              <span style={{ color: "#05579e" }}>MERN-Stack</span> with more
              than 3 years of experience, I thrive on experimentation and
              continual learning. My journey includes completing web development
              at Masai School, where I dedicated myself to coding, logic in data
              structures & algorithms, and developing new features from ideation
              to production. My focus lies in crafting clean, elegant, and
              efficient code, always prioritizing reusability and performance.
              I've seamlessly blended good design, technology, and innovation
              throughout my projects to deliver exceptional user experiences. */}
              A highly skilled MERN-Stack / Full Stack Developer with 3 years
              and 8 months of hands-on experience specializing in building
              dynamic, scalable, and efficient web applications. My technology
              journey began with a strong foundation in science, leading me to
              an intensive full-stack development program at Masai School, where
              I mastered MongoDB, Express.js, React.js, and Node.js through
              1200+ hours of coding and problem-solving.
              <p>
                Over the years, I have contributed to diverse projects,
                including:
              </p>
              <ol>
                <li>
                  <span style={{ color: "#05579e" }}>Zekosoft – </span>An
                  accounting software.
                </li>
                <li>
                  <span style={{ color: "#05579e" }}>Accpal – </span>QOL System
                  for Tax Firms
                </li>
                <li>
                  <span style={{ color: "#05579e" }}>Bitgert – </span>A real
                  estate marketplace.
                </li>
                <li>
                  <span style={{ color: "#05579e" }}>Pink Apron – </span>An
                  admin panel for efficient business management.
                </li>
              </ol>
              {/* <p>
                Currently, I am a MERN-Stack Developer at{" "}
                <span style={{ color: "#05579e" }}>
                  Codeformers
                  </span>, where I
                have been instrumental in developing{" "}
                <span style={{ color: "#05579e" }}>Accpal</span>—a cutting-edge
                digital solution for automating Tax, Secretarial, and Financial
                Quality Control processes. This system enhances operational
                efficiency through automated workflows, real-time financial
                updates, and proactive compliance management.
              </p> */}
              <p>
                Currently, I am working as a Frontend engineer at{" "}
                <span style={{ color: "#05579e" }}>Vidyovate Pvt. Ltd.</span>
                in Delhi (India), where I have been instrumental in developing{" "}
                <span style={{ color: "#05579e" }}>Zekosoft</span>—Developing -
                a cloud-based platform offering accounting, payroll, invoicing,
                and integrated financial services for small and micro businesses
                in Sweden. Focused on streamlining workflows, enabling real-time
                collaboration with accountants, and empowering clients with
                tools to gain financial control, improve decision-making, and
                scale efficiently through an ecosystem of apps and integrations.
              </p>
              <p></p>
              <p>
                Beyond professional endeavours, I am continuously enhancing my
                expertise and am currently pursuing a Bachelor of Computer
                Applications (BCA) from Amity University, Noida. Passionate
                about innovation, I thrive on solving complex problems and
                delivering high-quality, user-centric applications.
              </p>
              <p>
                I am always eager to explore new challenges, optimize workflows,
                and contribute to impactful projects in the ever-evolving tech
                landscape.
              </p>
              <p>📩 Let’s connect and build something amazing together!</p>
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
                  onClick={onClickHandler}
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
