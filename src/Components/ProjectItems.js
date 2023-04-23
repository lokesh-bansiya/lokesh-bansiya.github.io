import { Grocery } from "./GroceryCarousel";
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
import { Webtaskit } from "./Webtaskit";
import { PharmaEasy } from "./PharmaEasy";
import { GetHarvest } from "./GetHarvest";
import { Calculator } from "./Calculator";
import { AssessmentTest } from "./AssessmentTest";
import { BeautyBebo } from "./BeautyBebo";
import { GitStar } from "./GitStar";


export const ProjectItems = [
    {
        "id": 1,
        "title": "Grocery Mart",
        "carousel": <Grocery />,
        "type": "Individual Project",
        "desc": "GroceryMarket is an online food and grocery store. You will find everything you are looking for with products and brands in our catalogue. Right from fresh Fruits and Vegetables, Rice and Dals, Spices and Seasonings to Packaged products, Beverages, Personal care products, and Meat – we have it all. It is an Individual project built by me.",
        "teck_stacks": [
            {
                "img": css,
                "name": "CSS"
            },
            {
                "img": javascript,
                "name": "JavaScript"
            },
            {
                "img": vercel,
                "name": "Vercel"
            },
            {
                "img": react,
                "name": "React.js"
            },
            {
                "img": chakraui,
                "name": "Chakra UI"
            },
            {
                "img": expressjs,
                "name": "Express.js"
            },
            {
                "img": nodejs,
                "name": "Node.js"
            },
            {
                "img": cyclic_logo,
                "name": "Cyclic"
            },
            {
                "img": mongodb,
                "name": "Mongo DB"
            },
            {
                "img": npm,
                "name": "NPM"
            },
            {
                "img": vscode,
                "name": "VS-Code"
            },
            {
                "img": github,
                "name": "GitHub"
            },
        ],
        "githubRepo": "https://github.com/lokesh-patidar/GroceryMarket",
        "deployedLink": "https://web-taskit-kan3.vercel.app/",
    },
    {
        "id": 2,
        "title": "WebTaskit website",
        "carousel": <Webtaskit />,
        "type": "Collaborative Project",
        "desc": " Here is the task tracking website in this website I worked in a team of 5 members And I made a dynamic task management functionality so that users can manage their tasks and can plan accordingly, On our website calendar events are also there with will help full for users to tack date and month planning as well.",
        "teck_stacks": [
            {
                "img": css,
                "name": "CSS"
            },
            {
                "img": javascript,
                "name": "JavaScript"
            },
            {
                "img": vercel,
                "name": "Vercel"
            },
            {
                "img": react,
                "name": "React.js"
            },
            {
                "img": chakraui,
                "name": "Chakra UI"
            },
            {
                "img": npm,
                "name": "NPM"
            },
            {
                "img": vscode,
                "name": "VS-Code"
            },
            {
                "img": github,
                "name": "GitHub"
            },
            {
                "img": redux,
                "name": "Redux"
            },
        ],
        "githubRepo": "https://github.com/lokesh-patidar/WebTaskit",
        "deployedLink": "https://web-taskit-ynzg.vercel.app/",
    },
    {
        "id": 3,
        "title": "pharmeasy.in website",
        "carousel": <PharmaEasy />,
        "type": "Collaborative Project",
        "desc": "PharmEasy is a consumer healthcare “super app” that provides consumers with on-demand, home-delivered access to a wide range of prescription, OTC pharmaceuticals, other consumer healthcare products, comprehensive diagnostic test services, and teleconsultations, serving their healthcare needs.",
        "teck_stacks": [
            {
                "img": css,
                "name": "CSS"
            },
            {
                "img": javascript,
                "name": "JavaScript"
            },
            {
                "img": vercel,
                "name": "Vercel"
            },
            {
                "img": react,
                "name": "React.js"
            },
            {
                "img": chakraui,
                "name": "Chakra UI"
            },
            {
                "img": expressjs,
                "name": "Express.js"
            },
            {
                "img": nodejs,
                "name": "Node.js"
            },
            {
                "img": mongodb,
                "name": "Mongo DB"
            },
            {
                "img": npm,
                "name": "NPM"
            },
            {
                "img": vscode,
                "name": "VS-Code"
            },
            {
                "img": github,
                "name": "GitHub"
            },
        ],
        "githubRepo": "https://github.com/lokesh-patidar/pharmeasy.in",
        "deployedLink": "https://pharmeasy-in.vercel.app/",
    },
    {
        "id": 4,
        "title": "getharvest.com",
        "carousel": <GetHarvest />,
        "type": "Collaborative Project",
        "desc": "Harvest is a cloud-based time-tracking tool designed for businesses of all sizes. Key features include time and expense management, team management, project management, scheduling, and invoicing. I worked on it with my team. I had assigned a team of 5 members for this project to clone getharvest.com.",
        "teck_stacks": [
            {
                "img": html,
                "name": "HTML"
            },
            {
                "img": css,
                "name": "CSS"
            },
            {
                "img": javascript,
                "name": "JavaScript"
            },
            {
                "img": vercel,
                "name": "Vercel"
            },
            {
                "img": vscode,
                "name": "VS-Code"
            },
            {
                "img": github,
                "name": "GitHub"
            },
        ],
        "githubRepo": "https://github.com/lokesh-patidar/getharvest.com",
        "deployedLink": "https://getharvest-com.vercel.app/",
    },
    {
        "id": 5,
        "title": "Figmatic Calculator App",
        "carousel": <Calculator />,
        "type": "Individual Project",
        "desc": "This is a Figmatic Calculator App that I made with the help of MERN tech stacks, here user can add more pages to the table and the total amount or the of all the pages will be displayed in the top right section and the total amount of particular page in that particular row. Users can also delete the page and update the status in that page section. Here I also implemented the pagination or displayed 5 table data per page.",
        "teck_stacks": [
            {
                "img": css,
                "name": "CSS"
            },
            {
                "img": javascript,
                "name": "JavaScript"
            },
            {
                "img": vercel,
                "name": "Vercel"
            },
            {
                "img": react,
                "name": "React.js"
            },
            {
                "img": chakraui,
                "name": "Chakra UI"
            },
            {
                "img": expressjs,
                "name": "Express.js"
            },
            {
                "img": nodejs,
                "name": "Node.js"
            },
            {
                "img": mongodb,
                "name": "Mongo DB"
            },
            {
                "img": npm,
                "name": "NPM"
            },
            {
                "img": vscode,
                "name": "VS-Code"
            },
            {
                "img": github,
                "name": "GitHub"
            },
        ],
        "githubRepo": "https://github.com/lokesh-patidar/Figmatic_LLP/tree/main/Assignment-1",
        "deployedLink": "https://figmatic-llp-legz.vercel.app",
    },
    {
        "id": 6,
        "title": "Assessment-test Quiz-App",
        "carousel": <AssessmentTest />,
        "type": "Individual Project",
        "desc": "IQ Test for kids from 7 to 16 years old, Here is the mini Quiz-App that I have created with the help of HTML, CSS, JavaScript, and React.js.",
        "teck_stacks": [
            {
                "img": css,
                "name": "CSS"
            },
            {
                "img": javascript,
                "name": "JavaScript"
            },
            {
                "img": vercel,
                "name": "Vercel"
            },
            {
                "img": react,
                "name": "React.js"
            },
            {
                "img": npm,
                "name": "NPM"
            },
            {
                "img": vscode,
                "name": "VS-Code"
            },
            {
                "img": github,
                "name": "GitHub"
            },
        ],
        "githubRepo": "https://github.com/lokesh-patidar/Assessment_test_quiz-App",
        "deployedLink": "https://quiz-app-lokesh-patidar.vercel.app/",
    },
    {
        "id": 7,
        "title": "beautybebo.com website",
        "carousel": <BeautyBebo />,
        "type": "Individual Project",
        "desc": "Beauty Bebo is India's fastest-growing online retail store for day-to-day and special occasion needs of Makeup, Skincare, Hair care, Personal care, Mom and Baby care, Fragrance, and Ayurveda products. This is the clone of the beautybebo.com website (an e-commerce website) here I have implemented some functionality and the best UI of the original website.", "teck_stacks": [
            {
                "img": html,
                "name": "HTML"
            },
            {
                "img": css,
                "name": "CSS"
            },
            {
                "img": javascript,
                "name": "JavaScript"
            },
            {
                "img": netlify,
                "name": "Netlify"
            },
            {
                "img": react,
                "name": "React.js"
            },
            {
                "img": vscode,
                "name": "VS-Code"
            },
            {
                "img": github,
                "name": "GitHub"
            },
        ],
        "githubRepo": "https://github.com/lokesh-patidar/beautybebo.com",
        "deployedLink": "https://beautybebo-website-clone.netlify.app/",
    },
    {
        "id": 8,
        "title": "GitStar App",
        "carousel": <GitStar />,
        "type": "Individual Project",
        "desc": "This is the react-based web app which lists the most starred GitHub repositories. In this app functionalities implemented are pagination, search, theme-toggling, and view-toggle as well.",
        "teck_stacks": [
            {
                "img": html,
                "name": "HTML"
            },
            {
                "img": css,
                "name": "CSS"
            },
            {
                "img": javascript,
                "name": "JavaScript"
            },
            {
                "img": vercel,
                "name": "Vercel"
            },
            {
                "img": react,
                "name": "React.js"
            },
            {
                "img": chakraui,
                "name": "Chakra UI"
            },
            {
                "img": npm,
                "name": "NPM"
            },
            {
                "img": vscode,
                "name": "VS-Code"
            },
            {
                "img": github,
                "name": "GitHub"
            },
        ],
        "githubRepo": "https://github.com/lokesh-patidar/GitStar",
        "deployedLink": "https://git-star-six.vercel.app/",
    }
];