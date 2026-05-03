import React, { useState, useEffect } from "react";
import "../css/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detect karna taake navbar ka size aur glass effect change ho sake
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`nav-wrapper ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav-container">
        
        {/* LOGO SECTION */}
        <div className="logo" onClick={() => window.scrollTo(0, 0)}>
          <div className="logo-box">T</div>
          <span className="logo-text">
            <span className="text-accent">Tech</span>Tornix
          </span>
        </div>

        {/* NAVIGATION LINKS */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li className="mobile-only">
             <a href="#contact" className="btn-primary" onClick={() => setMenuOpen(false)}>Get Started</a>
          </li>
        </ul>

        {/* DESKTOP ACTION BUTTON */}
        <div className="desktop-btn">
          <a href="#contact" className="btn-primary">
            <span>Start a Project</span>
          </a>
        </div>

        {/* HAMBURGER MENU (For Mobile) */}
        <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;