import { GraduationCap, BookOpen } from "lucide-react";
import { education } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="relative bg-ink-900/40 py-24 sm:py-28">
      <div className="section-line absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation"
          description="Strong fundamentals with competitive exam signal — dual GATE papers while finishing B.Tech."
        />

        <div className="reveal card-surface overflow-hidden rounded-2xl">
          <div className="grid lg:grid-cols-5">
            <div className="relative flex flex-col justify-center border-b border-ink-700/40 bg-gradient-to-br from-accent/10 via-ink-900 to-ink-900 p-8 lg:col-span-2 lg:border-b-0 lg:border-r">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent ring-1 ring-accent/30">
                <GraduationCap size={22} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                {education.status}
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold text-white">
                {education.degree}
              </h3>
              <p className="mt-2 text-ink-300">{education.school}</p>
              <div className="mt-6 inline-flex w-fit items-baseline gap-2 rounded-xl border border-accent/25 bg-ink-950/50 px-4 py-3">
                <span className="font-display text-3xl font-extrabold text-gradient-gold">
                  {education.cgpa}
                </span>
                <span className="text-xs uppercase tracking-wider text-ink-500">
                  CGPA
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-5 p-8 lg:col-span-3">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-ink-500">
                <BookOpen size={14} className="text-teal" />
                Competitive exams
              </div>
              <ul className="space-y-3">
                {education.extras.map((e) => (
                  <li
                    key={e}
                    className="flex items-start gap-3 rounded-xl border border-ink-700/40 bg-ink-950/40 px-4 py-3.5"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                    <span className="text-sm leading-relaxed text-ink-200">
                      {e}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-ink-400">
                Qualified in both GATE 2026 Data Science &amp; AI and CS/IT
                without complete preparation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
