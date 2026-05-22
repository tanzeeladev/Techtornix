import React, { useRef, useEffect } from "react";
import "../css/Services.css";

const cards = [
  {
    num: "01",
    icon: "ti-layout-2",
    title: "Enterprise Web Systems",
    desc: "High-performance websites built with Next.js — optimized for speed, SEO, and conversions.",
    bars: [
      { label: "Performance",     pct: 98 },
      { label: "Core Web Vitals", pct: 94 },
      { label: "SEO Score",       pct: 97 },
    ],
    features: ["Next.js & React", "CI/CD Pipelines", "SEO Optimized"],
  },
  {
    num: "02",
    icon: "ti-cpu",
    title: "SaaS Dashboards",
    desc: "Complex data into clean, actionable React admin panels with real-time analytics.",
    stats: [
      { val: 20,   suffix: "+", float: false, lbl: "Products" },
      { val: 99.9, suffix: "%", float: true,  lbl: "Uptime"   },
      { val: 4.9,  suffix: "★", float: true,  lbl: "Rating"   },
      { val: 48,   suffix: "h", float: false, lbl: "Delivery" },
    ],
    features: ["Real-time Analytics", "Role-based Auth", "API Integration"],
  },
  {
    num: "03",
    icon: "ti-brush",
    title: "UI/UX Redesign",
    desc: "Outdated interfaces transformed into premium experiences that delight users at every touchpoint.",
    tags: ["Figma", "Research", "Prototyping", "Wireframes"],
    highlight: "We map every user touchpoint — from first click to final conversion — turning confusion into clarity.",
    features: ["User Journey Mapping", "Interactive Prototypes", "Dev-ready Handoff"],
  },
  {
    num: "04",
    icon: "ti-database",
    title: "Scalable Backends",
    desc: "Node.js & MongoDB architectures engineered for heavy traffic, security, and long-term growth.",
    tags: ["Node.js", "MongoDB", "REST APIs", "Auth"],
    highlight: "Built to handle millions of requests with bulletproof security, smooth scaling, and zero downtime.",
    features: ["Secure Auth Flows", "Cloud Deployment", "99.9% Uptime SLA"],
  },
];

const useCounter = (target, float, suffix, triggered) => {
  const elRef = useRef(null);
  useEffect(() => {
    if (!triggered || !elRef.current) return;
    const dur = 1400;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / dur, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const val = target * ease;
      elRef.current.textContent = (float ? val.toFixed(1) : Math.floor(val)) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [triggered]);
  return elRef;
};

const StatBox = ({ stat, triggered }) => {
  const ref = useCounter(stat.val, stat.float, stat.suffix, triggered);
  return (
    <div className="stat-box">
      <div className="stat-value" ref={ref}>0{stat.suffix}</div>
      <div className="stat-label">{stat.lbl}</div>
    </div>
  );
};

const BentoCard = ({ card, index }) => {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);
  const [visible, setVisible] = React.useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisible(true);
            el.querySelectorAll(".bar-fill").forEach((b) => {
              b.style.width = b.dataset.pct + "%";
            });
          }, index * 130);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  - 0.5) * 16;
    const y = -((e.clientY - r.top)  / r.height - 0.5) * 16;
    card.style.transform = `rotateX(${y}deg) rotateY(${x}deg) translateY(-6px)`;
    card.querySelector(".card-icon").style.transform = `translateZ(16px) rotate(${-x * 0.3}deg) scale(1.08)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "";
    card.querySelector(".card-icon").style.transform = "";
  };

  return (
    <div className="card-wrap" ref={wrapRef} style={visible ? { opacity: 1, transform: "translateY(0)" } : {}}>
      <div className="bento-card" ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>

        <div className="card-top">
          <div className="card-icon"><i className={`ti ${card.icon}`} /></div>
          <span className="card-num">{card.num}</span>
        </div>

        <h3>{card.title}</h3>
        <p className="card-desc">{card.desc}</p>

        {card.bars && (
          <div className="bar-container">
            {card.bars.map((b, j) => (
              <div key={j}>
                <div className="bar-info"><span>{b.label}</span><span>{b.pct}%</span></div>
                <div className="bar-track"><div className="bar-fill" data-pct={b.pct} /></div>
              </div>
            ))}
          </div>
        )}

        {card.stats && (
          <div className="stat-grid">
            {card.stats.map((s, j) => <StatBox key={j} stat={s} triggered={visible} />)}
          </div>
        )}

        {card.tags && (
          <div className="tag-row">
            {card.tags.map((t, j) => <span className="tag" key={j}>{t}</span>)}
          </div>
        )}

        {card.highlight && (
          <div className="highlight-box">
            <p>{card.highlight}</p>
          </div>
        )}

        {card.features && (
          <ul className="feature-list">
            {card.features.map((f, j) => (
              <li key={j}>
                <span className="feature-dot"><i className="ti ti-check" /></span>
                {f}
              </li>
            ))}
          </ul>
        )}

      </div>
    </div>
  );
};

const ParticlesCanvas = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    const pts = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.5 + 0.5,
    }));
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(14,186,177,0.15)"; ctx.fill();
      });
      for (let i = 0; i < pts.length; i++)
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
          if (d < 100) {
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(14,186,177,${0.05 * (1 - d / 100)})`; ctx.lineWidth = 1; ctx.stroke();
          }
        }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas className="particles-canvas" ref={canvasRef} />;
};

const Services = () => (
  <section className="solutions-section" id="services">
    <ParticlesCanvas />
    <div className="solutions-container">
      <div className="srv-header">
        <div className="section-badge">
          <span className="badge-dot" />
          What We Do
        </div>
        <h2 className="srv-h2">
          Built to Perform.<br /><span className="grad-text">Designed to Impress.</span>
        </h2>
        <p className="srv-p">
          From pixel-perfect interfaces to production-ready backends —
          we craft digital products that grow with your business.
        </p>
      </div>
      <div className="bento-grid">
        {cards.map((c, i) => <BentoCard key={i} card={c} index={i} />)}
      </div>
    </div>
  </section>
);

export default Services;
