import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="arch-footer">
      {/* Massive Background Watermark */}
      <div className="footer-watermark">TORNIX</div>

      <div className="footer-container">
        <div className="footer-main-wrapper">
          
          {/* Left Side: Brand & Statement */}
          <div className="footer-info-section">
            <h2 className="footer-logo">Tech<span>Tornix</span></h2>
            <p className="footer-mission">
              Transforming complex visions into high-performance digital realities through precision engineering.
            </p>
            <div className="footer-social-links">
              <a href="#" aria-label="GitHub"><FaGithub /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>

          {/* Right Side: The "Contact Glass-Card" */}
          <div className="footer-contact-card">
            <span className="card-label">Let's Project</span>
            <h3>Have an idea? <br/> Let’s build it.</h3>
            <a href="mailto:hello@techtornix.com" className="contact-btn">
              Start a Conversation <FiSend />
            </a>
          </div>

        </div>

        {/* Bottom Navigation & Meta */}
        <div className="footer-meta-area">
          <div className="meta-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#projects">Work</a>
            <a href="#about">About</a>
          </div>
          <div className="meta-copyright">
            <p>© 2026 TechTornix. Designed by <span>Muhammad Bahawal</span>.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;