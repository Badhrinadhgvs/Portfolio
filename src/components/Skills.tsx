import { skillGroups } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="relative bg-ink-900/40 py-24 sm:py-28">
      <div className="section-line absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Tooling with intent"
          description="Grouped by how I actually ship — agentic AI, ServiceNow platforms, full-stack delivery, and the math underneath."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className={`reveal reveal-delay-${(i % 4) + 1} card-surface rounded-2xl p-6 sm:p-7`}
            >
              <div className="mb-5 flex items-center gap-3">
                <span
                  className={`h-2 w-2 rounded-full ${
                    group.accent === "gold" ? "bg-accent" : "bg-teal"
                  }`}
                />
                <h3 className="font-display text-lg font-bold text-white">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
