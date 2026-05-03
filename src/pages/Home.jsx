import React from 'react';
import { motion } from 'framer-motion'; // Animation library import ki
import "../css/Home.css";

const Home = () => {
  // Animations variants for cleaner code
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="home-wrapper">
      <section className="home-section" id="home">
        <div className="home-container">
          
          {/* Left Side: Content with Staggered Animation */}
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
              We Build Modern <span>Websites</span>, Apps & Digital Solutions
            </motion.h1>

            <motion.p variants={fadeInUp}>
              TechTornix helps startups and businesses grow with clean UI,
              scalable development, admin dashboards, and high-performing digital
              products.
            </motion.p>

            <motion.div variants={fadeInUp} className="home-buttons">
              <a href="#contact" className="primary-btn">Start a Project</a>
              <a href="#projects" className="secondary-btn">View Our Work</a>
            </motion.div>
          </motion.div>

          {/* Right Side: Visual Dashboard with Floating & Scale Animation */}
          <motion.div 
            className="home-right"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="dashboard-card">
              <div className="dash-top">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="dash-content">
                <div className="dash-sidebar">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>

                <div className="dash-main">
                  <div className="dash-title"></div>

                  <div className="dash-grid">
                    <div className="dash-box">
                      <h4>Active Projects</h4>
                      <h2>12</h2>
                    </div>
                    <div className="dash-box">
                      <h4>Client Leads</h4>
                      <h2>48</h2>
                    </div>
                  </div>

                  <div className="dash-chart">
                    {/* Chart bars with rising animation */}
                    {[35, 55, 75, 45, 85].map((height, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating box with continuous floating effect */}
            <motion.div 
              className="floating-box"
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              Clean Code • Fast Delivery
            </motion.div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Home;