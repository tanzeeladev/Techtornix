import React, { useEffect, useRef } from "react";
import "../css/Home.css";

const headingWords = [
  { text: "We",        grad: false },
  { text: "Build",     grad: false },
  { text: "Digital",   grad: false },
  { text: "Products",  grad: false },
  { text: "That",      grad: false },
  { text: "Grow",      grad: true  },
  { text: "Businesses",grad: true  },
];

const techStack = [
  { label: "React",      abbr: "Re",  top: "8%",  left: "38%", delay: "0.2s" },
  { label: "Node.js",    abbr: "No",  top: "28%", left: "76%", delay: "0.4s" },
  { label: "Python",     abbr: "Py",  top: "64%", left: "76%", delay: "0.6s" },
  { label: "MongoDB",    abbr: "Mg",  top: "82%", left: "38%", delay: "0.8s" },
  { label: "TypeScript", abbr: "TS",  top: "64%", left: "2%",  delay: "1.0s" },
  { label: "AWS",        abbr: "AW",  top: "28%", left: "2%",  delay: "1.2s" },
];

const stats = [
  
];

const Home = () => {
  const bgCanvasRef    = useRef(null);
  const orbitCanvasRef = useRef(null);
  const sectionRef     = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let W = section.offsetWidth;
    let H = section.offsetHeight;

    const resize = () => {
      W = section.offsetWidth;
      H = section.offsetHeight;
      if (bgCanvasRef.current) {
        bgCanvasRef.current.width  = W;
        bgCanvasRef.current.height = H;
      }
    };
    window.addEventListener("resize", resize);
    resize();

    const bgCanvas = bgCanvasRef.current;
    if (!bgCanvas) return;
    const ctx = bgCanvas.getContext("2d");

    const nodeColors = ["#0ebab1", "#06d4cc", "#06b6d4", "#00ccc4"];
    const nodes = Array.from({ length: 28 }, () => ({
      x:     Math.random() * W,
      y:     Math.random() * H,
      vx:    (Math.random() - 0.5) * 0.18,
      vy:    (Math.random() - 0.5) * 0.18,
      r:     Math.random() * 1.4 + 0.6,
      color: nodeColors[Math.floor(Math.random() * nodeColors.length)],
      alpha: Math.random() * 0.4 + 0.15,
    }));

    let bgAnim, pulse1 = 0;

    const drawBG = () => {
      ctx.fillStyle = "rgba(4,13,26,0.18)";
      ctx.fillRect(0, 0, W, H);

      [
        [W * 0.10, H * 0.18, 340, "14,186,177", 0.11],
        [W * 0.85, H * 0.80, 220, "6,212,212",  0.08],
        [W * 0.50, H * 0.45, 200, "0,204,196",  0.06],
        [W * 0.28, H * 0.72, 180, "14,186,177", 0.07],
        [W * 0.75, H * 0.22, 160, "6,182,212",  0.05],
      ].forEach(([gx, gy, gr, rgb, ga]) => {
        const g = ctx.createRadialGradient(gx, gy, 0, gx, gy, gr + Math.sin(pulse1) * 20);
        g.addColorStop(0, `rgba(${rgb},${ga})`);
        g.addColorStop(1, `rgba(${rgb},0)`);
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      });
      pulse1 += 0.006;

      for (let i = 0; i < nodes.length; i++) {
        nodes[i].x += nodes[i].vx;
        nodes[i].y += nodes[i].vy;
        if (nodes[i].x < 0 || nodes[i].x > W) nodes[i].vx *= -1;
        if (nodes[i].y < 0 || nodes[i].y > H) nodes[i].vy *= -1;

        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(14,186,177,${(1 - d / 100) * 0.20})`;
            ctx.lineWidth   = 0.5;
            ctx.stroke();
          }
        }
      }

      nodes.forEach(n => {
        const alphaHex = Math.round(n.alpha * 255).toString(16).padStart(2, "0");
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.color + alphaHex;
        ctx.fill();
      });

      bgAnim = requestAnimationFrame(drawBG);
    };
    drawBG();

    /* ── ORBIT CANVAS ── */
    const oc = orbitCanvasRef.current;
    if (!oc) return;
    const ox = oc.getContext("2d");
    let orbitAnim;

    const orbits = [
      { r: 70, s: 0.0006, d:  1, c: "#0ebab1", a: 0   },
      { r: 52, s: 0.0008, d: -1, c: "#06d4cc", a: 1.5 },
    ];

    const drawOrbits = () => {
      ox.clearRect(0, 0, oc.width, oc.height);
      const X = oc.width  / 2;
      const Y = oc.height / 2;

      orbits.forEach(o => {
        o.a += o.s * o.d * 16;
        ox.beginPath();
        ox.arc(X, Y, o.r, 0, Math.PI * 2);
        ox.strokeStyle = "rgba(14,186,177,0.15)";
        ox.lineWidth   = 1;
        ox.stroke();

        const px = X + Math.cos(o.a) * o.r;
        const py = Y + Math.sin(o.a) * o.r;

        const glow = ox.createRadialGradient(px, py, 0, px, py, 8);
        glow.addColorStop(0, o.c + "88");
        glow.addColorStop(1, o.c + "00");
        ox.beginPath();
        ox.arc(px, py, 8, 0, Math.PI * 2);
        ox.fillStyle = glow;
        ox.fill();

        ox.beginPath();
        ox.arc(px, py, 3, 0, Math.PI * 2);
        ox.fillStyle = o.c;
        ox.fill();
      });

      orbitAnim = requestAnimationFrame(drawOrbits);
    };
    orbitAnim = requestAnimationFrame(drawOrbits);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(bgAnim);
      cancelAnimationFrame(orbitAnim);
    };
  }, []);

  return (
    <section className="home-section" id="home" ref={sectionRef}>
      <canvas ref={bgCanvasRef} className="bg-layer" />

      <div className="home-container">
        {/* ── LEFT ── */}
        <div className="home-left">

          {/* Badge */}
          <div className="home-badge">
            <span className="badge-dot" />
            Innovative Software House
          </div>

          {/* Word-by-word heading */}
          <h1 className="home-heading">
            {headingWords.map((w, i) => (
              <span
                key={i}
                className={`word-wrap`}
                style={{ "--wi": i }}
              >
                <span className={`word-inner${w.grad ? " grad-text" : ""}`}>
                  {w.text}
                </span>
              </span>
            ))}
          </h1>

          {/* Paragraph */}
          <p className="home-para">
            TechTornix designs and develops modern websites, web apps, and
            scalable digital solutions for global startups.
          </p>

          {/* Buttons */}
          <div className="home-buttons">
            <a href="#contact"  className="primary-btn">Start a Project</a>
            <a href="#services" className="secondary-btn">Explore Services →</a>
          </div>

          {/* Stats */}
          <div className="stats-row">
            {stats.map((s, i) => (
              <div className="stat-item" key={i}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className="home-right">
          <div className="ai-core-wrapper">

            {techStack.map((t, i) => (
              <div
                className="tech-card"
                key={i}
                style={{
                  top: t.top,
                  left: t.left,
                  animationDelay: t.delay,
                  "--fi": i,
                }}
              >
                <span className="tech-abbr">{t.abbr}</span>
                <span className="tech-label">{t.label}</span>
              </div>
            ))}

            <canvas
              ref={orbitCanvasRef}
              className="orbit-canvas"
              width="220"
              height="220"
            />

            <div className="ai-core">
              <div className="core-spin">
                <div className="core-inner">
                  <span>TT</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
