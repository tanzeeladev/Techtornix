import React from "react";
import { motion } from "framer-motion";
import {
  Code2, Rocket, Layout, Smartphone, BarChart3, HeartHandshake, CheckCircle2
} from "lucide-react";
import "../css/Choose.css";

const features = [
  { icon: <Code2 />, title: "Clean & Scalable Code", desc: "Maintainable architecture designed to grow alongside your business." },
  { icon: <Rocket />, title: "Fast Delivery", desc: "Swift project completion without compromising on quality or performance." },
  { icon: <Layout />, title: "Modern UI/UX", desc: "Intuitive and sleek interfaces crafted to enhance user engagement." },
  { icon: <Smartphone />, title: "Fully Responsive", desc: "Flawless performance and layout across mobile, tablet, and desktop." },
  { icon: <BarChart3 />, title: "Business Focused", desc: "Strategic solutions engineered to meet your specific commercial goals." },
  { icon: <HeartHandshake />, title: "Ongoing Support", desc: "Dedicated post-launch assistance to ensure long-term stability." },
];

const Choose = () => {
  return (
    <section className="why-section" id="why">
      <div className="bg-blur-circle-1"></div>
      <div className="bg-blur-circle-2"></div>

      <div className="why-container">
        <motion.div
          className="why-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="badge-container">
            <span className="section-badge">Premium Agency</span>
          </div>

          <h2>
            Building Digital <span className="text-highlight">Excellence</span> Together
          </h2>

          <p>
            We don't just write code; we engineer a scalable digital foundation that empowers your business to thrive in the modern market.
          </p>

          <div className="trust-metrics">
             <div className="metric">
                <CheckCircle2 size={18} className="text-red" />
                <span>Enterprise Grade Security</span>
             </div>
             {/* FIXED ERROR BELOW */}
             <div className="metric"> 
                <CheckCircle2 size={18} className="text-red" />
                <span>User-Centric Design DNA</span>
             </div>
          </div>

          <div className="modern-glass-card">
            <div className="card-inner">
               <div className="circular-stat">
                  <svg viewBox="0 0 36 36" className="circular-chart">
                    <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <motion.path 
                      initial={{ strokeDasharray: "0, 100" }}
                      whileInView={{ strokeDasharray: "98, 100" }}
                      transition={{ duration: 2, delay: 0.5 }}
                      className="circle" 
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                    />
                  </svg>
                  <div className="percentage">98%</div>
               </div>
               <div className="stat-text">
                  <h4>Client Satisfaction</h4>
                  <p>Based on 50+ Global Projects</p>
               </div>
            </div>
          </div>
        </motion.div>

        <div className="why-grid-wrapper">
          {features.map((item, index) => (
            <motion.div
              className="feature-card-v2"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="icon-box">{item.icon}</div>
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