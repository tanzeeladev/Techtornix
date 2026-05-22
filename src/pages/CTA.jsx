import React from "react";
import { motion } from "framer-motion";
import "../css/cta.css";

const FinalCTA = () => {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-grid-bg"></div>
      <div className="cta-glow glow-one"></div>
      <div className="cta-glow glow-two"></div>

      <div className="cta-container">
        <motion.div
          className="cta-box"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            Let’s Build Something <span>Amazing Together</span>
          </h2>

          <p>
            Have an idea or project in mind? We’ll help you turn it into a
            modern, fast, and scalable digital product.
          </p>

          <motion.a
            href="#"
            className="cta-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;