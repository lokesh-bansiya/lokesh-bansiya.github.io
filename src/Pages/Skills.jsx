import React from "react";
import '../Styles/Skills.css';
import cyclic_logo from "../assets/cyclic-logo.png";
import postman from "../assets/postman.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import npm from "../assets/npm.png";
import vercel from "../assets/vercel.png";
import netlify from "../assets/netlify.png";
import axios from "../assets/axios.png";
import chakraui from "../assets/chakraui.jpg"; 
import codesandbox from "../assets/codesandbox.png";
import css from "../assets/css.png";
import deployment from "../assets/deployment.png";
import expressjs from "../assets/expressjs.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import json from "../assets/json.png";
import mongodb from "../assets/mongodb.png";
import nodejs from "../assets/nodejs.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import restapi from "../assets/restapi.png";
import typescript from "../assets/typescript.png";
import vscode from "../assets/vscode.png";

export const Skills = () => {
  return (
    <div id="skills">
      <div className="skillContainer">
        <div><h1>Skills</h1></div>
        <div className="skillsBox">
          <div>
            <img src={redux} alt="redux" />
            <h3>Redux</h3>
          </div>
          <div>
            <img src={css} alt="css" />
            <h3>CSS</h3>
          </div>
          <div>
            <img src={react} alt="react" />
            <h3>React</h3>
          </div>
          <div>
            <img src={html} alt="HTML" />
            <h3>HTML</h3>
          </div>

          <div>
            <img src={javascript} alt="javascript" />
            <h3>JavaScript</h3>
          </div>
          <div>
            <img src={mongodb} alt="mongoDB" />
            <h3>Mongo DB</h3>
          </div>
          <div>
            <img src={nodejs} alt="node js" />
            <h3>Node.js</h3>
          </div>
          <div>
            <img src={expressjs} alt="express js" />
            <h3>Express</h3>
          </div>
          <div>
            <img src={axios} alt="Axios" />
            <h3>Axios</h3>
          </div>
          <div>
            <img src={chakraui} alt="chakra-ui" />
            <h3>Chakra-UI</h3>
          </div>
          <div>
            <img src={json} alt="json" />
            <h3>JSON Server</h3>
          </div>
          <div>
            <img src={typescript} alt="TypeScript" />
            <h3>TypeScript</h3>
          </div>
          <div>
            <img src={restapi} alt="rest api" />
            <h3>Rest API</h3>
          </div>
          <div>
            <img src={deployment} alt="deployment" />
            <h3>Deployment</h3>
          </div>
        </div>

        <div className="tools">
          <h4>Tools</h4>
          <div className="toolsBox">
            <div>
              <img src={netlify} alt="netlify" />
              <h3>Netlify</h3>
            </div>
            <div>
              <img src={npm} alt="npm" />
              <h3>NPM</h3>
            </div>

            <div>
              <img src={vercel} alt="vercel" />
              <h3>Vercel</h3>
            </div>

            <div>
              <img src={codesandbox} alt="codesandbox" />
              <h3>CodeSandbox</h3>
            </div>

            <div>
              <img src={github} alt="github" />
              <h3>GitHub</h3>
            </div>
            <div>
              <img src={vscode} alt="vs-code" />
              <h3>VS code</h3>
            </div>

            <div>
              <img src={git} alt="Git" />
              <h3>Git</h3>
            </div>
            <div>
              <img src={postman} alt="postman" />
              <h3>Postman</h3>
            </div>
            <div>
              <img color="black" src={cyclic_logo} alt="cyclic" />
              <h3>Cyclic</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

