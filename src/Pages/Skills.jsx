import React from "react";
import { SkillItems } from "../constants/index.jsx";
import { SkillCard } from "../Components/SkillCard";

export const Skills = () => (
  <section id="skills" className="section section-shell">
    <div className="section-heading">
      <span className="section-index">02 / Capabilities</span>
      <h2>
        Tools I use to turn
        <br />
        ideas into products.
      </h2>
      <p>
        From interface to infrastructure, I work across the modern JavaScript
        stack.
      </p>
    </div>
    <div className="skills-grid">
      {SkillItems.slice(0, 20).map((skill) => (
        <SkillCard key={skill.name} img={skill.img} name={skill.name} />
      ))}
    </div>
  </section>
);
