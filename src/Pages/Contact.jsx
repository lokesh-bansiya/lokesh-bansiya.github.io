import React from "react";
import './Contact.css';
import {
    FaLinkedinIn,
    FaGithub,
    FaMailBulk,
    FaMobileAlt,
    FaHome,
} from "react-icons/fa";


export const Contact = () => {
    return (
        <div className="ContactContainer" id="contactSection">
            <div>
                <h1>Contact Me</h1>
                <div>
                   <h3><FaMobileAlt className="contactlogotop"/>&nbsp;Contact No.&nbsp; › &nbsp;<span>9993977820</span></h3>
                   <h3><FaMailBulk className="contactlogotop"/>&nbsp;&nbsp;Email Id &nbsp; › &nbsp;<span>bansiyalokesh29988@gmail.com</span></h3>
                   <h3><FaHome className="contactlogotop"/>&nbsp;&nbsp; Address&nbsp; › <span>Badagaon, Nalkheda (Madhya Pradesh)</span></h3>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/lokesh-patidar-aa45a0236/" target="_blank"><FaLinkedinIn className="contactlogo"/></a>
                    <a href="https://github.com/lokesh-patidar" target="_blank"><FaGithub className="contactlogo"/></a>
                    <a href="mailto:bansiyalokesh29988@gmail.com"><FaMailBulk className="contactlogo"/></a>
                </div>
            </div>
        </div>
    );
}