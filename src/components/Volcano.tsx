import { useLayoutEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import { LEGEND, MEDIA } from "../data/content";
import AnimatedWords from "./AnimatedWords";
import ChapterHead from "./ChapterHead";
import { cn } from "../utils/cn";

export default function Volcano() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const stepNumRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray<HTMLElement>(".vol-step");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: "+=480%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const idx = Math.min(
              steps.length,
              Math.max(1, Math.ceil(self.progress * (steps.length + 1)))
            );
            if (stepNumRef.current)
              stepNumRef.current.textContent = String(idx).padStart(2, "0");
          },
        },
      });

      steps.forEach((step, i) => {
        if (i === 0) return;
        tl.to(
          steps[i - 1],
          { opacity: 0, yPercent: -8, duration: 0.55, ease: "power2.in" },
          i
        ).fromTo(
          step,
          { opacity: 0, yPercent: 14 },
          { opacity: 1, yPercent: 0, duration: 0.55, ease: "power2.out" },
          i + 0.4
        );
      });

      /* epilogue: the mountain itself */
      tl.to(
        steps[steps.length - 1],
        { opacity: 0, yPercent: -8, duration: 0.55, ease: "power2.in" },
        steps.length
      ).fromTo(
        ".vol-img",
        { opacity: 0, scale: 1.12 },
        { opacity: 1, scale: 1, duration: 0.9, ease: "power2.out" },
        steps.length + 0.35
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="gunung"
      ref={sectionRef}
      data-altitude="2076"
      data-chapter="TANGKUBAN PERAHU"
      className="relative bg-ink text-paper"
    >
      {/* pinned storytelling screen */}
      <div ref={pinRef} className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-screen"
          style={{
            backgroundImage: `url(${MEDIA.topo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative flex h-svh flex-col px-5 md:px-10">
          <ChapterHead
            dark
            index="04"
            title="Tangkuban Perahu"
            gloss="'the upturned boat'"
            alt="2076 M"
            temp="12.4°C"
            className="mt-20 md:mt-24"
          />

          <div className="relative flex flex-1 items-center">
            {/* vertical title */}
            <span
              aria-hidden
              className="display-op vertical-rl pointer-events-none absolute -left-2 top-1/2 hidden -translate-y-1/2 select-none font-display text-[8.5vh] font-light text-outline-thin opacity-40 md:block"
            >
              SANGKURIANG
            </span>

            {/* steps */}
            <div className="relative mx-auto min-h-[62vh] w-full max-w-3xl">
              {LEGEND.map((s, i) => (
                <div
                  key={s.no}
                  className={cn(
                    "vol-step absolute inset-0 flex flex-col justify-center",
                    i !== 0 && "pointer-events-none opacity-0"
                  )}
                >
                  <p className="font-mono text-[10px] tracking-[0.4em] text-sulfur">
                    BEAT {s.no} / 05 — THE LEGEND OF SANGKURIANG
                  </p>
                  <p className="display-op mt-6 font-display text-2xl font-light leading-snug md:text-4xl">
                    {s.text}
                  </p>
                </div>
              ))}
              <figure className="vol-img pointer-events-none absolute inset-0 flex items-center opacity-0">
                <div className="w-full overflow-hidden rounded-sm">
                  <div className="relative">
                    <img
                      src={MEDIA.img.tangkuban}
                      alt="Hiker at the rim of Tangkuban Perahu volcano"
                      loading="lazy"
                      className="img-tone aspect-[16/9] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                    <figcaption className="absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.25em] text-paper/80">
                      FIG. 06 — THE UPTURNED BOAT, 2,076 M
                    </figcaption>
                  </div>
                </div>
              </figure>
            </div>

            {/* beat counter */}
            <div className="absolute right-1 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex">
              <span
                ref={stepNumRef}
                className="display-op font-display text-4xl font-light tabular-nums"
              >
                01
              </span>
              <span className="font-mono text-[10px] text-paper/55">/ 05</span>
              <div className="h-20 w-px bg-paper/25" />
            </div>
          </div>
        </div>
      </div>

      {/* epilogue after the pin */}
      <div className="px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-10 md:grid-cols-12">
          <AnimatedWords
            as="h3"
            text="The only Indonesian volcano you can drive into."
            className="display-op font-display text-4xl font-light leading-tight md:col-span-7 md:text-6xl"
          />
          <div
            data-reveal
            className="space-y-4 text-sm leading-relaxed text-paper/65 md:col-span-5"
          >
            <p>
              Thirty kilometres north, the road bends upward through pine and
              cloud and ends at a hole in the sky — the craters Ratu, Domas and
              Jurig steaming gently above the Lembang fault, keeping watch over
              the basin like a sleeping helmsman.
            </p>
            <p className="font-mono text-[10px] leading-relaxed tracking-[0.2em] text-teal-bright">
              TANGKUBAN PERAHU (TAHNG-KOO-BAHN PEH-RAH-HOO) — N. "THE UPTURNED
              BOAT"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
