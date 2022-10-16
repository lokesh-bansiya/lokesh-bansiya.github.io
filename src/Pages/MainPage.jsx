import React from "react";
import { FaBars, FaHome, FaUser, FaIdCard, FaFolder, FaLinkedinIn,  FaGithubAlt, FaList, FaBook } from "react-icons/fa";
import Typical from "react-typical";

function MainPage() {
  return (
    <div className="body">
      <div className="main-container">
        <div className="aside">
          <div className="logo">
            <a href="#">
              <span>P</span>ortfolio
            </a>
          </div>
          <ul className="nav">
            <li>
              <a href="#">
                <FaHome />
                &nbsp; Home
              </a>
            </li>
            <li>
              <a href="#">
                <FaUser />
                &nbsp; About Me
              </a>
            </li>
            <li>
              <a href="#">
                <FaList />
                &nbsp; Skills
              </a>
            </li>
            <li>
              <a href="#">
                <FaFolder />
                &nbsp; Projects
              </a>
            </li>
            <li>
              <a href="#">
                <FaIdCard />
                &nbsp; Contact
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1LQC4qMoLclFHtr-zcAokIuGxgoP59AU-/view?usp=sharing" target="_blank" alt="Resume">
                <FaBook/>
                &nbsp; Resume
              </a>
            </li>
          </ul>
        </div>

        {/* right box 
         */}
        <div className="main-content">

          {/* Home section  */}
          <section className="home section hidden">
            <div className="container">
              <div className="profile-container">
                <div className="profile-parent">
                  <div className="profile-details">
                    <div className="colz">
                      <div className="colz-icon">
                        <a href="https://www.linkedin.com/in/lokesh-patidar-aa45a0236/" target="_blank" alt="linked in"><i className=""><FaLinkedinIn/></i></a>
                        <a href="https://github.com/lokesh-patidar" target="_blank" alt="github"><i className=""><FaGithubAlt/></i></a>
                      </div>
                    </div>

                    <div className="profile-details-name">
                      <div className="profile-details-role">
                      <h6>Hello, I'm <span className="highlighted-text"> &nbsp; Lokesh Patidar</span></h6>
                      <span className="primary-text">
                        {" "}
                        <h2>
                          {" "}
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
                        </h2>
                      </span>
                      <span className="profile-tag-line">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, voluptatibus?  Lorem ipsum dolor sit amet consectetur, adipisicing eli Knack of building applications with front-end and back-end operations</span>
                      </div>
                    </div>

                    <div>
                      <button className="btn primary-btn">
                        {" "}
                        Hire Me{" "}
                      </button>
                      <a href="https://drive.google.com/file/d/1LQC4qMoLclFHtr-zcAokIuGxgoP59AU-/view?usp=sharing" download>
                       <button className="btn highlighted-btn">Get Resume</button>
                      </a>
                    </div>
                  </div>
                   
                  <div className="profile-picture">
                     <div className="profile-picture-background">
                      <img src="https://avatars.githubusercontent.com/u/105616033?v=4" alt="lokesh-patidar"/>
                     </div>
                  </div>

                </div>
              </div>
              <div></div>
            </div>
          </section>


          {/* About me  */}

          <section className="about section">
            <div className="container">
              <div className="row">
                <div className="section-title padd-15">
                  <h2>About Me</h2>
                </div>
              </div>
              <div className="row">
                <div className="about-content padd-15">
                  <div className="row">
                    <div className="about-text padd-15">
                      <h3>I'm Lokesh Patidar <span>Full Stack Web Developer</span></h3>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga quas incidunt voluptatem nisi fugiat nemo consequatur eius explicabo velit tempore aut ipsam fugit harum, pariatur sequi dolorem, error repellendus dolor? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique veniam nisi excepturi in vitae laudantium quia necessitatibus inventore dicta! Explicabo vero ab nihil fugit mollitia. Aut perspiciatis eos, distinctio .</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="personal-info padd-15">
                      <div className="row">
                        <div className="info-item">
                          <p>Birthday : <span>14 August 1998</span></p>
                        </div>
                        <div className="info-item">
                          <p>Age : <span>24 years old</span></p>
                        </div>
                        <div className="info-item">
                          <p>Phone : <span>9993977820</span></p>
                        </div>
                        <div className="info-item">
                          <p>Email : <span>bansiyalokesh29988@gmail.com</span></p>
                        </div>
                        <div className="info-item">
                          <p>Village : <span>Badagaon (M.P.)</span></p>
                        </div>
                        <div className="info-item">
                          <p>Education : <span>12th (Secondary Education)</span></p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="buttons padd-15">
                          <a href="#">Resume</a>
                          <a href="#">Hire Me</a>
                        </div>
                      </div>
                    </div>
                    <div className="skills padd-15">Skills</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
