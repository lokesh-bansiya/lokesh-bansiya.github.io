import { useMemo, useState } from "react";
import { ProjectItem } from "../Components/ProjectItem";
import { ProjectItems } from "../constants/index.jsx";

const filters = ["All", "Production", "Full stack", "Frontend"];

const getCategory = (project, index) => {
  if (index < 4) return "Production";

  const stack = project.tech_stacks.map((item) => item.name).join(" ");
  return /Node|Express|Mongo|SQL|Laravel/i.test(stack) ? "Full stack" : "Frontend";
};

export const Projects = () => {
  const [filter, setFilter] = useState("All");
  const projects = useMemo(
    () =>
      ProjectItems.map((project, index) => ({
        ...project,
        category: getCategory(project, index),
        portfolioIndex: index + 1,
      })).filter((project) => filter === "All" || project.category === filter),
    [filter],
  );

  return (
    <section id="projects" className="section section-dark">
      <div className="section-shell">
        <div className="section-heading project-heading">
          <span className="section-index">03 / Complete project archive</span>
          <h2>
            Products built for
            <br />
            real-world impact.
          </h2>
          <p>
            Explore all {ProjectItems.length} production platforms, internal
            tools, and full-stack applications in my portfolio.
          </p>
        </div>

        <div className="project-toolbar">
          <div className="project-filters" aria-label="Filter projects">
            {filters.map((option) => (
              <button
                type="button"
                key={option}
                className={filter === option ? "active" : ""}
                onClick={() => setFilter(option)}
                aria-pressed={filter === option}
              >
                {option}
              </button>
            ))}
          </div>
          <span>
            Showing {projects.length} of {ProjectItems.length}
          </span>
        </div>

        <div className={`projects-grid ${filter !== "All" ? "filtered" : ""}`}>
          {projects.map((project) => (
            <ProjectItem
              key={project.id}
              {...project}
              index={project.portfolioIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
