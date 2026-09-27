import { useEffect, useRef } from "react";

export function useReveal<T extends HTMLElement>(threshold = 0.12) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    const nodes = el.querySelectorAll(".reveal");
    nodes.forEach((n) => observer.observe(n));

    // Also observe the container itself if it has reveal
    if (el.classList.contains("reveal")) observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

export function useSectionReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    const observeAll = () => {
      document.querySelectorAll(".reveal:not(.visible)").forEach((n) => {
        observer.observe(n);
      });
    };

    observeAll();

    // Re-scan after short delays for dynamically mounted content
    const t1 = setTimeout(observeAll, 100);
    const t2 = setTimeout(observeAll, 500);

    return () => {
      observer.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);
}
