import React from "react";
import { motion } from "framer-motion";
import "../css/service1.css";

const services = [
  {
    title: "Business Websites",
    desc: "Modern, high-converting websites built for startups and businesses with strong UI/UX and performance.",
  },
  {
    title: "Web Applications",
    desc: "Custom dashboards, SaaS platforms, and scalable web apps using React & Node.",
  },
  {
    title: "Admin Panels",
    desc: "Powerful admin systems to manage users, data, content, and business workflows.",
  },
  {
    title: "UI/UX Design",
    desc: "Clean, modern, and user-focused designs that improve engagement and conversions.",
  },
];

const ServicesPage = () => {
  return (
    <section className="sp-section">

      {/* BG */}
      <div className="sp-grid"></div>
      <div className="sp-glow sp-g1"></div>
      <div className="sp-glow sp-g2"></div>

      <div className="sp-container">

        {/* HERO */}
        <motion.div
          className="sp-hero"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span>Our Services</span>
          <h1>Solutions Built for Modern Businesses</h1>
          <p>
            We design and develop high-performance digital products that help
            businesses grow faster and scale smarter.
          </p>
        </motion.div>

        {/* SERVICES */}
        <div className="sp-list">
          {services.map((item, index) => (
            <motion.div
              key={index}
              className="sp-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="sp-cta"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <h2>Have a Project in Mind?</h2>
          <p>Let’s build something powerful together.</p>
          <a href="#contact">Start Your Project</a>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesPage;