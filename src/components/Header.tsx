import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { gsap } from "../lib/gsap";
import { getLenis, scrollToId } from "../lib/scroll";
import { NAV_LINKS } from "../data/content";
import { cn } from "../utils/cn";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  const openMenu = () => {
    setMounted(true);
    setOpen(true);
  };
  const closeMenu = () => {
    setOpen(false);
    window.setTimeout(() => setMounted(false), 600);
  };

  useEffect(() => {
    const lenis = getLenis();
    if (open) {
      lenis?.stop();
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".menu-link",
          { yPercent: 120 },
          { yPercent: 0, duration: 0.9, ease: "power4.out", stagger: 0.06, delay: 0.15 }
        );
        gsap.fromTo(
          ".menu-meta",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.08, delay: 0.5 }
        );
      }, overlayRef);
      return () => ctx.revert();
    }
    lenis?.start();
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (id: string) => {
    closeMenu();
    // wait for overlay exit before scrolling
    setTimeout(() => scrollToId(id), 420);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[60] mix-blend-difference">
        <div className="flex items-center justify-between px-5 py-5 text-white md:px-10">
          <button
            onClick={() => go("#top")}
            className="font-expanded text-xs font-semibold tracking-[0.4em] uppercase"
            aria-label="Back to top"
          >
            Cekungan<sup className="ml-1 font-mono text-[9px] tracking-normal">N°07</sup>
          </button>
          <button
            onClick={() => (open ? closeMenu() : openMenu())}
            className="group flex items-center gap-2 font-mono text-[10px] tracking-[0.35em] uppercase md:text-xs"
            aria-expanded={open}
          >
            {open ? "Close" : "Index"}
            <Plus
              className={cn(
                "h-4 w-4 transition-transform duration-500",
                open && "rotate-[135deg]"
              )}
              strokeWidth={1.5}
            />
          </button>
        </div>
      </header>

      {/* fullscreen index overlay */}
      <div
        ref={overlayRef}
        className={cn(
          "fixed inset-0 z-[55] bg-ink text-paper transition-opacity duration-500",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        style={{ visibility: mounted ? "visible" : "hidden" }}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col justify-between px-5 pb-8 pt-24 md:px-10 md:pt-28">
          <nav className="relative">
            <p className="menu-meta mb-6 font-mono text-[10px] tracking-[0.4em] text-sulfur">
              THE ASCENT — INDEX
            </p>
            <ul className="space-y-1 md:space-y-2">
              {NAV_LINKS.map((l, i) => (
                <li key={l.id} className="overflow-hidden">
                  <button
                    onClick={() => go(l.id)}
                    className="menu-link group flex w-full items-baseline justify-between gap-4 text-left"
                  >
                    <span className="display-op font-display text-3xl font-light transition-all duration-300 group-hover:translate-x-3 group-hover:text-teal-bright group-hover:italic md:text-5xl lg:text-6xl">
                      <span className="mr-4 font-mono text-xs align-top text-paper/55 md:text-sm">
                        {String(i).padStart(2, "0")}
                      </span>
                      {l.label}
                    </span>
                    <span className="flex items-center gap-2 font-mono text-[10px] text-paper/50 md:text-xs">
                      {l.alt} M
                      <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="menu-meta flex flex-wrap items-end justify-between gap-4 font-mono text-[10px] tracking-[0.25em] text-paper/50">
            <span>CEKUNGAN — A VERTICAL FIELD JOURNAL</span>
            <span className="hidden md:inline">06°54′S — 107°36′E · WEST JAVA</span>
            <span>BANDUNG, ID</span>
          </div>
        </div>
      </div>
    </>
  );
}
