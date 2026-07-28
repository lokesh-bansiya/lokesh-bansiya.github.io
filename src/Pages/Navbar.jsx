import React, { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const links = ["About", "Skills", "Projects", "GitHub", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <span className="brand-mark">LP</span>
          <span className="brand-name">Lokesh Patidar</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

        <div className={`nav-links ${open ? "open" : ""}`}>
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            className="nav-cta"
            href="/download/Lokesh-Patidar-Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Résumé <FiArrowUpRight />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
