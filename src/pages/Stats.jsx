import React from "react";
import { motion } from "framer-motion";
import "../css/Stats.css";

const stats = [
  { number: "20+", label: "Projects Completed" },
  { number: "95%", label: "Performance Score" },
  { number: "48%", label: "Business Growth" },
  { number: "100%", label: "Client Satisfaction" },
];

const Stats = () => {
  return (
    <section className="tt-stats-section">
      <div className="tt-stats-grid-bg"></div>

      <div className="tt-stats-container">
        <motion.div
          className="tt-stats-wrapper"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="tt-stats-left">
            <span>Our Impact</span>
            <h2>Results built with strategy, design, and clean code</h2>
          </div>

          <div className="tt-stats-line">
            {stats.map((item, index) => (
              <motion.div
                className="tt-stat-box"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <h3>{item.number}</h3>
                <p>{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;