import React from "react";
import '../Styles/Contact.css';
import {
    FaLinkedinIn,
    FaGithub,
    FaMailBulk,
    FaMobileAlt,
    FaHome,
    FaWhatsapp
} from "react-icons/fa";


export const Contact = () => {
    return (
        <div className="ContactContainer nav-link contact" id="contactSection">
            <div>
                <h1>Contact Me</h1>
                <div>
                    <h3 id="contact-phone"><FaMobileAlt className="contactlogotop" />&nbsp;Contact No.&nbsp; › &nbsp;<span>9993977820</span></h3>
                    <h3>
                        <a href="mailto:bansiyalokesh29988@gmail.com" target="_blank" rel="noreferrer">
                            <FaMailBulk className="contactlogotop" />&nbsp;&nbsp;Email Id &nbsp; › &nbsp;<span>bansiyalokesh29988@gmail.com</span>
                        </a>
                    </h3>
                    <h3><FaHome className="contactlogotop" />&nbsp;&nbsp; Address&nbsp; › <span>Badagaon, Nalkheda (Madhya Pradesh)</span></h3>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/lokesh-patidar-aa45a0236/" target="_blank" rel="noreferrer" id="contact-linkedin"><FaLinkedinIn className="contactlogo" /></a>
                    <a href="https://github.com/lokesh-patidar" target="_blank" rel="noreferrer" id="contact-github"><FaGithub className="contactlogo" /></a>
                    <a href="mailto:bansiyalokesh29988@gmail.com" target="_blank" rel="noreferrer" id="contact-email"><FaMailBulk className="contactlogo" /></a>
                    <a href="https://wa.me/+919993977820" target="_blank" rel="noreferrer"><FaWhatsapp className="contactlogo" /></a>
                </div>
                <div>
                    <p className="thank-you">Thank you for visiting my portfolio!</p>
                </div>
            </div>
        </div>
    );
}