import { Trophy, Medal, Users, Brain } from "lucide-react";
import { achievements } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

const iconMap = {
  trophy: Trophy,
  medal: Medal,
  users: Users,
  brain: Brain,
};

export function Achievements() {
  return (
    <section
      id="achievements"
      className="relative bg-ink-900/40 py-24 sm:py-28"
    >
      <div className="section-line absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Achievements"
          title="Results that hold up under scrutiny"
          description="National wins, dual GATE qualification, and community leadership — signal, not fluff."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a, i) => {
            const Icon = iconMap[a.icon];
            return (
              <div
                key={a.title}
                className={`reveal reveal-delay-${(i % 4) + 1} stat-card card-surface rounded-2xl p-6 transition duration-300`}
              >
                <div className="mb-5 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/25">
                    <Icon size={20} />
                  </div>
                  <span className="font-display text-2xl font-extrabold text-gradient-gold">
                    {a.highlight}
                  </span>
                </div>
                <h3 className="font-display text-base font-bold leading-snug text-white">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">
                  {a.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Timeline strip */}
        <div className="reveal mt-12 overflow-hidden rounded-2xl border border-ink-700/40 bg-ink-950/50 p-6 sm:p-8">
          <p className="mb-6 font-display text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
            Momentum
          </p>
          <ol className="relative grid gap-8 sm:grid-cols-3 sm:gap-4">
            <div
              className="absolute left-4 top-2 hidden h-px bg-gradient-to-r from-accent/60 via-teal/40 to-accent/30 sm:left-0 sm:right-0 sm:top-3 sm:block"
              aria-hidden
            />
            {[
              {
                t: "Build",
                d: "ServiceNow CSA/CAD + agentic AI systems with production debugging depth",
              },
              {
                t: "Compete",
                d: "1st of 170+ at Synaptix · Hackademia top 7 · SIH crypto discovery",
              },
              {
                t: "Qualify",
                d: "GATE 2026 dual paper · CGPA 9.3 · GDG hackathon lead",
              },
            ].map((step, i) => (
              <li key={step.t} className="relative sm:pt-8">
                <span className="absolute left-0 top-0 flex h-3 w-3 rounded-full bg-accent ring-4 ring-ink-950 sm:left-1/2 sm:-translate-x-1/2" />
                <div className="pl-8 sm:pl-0 sm:text-center">
                  <p className="font-display text-sm font-bold text-accent">
                    0{i + 1} · {step.t}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">
                    {step.d}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
