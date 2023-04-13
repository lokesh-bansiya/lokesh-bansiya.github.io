import React from "react";
import "../Styles/Projects.css";
import { FaGithub, FaLink } from "react-icons/fa";
import { Grocery } from "../Components/GroceryCarousel";
import { AssessmentTest } from "../Components/AssessmentTest";
import { BeautyBebo } from "../Components/BeautyBebo";
import { Calculator } from "../Components/Calculator";
import { GetHarvest } from "../Components/GetHarvest";
import { Webtaskit } from "../Components/Webtaskit";
import { PharmaEasy } from "../Components/PharmaEasy";
import { GitStar } from "../Components/GitStar";

import cyclic_logo from "../assets/cyclic-logo.png";
import github from "../assets/github.png";
import npm from "../assets/npm.png";
import vercel from "../assets/vercel.png";
import netlify from "../assets/netlify.png";
import chakraui from "../assets/chakraui.jpg";
import css from "../assets/css.png";
import expressjs from "../assets/expressjs.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import mongodb from "../assets/mongodb.png";
import nodejs from "../assets/nodejs.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import vscode from "../assets/vscode.png";

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
                <h2 className="project-type">
                  <span>☆</span> Grocery Mart{" "}
                </h2>
                <Grocery />
              </div>
              <div className="projectDetails">
                <h2>Individual Project</h2>
                <div className="desc">
                  <span>Description</span>
                  <br />
                  GroceryMarket is an online food and grocery store. You will
                  find everything you are looking for with products and brands
                  in our catalogue. Right from fresh Fruits and Vegetables, Rice
                  and Dals, Spices and Seasonings to Packaged products,
                  Beverages, Personal care products, and Meat – we have it all.
                  It is an Individual project built by me.
                </div>

                <div className="techStacks">
                  <div className="tech-stacks">
                    <h3>Tech-Stacks & Tools used</h3>
                    <div>
                      <div className="languages">
                        <div>
                          <img src={css} alt="CSS" />
                        </div>
                        <div>
                          <p>CSS</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={javascript} alt="javascript" />
                        </div>
                        <div>
                          <p>JavaScript</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={vercel} alt="vercel" />
                        </div>
                        <div>
                          <p>Vercel</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={react} alt="react" />
                        </div>
                        <div>
                          <p>React.js</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={chakraui} alt="Chakra ui" />
                        </div>
                        <div>
                          <p>Chakra UI</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={expressjs} alt="express.js" />
                        </div>
                        <div>
                          <p>Express.js</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={nodejs} alt="node" />
                        </div>
                        <div>
                          <p>Node.js</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={cyclic_logo} alt="cyclic" />
                        </div>
                        <div>
                          <p>Cyclic</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={mongodb} alt="MongoDB" />
                        </div>
                        <div>
                          <p>Mongo DB</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={npm} alt="NPM" />
                        </div>
                        <div>
                          <p>NPM</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={vscode} alt="vs-code" />
                        </div>
                        <div>
                          <p>VS-Code</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={github} alt="github" />
                        </div>
                        <div>
                          <p>GitHub</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="btn">
                    <button>
                      <h3>
                        <a
                          href="https://github.com/lokesh-patidar/GroceryMarket"
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
                          href="https://web-taskit-kan3.vercel.app/"
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

            <div className="projectItem1">
              <div className="projectImage">
                <h2 className="project-type">
                  <span>☆</span> WebTaskit website
                </h2>
                <Webtaskit />
              </div>
              <div className="projectDetails">
                <h2>Collaborative Project</h2>
                <div className="desc">
                  <span>Description</span>
                  <br />
                  Here is the task tracking website in this website I worked in
                  a team of 5 members And I made a dynamic task management
                  functionality so that users can manage their tasks and can
                  plan accordingly, On our website calendar events are also
                  there with will help full for users to tack date and month
                  planning as well.
                </div>

                <div className="techStacks">
                  <div className="tech-stacks">
                    <h3>Tech-Stacks & Tools used</h3>
                    <div>
                      <div className="languages">
                        <div>
                          <img src={vercel} alt="vercel" />
                        </div>
                        <div>
                          <p>Vercel</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={javascript} alt="javascript" />
                        </div>
                        <div>
                          <p>JavaScript</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={react} alt="react" />
                        </div>
                        <div>
                          <p>React.js</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={chakraui} alt="Chakra ui" />
                        </div>
                        <div>
                          <p>Chakra UI</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={redux} alt="redux" />
                        </div>
                        <div>
                          <p>Redux</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={npm} alt="NPM" />
                        </div>
                        <div>
                          <p>NPM</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={vscode} alt="vs-code" />
                        </div>
                        <div>
                          <p>VS-Code</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={github} alt="github" />
                        </div>
                        <div>
                          <p>GitHub</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btn">
                    <button>
                      <h3>
                        <a
                          href="https://github.com/lokesh-patidar/WebTaskit"
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
                          href="https://web-taskit-ynzg.vercel.app/"
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

            <div className="projectItem">
              <div className="projectImage">
                <h2 className="project-type">
                  <span>☆</span> pharmeasy.in website{" "}
                </h2>
                <PharmaEasy />
              </div>
              <div className="projectDetails">
                <h2>Collaborative Project</h2>
                <div className="desc">
                  <span>Description</span>
                  <br />
                  PharmEasy is a consumer healthcare “super app” that provides
                  consumers with on-demand, home-delivered access to a wide
                  range of prescription, OTC pharmaceuticals, other consumer
                  healthcare products, comprehensive diagnostic test services,
                  and teleconsultations, serving their healthcare needs.
                </div>

                <div className="techStacks">
                  <div className="tech-stacks">
                    <h3>Tech-Stacks & Tools used</h3>
                    <div>
                      <div className="languages">
                        <div>
                          <img src={html} alt="html" />
                        </div>
                        <div>
                          <p>HTML</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={css} alt="CSS" />
                        </div>
                        <div>
                          <p>CSS</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={javascript} alt="javascript" />
                        </div>
                        <div>
                          <p>JavaScript</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={netlify} alt="netlify" />
                        </div>
                        <div>
                          <p>Netlify</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={react} alt="react" />
                        </div>
                        <div>
                          <p>React.js</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={chakraui} alt="Chakra ui" />
                        </div>
                        <div>
                          <p>Chakra UI</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={mongodb} alt="MongoDB" />
                        </div>
                        <div>
                          <p>Mongo DB</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={npm} alt="NPM" />
                        </div>
                        <div>
                          <p>NPM</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={vscode} alt="vs-code" />
                        </div>
                        <div>
                          <p>VS-Code</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={github} alt="github" />
                        </div>
                        <div>
                          <p>GitHub</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="btn">
                    <button>
                      <h3>
                        <a
                          href="https://github.com/lokesh-patidar/pharmeasy.in"
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
                          href="https://pharmeasy-in.vercel.app/"
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

            <div className="projectItem1">
              <div className="projectImage">
                <h2 className="project-type">
                  <span>☆</span> getharvest.com website
                </h2>
                <GetHarvest />
              </div>
              <div className="projectDetails">
                <h2>Collaborative Project</h2>
                <div className="desc">
                  <span>Description</span>
                  <br />
                  Harvest is a cloud-based time-tracking tool designed for
                  businesses of all sizes. Key features include time and expense
                  management, team management, project management, scheduling,
                  and invoicing. I worked on it with my team. I had assigned a
                  team of 5 members for this project to clone getharvest.com.
                </div>

                <div className="techStacks">
                  <div className="tech-stacks">
                    <h3>Tech-Stacks & Tools used</h3>
                    <div>
                      <div className="languages">
                        <div>
                          <img src={html} alt="html" />
                        </div>
                        <div>
                          <p>HTML</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={css} alt="CSS" />
                        </div>
                        <div>
                          <p>CSS</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={javascript} alt="javascript" />
                        </div>
                        <div>
                          <p>JavaScript</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={vercel} alt="vercel" />
                        </div>
                        <div>
                          <p>Vercel</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={github} alt="github" />
                        </div>
                        <div>
                          <p>GitHub</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={vscode} alt="vs-code" />
                        </div>
                        <div>
                          <p>VS-Code</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btn">
                    <button>
                      <h3>
                        <a
                          href="https://github.com/lokesh-patidar/getharvest.com"
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
                          href="https://getharvest-com.vercel.app/"
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

            <div className="projectItem">
              <div className="projectImage">
                <h2 className="project-type">
                  <span>☆</span> Figmatic Calculator App
                </h2>
                <Calculator />
              </div>
              <div className="projectDetails">
                <h2>Individual Project</h2>
                <div className="desc">
                  <span>Description</span>
                  <br />
                  This is a Figmatic Calculator App that I made with the help of MERN tech stacks, here user can add more pages to the table and the total amount or the of all the pages will be displayed in the top right section and the total amount of particular page in that particular row. Users can also delete the page and update the status in that page section. Here I also implemented the pagination or displayed 5 table data per page.
                </div>

                <div className="techStacks">
                  <div className="tech-stacks">
                    <h3>Tech-Stacks & Tools used</h3>
                    <div>
                      <div className="languages">
                        <div>
                          <img src={css} alt="CSS" />
                        </div>
                        <div>
                          <p>CSS</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={javascript} alt="javascript" />
                        </div>
                        <div>
                          <p>JavaScript</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={vercel} alt="vercel" />
                        </div>
                        <div>
                          <p>Vercel</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={react} alt="react" />
                        </div>
                        <div>
                          <p>React.js</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={chakraui} alt="Chakra ui" />
                        </div>
                        <div>
                          <p>Chakra UI</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={expressjs} alt="express.js" />
                        </div>
                        <div>
                          <p>Express.js</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={nodejs} alt="node" />
                        </div>
                        <div>
                          <p>Node.js</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={mongodb} alt="MongoDB" />
                        </div>
                        <div>
                          <p>Mongo DB</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={npm} alt="NPM" />
                        </div>
                        <div>
                          <p>NPM</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={vscode} alt="vs-code" />
                        </div>
                        <div>
                          <p>VS-Code</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={github} alt="github" />
                        </div>
                        <div>
                          <p>GitHub</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btn">
                    <button>
                      <h3>
                        <a
                          href="https://github.com/lokesh-patidar/Figmatic_LLP/tree/main/Assignment-1"
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
                          href="https://figmatic-llp-legz.vercel.app"
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

            <div className="projectItem1">
              <div className="projectImage">
                <h2 className="project-type">
                  <span>☆</span> Assessment-test Quiz-App
                </h2>
                <AssessmentTest />
              </div>
              <div className="projectDetails">
                <h2>Individual Project</h2>
                <div className="desc">
                  <span>Description</span>
                  <br />
                  IQ Test for kids from 7 to 16 years old, Here is the mini
                  Quiz-App that I have created with the help of HTML, CSS,
                  JavaScript, and React.js.
                </div>

                <div className="techStacks">
                  <div className="tech-stacks">
                    <h3>Tech-Stacks & Tools used</h3>
                    <div>
                      <div className="languages">
                        <div>
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_3V0WmaHi7hLENYgmyF3iKWD7BP4bn82grA&usqp=CAU"
                            alt="html"
                          />
                        </div>
                        <div>
                          <p>HTML</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={css} alt="CSS" />
                        </div>
                        <div>
                          <p>CSS</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={javascript} alt="javascript" />
                        </div>
                        <div>
                          <p>JavaScript</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={react} alt="react" />
                        </div>
                        <div>
                          <p>React.js</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={npm} alt="NPM" />
                        </div>
                        <div>
                          <p>NPM</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={vercel} alt="vercel" />
                        </div>
                        <div>
                          <p>Vercel</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={github} alt="github" />
                        </div>
                        <div>
                          <p>GitHub</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={vscode} alt="vs-code" />
                        </div>
                        <div>
                          <p>VS-Code</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btn">
                    <button>
                      <h3>
                        <a
                          href="https://github.com/lokesh-patidar/Assessment_test_quiz-App"
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
                          href="https://quiz-app-lokesh-patidar.vercel.app/"
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

            <div className="projectItem">
              <div className="projectImage">
                <h2 className="project-type">
                  <span>☆</span> beautybebo.com website
                </h2>
                <BeautyBebo />
              </div>
              <div className="projectDetails">
                <h2>Individual Project</h2>
                <div className="desc">
                  <span>Description</span>
                  <br />
                  Beauty Bebo is India's fastest-growing online retail store for
                  day-to-day and special occasion needs of Makeup, Skincare,
                  Hair care, Personal care, Mom and Baby care, Fragrance, and
                  Ayurveda products. This is the clone of the beautybebo.com
                  website (an e-commerce website) here I have implemented some
                  functionality and the best UI of the original website.
                </div>

                <div className="techStacks">
                  <div className="tech-stacks">
                    <h3>Tech-Stacks & Tools used</h3>
                    <div>
                      <div className="languages">
                        <div>
                          <img src={html} alt="html" />
                        </div>
                        <div>
                          <p>HTML</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={css} alt="CSS" />
                        </div>
                        <div>
                          <p>CSS</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={javascript} alt="javascript" />
                        </div>
                        <div>
                          <p>JavaScript</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={netlify} alt="netlify" />
                        </div>
                        <div>
                          <p>Netlify</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={github} alt="github" />
                        </div>
                        <div>
                          <p>GitHub</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={vscode} alt="vs-code" />
                        </div>
                        <div>
                          <p>VS-Code</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="btn">
                    <button>
                      <h3>
                        <a
                          href="https://github.com/lokesh-patidar/rightful-order-9279"
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
                          href="https://beautybebo-website-clone.netlify.app/"
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

            <div className="projectItem1">
              <div className="projectImage">
                <h2 className="project-type">
                  <span>☆</span> GitStar App
                </h2>
                <GitStar />
              </div>
              <div className="projectDetails">
                <h2>Individual Project</h2>
                <div className="desc">
                  <span>Description</span>
                  <br />
                  This is the react-based web app which lists the most starred
                  GitHub repositories. In this app functionalities implemented
                  are pagination, search, theme-toggling, and view-toggle as
                  well.
                </div>

                <div className="techStacks">
                  <div className="tech-stacks">
                    <h3>Tech-Stacks & Tools used</h3>
                    <div>
                      <div className="languages">
                        <div>
                          <img src={html} alt="html" />
                        </div>
                        <div>
                          <p>HTML</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={css} alt="CSS" />
                        </div>
                        <div>
                          <p>CSS</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={javascript} alt="javascript" />
                        </div>
                        <div>
                          <p>JavaScript</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={react} alt="react" />
                        </div>
                        <div>
                          <p>React.js</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={npm} alt="NPM" />
                        </div>
                        <div>
                          <p>NPM</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={vercel} alt="vercel" />
                        </div>
                        <div>
                          <p>Vercel</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={github} alt="github" />
                        </div>
                        <div>
                          <p>GitHub</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src={vscode} alt="vs-code" />
                        </div>
                        <div>
                          <p>VS-Code</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btn">
                    <button>
                      <h3>
                        <a
                          href="https://github.com/lokesh-patidar/GitStar"
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
                          href="https://git-star-six.vercel.app/"
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
          </div>
        </div>
      </div>
      <hr id="contactPageSection" />
    </div>
  );
};
