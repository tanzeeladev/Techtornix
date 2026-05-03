import React from "react";
import { motion } from "framer-motion";
import "../css/Process.css";

const steps = [
  {
    step: "01",
    title: "Understand Your Idea",
    desc: "We discuss your business goals, features, audience, and project requirements.",
  },
  {
    step: "02",
    title: "Design the Experience",
    desc: "We create a clean, modern layout focused on user experience and conversions.",
  },
  {
    step: "03",
    title: "Build with Clean Code",
    desc: "We develop responsive, fast, and scalable solutions using modern technologies.",
  },
  {
    step: "04",
    title: "Launch & Support",
    desc: "We deploy your project and provide support to keep everything running smoothly.",
  },
];

const Process = () => {
  return (
    <section className="process-section" id="process">
      <div className="process-container">
        <motion.div
          className="process-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>Our Process</span>
          <h2>From Idea to Launch — A Simple Workflow</h2>
          <p>
            We follow a clear process so every project stays organized,
            transparent, and result-focused.
          </p>
        </motion.div>

        <div className="process-timeline">
          {steps.map((item, index) => (
            <motion.div
              className="process-step"
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
            >
              <div className="process-number">{item.step}</div>
              <div className="process-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;