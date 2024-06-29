import React from "react";
import "../Styles/Skills.css";
import { SkillItems } from "../constants/index";
import { SkillCard } from "../Components/SkillCard";

export const Skills = () => {
  return (
    <div id="skills" className="nav-link skills">
      <div className="skillContainer">
        <div>
          <h1>Skills & Tools</h1>
        </div>
        <div className="skillsBox">
          {SkillItems.map((skill, i) => {
            return <SkillCard key={i} img={skill.img} name={skill.name} />;
          })}
        </div>
      </div>
    </div>
  );
};
