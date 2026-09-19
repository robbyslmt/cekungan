import { useEffect, useLayoutEffect, useRef } from "react";
import { ArrowUp, Asterisk } from "lucide-react";
import { gsap } from "../lib/gsap";
import { MEDIA } from "../data/content";
import Marquee from "./Marquee";

const TITLE = "BANDUNG".split("");

const STATS = [
  { v: "768 M", l: "CITY FLOOR" },
  { v: "19°C", l: "ETERNAL SPRING" },
  { v: "2,434 M", l: "SUMMIT ABOVE" },
];

const TICKER = [
  "KOTA KEMBANG — CITY OF FLOWERS",
  "PARIS VAN JAVA",
  "TANEUH SUANDA — LAND OF SUNDA",
  "768 M ABOVE THE ORDINARY",
  "SOMEAH SINCE DAY ONE",
];

export default function Hero({ ready }: { ready: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  /* scroll parallax */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(videoWrapRef.current, {
        yPercent: 16,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(contentRef.current, {
        y: -70,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  /* intro reveal, fired when the preloader curtain lifts */
  useEffect(() => {
    if (!ready) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.fromTo(
        ".hero-video",
        { scale: 1.25 },
        { scale: 1, duration: 2.4, ease: "power2.out" },
        0
      )
        .fromTo(
          ".hero-ch",
          { yPercent: 118 },
          { yPercent: 0, duration: 1.25, stagger: 0.055 },
          0.1
        )
        .fromTo(
          ".hero-el",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.08 },
          0.55
        )
        .fromTo(
          ".hero-script",
          { opacity: 0, rotate: 3, scale: 0.85 },
          { opacity: 1, rotate: -4, scale: 1, duration: 1.1, ease: "back.out(1.6)" },
          1.05
        )
        .fromTo(".hero-ticker", { opacity: 0 }, { opacity: 1, duration: 0.9 }, 1.2);
    }, sectionRef);
    return () => ctx.revert();
  }, [ready]);

  return (
    <section
      ref={sectionRef}
      data-altitude="715"
      data-chapter="BASE CAMP"
      className="relative flex min-h-svh flex-col overflow-hidden bg-ink text-paper"
    >
      {/* video backdrop */}
      <div ref={videoWrapRef} className="absolute inset-0 will-change-transform">
        <video
          className="hero-video h-full w-full object-cover opacity-50"
          src={MEDIA.videos.hero}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/20 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-ink/30" />
        <div
          className="absolute inset-0 opacity-[0.09] mix-blend-screen"
          style={{
            backgroundImage: `url(${MEDIA.topo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* vertical side label */}
      <div className="hero-el absolute left-5 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
        <span className="vertical-rl font-mono text-[10px] tracking-[0.45em] text-paper/55">
          PARIS VAN JAVA — KOTA KEMBANG — CITY OF FLOWERS
        </span>
      </div>

      {/* content */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-1 flex-col px-5 pt-24 md:px-10 md:pt-28"
      >
        <div className="hero-el flex items-center justify-between font-mono text-[10px] tracking-[0.3em] text-paper/60 md:text-xs">
          <span>A VERTICAL FIELD JOURNAL — VOL. 07</span>
          <span className="hidden md:inline">N 06°54′ — E 107°36′ · WEST JAVA</span>
        </div>

        <div className="flex flex-1 flex-col justify-center py-12">
          <p className="hero-el mb-6 max-w-xl font-mono text-[10px] leading-relaxed tracking-[0.18em] text-teal-bright md:text-xs">
            CEKUNGAN (CHEK-OON-GAHN) — N. BASIN; THE BOWL OF MOUNTAINS BANDUNG
            SLEEPS IN
          </p>
          <h1 className="relative">
            <span className="sr-only">Bandung</span>
            <span
              aria-hidden
              className="display-op block font-display text-[clamp(4.2rem,14.5vw,15rem)] font-semibold leading-[0.85] tracking-[-0.02em]"
            >
              {TITLE.map((c, i) => (
                <span key={i} className="inline-block overflow-hidden pb-[0.09em] -mb-[0.09em]">
                  <span className="hero-ch inline-block will-change-transform">{c}</span>
                </span>
              ))}
            </span>
            <span className="hero-script pointer-events-none absolute -bottom-3 right-2 rotate-[-4deg] font-display text-[clamp(1.7rem,4vw,4.2rem)] font-light italic text-sulfur md:-bottom-6">
              Paris van Java
            </span>
          </h1>
        </div>

        <div className="grid gap-8 pb-10 md:grid-cols-12 md:items-end">
          <p className="hero-el max-w-md text-sm leading-relaxed text-paper/75 md:col-span-5">
            Two hours south of Jakarta the land buckles upward into a green bowl,
            where two million people live at 768 metres above the sea — kissed by
            volcanic soil, morning mist, and an eternal spring.
          </p>
          <div className="hero-el grid grid-cols-3 gap-4 border-t border-paper/25 pt-4 md:col-span-4">
            {STATS.map((s) => (
              <div key={s.l}>
                <p className="display-op font-display text-xl font-medium md:text-3xl">
                  {s.v}
                </p>
                <p className="mt-1 font-mono text-[9px] tracking-[0.22em] text-paper/50">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
          <div className="hero-el flex md:col-span-3 md:justify-end">
            <div className="flex items-center gap-4">
              <div className="animate-float flex h-12 w-12 items-center justify-center rounded-full border border-paper/30">
                <ArrowUp className="h-4 w-4" strokeWidth={1.5} />
              </div>
              <div className="font-mono text-[10px] leading-relaxed tracking-[0.28em] text-paper/60">
                SCROLL TO ASCEND
                <br />
                715 M → 2,434 M
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ticker */}
      <Marquee className="hero-ticker relative z-10 border-t border-paper/15 py-3 font-mono text-[10px] tracking-[0.3em] text-paper/55">
        {TICKER.map((t) => (
          <span key={t} className="flex items-center whitespace-nowrap">
            <Asterisk className="mx-6 h-3.5 w-3.5 text-sulfur" strokeWidth={1.5} />
            {t}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
