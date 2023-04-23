import React from "react";
import "../Styles/Projects.css";
import { ProjectItems } from "../Components/ProjectItems";
import { ProjectItem } from "../Components/ProjectItem";

export const Projects = () => {
  return (
    <div id="Projects">
      <div className="projectsContainer">
        <div>
          <div className="projectheading">
            <h1>Projects</h1>
          </div>

          <div className="projectBox">
            {
              ProjectItems?.map((el) => {
                return (
                  <ProjectItem
                    key={el.id}
                    id={el.id}
                    title={el.title}
                    carousel={el.carousel}
                    type={el.type}
                    desc={el.desc}
                    teck_stacks={el.teck_stacks}
                    githubRepo={el.githubRepo}
                    deployedLink={el.deployedLink}
                  />
                );
              })
            }
          </div>
        </div>
      </div>
      <hr id="contactPageSection" />
    </div>
  );
};
