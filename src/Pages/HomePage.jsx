import '../Styles/Home.css';
import {
    FaLinkedinIn,
    FaGithub,
} from "react-icons/fa";
import Typical from "react-typical";
import Lokesh_Patidar_Resume from "../download/Lokesh-Patidar-Resume.pdf";
import { DownloadIcon } from '@chakra-ui/icons';
import lokesh from "../Image/lokesh_profile.jpg";

const HomePage = () => {

    const onClickhandler = () => {
        return window.open(
            "https://1drv.ms/b/s!AiSQDUviI7FkaxKlaRjkZfvl3nM?e=RKg89O",
            "_blank"
        );
    };


    return (
        <div id='Home' className="nav-link home">
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
                                        rel="noreferrer"
                                    >
                                        <i className="">
                                            <FaLinkedinIn className='icon-ease-out' />
                                        </i>
                                    </a>
                                    <a
                                        href="https://github.com/lokesh-patidar"
                                        target="_blank"
                                        alt="github"
                                        rel="noreferrer"
                                    >
                                        <i className="">
                                            <FaGithub className='icon-ease-out' />
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
                                    <>
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
                                    </>
                                </span>
                                <span className="profile-tag-line">
                                    I am a MERN-Stack (MongoDB, Express, React, Node), I have completed Full Stack Web Development at Masai School Bangaluru, KARNATAKA
                                </span>
                            </div>

                            <div>
                                <a href='#contactSection'><button className="btn primary-btn"> Hire Me </button></a>
                                <a
                                    target="_blank"
                                    alt="Resume"
                                    href={Lokesh_Patidar_Resume}
                                    download={true}
                                    onClick={onClickhandler}
                                    id="resume-link-1"
                                    rel="noreferrer"
                                >
                                    <button className="btn highlighted-btn" id="resume-button-1">
                                        Get Resume<DownloadIcon />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="imagebox">
                        <div className="profile-picture">
                            <div className="profile-picture-background">
                                <img
                                    src={lokesh}
                                    className='home-img'
                                    alt="lokesh-patidar"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr color='black' id='aboutMePageSection' />
        </div>
    );
}

export default HomePage;