import { FiArrowUpRight, FiGithub, FiLock } from "react-icons/fi";

const ProjectItem = ({
  title,
  desc,
  tech_stacks,
  githubRepo,
  deployedLink,
  carousel,
  index,
}) => {
  const cleanTitle = title.replace("(Working...)", "").trim();
  const recruiterSummaries = {
    Accpal:
      "A tax and financial operations platform that automates compliance workflows, reporting, client updates, and quality control for professional firms.",
    Bitgert:
      "A Web3-powered real-estate marketplace connecting buyers, brokers, and property managers through a responsive, transaction-ready experience.",
    "Live Streaming Admin Panel":
      "A scalable operations dashboard for managing hosts, live sessions, users, content, and platform activity in one streamlined workspace.",
    "Pink Apron Admin Panel":
      "An end-to-end food operations dashboard for managing menus, orders, customers, and delivery workflows across a growing meal service.",
  };
  const summary =
    recruiterSummaries[cleanTitle] ||
    (desc.length > 190 ? `${desc.slice(0, 187).trim()}…` : desc);
  const technologies = [...new Set(tech_stacks.map((item) => item.name))].slice(
    0,
    5,
  );

  return (
    <article className="project-card">
      <div className="project-image">
        <div className="project-carousel">{carousel}</div>
        <span>{String(index).padStart(2, "0")}</span>
      </div>
      <div className="project-content">
        <div className="project-topline">
          <span>Case study</span>
          {deployedLink && (
            <a
              href={deployedLink}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${cleanTitle}`}
            >
              <FiArrowUpRight />
            </a>
          )}
        </div>
        <h3>{cleanTitle}</h3>
        <p>{summary}</p>
        <div className="tag-row">
          {technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {deployedLink ? (
            <a href={deployedLink} target="_blank" rel="noreferrer">
              View product <FiArrowUpRight />
            </a>
          ) : (
            <span>
              <FiLock /> Private product
            </span>
          )}
          {githubRepo && (
            <a href={githubRepo} target="_blank" rel="noreferrer">
              <FiGithub /> Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export { ProjectItem };
