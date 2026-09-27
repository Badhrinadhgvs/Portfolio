import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";
import { IconGitHub, IconLinkedIn } from "./Icons";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sectionIds = navLinks.map((l) => l.href.slice(1));
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "nav-blur" : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="group flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 text-sm text-accent ring-1 ring-accent/30 transition group-hover:bg-accent/25">
            B
          </span>
          <span className="hidden sm:inline">
            Badhri<span className="text-accent">nadh</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-accent"
                      : "text-ink-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-px bg-accent/70" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-ink-300 transition hover:bg-ink-800 hover:text-white"
            aria-label="GitHub"
          >
            <IconGitHub size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-ink-300 transition hover:bg-ink-800 hover:text-white"
            aria-label="LinkedIn"
          >
            <IconLinkedIn size={18} />
          </a>
          <a
            href="#contact"
            className="ml-1 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-ink-950 transition hover:bg-[#ffb61a] hover:shadow-lg hover:shadow-accent/20"
          >
            Hire me
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-ink-200 transition hover:bg-ink-800 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-16 bottom-0 z-40 bg-ink-950/98 backdrop-blur-xl transition-all duration-300 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3.5 font-display text-lg font-semibold text-ink-100 transition hover:bg-ink-800 hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-3 px-10">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-ink-600 py-3 text-sm text-ink-200"
          >
            <IconGitHub size={16} /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-ink-600 py-3 text-sm text-ink-200"
          >
            <IconLinkedIn size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}
