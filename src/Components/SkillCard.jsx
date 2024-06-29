import "../Styles/Skills.css";

const SkillCard = ({ img, name }) => {
  return (
    <div className="skills-card">
      <img className="skills-card-img" src={img} alt="redux" />
      <h3 className="skills-card-name">{name}</h3>
    </div>
  );
};

export { SkillCard };
