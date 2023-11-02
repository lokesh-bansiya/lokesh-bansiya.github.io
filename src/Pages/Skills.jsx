import React from "react";
import '../Styles/Skills.css';
import { SkillItems } from "../Components/SkillsItems";
import { SkillCard } from "../Components/SkillCard";
import { ToolItems } from "../Components/ToolsItems";

export const Skills = () => {
  return (
    <div id="skills" className="nav-link skills">
      <div className="skillContainer">
        <div><h1>Skills</h1></div>
        <div className="skillsBox">
          {
            SkillItems.map((skill, i) => {
              return (
                <SkillCard key={i} img={skill.img} name={skill.name} />
              )
            })
          }
        </div>

        <div className="tools">
          <h4>Tools</h4>
          <div className="toolsBox">
            {
              ToolItems.map((tool, i) => {
                return (
                  <SkillCard key={i} img={tool.img} name={tool.name} />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

