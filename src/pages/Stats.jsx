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
    <section className="stats-section">
      <motion.div
        className="impact-panel"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="impact-left">
          <span>Our Impact</span>
          <h2>Delivering measurable results for businesses</h2>
        </div>

        <div className="impact-stats">
          {stats.map((item, index) => (
            <div className="impact-item" key={index}>
              <h3>{item.number}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Stats;