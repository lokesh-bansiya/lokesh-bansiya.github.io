import "../Styles/Projects.css";
import { Box, Center, useColorModeValue, Image } from "@chakra-ui/react";
import { FaGithub, FaLink } from "react-icons/fa";
import "../Styles/Projects.css";
const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

const ProjectItemCard = ({
  projectImgArr,
  type,
  desc,
  tech_stacks,
  githubRepo,
  deployedLink,
}) => {
  return (
    <Center p={12} pt={20} bg={"#ccdbd0"} m={3}>
      <Box
        role={"group"}
        p={12}
        px={16}
        w={"100%"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-26}
          pos={"relative"}
          height={"auto"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"xl"}
            borderRadius={10}
            height={230}
            width={"100%"}
            shadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
            objectFit={"cover"}
            src={
              projectImgArr && projectImgArr[0]?.img
                ? projectImgArr[0]?.img
                : IMAGE
            }
            alt="#"
          />
        </Box>
        {/* <div className="projectImage">
          <h2 className="project-type project-title">
            <span>☆</span> {title}{" "}
          </h2>
          {carousel}
        </div> */}
        <div>
          <h2>{type}</h2>
          <div className="desc project-description">
            <span>Description</span>
            <br />
            {desc}
          </div>

          <div className="techStacks">
            <div className="tech-stacks">
              <h3>Tech-Stacks & Tools used</h3>
              <div>
                {tech_stacks?.map((elem, i) => {
                  return (
                    <div className="languages" key={i}>
                      {elem?.img ? (
                        <div>
                          <img src={elem?.img} alt={elem.name} />
                        </div>
                      ) : (
                        <Box m={"auto"}>{elem.icon}</Box>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="btn">
              <button>
                <h3>
                  {githubRepo ? (
                    <a
                      href={githubRepo}
                      target="_blank"
                      rel="noreferrer"
                      className="project-github-link"
                    >
                      <FaGithub /> GitHub Repo
                    </a>
                  ) : (
                    <span style={{ color: "gray" }}>
                      <FaGithub /> Closed
                    </span>
                  )}
                </h3>
              </button>
              <button>
                <h3>
                  {deployedLink ? (
                    <a
                      href={deployedLink}
                      target="_blank"
                      rel="noreferrer"
                      className="project-deployed-link"
                    >
                      <FaLink /> Diployed Link
                    </a>
                  ) : (
                    <span style={{ color: "gray" }}>
                      <FaGithub /> Closed
                    </span>
                  )}
                </h3>
              </button>
            </div>
          </div>
        </div>
      </Box>
    </Center>
  );
};

export { ProjectItemCard };
