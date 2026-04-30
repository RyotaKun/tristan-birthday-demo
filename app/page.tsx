"use client";
import { useEffect, useRef } from "react";

const milestones = [
  {
    label: "Before Tech",
    title: "Chef",
    body: "Started in the kitchen — no formal tech background, just curiosity and appetite for hard problems.",
    color: "var(--indigo)",
  },
  {
    label: "2017",
    title: "Panviva — Support Engineer",
    body: "Entered through the support team. Learned the product from the ground up: production issues, customer pain, operational reality before code.",
    color: "var(--cyan)",
  },
  {
    label: "2018–2021",
    title: "Developer → Senior Developer → Tech Lead",
    body: "Self-driven through real-world problems. Grew into technical leadership solving the hard, unglamorous foundations: TLS, app server reliability, platform compatibility.",
    color: "var(--orange)",
  },
  {
    label: "2022–2023",
    title: "Architect — Core Modernisation",
    body: "Led the architectural breakthroughs that made Core Modernisation possible: decoupled document type from layout, enforced forward-only design, enabled safe transformation of a legacy system.",
    color: "var(--indigo)",
  },
  {
    label: "2024",
    title: "AKS & Containerisation (Phoenix)",
    body: "Drove Panviva's Kubernetes journey end-to-end — Helm orchestration, secrets management, environment parity from Dev to Prod. Not just working, but operationally sane.",
    color: "var(--cyan)",
  },
  {
    label: "2025–2026",
    title: "Principal Engineer & AI Champion",
    body: "Authored ADR-037, presented \u201cCreating a Bright Blue Sky with AI\u201d, and proved that AI multiplies good engineering. It doesn\u2019t replace it.",
    color: "var(--orange)",
  },
];

const attributes = [
  { numeral: "I", title: "Systems Thinker", body: "Balances content, identity, infrastructure, and migration semantics simultaneously. Never optimises one layer at the expense of another.", color: "var(--indigo)" },
  { numeral: "II", title: "AI Pioneer", body: "One of the first at Upland to wield AI as a real engineering tool. His motto: AI multiplies good engineering, it doesn\u2019t replace it.", color: "var(--cyan)" },
  { numeral: "III", title: "Security Champion", body: "Short-lived purpose-specific JWTs, closed multi-tenant data risks, unified auth \u2014 security evolved with the platform, not as an afterthought.", color: "var(--orange)" },
  { numeral: "IV", title: "Self-Made Engineer", body: "Chef \u2192 support \u2192 developer \u2192 principal engineer. No formal CS degree. Proof that non-traditional paths create exceptional engineers.", color: "var(--magenta)" },
  { numeral: "V", title: "Mentor & Leader", body: "Low ceremony, high signal. Advocates strongly for growing engineers internally \u2014 because that was once his own path.", color: "var(--indigo)" },
  { numeral: "VI", title: "Big Life Moves", body: "Melbourne \u2192 Townsville \u2192 Canada. Navigated major transitions while sustaining technical excellence. Family always comes first.", color: "var(--cyan)" },
];

function Stars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.4 + 0.3,
      speed: Math.random() * 0.004 + 0.002,
      phase: Math.random() * Math.PI * 2,
    }));

    let frame: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const t = Date.now() * 0.001;
      stars.forEach((s) => {
        const alpha = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(t * s.speed * 200 + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,200,255,${alpha})`;
        ctx.fill();
      });
      frame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}
    />
  );
}

export default function Home() {
  return (
    <>
      <Stars />
      <main style={{ position: "relative", zIndex: 1 }}>

        {/* ── HERO ── */}
        <section style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px 24px",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Supernova glow */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(108,99,255,0.18) 0%, rgba(0,245,255,0.08) 40%, transparent 70%)",
            animation: "pulse-glow 4s ease-in-out infinite",
            pointerEvents: "none",
          }} />

          <p style={{
            fontFamily: "'Courier New', monospace",
            fontSize: 11,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "var(--cyan)",
            marginBottom: 28,
            opacity: 0.8,
          }}>
            30 April · 2026
          </p>

          <h1 className="gradient-text" style={{
            fontSize: "clamp(52px, 10vw, 108px)",
            fontWeight: 900,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            marginBottom: 24,
          }}>
            Happy Birthday,<br />Tristan
          </h1>

          <p style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "clamp(11px, 1.8vw, 15px)",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--cyan)",
            marginBottom: 48,
          }}>
            Principal Engineer&nbsp;&nbsp;·&nbsp;&nbsp;AI Champion&nbsp;&nbsp;·&nbsp;&nbsp;Game Changer
          </p>

          {/* Neon divider */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, width: "100%", maxWidth: 400, marginBottom: 48 }}>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, var(--indigo))" }} />
            <div style={{
              width: 8, height: 8,
              background: "var(--cyan)",
              borderRadius: "50%",
              boxShadow: "0 0 12px var(--cyan), 0 0 24px var(--cyan)",
            }} />
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, var(--indigo), transparent)" }} />
          </div>

          <p style={{
            fontSize: "clamp(15px, 2vw, 20px)",
            lineHeight: 1.8,
            color: "rgba(240,240,255,0.6)",
            maxWidth: 640,
          }}>
            From chef to Principal Engineer — the architect who modernised Panviva Core,
            containerised it on AKS, and showed the entire team what AI is truly capable of.
          </p>

          {/* Scroll hint */}
          <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)" }}>
            <div style={{
              width: 1,
              height: 48,
              background: "linear-gradient(to bottom, var(--indigo), transparent)",
              margin: "0 auto",
            }} />
          </div>
        </section>

        {/* ── MANIFESTO ── */}
        <section style={{ padding: "0 24px 96px" }}>
          <div style={{
            maxWidth: 860,
            margin: "0 auto",
            background: "rgba(108,99,255,0.06)",
            borderLeft: "4px solid var(--orange)",
            padding: "48px 48px 48px 44px",
            position: "relative",
            boxShadow: "0 0 60px rgba(255,107,53,0.08)",
          }}>
            <div style={{
              position: "absolute",
              top: 0, left: 0, right: 0,
              height: 1,
              background: "linear-gradient(90deg, var(--orange), transparent)",
            }} />
            <p style={{
              fontFamily: "'Courier New', monospace",
              fontSize: 10,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--orange)",
              marginBottom: 20,
            }}>
              Transmission — Global AI Revolution
            </p>
            <p style={{
              fontSize: "clamp(18px, 2.8vw, 26px)",
              fontWeight: 700,
              lineHeight: 1.6,
              color: "var(--text)",
            }}>
              We are living through a once-in-a-generation shift.
              The kind that rewrites industries, careers, and the world.
              And you&apos;re not just watching —{" "}
              <span style={{ color: "var(--orange)" }}>you&apos;re leading it.</span>
            </p>
          </div>
        </section>

        {/* ── TIMELINE ── */}
        <section style={{ padding: "0 24px 96px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <SectionHeading label="CAREER TIMELINE" color="var(--indigo)" />

            <div style={{ position: "relative" }}>
              {/* Spine */}
              <div style={{
                position: "absolute",
                left: 32,
                top: 0,
                bottom: 0,
                width: 1,
                background: "linear-gradient(to bottom, var(--indigo), var(--cyan), var(--orange))",
                opacity: 0.3,
              }}>
                {/* Animated pulse dot */}
                <div style={{
                  position: "absolute",
                  left: -3,
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "var(--cyan)",
                  boxShadow: "0 0 8px var(--cyan)",
                  animation: "data-pulse 3s linear infinite",
                }} />
              </div>

              {milestones.map((m, i) => (
                <div key={i} style={{
                  display: "flex",
                  gap: 32,
                  marginBottom: 40,
                  paddingLeft: 0,
                }}>
                  {/* Dot on spine */}
                  <div style={{
                    position: "relative",
                    width: 65,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-end",
                    paddingRight: 0,
                  }}>
                    <div style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: m.color,
                      boxShadow: `0 0 12px ${m.color}, 0 0 24px ${m.color}`,
                      marginTop: 4,
                      flexShrink: 0,
                      marginRight: -6,
                    }} />
                  </div>

                  {/* Card */}
                  <div className={i % 3 === 0 ? "glow-border-indigo" : i % 3 === 1 ? "glow-border-cyan" : "glow-border-orange"} style={{
                    flex: 1,
                    background: "rgba(255,255,255,0.02)",
                    padding: "20px 24px",
                    borderRadius: 2,
                  }}>
                    <p style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: 10,
                      letterSpacing: "0.2em",
                      color: m.color,
                      marginBottom: 8,
                      textTransform: "uppercase",
                    }}>
                      {m.label}
                    </p>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>
                      {m.title}
                    </h3>
                    <p style={{ fontSize: 13.5, lineHeight: 1.8, color: "var(--dim)" }}>
                      {m.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ATTRIBUTES ── */}
        <section style={{
          background: "rgba(108,99,255,0.04)",
          borderTop: "1px solid rgba(108,99,255,0.15)",
          borderBottom: "1px solid rgba(108,99,255,0.15)",
          padding: "80px 24px",
        }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <SectionHeading label="WHAT MAKES TRISTAN REMARKABLE" color="var(--cyan)" />

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
            }}>
              {attributes.map((a, i) => (
                <div key={i} style={{
                  background: "rgba(255,255,255,0.02)",
                  border: `1px solid rgba(${a.color === "var(--indigo)" ? "108,99,255" : a.color === "var(--cyan)" ? "0,245,255" : a.color === "var(--orange)" ? "255,107,53" : "255,0,110"},0.25)`,
                  padding: "28px 24px",
                  borderRadius: 2,
                  transition: "box-shadow 0.3s",
                }}>
                  <span style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: 22,
                    fontWeight: 700,
                    color: "var(--orange)",
                    display: "block",
                    marginBottom: 12,
                    opacity: 0.9,
                  }}>
                    {a.numeral}
                  </span>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--text)", marginBottom: 10 }}>
                    {a.title}
                  </h3>
                  <p style={{ fontSize: 13, lineHeight: 1.8, color: "var(--dim)" }}>
                    {a.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AI INFLECTION POINT ── */}
        <section style={{ padding: "100px 24px", position: "relative", overflow: "hidden" }}>
          <div style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,245,255,0.05) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}>
            <SectionHeading label="THE AI INFLECTION POINT" color="var(--cyan)" />

            {/* Date callout */}
            <div style={{
              textAlign: "center",
              marginBottom: 56,
            }}>
              <div style={{
                display: "inline-block",
                border: "1px solid rgba(0,245,255,0.3)",
                borderRadius: 2,
                padding: "14px 32px",
                background: "rgba(0,245,255,0.04)",
              }}>
                <p style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: 11,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "var(--cyan)",
                  marginBottom: 6,
                }}>March 12, 2026 — 10:05 AM</p>
                <p style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "var(--text)",
                }}>&ldquo;Creating a Bright Blue Sky with AI&rdquo;</p>
              </div>
            </div>

            <p style={{ fontSize: 16, lineHeight: 1.9, color: "var(--dim)", marginBottom: 24, textAlign: "center" }}>
              This was not an inspirational talk. It was a <strong style={{ color: "var(--text)" }}>working demonstration</strong> — AI applied
              responsibly to one of Panviva&apos;s most complex systems. Real architecture. Real data risk. Real results.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.9, color: "var(--dim)", marginBottom: 56, textAlign: "center" }}>
              Tristan didn&apos;t ask whether AI <em>might</em> be useful. He showed <strong style={{ color: "var(--cyan)" }}>how it already was</strong> — if approached with discipline.
            </p>

            {/* Wave of initiatives */}
            <div style={{ marginBottom: 56 }}>
              <p style={{
                fontFamily: "'Courier New', monospace",
                fontSize: 10,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--orange)",
                textAlign: "center",
                marginBottom: 24,
                opacity: 0.8,
              }}>The wave that followed</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
                {[
                  { id: "CXMI-535", name: "Claude Code Shared Learning System" },
                  { id: "CXMI-541", name: "SiteAssistant Bot" },
                  { id: "CXMI-536", name: "SkillForge" },
                  { id: "CXMI-542", name: "AI Orchestrator Team" },
                  { id: "CXMI-533", name: "AI-Driven Team Health Dashboard" },
                ].map((item) => (
                  <div key={item.id} style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(108,99,255,0.2)",
                    borderRadius: 2,
                    padding: "14px 16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                  }}>
                    <span style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: 10,
                      color: "var(--indigo)",
                      letterSpacing: "0.15em",
                    }}>{item.id}</span>
                    <span style={{ fontSize: 13, color: "var(--dim)", lineHeight: 1.5 }}>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pull quote */}
            <div style={{
              borderLeft: "3px solid var(--cyan)",
              paddingLeft: 24,
              margin: "0 auto",
              maxWidth: 620,
            }}>
              <p style={{
                fontSize: "clamp(16px, 2vw, 19px)",
                fontStyle: "italic",
                lineHeight: 1.8,
                color: "rgba(240,240,255,0.8)",
                marginBottom: 12,
              }}>
                &ldquo;If Tristan had not pushed the organisation through that initial conversation —
                and shown a disciplined, working AI-driven approach — Panviva would not be where it is today.&rdquo;
              </p>
              <p style={{
                fontFamily: "'Courier New', monospace",
                fontSize: 10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--cyan)",
                opacity: 0.7,
              }}>The change was driven by thinking, structure, and leadership.</p>
            </div>
          </div>
        </section>

        {/* ── GLOBAL MOMENT ── */}
        <section style={{
          padding: "100px 24px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,245,255,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <p style={{
            fontFamily: "'Courier New', monospace",
            fontSize: 10,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "var(--cyan)",
            marginBottom: 24,
            opacity: 0.7,
          }}>
            Melbourne → Townsville → Canada → The World
          </p>

          <h2 className="gradient-text" style={{
            fontSize: "clamp(40px, 7vw, 80px)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: 40,
          }}>
            This Is the Moment
          </h2>

          {/* Globe SVG */}
          <div style={{ marginBottom: 48, opacity: 0.85 }}>
            <svg width="280" height="160" viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Globe outline */}
              <ellipse cx="140" cy="80" rx="100" ry="60" stroke="rgba(108,99,255,0.3)" strokeWidth="1" />
              <ellipse cx="140" cy="80" rx="60" ry="60" stroke="rgba(108,99,255,0.15)" strokeWidth="1" />
              <ellipse cx="140" cy="80" rx="20" ry="60" stroke="rgba(108,99,255,0.15)" strokeWidth="1" />
              <line x1="40" y1="80" x2="240" y2="80" stroke="rgba(108,99,255,0.2)" strokeWidth="1" />
              <line x1="140" y1="20" x2="140" y2="140" stroke="rgba(108,99,255,0.2)" strokeWidth="1" />
              {/* Latitude lines */}
              <ellipse cx="140" cy="55" rx="87" ry="15" stroke="rgba(108,99,255,0.12)" strokeWidth="1" />
              <ellipse cx="140" cy="105" rx="87" ry="15" stroke="rgba(108,99,255,0.12)" strokeWidth="1" />
              {/* Glowing nodes */}
              {[
                { cx: 100, cy: 65, c: "#6C63FF" },
                { cx: 180, cy: 70, c: "#00F5FF" },
                { cx: 140, cy: 90, c: "#FF6B35" },
                { cx: 80, cy: 95, c: "#FF006E" },
                { cx: 200, cy: 55, c: "#00F5FF" },
                { cx: 155, cy: 50, c: "#6C63FF" },
              ].map((n, i) => (
                <g key={i}>
                  <circle cx={n.cx} cy={n.cy} r="8" fill={n.c} opacity="0.15" />
                  <circle cx={n.cx} cy={n.cy} r="3" fill={n.c} opacity="0.9" />
                </g>
              ))}
              {/* Connection lines */}
              <line x1="100" y1="65" x2="180" y2="70" stroke="rgba(0,245,255,0.25)" strokeWidth="1" strokeDasharray="3,3" />
              <line x1="140" y1="90" x2="200" y2="55" stroke="rgba(108,99,255,0.25)" strokeWidth="1" strokeDasharray="3,3" />
              <line x1="80" y1="95" x2="155" y2="50" stroke="rgba(255,107,53,0.25)" strokeWidth="1" strokeDasharray="3,3" />
            </svg>
          </div>

          <p style={{
            fontSize: "clamp(16px, 2.2vw, 21px)",
            lineHeight: 1.8,
            color: "rgba(240,240,255,0.7)",
            maxWidth: 620,
            margin: "0 auto 32px",
          }}>
            The AI revolution is rewriting every industry, every company,
            every career. Tristan saw it first. Built for it first.
            And brought the whole team with him.
          </p>

          <p style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            fontWeight: 700,
            color: "var(--cyan)",
            letterSpacing: "0.05em",
            textShadow: "0 0 20px var(--cyan), 0 0 40px rgba(0,245,255,0.4)",
          }}>
            The future ships with your name on it.
          </p>
        </section>

        {/* ── MESSAGE ── */}
        <section style={{
          padding: "80px 24px 96px",
          textAlign: "center",
          background: "rgba(255,107,53,0.03)",
          borderTop: "1px solid rgba(255,107,53,0.1)",
        }}>
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <SectionHeading label="FROM THE TEAM" color="var(--orange)" />

            {/* Spark decoration */}
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 36 }}>
              {["var(--indigo)", "var(--cyan)", "var(--orange)", "var(--magenta)", "var(--indigo)"].map((c, i) => (
                <div key={i} style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: c,
                  boxShadow: `0 0 8px ${c}`,
                  opacity: 0.8,
                }} />
              ))}
            </div>

            <blockquote>
              <p style={{
                fontSize: "clamp(18px, 2.5vw, 24px)",
                fontStyle: "italic",
                lineHeight: 1.7,
                color: "rgba(240,240,255,0.85)",
                marginBottom: 28,
              }}>
                &ldquo;We wouldn&apos;t be here today if Tristan didn&apos;t push us,
                show us what AI is capable of. Today we honour that —
                and the remarkable journey of the person behind it all.&rdquo;
              </p>
              <cite style={{
                fontFamily: "'Courier New', monospace",
                fontStyle: "normal",
                fontSize: 11,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--orange)",
              }}>
                With respect, pride, and excitement — The Panviva Team
              </cite>
            </blockquote>
          </div>
        </section>

        {/* ── CLOSER ── */}
        <section style={{ textAlign: "center", padding: "80px 24px 64px", position: "relative" }}>
          <div style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(108,99,255,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <h2 className="gradient-text" style={{
            fontSize: "clamp(40px, 7vw, 72px)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
          }}>
            Happy Birthday, Tristan.
          </h2>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{
          textAlign: "center",
          padding: "20px 24px 32px",
          borderTop: "1px solid rgba(108,99,255,0.1)",
        }}>
          <div style={{
            width: 5, height: 5,
            borderRadius: "50%",
            background: "var(--indigo)",
            boxShadow: "0 0 8px var(--indigo)",
            margin: "0 auto 12px",
          }} />
          <p style={{
            fontFamily: "'Courier New', monospace",
            fontSize: 10,
            letterSpacing: "0.2em",
            color: "rgba(240,240,255,0.2)",
            textTransform: "uppercase",
          }}>
            2026 · Built with pride
          </p>
        </footer>
      </main>
    </>
  );
}

function SectionHeading({ label, color }: { label: string; color: string }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 56 }}>
      <p style={{
        fontFamily: "'Courier New', monospace",
        fontSize: 10,
        letterSpacing: "0.35em",
        textTransform: "uppercase",
        color,
        marginBottom: 12,
        opacity: 0.8,
      }}>
        {label}
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center" }}>
        <div style={{ width: 60, height: 1, background: `linear-gradient(90deg, transparent, ${color})` }} />
        <div style={{
          width: 6, height: 6,
          borderRadius: "50%",
          background: color,
          boxShadow: `0 0 10px ${color}`,
        }} />
        <div style={{ width: 60, height: 1, background: `linear-gradient(90deg, ${color}, transparent)` }} />
      </div>
    </div>
  );
}
