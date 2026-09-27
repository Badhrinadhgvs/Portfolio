import { ArrowUpRight, Layers } from "lucide-react";
import { projects } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { IconGitHub } from "./Icons";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="section-line absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Flagship work with real technical depth"
          description="Problem → approach → stack → outcome for confirmed work."
        />

        <div className="space-y-6">
          {featured.map((project, i) => (
            <article
              key={project.id}
              className={`reveal reveal-delay-${(i % 4) + 1} card-surface group relative overflow-hidden rounded-2xl p-6 transition duration-300 sm:p-8`}
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/5 blur-3xl transition group-hover:bg-accent/10" />

              <div className="relative flex flex-col gap-6 lg:flex-row lg:gap-10">
                <div className="lg:w-[42%]">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-accent/25 bg-accent/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-accent">
                      {project.tag}
                    </span>
                    <span className="font-display text-xs text-ink-500">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold leading-snug text-white sm:text-2xl">
                    {project.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-ink-600/50 bg-ink-900/60 px-2 py-1 text-[11px] text-ink-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent transition hover:text-[#ffb61a]"
                    >
                      <IconGitHub size={14} />
                      View on GitHub
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>

                <div className="grid flex-1 gap-4 sm:grid-cols-3">
                  <div>
                    <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-ink-500">
                      Problem
                    </p>
                    <p className="text-sm leading-relaxed text-ink-300">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-ink-500">
                      Approach
                    </p>
                    <p className="text-sm leading-relaxed text-ink-300">
                      {project.approach}
                    </p>
                  </div>
                  <div>
                    <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-teal">
                      Outcome
                    </p>
                    <p className="text-sm leading-relaxed text-ink-200">
                      {project.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* More projects grid */}
        <div className="mt-16">
          <div className="reveal mb-8 flex items-center gap-3">
            <Layers size={18} className="text-accent" />
            <h3 className="font-display text-xl font-bold text-white">
              More confirmed work
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <article
                key={p.id}
                className={`reveal reveal-delay-${(i % 3) + 1} card-surface flex flex-col rounded-2xl p-5 transition duration-300`}
              >
                <span className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-teal">
                  {p.tag}
                </span>
                <h4 className="font-display text-base font-bold text-white">
                  {p.title}
                </h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-400">
                  {p.outcome}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5 border-t border-ink-700/40 pt-4">
                  {p.stack.slice(0, 4).map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-ink-800/80 px-2 py-0.5 text-[10px] text-ink-400"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
