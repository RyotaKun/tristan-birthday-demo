import { Playfair_Display, Libre_Baskerville } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-baskerville",
  display: "swap",
});

const milestones = [
  {
    label: "Before Tech",
    title: "Chef",
    body: "Tristan started his career in the kitchen — no formal tech background, just curiosity and an appetite for hard problems.",
  },
  {
    label: "2017",
    title: "Panviva — Support Engineer",
    body: "Entered Panviva through the support team. Learned the product from the ground up: production issues, customer pain, operational reality before code.",
  },
  {
    label: "2018–2021",
    title: "Developer → Senior Developer → Tech Lead",
    body: "Self-driven through real-world problems. Grew into technical leadership by solving the hard, unglamorous foundations: TLS, app server reliability, platform compatibility.",
  },
  {
    label: "2022–2023",
    title: "Architect — Core Modernisation",
    body: "Led the architectural breakthroughs that made Core Modernisation possible: decoupled document type from layout, enforced forward-only design, and enabled safe transformation of a legacy system.",
  },
  {
    label: "2024",
    title: "AKS & Containerisation (Phoenix)",
    body: "Drove Panviva's Kubernetes journey end-to-end — Helm orchestration, secrets management, environment parity from Dev to Prod. Not just working, but operationally sane.",
  },
  {
    label: "2025–2026",
    title: "Principal Engineer & AI Champion",
    body: "Authored ADR-037, presented \u201cCreating a Bright Blue Sky with AI\u201d, and proved that AI multiplies good engineering. It doesn\u2019t replace it.",
  },
];

const attributes = [
  {
    numeral: "I",
    title: "Systems Thinker",
    body: "Balances content, identity, infrastructure, and migration semantics simultaneously. Never optimises one layer at the expense of another.",
  },
  {
    numeral: "II",
    title: "AI Pioneer",
    body: "One of the first at Upland to wield AI as a real engineering tool — planning, architecture review, migration reasoning. His motto: AI multiplies good engineering.",
  },
  {
    numeral: "III",
    title: "Security Champion",
    body: "Short-lived purpose-specific JWTs, closed multi-tenant data risks, unified auth — security evolved with the platform, not as an afterthought.",
  },
  {
    numeral: "IV",
    title: "Self-Made Engineer",
    body: "No formal CS degree. Chef → support → developer → principal engineer. Proof that non-traditional paths create exceptional engineers.",
  },
  {
    numeral: "V",
    title: "Mentor & Leader",
    body: "Low ceremony, high signal. Advocates strongly for growing engineers internally — because that was once his own path.",
  },
  {
    numeral: "VI",
    title: "Big Life Moves",
    body: "Melbourne → Townsville → Canada. Navigated major transitions while sustaining technical excellence. Family always comes first.",
  },
];

export default function Home() {
  return (
    <main
      className={`${playfair.variable} ${baskerville.variable}`}
      style={{
        backgroundColor: "#0e0e0e",
        color: "#e8e0d4",
        fontFamily: "var(--font-baskerville), Georgia, serif",
        minHeight: "100vh",
      }}
    >
      {/* ── Gold rule top ── */}
      <div style={{ height: 3, background: "linear-gradient(90deg, transparent, #C4922A 30%, #E8B84B 50%, #C4922A 70%, transparent)" }} />

      {/* ── Hero ── */}
      <header style={{ maxWidth: 820, margin: "0 auto", padding: "88px 32px 72px", textAlign: "center" }}>
        <p style={{
          fontFamily: "var(--font-baskerville), Georgia, serif",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          fontSize: 11,
          color: "#C4922A",
          marginBottom: 32,
          fontStyle: "italic",
        }}>
          30 April · 2026
        </p>

        <h1 style={{
          fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
          fontSize: "clamp(52px, 9vw, 96px)",
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          color: "#f5ede0",
          margin: 0,
          marginBottom: 8,
        }}>
          Tristan McSwain
        </h1>

        <p style={{
          fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
          fontSize: "clamp(16px, 2.5vw, 22px)",
          fontStyle: "italic",
          color: "#C4922A",
          letterSpacing: "0.04em",
          marginBottom: 32,
        }}>
          Principal Engineer · Panviva
        </p>

        {/* Decorative rule */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, justifyContent: "center", marginBottom: 36 }}>
          <div style={{ flex: 1, maxWidth: 120, height: 1, background: "#C4922A", opacity: 0.4 }} />
          <div style={{ width: 6, height: 6, background: "#C4922A", transform: "rotate(45deg)" }} />
          <div style={{ flex: 1, maxWidth: 120, height: 1, background: "#C4922A", opacity: 0.4 }} />
        </div>

        <p style={{
          fontSize: "clamp(15px, 2vw, 19px)",
          lineHeight: 1.75,
          color: "#c2b89e",
          maxWidth: 620,
          margin: "0 auto",
        }}>
          From chef to Principal Engineer — the architect who modernised Panviva Core,
          containerised it on AKS, and showed the whole team what AI is truly capable of.
        </p>
      </header>

      {/* ── Timeline ── */}
      <section style={{ maxWidth: 760, margin: "0 auto", padding: "0 32px 96px" }}>
        <SectionHeading>The Journey</SectionHeading>

        <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {milestones.map((m, i) => (
            <li
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "140px 1px 1fr",
                gap: "0 28px",
                marginBottom: i < milestones.length - 1 ? 0 : 0,
              }}
            >
              {/* Year label */}
              <div style={{ paddingTop: 2, paddingBottom: 32, textAlign: "right" }}>
                <span style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  fontSize: 13,
                  fontStyle: "italic",
                  color: "#C4922A",
                  letterSpacing: "0.03em",
                }}>
                  {m.label}
                </span>
              </div>

              {/* Timeline spine */}
              <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#C4922A", flexShrink: 0, marginTop: 4 }} />
                {i < milestones.length - 1 && (
                  <div style={{ flex: 1, width: 1, background: "linear-gradient(to bottom, #C4922A44, #C4922A11)", minHeight: 48 }} />
                )}
              </div>

              {/* Content */}
              <div style={{ paddingBottom: 40 }}>
                <h3 style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#f0e8d8",
                  margin: "0 0 8px",
                  lineHeight: 1.3,
                }}>
                  {m.title}
                </h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.8, color: "#9e9080" }}>
                  {m.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Attributes grid ── */}
      <section style={{ background: "#131210", padding: "80px 32px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <SectionHeading>What Makes Tristan Remarkable</SectionHeading>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 1,
            border: "1px solid #2a2520",
            overflow: "hidden",
          }}>
            {attributes.map((a, i) => (
              <div
                key={i}
                style={{
                  padding: "36px 28px",
                  borderRight: "1px solid #2a2520",
                  borderBottom: "1px solid #2a2520",
                  position: "relative",
                }}
              >
                <span style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  fontSize: 11,
                  color: "#C4922A",
                  letterSpacing: "0.15em",
                  display: "block",
                  marginBottom: 12,
                  opacity: 0.8,
                }}>
                  {a.numeral}
                </span>
                <h3 style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#f0e8d8",
                  margin: "0 0 10px",
                }}>
                  {a.title}
                </h3>
                <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.8, color: "#7d7060" }}>
                  {a.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote ── */}
      <section style={{ maxWidth: 700, margin: "0 auto", padding: "96px 32px 80px", textAlign: "center" }}>
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, justifyContent: "center", marginBottom: 28 }}>
            <div style={{ flex: 1, maxWidth: 80, height: 1, background: "#C4922A", opacity: 0.3 }} />
            <div style={{ width: 5, height: 5, background: "#C4922A", transform: "rotate(45deg)" }} />
            <div style={{ flex: 1, maxWidth: 80, height: 1, background: "#C4922A", opacity: 0.3 }} />
          </div>
        </div>

        <blockquote style={{ margin: 0 }}>
          <p style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
            fontSize: "clamp(20px, 3vw, 28px)",
            fontStyle: "italic",
            lineHeight: 1.65,
            color: "#d8cfc2",
            margin: "0 0 28px",
          }}>
            "We wouldn't be here today if Tristan didn't push us,
            show us what AI is capable of. Today we honour that —
            and the remarkable journey of the person behind it all."
          </p>
          <cite style={{
            display: "block",
            fontStyle: "normal",
            fontSize: 12,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#C4922A",
          }}>
            The Panviva Team
          </cite>
        </blockquote>
      </section>

      {/* ── Happy Birthday closer ── */}
      <div style={{ textAlign: "center", padding: "0 32px 80px" }}>
        <p style={{
          fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
          fontSize: "clamp(32px, 5vw, 52px)",
          fontWeight: 700,
          color: "#C4922A",
          letterSpacing: "-0.01em",
          margin: 0,
        }}>
          Happy Birthday, Tristan.
        </p>
      </div>

      {/* ── Gold rule bottom ── */}
      <div style={{ height: 3, background: "linear-gradient(90deg, transparent, #C4922A 30%, #E8B84B 50%, #C4922A 70%, transparent)" }} />

      <footer style={{ textAlign: "center", padding: "20px 32px", fontSize: 11, color: "#3a3530", letterSpacing: "0.1em" }}>
        Built with the SiteAssistant Bot · Powered by Claude
      </footer>
    </main>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 56 }}>
      <h2 style={{
        fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
        fontSize: "clamp(22px, 3.5vw, 32px)",
        fontWeight: 700,
        color: "#f0e8d8",
        margin: "0 0 16px",
        letterSpacing: "-0.01em",
      }}>
        {children}
      </h2>
      <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center" }}>
        <div style={{ width: 40, height: 1, background: "#C4922A", opacity: 0.4 }} />
        <div style={{ width: 4, height: 4, background: "#C4922A", transform: "rotate(45deg)" }} />
        <div style={{ width: 40, height: 1, background: "#C4922A", opacity: 0.4 }} />
      </div>
    </div>
  );
}
