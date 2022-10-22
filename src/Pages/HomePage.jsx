import './Home.css';
import {
    FaHome,
    FaUser,
    FaIdCard,
    FaFolder,
    FaLinkedinIn,
    FaGithub,
    FaList,
    FaBook,
} from "react-icons/fa";
import Typical from "react-typical";


const HomePage = () => {
    return (
        <div id='Home' className="container">
            <div>
                <div className="description">
                    <div className="profile-details">
                        <div className="colz">
                            <div className="colz-icon">
                                <a
                                    href="https://www.linkedin.com/in/lokesh-patidar-aa45a0236/"
                                    target="_blank"
                                    alt="linked in"
                                >
                                    <i className="">
                                        <FaLinkedinIn />
                                    </i>
                                </a>
                                <a
                                    href="https://github.com/lokesh-patidar"
                                    target="_blank"
                                    alt="github"
                                >
                                    <i className="">
                                        <FaGithub />
                                    </i>
                                </a>
                            </div>
                        </div>

                        <div className="profile-details-role">
                            <h6>
                                Hello, I'm
                                <span className="highlighted-text">
                                    &nbsp;{" Lokesh Patidar "}
                                </span>
                            </h6>
                            <span className="primary-text">
                                <p>
                                    <Typical
                                        loop={Infinity}
                                        steps={[
                                            "Enthusiastic Developer",
                                            2000,
                                            "Full Stack Developer",
                                            2000,
                                            "Mern Stack Developer",
                                            2000,
                                            "React-Redux Developer",
                                            2000,
                                        ]}
                                    />
                                </p>
                            </span>
                            <span className="profile-tag-line">
                                Lorem ipsum, dolor sit amet consectetur adipisicing
                                elit. Similique, voluptatibus? Lorem ipsum dolor sit
                                amet consectetur, adipisicing eli Knack of building
                                applications with front-end and back-end operations
                            </span>
                        </div>

                        <div>
                            <button className="btn primary-btn"> Hire Me </button>
                            <a
                                href="https://drive.google.com/file/d/1LQC4qMoLclFHtr-zcAokIuGxgoP59AU-/view?usp=sharing"
                                download
                            >
                                <button className="btn highlighted-btn">
                                    Get Resume
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="imagebox">
                    <div className="profile-picture">
                        <div className="profile-picture-background">
                            <img
                                src="https://avatars.githubusercontent.com/u/105616033?v=4"
                                alt="lokesh-patidar"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;