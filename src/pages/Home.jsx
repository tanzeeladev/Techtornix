import React from "react";
import { motion } from "framer-motion";
import "../css/Home.css";

const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.18 },
    },
  };

  return (
    <section className="home-section" id="home">
      <div className="hero-grid-bg"></div>
      <div className="hero-glow glow-one"></div>
      <div className="hero-glow glow-two"></div>

      <div className="home-container">
        <motion.div
          className="home-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="home-badge">
            Software House for Modern Businesses
          </motion.div>

          <motion.h1 variants={fadeInUp}>
            We Build Digital Products That <span>Grow Businesses</span>
          </motion.h1>

          <motion.p variants={fadeInUp}>
            TechTornix designs and develops modern websites, web apps, admin
            dashboards, and scalable digital solutions for startups and growing
            businesses.
          </motion.p>

          <motion.div variants={fadeInUp} className="home-buttons">
            <a href="#contact" className="primary-btn">Start a Project</a>
            <a href="#services" className="secondary-btn">Explore Services</a>
          </motion.div>

          <motion.div variants={fadeInUp} className="hero-trust">
            <span>Clean Code</span>
            <span>Fast Delivery</span>
            <span>Modern UI</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="home-right"
          initial={{ opacity: 0, scale: 0.9, x: 35 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
        >
          <div className="ai-core-wrapper">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="orbit orbit-three"></div>

            <motion.div
              className="core-card top-card"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span>Web Apps</span>
              <strong>React</strong>
            </motion.div>

            <motion.div
              className="core-card right-card"
              animate={{ x: [0, 12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity }}
            >
              <span>APIs</span>
              <strong>Node</strong>
            </motion.div>

            <motion.div
              className="core-card bottom-card"
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <span>Database</span>
              <strong>MongoDB</strong>
            </motion.div>

            <motion.div
              className="core-card left-card"
              animate={{ x: [0, -12, 0] }}
              transition={{ duration: 4.8, repeat: Infinity }}
            >
              <span>UI/UX</span>
              <strong>Design</strong>
            </motion.div>

            <div className="ai-core">
              <div className="core-ring"></div>
              <div className="core-inner">
                <span>TT</span>
              </div>
            </div>

            <div className="tech-chip chip-one">Scalable</div>
            <div className="tech-chip chip-two">Secure</div>
            <div className="tech-chip chip-three">Modern</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;