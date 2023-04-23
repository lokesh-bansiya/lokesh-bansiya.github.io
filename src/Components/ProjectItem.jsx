import { FaGithub, FaLink } from "react-icons/fa";
import "../Styles/Projects.css";

const ProjectItem = ({ id, title, carousel, type, desc, teck_stacks, githubRepo, deployedLink }) => {
    return (
        <>
            <div className={id%2 !== 0 ? "projectItem" : "projectItem1"}>
                <div className="projectImage">
                    <h2 className="project-type">
                        <span>☆</span> {title}{" "}
                    </h2>
                    {carousel}
                </div>
                <div className="projectDetails">
                    <h2>{type}</h2>
                    <div className="desc">
                        <span>Description</span>
                        <br />
                        {desc}
                    </div>

                    <div className="techStacks">
                        <div className="tech-stacks">
                            <h3>Tech-Stacks & Tools used</h3>
                            <div>
                                {
                                    teck_stacks.map((elem, i) => {
                                        return (
                                            <div className="languages" key={i}>
                                                <div>
                                                    <img src={elem.img} alt={elem.name} />
                                                </div>
                                                <div>
                                                    <p>{elem.name}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>

                        <div className="btn">
                            <button>
                                <h3>
                                    <a
                                        href={githubRepo}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FaGithub /> GitHub Repo
                                    </a>
                                </h3>
                            </button>
                            <button>
                                <h3>
                                    <a
                                        href={deployedLink}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FaLink /> Diployed Link
                                    </a>
                                </h3>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
        </>
    )
}

export { ProjectItem };