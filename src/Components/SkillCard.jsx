const SkillCard = ({ img, name }) => (
  <div className="skill-card">
    <img src={img.startsWith("/") ? img : `/${img}`} alt="" />
    <span>{name}</span>
  </div>
);

export { SkillCard };
