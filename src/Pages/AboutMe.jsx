import React from "react";
import { Experience } from "../constants/index.jsx";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";

export const AboutMe = () => (
  <section id="about" className="section section-muted">
    <div className="section-shell">
      <div className="section-heading split-heading">
        <div>
          <span className="section-index">01 / About</span>
          <h2>
            Engineering with
            <br />
            purpose and clarity.
          </h2>
        </div>
        <div className="about-lead">
          <p>
            I turn complex requirements into dependable, intuitive products. My
            work spans frontend architecture, backend APIs, databases,
            authentication, cloud deployment, and the details that make a
            product genuinely pleasant to use.
          </p>
          <p>
            I’ve helped build tax automation, financial workflows, admin
            platforms, and marketplaces—always with an eye on performance,
            maintainability, and measurable business value.
          </p>
          <a
            className="text-link"
            href="/download/Lokesh-Patidar-Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View full résumé <FiArrowUpRight />
          </a>
        </div>
      </div>

      <div className="proof-grid">
        <div>
          <strong>80%</strong>
          <span>less manual processing through workflow automation</span>
        </div>
        <div>
          <strong>10+</strong>
          <span>products and client projects delivered</span>
        </div>
        <div>
          <strong>1,200+</strong>
          <span>hours of intensive development training</span>
        </div>
      </div>

      <div className="experience-wrap">
        <div className="experience-label">Selected experience</div>
        <div className="timeline">
          {Experience.map((item) => (
            <article className="timeline-item" key={item.id}>
              <div className="timeline-meta">
                <span>{item.timePeriod}</span>
                <span>{item.company}</span>
              </div>
              <div>
                <h3>{item.heading}</h3>
                <ul>
                  {item.description.slice(0, 3).map((line) => (
                    <li key={line}>
                      <FiCheck /> <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);
