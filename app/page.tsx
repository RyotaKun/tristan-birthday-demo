export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-blue-400 font-medium tracking-widest uppercase text-sm mb-4">
            🎂 Happy Birthday — April 30, 2026
          </p>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
            Tristan McSwain
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From chef to Principal Engineer — the architect who modernised Panviva Core,
            containerised it on AKS, and showed the whole team what AI is truly capable of.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-5 py-2 text-blue-300 text-sm">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            Ask the bot anything about Tristan ↘
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">The Journey</h2>
        <div className="relative border-l-2 border-blue-500/30 ml-4 space-y-10">
          {[
            {
              year: "Before Tech",
              title: "Chef",
              desc: "Tristan started his career in the kitchen — no formal tech background, just curiosity and drive.",
              color: "bg-amber-400",
            },
            {
              year: "2017",
              title: "Joined Panviva — Support Engineer",
              desc: "Entered Panviva through the support team. Learned the product from the ground up: production issues, customer pain, operational reality before code.",
              color: "bg-blue-400",
            },
            {
              year: "2018–2021",
              title: "Developer → Senior Developer → Tech Lead",
              desc: "Self-driven learning through real-world problems. Grew into technical leadership by solving the hard, unglamorous foundations: TLS, app server reliability, platform compatibility.",
              color: "bg-indigo-400",
            },
            {
              year: "2022–2023",
              title: "Architect — Core Modernisation",
              desc: "Led the architectural breakthroughs that made Core Modernisation possible: decoupled document type from layout, enforced forward-only design, and enabled safe, controlled transformation of a legacy system.",
              color: "bg-violet-400",
            },
            {
              year: "2024",
              title: "AKS & Containerisation (Phoenix)",
              desc: "Drove Panviva's Kubernetes journey end-to-end — Helm orchestration, secrets management, environment parity from Dev to Prod. Not just 'working', but operationally sane and scalable.",
              color: "bg-cyan-400",
            },
            {
              year: "2025–2026",
              title: "Principal Engineer & AI Champion",
              desc: "Authored the AI Sidekick widget architecture (ADR-037), presented 'Creating a Bright Blue Sky with AI', and proved that AI multiplies good engineering — it doesn't replace it.",
              color: "bg-emerald-400",
            },
          ].map((item) => (
            <div key={item.year} className="relative pl-10">
              <div
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full ${item.color} ring-4 ring-slate-900`}
              />
              <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-1">
                {item.year}
              </p>
              <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">What Makes Tristan Remarkable</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              icon: "🏗️",
              title: "Systems Thinker",
              desc: "Balances content, identity, infrastructure, and migration semantics simultaneously. Never optimises one layer at the expense of another.",
            },
            {
              icon: "🤖",
              title: "AI Pioneer",
              desc: "One of the first at Upland to use AI as a real engineering tool — planning, architecture review, migration reasoning. His motto: AI multiplies good engineering.",
            },
            {
              icon: "🌏",
              title: "Big Life Moves",
              desc: "Melbourne → Townsville → Canada. Navigated major personal transitions while sustaining technical excellence. Family always comes first.",
            },
            {
              icon: "🔐",
              title: "Security Champion",
              desc: "Introduced short-lived purpose-specific JWTs, closed multi-tenant data risks, and unified auth — security evolved with the platform, not as an afterthought.",
            },
            {
              icon: "🎓",
              title: "Self-Made Engineer",
              desc: "No formal CS degree. Chef → support → developer → principal engineer. Proof that non-traditional paths create exceptional engineers.",
            },
            {
              icon: "🤝",
              title: "Mentor & Leader",
              desc: "Low ceremony, high signal. Advocates strongly for growing engineers internally — because that was once his own path.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors"
            >
              <div className="text-3xl mb-3">{card.icon}</div>
              <h3 className="font-bold text-white mb-2">{card.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Birthday message */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-400/20 rounded-3xl p-10">
          <p className="text-4xl mb-6">🎉</p>
          <blockquote className="text-xl text-slate-200 italic leading-relaxed mb-6">
            "We wouldn't be here today if Tristan didn't push us, show us what AI is capable of.
            Today we honour that — and the remarkable journey of the person behind it all."
          </blockquote>
          <p className="text-blue-400 font-medium">Happy Birthday, Tristan. — The Panviva Team</p>
        </div>
      </section>

      <footer className="text-center pb-10 text-slate-600 text-sm">
        Built with the SiteAssistant Bot — powered by Claude
      </footer>
    </div>
  );
}
