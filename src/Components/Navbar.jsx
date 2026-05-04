import React, { useState, useEffect } from "react";
import "../css/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`nav-wrapper ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav-container">
        <div className="nav-glow"></div>

        <div className="logo" onClick={() => window.scrollTo(0, 0)}>
          <div className="logo-box">
            <span>TT</span>
          </div>

          <span className="logo-text">
            Tech<span>Tornix</span>
          </span>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>

          <li className="mobile-only">
            <a href="#contact" className="btn-primary" onClick={() => setMenuOpen(false)}>
              Start Project
            </a>
          </li>
        </ul>

        <div className="desktop-btn">
          <a href="#contact" className="btn-primary">Start Project</a>
        </div>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;