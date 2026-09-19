import { useEffect, useRef } from "react";

const BASE_ALT = 715;
const SUMMIT_ALT = 2434;
const BASE_TEMP = 24;
const SUMMIT_TEMP = 8;

/**
 * Fixed vertical altimeter. Reads [data-altitude] markers across the page and
 * interpolates altitude + temperature from scroll position.
 */
export default function Altimeter() {
  const altRef = useRef<HTMLSpanElement>(null);
  const tempRef = useRef<HTMLSpanElement>(null);
  const chapRef = useRef<HTMLSpanElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const chipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let markers: { el: HTMLElement; alt: number; label: string }[] = [];

    const measure = () => {
      markers = Array.from(document.querySelectorAll<HTMLElement>("[data-altitude]")).map(
        (el) => ({
          el,
          alt: parseFloat(el.dataset.altitude || "0"),
          label: el.dataset.chapter || "",
        })
      );
    };

    const update = () => {
      if (markers.length === 0) return;
      const mid = window.scrollY + window.innerHeight * 0.45;
      const tops = markers.map((m) => m.el.getBoundingClientRect().top + window.scrollY);

      let alt = markers[0].alt;
      let label = markers[0].label;
      for (let i = 0; i < markers.length - 1; i++) {
        if (mid >= tops[i]) {
          const span = Math.max(1, tops[i + 1] - tops[i]);
          const t = Math.min(1, Math.max(0, (mid - tops[i]) / span));
          alt = markers[i].alt + (markers[i + 1].alt - markers[i].alt) * t;
          label = markers[t > 0.5 ? i + 1 : i].label;
        }
      }
      if (mid >= tops[tops.length - 1]) {
        alt = markers[markers.length - 1].alt;
        label = markers[markers.length - 1].label;
      }

      const temp = BASE_TEMP + ((alt - BASE_ALT) * (SUMMIT_TEMP - BASE_TEMP)) / (SUMMIT_ALT - BASE_ALT);
      const altText = String(Math.round(alt)).padStart(4, "0");

      if (altRef.current) altRef.current.textContent = altText;
      if (tempRef.current) tempRef.current.textContent = `${temp.toFixed(1)}°C`;
      if (chapRef.current && chapRef.current.textContent !== label)
        chapRef.current.textContent = label;
      if (chipRef.current)
        chipRef.current.textContent = `${altText} M — ${temp.toFixed(1)}°C`;

      const doc = document.documentElement;
      const p = doc.scrollHeight - window.innerHeight;
      const progress = p > 0 ? window.scrollY / p : 0;
      if (markRef.current) markRef.current.style.top = `${Math.min(100, progress * 100)}%`;
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* desktop rail */}
      <div className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-5 text-white mix-blend-difference lg:flex">
        <span className="vertical-rl font-mono text-[9px] tracking-[0.4em] opacity-60">
          ALTITUDE — CEKUNGAN
        </span>
        <div className="flex flex-col items-center gap-1">
          <span ref={altRef} className="font-mono text-sm font-bold tabular-nums">
            0715
          </span>
          <span className="font-mono text-[9px] opacity-60">M ASL</span>
        </div>
        <div className="relative h-44 w-px bg-white/30">
          <div className="ticks absolute inset-y-0 left-1 w-[7px] text-white/30" />
          <div
            ref={markRef}
            className="absolute left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white"
            style={{ top: "0%" }}
          />
        </div>
        <div className="flex flex-col items-center gap-1">
          <span ref={tempRef} className="font-mono text-[11px] tabular-nums">
            24.0°C
          </span>
        </div>
        <span
          ref={chapRef}
          className="vertical-rl max-h-44 truncate font-mono text-[9px] tracking-[0.35em] opacity-60"
        >
          BASE CAMP
        </span>
      </div>

      {/* mobile chip */}
      <div className="fixed bottom-4 left-4 z-40 lg:hidden">
        <div
          ref={chipRef}
          className="rounded-full border border-paper/20 bg-ink/85 px-3.5 py-2 font-mono text-[10px] tracking-[0.12em] text-paper backdrop-blur-sm"
        >
          0715 M — 24.0°C
        </div>
      </div>
    </>
  );
}
