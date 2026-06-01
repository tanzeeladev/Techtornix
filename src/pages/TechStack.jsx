import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaFigma } from "react-icons/fa";
import { SiFirebase, SiExpress } from "react-icons/si";
import { MdApi, MdOutlineDevices } from "react-icons/md";
import "../css/Techstack.css";

const techs = [
  { name: "React.js", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <FaDatabase /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "REST APIs", icon: <MdApi /> },
  { name: "UI/UX", icon: <FaFigma /> },
  { name: "Responsive Design", icon: <MdOutlineDevices /> },
];

const TechStack = () => {
  return (
    <section className="tech-section" id="tech">
      <div className="tech-grid-bg"></div>
      <div className="tech-glow tech-glow-one"></div>
      <div className="tech-glow tech-glow-two"></div>

      <div className="tech-container">
        <motion.div
          className="tech-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>Tech Stack</span>
          <h2>Technologies We Use to Build Reliable Products</h2>
          <p>
            We use modern tools and technologies to create fast, scalable, and
            professional digital solutions.
          </p>
        </motion.div>

        <div className="tech-grid">
          {techs.map((tech, index) => (
            <motion.div
              className="tech-pill"
              key={index}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <span className="tech-icon">{tech.icon}</span>
              <span>{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;