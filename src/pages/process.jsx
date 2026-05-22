import React from "react";
import { motion } from "framer-motion";
import { Crosshair, PenTool, Terminal, Zap, ShieldCheck, LifeBuoy } from "lucide-react";
import "../css/process.css";

const processSteps = [
  {
    num: "01",
    phase: "PHASE_DISCOVERY",
    title: "Deep Analysis",
    desc: "Market research and data-driven audits of user behavior.",
    icon: <Crosshair size={20} />,
    color: "#0ebab1"
  },
  {
    num: "02",
    phase: "PHASE_PROTOTYPING",
    title: "Visual Logic",
    desc: "Setting the perfect balance between aesthetics and architecture.",
    icon: <PenTool size={20} />,
    color: "#0ebab1"
  },
  {
    num: "03",
    phase: "PHASE_PRODUCTION",
    title: "Core Dev",
    desc: "High-performance code designed to handle heavy traffic loads.",
    icon: <Terminal size={20} />,
    color: "#0ebab1"
  },
  {
    num: "04",
    phase: "PHASE_SECURITY",
    title: "Quality Audit",
    desc: "Rigorous testing and implementation of security protocols.",
    icon: <ShieldCheck size={20} />,
    color: "#0ebab1"
  },
  {
    num: "05",
    phase: "PHASE_OPTIMIZATION",
    title: "Live & Scale",
    desc: "Continuous delivery and advanced deployment automation.",
    icon: <Zap size={20} />,
    color: "#0ebab1"
  },
  {
    num: "06",
    phase: "PHASE_MAINTENANCE",
    title: "Post Launch",
    desc: "24/7 monitoring and scalable feature updates for longevity.",
    icon: <LifeBuoy size={20} />,
    color: "#0ebab1"
  }
];

const Process = () => {
  return (
    <section className="proc-section" id="process">
      <div className="proc-grid-overlay"></div>
      
      <div className="proc-container">
        <div className="proc-header">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            className="proc-line-decor"
          />
          <h2 className="proc-main-title">
            THE <span>ENGINEERING</span> WORKFLOW
          </h2>
          <p className="proc-sub-text">
            Our process is fast, transparent, and result-oriented.
          </p>
        </div>

        <div className="proc-blueprint-grid">
          {processSteps.map((item, i) => (
            <motion.div 
              key={i}
              className="proc-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="proc-card-head">
                <span className="proc-phase">{item.phase}</span>
                <span className="proc-num">{item.num}</span>
              </div>

              <div className="proc-icon-wrap">
                {item.icon}
                <div className="proc-icon-pulse"></div>
              </div>

              <h3 className="proc-card-title">{item.title}</h3>
              <p className="proc-card-desc">{item.desc}</p>
              
              <div className="proc-card-footer">
                <div className="proc-status-dot"></div>
                <span className="proc-status-text">Ready for Execution</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;