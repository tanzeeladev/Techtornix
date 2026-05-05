import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";
import "../css/process.css"

const steps = [
  {
    step: "01",
    icon: <Search />,
    title: "Discover",
    desc: "We analyze your goals, users, features, and business requirements.",
    tag: "Strategy",
  },
  {
    step: "02",
    icon: <PenTool />,
    title: "Design",
    desc: "We create clean layouts, user flows, and modern interface concepts.",
    tag: "UI/UX",
  },
  {
    step: "03",
    icon: <Code2 />,
    title: "Develop",
    desc: "We build fast, scalable, and responsive solutions with clean code.",
    tag: "Engineering",
  },
  {
    step: "04",
    icon: <Rocket />,
    title: "Launch",
    desc: "We test, optimize, deploy, and support your product after release.",
    tag: "Delivery",
  },
];

const Process = () => {
  return (
    <section className="tt-process-section" id="process">
      <div className="tt-process-grid-bg"></div>
      <div className="tt-process-glow tt-glow-a"></div>
      <div className="tt-process-glow tt-glow-b"></div>

      <div className="tt-process-container">
        <motion.div
          className="tt-process-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span>Digital Workflow</span>
          <h2>From Idea to Launch Through a Smart Process</h2>
          <p>
            A clear, digital-first workflow that keeps every project organized,
            transparent, and focused on results.
          </p>
        </motion.div>

        <div className="tt-process-board">
          <div className="tt-process-track"></div>

          {steps.map((item, index) => (
            <motion.div
              className="tt-process-node"
              key={index}
              initial={{ opacity: 0, y: 45, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              whileHover={{ y: -10, scale: 1.03 }}
            >
              <motion.div
                className="tt-node-orb"
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              >
                <div className="tt-node-icon">{item.icon}</div>
              </motion.div>

              <span className="tt-node-step">{item.step}</span>
              <span className="tt-node-tag">{item.tag}</span>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>

              <motion.div
                className="tt-node-line"
                initial={{ width: 0 }}
                whileInView={{ width: "72%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.15 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;