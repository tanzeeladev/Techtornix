import React from "react";
import { motion } from "framer-motion";
import "../css/Choose.css";

const kbFeatures = [
  { 
    id: "// 01", 
    title: "Architecture", 
    desc: "We integrate design with logic. Scaling will never be a bottleneck for your vision." 
  },
  { 
    id: "// 02", 
    title: "Velocity", 
    desc: "Weeks, not months. Agile sprint cycles that keep results at the front-line." 
  },
  { 
    id: "// 03", 
    title: "Humanity", 
    desc: "User-centric coding. We build products that people actually want to use." 
  },
  { 
    id: "// 04", 
    title: "Integrity", 
    desc: "Transparent process. Complete control over every commit and every update." 
  },
];

const Choose = () => {
  return (
    <section className="kb-why-section" id="why">
      <div className="kb-bg-text">ENGINEER</div>
      
      <div className="kb-container">
        {/* Row 01: The Split Header */}
        <div className="kb-top-row">
          <motion.h2 
            className="kb-title-main"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            WHY <br /> <span style={{color: '#0ebab1'}}>TECHTORNIX</span>
          </motion.h2>
          
          <motion.div 
            className="kb-tagline"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            [ system.status: operational ] <br />
            Building digital infrastructures with extreme precision.
          </motion.div>
        </div>

        {/* Row 02: Kinetic Staggered Boxes */}
        <div className="kb-feature-row">
          {kbFeatures.map((item, index) => (
            <motion.div 
              className="kb-box" 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
            >
              <span className="kb-box-num">{item.id}</span>
              <div className="kb-box-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              {/* Subtle line accent */}
              <div style={{ width: '40px', height: '2px', background: '#0ebab1' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choose;