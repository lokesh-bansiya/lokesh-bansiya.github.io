import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export const Contact = () => (
  <footer id="contact" className="contact-section">
    <div className="section-shell">
      <span className="section-index">05 / Contact</span>
      <div className="contact-grid">
        <div>
          <h2>
            Have a project in mind?
            <br />
            <em>Let’s build it well.</em>
          </h2>
        </div>
        <div className="contact-copy">
          <p>
            I’m open to full-stack opportunities and collaborations where
            thoughtful engineering can make a meaningful difference.
          </p>
          <a className="email-link" href="mailto:bansiyalokesh29988@gmail.com">
            <FiMail /> bansiyalokesh29988@gmail.com <FiArrowUpRight />
          </a>
        </div>
      </div>
      <div className="footer-row">
        <span>© {new Date().getFullYear()} Lokesh Patidar</span>
        <div>
          <a
            href="https://github.com/lokesh-bansiya"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/lokesh-bansiya/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin /> LinkedIn
          </a>
        </div>
        <a href="#home">Back to top ↑</a>
      </div>
    </div>
  </footer>
);
