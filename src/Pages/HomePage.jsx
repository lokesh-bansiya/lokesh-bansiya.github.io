import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiCheckCircle,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

const HomePage = () => (
  <section id="home" className="hero section-shell">
    <div className="hero-copy">
      <div className="eyebrow">
        <span /> Open to full-stack & frontend opportunities
      </div>
      <h1>
        I turn complex ideas into
        <em> products people love.</em>
      </h1>
      <p className="hero-intro">
        Full-stack engineer with 4+ years of experience building scalable SaaS
        products, workflow automation, and high-performance web applications.
      </p>
      <div className="hero-actions">
        <a className="button button-primary" href="#projects">
          Explore my work <FiArrowDownRight />
        </a>
        <a
          className="button button-secondary"
          href="mailto:bansiyalokesh29988@gmail.com"
        >
          Let’s talk <FiArrowUpRight />
        </a>
      </div>
      <div className="hero-proof" aria-label="Career highlights">
        <div>
          <strong>4+</strong>
          <span>Years of experience</span>
        </div>
        <div>
          <strong>10+</strong>
          <span>Products delivered</span>
        </div>
        <div>
          <strong>80%</strong>
          <span>Manual work reduced</span>
        </div>
      </div>
      <div className="social-row">
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
    </div>

    <div className="hero-visual">
      <div className="visual-orbit orbit-one" />
      <div className="visual-orbit orbit-two" />
      <div className="portrait-frame">
        <div className="portrait-topline">
          <span>Full-stack engineer</span>
          <span>India · Remote</span>
        </div>
        <img src="/Image/lokesh.jpg" alt="Lokesh Patidar" />
        <div className="portrait-note">
          <FiCheckCircle />
          <div>
            <span>Currently building</span>
            SaaS & financial platforms
          </div>
        </div>
      </div>
      <div className="experience-badge">
        <strong>4+</strong>
        <span>
          years building
          <br />
          for the web
        </span>
      </div>
    </div>
  </section>
);

export default HomePage;
