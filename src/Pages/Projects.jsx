import React from "react";
import "./Projects.css";
import { FaGithub, FaLink } from "react-icons/fa";
import beautybebo from "../Image/beautybebo.png";
import dice_app from "../Image/dice_app.png";
import getharvest from "../Image/getharvest.png";
import naukari from "../Image/naukari.png";

export const Projects = () => {
  return (
    <div id="Projects">
    <div className="projectsContainer">
      <div>
        <div className="projectheading">
          <h1>Projects</h1>
        </div>

        <div className="projectBox">
          <div className="projectItem">
            <div className="projectImage">
              <img src={beautybebo} alt="" />
            </div>
            <div className="projectDetails">
              <h2>Clone of beautybebo.com website</h2>
              <div className="desc">
                <span>Description</span>
                <br />
                This is the clone of beautybebo.com website (an ecommerce website) with the help of HTML, CSS, and JavaScript, here I have implemented some functionality and a best clone UI of the original website.
              </div>
              <div className="functionality">
                <h3>Functionality</h3>
                <li>Users can add product items to cart </li>
                <li>Users can check their items in cart page </li>
                <li>Users can remove the items as well from cart page</li>
              </div>
              <div className="techStacks">
                <div className="tech-stacks">
                  <h3>Tech-Stacks used</h3>
                  <div>
                    <img
                      src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
                      align="center"
                      alt="javascript"
                    />
                    <img
                      src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
                      align="center"
                      alt="html5"
                    />
                    <img
                      src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
                      align="center"
                      alt="css3"
                    />
                  </div>
                </div>
                <div className="tools">
                  <h3>Tools used</h3>
                  <div>
                    <img
                      src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7"
                      alt="git"
                    />

                    <img
                      src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
                      alt="github"
                    />
                  </div>
                </div>
                <div className="btn">
                  <button>
                    <h3>
                      <a href="https://github.com/lokesh-patidar/rightful-order-9279" target="_blank">
                        <FaGithub /> GitHub Repo
                      </a>
                    </h3>
                  </button>
                  <button>
                    <h3>
                      <a href="https://fascinating-youtiao-fd95ce.netlify.app/" target="_blank">
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
          <hr color="gray" />
          <br />
          <br />

          <div className="projectItem1">
            <div className="projectImage">
              <img src={dice_app} alt="" />
            </div>
            <div className="projectDetails">
              <h2>Dice Rolling App</h2>
              <div className="desc">
                <span>Description</span>
                <br />
                This is a mini dice rolling app that I made with the help of HTML, CSS, and JavaScript, here I have generated random numbers from 1 to 6 and I gave a good UI to it. Three members can participate to play with it.
              </div>
              <div className="functionality">
                <h3>Functionality</h3>
                <li>Fully responsive </li>
                <li>Generating random numbers </li>
              </div>
              <div className="techStacks">
                <div className="tech-stacks">
                  <h3>Tech-Stacks used</h3>
                  <div>
                    <img
                      src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
                      align="center"
                      alt="javascript"
                    />
                    <img
                      src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
                      align="center"
                      alt="html5"
                    />
                    <img
                      src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
                      align="center"
                      alt="css3"
                    />
                  </div>
                </div>
                <div className="tools">
                  <h3>Tools used</h3>
                  <div>
                    <img
                      src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7"
                      alt="git"
                    />

                    <img
                      src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
                      alt="github"
                    />
                  </div>
                </div>
                <div className="btn">
                  <button>
                    <h3>
                      <a
                        href="https://github.com/lokesh-patidar/Dice-App"
                        target="_blank"
                      >
                        <FaGithub /> GitHub Repo
                      </a>
                    </h3>
                  </button>
                  <button>
                    <h3>
                      <a
                        href="https://whimsical-sorbet-723292.netlify.app/"
                        target="_blank"
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
          <hr color="gray" />
          <br />
          <br />

          <div className="projectItem">
            <div className="projectImage">
              <img src={getharvest} alt="" />
            </div>
            <div className="projectDetails">
              <h2>Clone of getharvest.com website</h2>
              <div className="desc">
                <span>Description</span>
                <br />
                Harvest is a cloud-based time tracking tool designed for businesses of all sizes.
                Key features include time and expense management, team management, project management, scheduling and invoicing. I worked on it with my team. I have assigned a team of 5 members for this project to clone getharvest.com. We have built this exactly as similar as a real website with the help of html, css and javascript.

              </div>
              <div className="functionality">
                <h3>Functionality</h3>
                <li>Authentication of users </li>
                <li>Fully responsive </li>
              </div>
              <div className="techStacks">
                <div className="tech-stacks">
                  <h3>Tech-Stacks used</h3>
                  <div>
                    <img
                      src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
                      align="center"
                      alt="javascript"
                    />
                    <img
                      src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
                      align="center"
                      alt="html5"
                    />
                    <img
                      src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
                      align="center"
                      alt="css3"
                    />
                  </div>
                </div>
                <div className="tools">
                  <h3>Tools used</h3>
                  <div>
                    <img
                      src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7"
                      alt="git"
                    />

                    <img
                      src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
                      alt="github"
                    />
                  </div>
                </div>
                <div className="btn">
                  <button>
                    <h3>
                      <a
                        href="https://github.com/lokesh-patidar/vigorous-ticket-1895"
                        target="_blank"
                      >
                        <FaGithub /> GitHub Repo
                      </a>
                    </h3>
                  </button>
                  <button>
                    <h3>
                      <a
                        href="https://monumental-sprinkles-d71af9.netlify.app/"
                        target="_blank"
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
          <hr color="gray" />
          <br />
          <br />

          <div className="projectItem1">
            <div className="projectImage">
              <img src={naukari} alt="" />
            </div>
            <div className="projectDetails">
              <h2>Clone of naukari.com website</h2>
              <div className="desc">
                <span>Description</span>
                <br />
                Naukri.com is a recruitment platform that provides hiring-related services to corporates/recruiters, placement agencies, and job seekers in India and overseas. It offers multiple products like Resume Database Access, Job Listings, and Response Management Tools. Here is the clone ofth real website that I made with the help of react, chakra-ui and javascript mostly.
              </div>
              <div className="functionality">
                <h3>Functionality</h3>
                <li>Users can Login </li>
                <li>Fully responsive</li>
              </div>
              <div className="techStacks">
                <div className="tech-stacks">
                  <h3>Tech-Stacks used</h3>
                  <div>
                    <img
                      src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                      align="center"
                      width="60%"
                      alt="reactjs"
                    />


                    <img
                      src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
                      align="center"
                      width="50%"
                      alt="html5"
                    />
                    <img
                      src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
                      align="center"
                      width="70%"
                      alt="javascript"
                    />
                    <img
                      src="https://img.shields.io/badge/chakra ui-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white"
                      align="center"
                      width="90px"
                      alt="chakra-ui"
                    />
                    <img
                      src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
                      align="center"
                      width="50%"
                      alt="css3"
                    />
                  </div>
                </div>
                <div className="tools">
                  <h3>Tools used</h3>
                  <div>
                    <img
                      src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7"
                      alt="git"
                    />
                    <img
                      src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white"
                      alt="npm"
                    />

                    <img
                      src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
                      alt="github"
                    />
                  </div>
                </div>
                <div className="btn">
                  <button>
                    <h3>
                      <a
                        href="https://github.com/lokesh-patidar/punchy-car-5123/tree/main/naukri.com"
                        target="_blank"
                      >
                        <FaGithub /> GitHub Repo
                      </a>
                    </h3>
                  </button>
                  <button>
                    <h3>
                      <a
                        href="https://ornate-flan-0416fa.netlify.app/"
                        target="_blank"
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
          <hr color="gray" />
          <br />
          <br />

          <div className="projectItem">
            <div className="projectImage">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU7MIXZ9nXcL0E8Sn4fg_jI2Wh5SQx-P_4pFGw3M92JCn_sow8zNEEf20w_TXvGjD7PQ0&usqp=CAU"
                alt=""
              />
            </div>
            <div className="projectDetails">
              <h2>Clone of Lorem, ipsum.com website</h2>
              <div className="desc">
                <span>Description</span>
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti optio placeat quisquam blanditiis laborum. Nulla rem ad
                libero alias blanditiis.
              </div>
              <div className="functionality">
                <h3>Functionality</h3>
                <li>Users can add product items to cart </li>
                <li>Users can check their items in cart page </li>
                <li>Users can remove the items as well from cart page</li>
              </div>
              <div className="techStacks">
                <div className="tech-stacks">
                  <h3>Tech-Stacks used</h3>
                  <div>
                    <img
                      src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
                      align="center"
                      alt="javascript"
                    />
                    <img
                      src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
                      align="center"
                      alt="html5"
                    />
                    <img
                      src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
                      align="center"
                      alt="css3"
                    />
                  </div>
                </div>
                <div className="tools">
                  <h3>Tools used</h3>
                  <div>
                    <img
                      src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7"
                      alt="git"
                    />
                    <img
                      src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white"
                      alt="npm"
                    />

                    <img
                      src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
                      alt="github"
                    />
                  </div>
                </div>
                <div className="btn">
                  <button>
                    <h3>
                      <a href="#" target="_blank">
                        <FaGithub /> GitHub Repo
                      </a>
                    </h3>
                  </button>
                  <button>
                    <h3>
                      <a href="#" target="_blank">
                        <FaLink /> Diployed Link
                      </a>
                    </h3>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
