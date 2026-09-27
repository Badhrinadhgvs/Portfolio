import { ArrowDown, Mail, MapPin, FileText } from "lucide-react";
import { profile } from "../data/portfolio";
import { useTypewriter } from "../hooks/useTypewriter";
import { IconGitHub, IconLinkedIn } from "./Icons";
import { Avatar } from "./Avatar";

export function Hero() {
  const typed = useTypewriter(profile.roles, 65, 1600);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="hero-mesh pointer-events-none absolute inset-0" />
      <div className="grid-overlay pointer-events-none absolute inset-0" />

      <div
        className="orb orb-slow left-[-10%] top-[15%] h-72 w-72 bg-accent/20"
        aria-hidden
      />
      <div
        className="orb right-[-5%] top-[35%] h-80 w-80 bg-teal/15"
        style={{ animationDelay: "2s" }}
        aria-hidden
      />
      <div
        className="orb bottom-[10%] left-[40%] h-56 w-56 bg-accent/10"
        style={{ animationDelay: "4s" }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          <Avatar />
          <div className="max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-ink-600/60 bg-ink-900/70 px-3.5 py-1.5 text-sm text-ink-300 backdrop-blur">
            <span className="pulse-dot relative flex h-2 w-2">
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
            </span>
            Open to FDE · AI Eng · ServiceNow roles
          </div>

          <p className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.2em] text-ink-400">
            {profile.fullName}
          </p>

          <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Building systems that{" "}
            <span className="text-gradient">think</span>
            <br className="hidden sm:block" /> and platforms that{" "}
            <span className="text-gradient-gold">ship</span>
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-2 text-lg text-ink-300 sm:text-xl">
            <span className="text-ink-400">I am a</span>
            <span className="typing-cursor min-w-[12ch] font-display font-semibold text-accent">
              {typed}
            </span>
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-400 sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm text-ink-500">
            <MapPin size={14} className="text-accent/80" />
            {profile.location}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-ink-950 transition hover:bg-[#ffb61a] hover:shadow-xl hover:shadow-accent/25"
            >
              <Mail size={16} />
              Contact
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink-600 bg-ink-900/50 px-5 py-3 text-sm font-semibold text-ink-100 transition hover:border-ink-400 hover:bg-ink-800"
            >
              <IconGitHub size={16} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink-600 bg-ink-900/50 px-5 py-3 text-sm font-semibold text-ink-100 transition hover:border-ink-400 hover:bg-ink-800"
            >
              <IconLinkedIn size={16} />
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}?subject=Resume%20request%20—%20Badhrinadh`}
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-5 py-3 text-sm font-semibold text-accent transition hover:bg-accent/20"
            >
              <FileText size={16} />
              Resume
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-6">
            {[
              { k: "ServiceNow", v: "CSA + CAD" },
              { k: "Hackathons", v: "1st of 170+" },
              { k: "CGPA", v: "9.3 / 10" },
              { k: "GATE 2026", v: "2 papers" },
            ].map((s) => (
              <div
                key={s.k}
                className="rounded-xl border border-ink-700/50 bg-ink-900/40 px-4 py-3 backdrop-blur sm:min-w-[120px]"
              >
                <div className="font-display text-lg font-bold text-white">
                  {s.v}
                </div>
                <div className="text-xs uppercase tracking-wider text-ink-500">
                  {s.k}
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-ink-500 transition hover:text-accent"
        aria-label="Scroll to about"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
