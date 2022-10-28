import './Home.css';
import {
    FaLinkedinIn,
    FaGithub,
} from "react-icons/fa";
import Typical from "react-typical";


const HomePage = () => {
    return (
        <div id='Home'>
        <div className="container">
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
                                Aspiring MERN-Stack (MongoDB, Express, React, Node), Aspiring Full Stack Web Development at Masai School Bangaluru , KARNATAKA
                            </span>
                        </div>

                        <div>
                            <a href='#contactSection'><button className="btn primary-btn"> Hire Me </button></a>
                            <a
                                href="https://drive.google.com/file/d/1LQC4qMoLclFHtr-zcAokIuGxgoP59AU-/view?usp=sharing" download>
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
        <hr id='aboutMePageSection'/>
        </div>
    );
}

export default HomePage;