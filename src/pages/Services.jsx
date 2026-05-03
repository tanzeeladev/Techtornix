import React from "react";
import { motion } from "framer-motion";
import "../css/Services.css";

const solutions = [
  {
    number: "01",
    title: "Custom Business Websites",
    desc: "Modern, responsive websites built to represent your brand and convert visitors into clients.",
  },
  {
    number: "02",
    title: "Web Apps & Dashboards",
    desc: "Scalable React-based web apps, dashboards, and digital systems for growing businesses.",
  },
  {
    number: "03",
    title: "UI/UX Redesign",
    desc: "We improve outdated layouts into clean, user-friendly, and conversion-focused experiences.",
  },
  {
    number: "04",
    title: "Admin Panels & CMS",
    desc: "Powerful admin panels to manage content, users, data, inquiries, and business operations.",
  },
];

const Services = () => {
  return (
    <section className="solutions-section" id="services">
      <div className="solutions-container">

        {/* TOP SECTION */}
        <div className="solutions-top">

          {/* LEFT SIDE (CARDS / PREVIEW) */}
          <motion.div
            className="solutions-preview"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="preview-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="preview-body">
              <motion.div className="preview-card large" whileHover={{ y: -6 }}>
                <p>Business Growth</p>
                <h3>+48%</h3>
              </motion.div>

              <motion.div className="preview-card" whileHover={{ y: -6 }}>
                <p>Projects</p>
                <h3>20+</h3>
              </motion.div>

              <motion.div className="preview-card" whileHover={{ y: -6 }}>
                <p>Performance</p>
                <h3>95%</h3>
              </motion.div>
            </div>

            <motion.div
              className="preview-line"
              initial={{ width: 0 }}
              whileInView={{ width: "72%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          {/* RIGHT SIDE (TEXT) */}
          <motion.div
            className="solutions-left"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">What We Build</span>

            <h2>Smart Digital Solutions for Modern Businesses</h2>

            <p>
              TechTornix helps businesses turn ideas into fast, clean, and
              scalable digital products with modern UI and reliable development.
            </p>
          </motion.div>

        </div>

        {/* LIST SECTION */}
        <div className="solutions-list">
          {solutions.map((item, index) => (
            <motion.a
              href="#contact"
              className="solution-row"
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ x: 8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="solution-number">{item.number}</span>

              <div className="solution-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>

              <span className="solution-arrow">→</span>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;