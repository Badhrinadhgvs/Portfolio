import { about } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Shield, Cpu, Workflow, Rocket } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Enterprise depth",
    text: "Scoped apps, ACLs, Flow Designer, and implementation docs that survive audits — not just demos.",
  },
  {
    icon: Cpu,
    title: "Agentic AI",
    text: "LangGraph multi-agent systems, RAG, MCP tooling, and fallbacks when models fail.",
  },
  {
    icon: Workflow,
    title: "Forward deployed",
    text: "Client-ready communication, rapid diagnosis, and systems operators can actually run.",
  },
  {
    icon: Rocket,
    title: "Ship under pressure",
    text: "Hackathon wins and assessment builds prove speed without sacrificing technical rigor.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="section-line absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="Dual-track by design — not by accident"
          description="AI systems without enterprise integration stall. Enterprise platforms without intelligent automation fall behind. I build at the intersection."
        />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="reveal reveal-delay-1 space-y-5 lg:col-span-7">
            {about.paragraphs.map((p) => (
              <p
                key={p.slice(0, 32)}
                className="text-base leading-relaxed text-ink-300 sm:text-[1.05rem]"
              >
                {p}
              </p>
            ))}
          </div>

          <div className="reveal reveal-delay-2 lg:col-span-5">
            <div className="card-surface rounded-2xl p-6 sm:p-7">
              <p className="mb-5 font-display text-sm font-semibold uppercase tracking-widest text-accent">
                Snapshot
              </p>
              <dl className="grid grid-cols-2 gap-4">
                {about.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="rounded-xl border border-ink-700/40 bg-ink-900/50 p-4"
                  >
                    <dt className="text-xs uppercase tracking-wider text-ink-500">
                      {h.label}
                    </dt>
                    <dd className="mt-1 font-display text-xl font-bold text-white">
                      {h.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 border-t border-ink-700/40 pt-5 text-sm leading-relaxed text-ink-400">
                Positioning: drop-in technical owner for agentic AI delivery or
                ServiceNow-heavy enterprise engagements.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`reveal reveal-delay-${(i % 4) + 1} card-surface group rounded-2xl p-5 transition duration-300`}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20 transition group-hover:bg-accent/20">
                <p.icon size={18} />
              </div>
              <h3 className="font-display text-base font-bold text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-400">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
