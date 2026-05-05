import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Rocket,
  Layout,
  Smartphone,
  BarChart3,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";
import "../css/Choose.css";

const features = [
  {
    icon: <Code2 />,
    title: "Clean Architecture",
    desc: "Scalable code structure built for long-term business growth.",
  },
  {
    icon: <Rocket />,
    title: "Fast Execution",
    desc: "Quick delivery with quality-focused development workflow.",
  },
  {
    icon: <Layout />,
    title: "Modern Interface",
    desc: "Clean UI/UX designed to improve engagement and conversions.",
  },
  {
    icon: <Smartphone />,
    title: "Responsive Systems",
    desc: "Flawless experience across mobile, tablet, and desktop.",
  },
  {
    icon: <BarChart3 />,
    title: "Growth Focused",
    desc: "Solutions built around business goals, performance, and results.",
  },
  {
    icon: <HeartHandshake />,
    title: "Reliable Support",
    desc: "Post-launch assistance to keep your product stable and updated.",
  },
];

const Choose = () => {
  return (
    <section className="why-section" id="why">
      <div className="why-grid-bg"></div>
      <div className="why-glow glow-left"></div>
      <div className="why-glow glow-right"></div>

      <div className="why-container">
        <motion.div
          className="why-left"
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <span className="section-badge">Why Choose TechTornix</span>

          <h2>
            Built for <span>Performance</span>, Designed for Growth
          </h2>

          <p>
            We combine strategy, design, and modern engineering to create
            reliable digital products that help businesses move faster, look
            better, and perform stronger.
          </p>      
        </motion.div>

        <div className="why-features">
          {features.map((item, index) => (
            <motion.div
              className="feature-card"
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.55 }}
              whileHover={{ y: -10, scale: 1.03 }}
            >
              <motion.div
                className="feature-icon"
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                {item.icon}
              </motion.div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choose;