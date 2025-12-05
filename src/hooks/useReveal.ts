import { useEffect } from "react";

/**
 * useReveal attaches an IntersectionObserver to elements matching the provided selector
 * and toggles the `revealed` class when they enter the viewport.
 */
export function useReveal(selector = ".reveal, .reveal-fade, .reveal-left, .reveal-right") {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
}


