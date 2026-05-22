import React, { useState, useEffect, useRef } from "react";
import { FiChevronDown, FiX, FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileActive, setMobileActive] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuClick = (menuKey, e) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === menuKey ? null : menuKey);
  };

  return (
    <header 
      ref={navRef} 
      className={`tt-nav-fixed-wrap ${scrolled ? "tt-scrolled-state" : ""}`}
    >
      <nav className="tt-nav-inner-container">
        
        {/* Brand/Logo Area */}
        <div className="tt-brand-area">
          <a href="#home" className="tt-main-logo" onClick={() => { setActiveDropdown(null); setMobileActive(false); }}>
            <img src="public/logo.png" alt="TechTornix Logo" className="tt-logo-img" />
            <span className="tt-logo-brand-name">Tech<span>Tornix</span></span>
          </a>
        </div>

        {/* Navigation Links List */}
        <ul className={`tt-nav-links-list ${mobileActive ? "tt-mobile-visible" : ""}`}>
          <div className="tt-mobile-top-bar">
            <div className="tt-logo-square">TT</div>
            <button className="tt-close-drawer" onClick={() => setMobileActive(false)}><FiX /></button>
          </div>

          {/* Capabilities Mega Menu */}
          <li className={`tt-has-mega-menu ${activeDropdown === "capabilities" ? "tt-force-open" : ""}`}>
            <a 
              href="#services" 
              className="tt-nav-item-link"
              onClick={(e) => handleMenuClick("capabilities", e)}
            >
              What We Do <FiChevronDown className="tt-drop-icon" />
            </a>
            <div className="tt-mega-box tt-capabilities-box">
              <div className="tt-mega-flex-wrapper">
                <div className="tt-sidebar-heading d-desktop">
                  <h2 className="tt-section-title">Capabilities</h2>
                </div>
                <div className="tt-grid-main-content">
                  <div className="tt-grid-col">
                    <h4 className="tt-col-label">Digital Transformation</h4>
                    <ul className="tt-sub-item-list">
                      <li><a href="#" onClick={() => setMobileActive(false)}>Web development</a></li>
                      <li><a href="#" onClick={() => setMobileActive(false)}>App Development</a></li>
                      <li><a href="#" onClick={() => setMobileActive(false)}>Custom Software</a></li>
                      <li><a href="#" onClick={() => setMobileActive(false)}>UX/UI Design</a></li>
                    </ul>
                    <h4 className="tt-col-label">Business Applications</h4>
                    <ul className="tt-sub-item-list">
                      <li><a href="#" onClick={() => setMobileActive(false)}>Dynamics 365 ERP</a></li>
                      <li><a href="#" onClick={() => setMobileActive(false)}>Salesforce</a></li>
                    </ul>
                  </div>
                  <div className="tt-grid-col">
                    <h4 className="tt-col-label">Emerging Tech</h4>
                    <ul className="tt-sub-item-list">
                      <li><a href="#" onClick={() => setMobileActive(false)}>Gen AI & Data Analytics</a></li>
                      <li><a href="#" onClick={() => setMobileActive(false)}>Blockchain & Crypto</a></li>
                      <li><a href="#" onClick={() => setMobileActive(false)}>Metaverse & AR/VR</a></li>
                    </ul>
                    <a href="#" className="tt-bold-direct-link" onClick={() => setMobileActive(false)}>Staff Augmentation</a>
                    <a href="#" className="tt-bold-direct-link" onClick={() => setMobileActive(false)}>Quality Assurance</a>
                    <a href="#" className="tt-bold-direct-link" onClick={() => setMobileActive(false)}>DevOps</a>
                  </div>
                  <div className="tt-grid-col">
                    <h4 className="tt-col-label">Cloud & Infrastructure</h4>
                    <ul className="tt-sub-item-list">
                      <li><a href="#" onClick={() => setMobileActive(false)}>Cloud Migration</a></li>
                      <li><a href="#" onClick={() => setMobileActive(false)}>Cybersecurity</a></li>
                      <li><a href="#" onClick={() => setMobileActive(false)}>SaaS Solutions</a></li>
                    </ul>
                    <h4 className="tt-col-label">Gaming & E-comm</h4>
                    <ul className="tt-sub-item-list">
                      <li><a href="#" onClick={() => setMobileActive(false)}>Game Art & Web3</a></li>
                      <li><a href="#" onClick={() => setMobileActive(false)}>E-commerce Automation</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Industries Mega Menu */}
          <li className={`tt-has-mega-menu ${activeDropdown === "industries" ? "tt-force-open" : ""}`}>
            <a 
              href="#industries" 
              className="tt-nav-item-link"
              onClick={(e) => handleMenuClick("industries", e)}
            >
              Who We Help <FiChevronDown className="tt-drop-icon" />
            </a>
            <div className="tt-mega-box tt-industries-box">
              <div className="tt-mega-flex-wrapper">
                <div className="tt-sidebar-heading d-desktop">
                  <h2 className="tt-section-title">Industries</h2>
                </div>
                <div className="tt-industry-grid-wrap">
                  <div className="tt-grid-col">
                    <ul className="tt-sub-item-list">
                      <li><a href="#" onClick={() => setMobileActive(false)}>Startups & Scaleups</a></li>
                      <li><a href="#" onClick={() => setMobileActive(false)}>Fintech & Banking</a></li>
                      <li><a href="#" onClick={() => setMobileActive(false)}>Healthcare & MedTech</a></li>
                    </ul>
                  </div>
                  <div className="tt-grid-col">
                    <ul className="tt-sub-item-list">
                      <li><a href="#" onClick={() => setMobileActive(false)}>Education & eLearning</a></li>
                      <li><a href="#" onClick={() => setMobileActive(false)}>Logistics & Supply Chain</a></li>
                      <li><a href="#" onClick={() => setMobileActive(false)}>Real Estate & PropTech</a></li>
                    </ul>
                  </div>
                  <div className="tt-grid-col">
                    <ul className="tt-sub-item-list">
                      <li><a href="#" onClick={() => setMobileActive(false)}>Public Sector & Govt</a></li>
                      <li><a href="#" onClick={() => setMobileActive(false)}>Travel & Hospitality</a></li>
                      <li><a href="#" onClick={() => setMobileActive(false)}>Manufacturing & IoT</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* About Menu */}
          <li className={`tt-has-mega-menu ${activeDropdown === "about" ? "tt-force-open" : ""}`}>
            <a 
              href="#about" 
              className="tt-nav-item-link"
              onClick={(e) => handleMenuClick("about", e)}
            >
              Who We Are <FiChevronDown className="tt-drop-icon" />
            </a>
            <div className="tt-mega-box tt-about-box">
              <div className="tt-mega-flex-wrapper">
                <div className="tt-grid-main-content">
                  <div className="tt-grid-col">
                    <ul className="tt-sub-item-list">
                      <li><a href="#about-company" onClick={() => setMobileActive(false)}>About</a></li>
                      <li><a href="#leadership" onClick={() => setMobileActive(false)}>Leadership</a></li>
                      <li><a href="#geographies" onClick={() => setMobileActive(false)}>Geographies</a></li>
                      <li><a href="#code-of-conduct" onClick={() => setMobileActive(false)}>Code of Conduct & Values</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <a href="#join-us" className="tt-nav-item-link" onClick={() => { setActiveDropdown(null); setMobileActive(false); }}>Join TechTornix</a>
          </li>

          <div className="tt-mobile-bottom-actions">
            <a href="#careers" className="tt-btn-secondary" onClick={() => setMobileActive(false)}>Explore Careers</a>
            <a href="#contact" className="tt-btn-primary" onClick={() => setMobileActive(false)}>Let's Talk Business</a>
          </div>
        </ul>

        {/* Right Actions Header Button */}
        <div className="tt-nav-right-actions">
          <Link to="/contact" className="tt-btn-main-cta d-desktop">Let's Talk</Link>
          <button className="tt-hamburger-trigger" onClick={() => setMobileActive(true)}>
            <FiMenu />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;