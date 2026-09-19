import { useLayoutEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import { MEDIA } from "../data/content";
import AnimatedWords from "./AnimatedWords";
import ChapterHead from "./ChapterHead";

const FACTS = [
  ["ELEVATION", "2,434 M — G. PATUHA"],
  ["THE LAKE", "SULFUR-TINTED, ACIDIC, SHIFTING"],
  ["THE AIR", "±10°C — PACK WARM"],
  ["ACCESS", "CIWIDEY ROAD, 40 KM SOUTH"],
];

export default function Crater() {
  const sectionRef = useRef<HTMLElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        circleRef.current,
        { clipPath: "circle(0% at 50% 50%)" },
        {
          clipPath: "circle(75% at 50% 50%)",
          ease: "none",
          scrollTrigger: {
            trigger: circleRef.current,
            start: "top 90%",
            end: "top 25%",
            scrub: 1,
          },
        }
      );
      gsap.to(".crater-img", {
        yPercent: -6,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="kawah"
      ref={sectionRef}
      data-altitude="2434"
      data-chapter="KAWAH PUTIH"
      className="relative overflow-hidden bg-ink text-paper"
    >
      {/* ambient video */}
      <div className="absolute inset-0 opacity-25">
        <video
          src={MEDIA.videos.crater}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/30 to-ink" />
      </div>

      {/* altitude watermark */}
      <div
        aria-hidden
        className="display-op pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-display text-[34vw] font-bold leading-none text-outline-thin opacity-[0.12]"
      >
        2434
      </div>

      <div className="relative px-5 py-24 md:px-10 md:py-36">
        <ChapterHead
          dark
          index="05"
          title="Kawah Putih"
          gloss="'the white crater'"
          alt="2434 M"
          temp="8.0°C"
        />

        <div className="mt-16 grid items-center gap-14 md:mt-24 md:grid-cols-12">
          {/* crater mouth */}
          <div className="md:col-span-7">
            <div
              ref={circleRef}
              className="relative mx-auto aspect-square w-full max-w-[580px] overflow-hidden rounded-full"
              style={{ clipPath: "circle(0% at 50% 50%)" }}
            >
              <img
                src={MEDIA.img.kawahPutihLandscape}
                alt="The turquoise crater lake of Kawah Putih in Ciwidey, West Java"
                loading="lazy"
                className="crater-img img-tone h-full w-full scale-[1.12] object-cover"
              />
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-paper/25" />
            </div>
            <p className="mt-8 text-center font-mono text-[10px] tracking-[0.3em] text-paper/50">
              FIG. 07 — THE CRATER MOUTH, MOUNT PATUHA
            </p>
          </div>

          <div className="md:col-span-5">
            <AnimatedWords
              as="h3"
              text="A lake the color of mint and bone."
              className="display-op font-display text-4xl font-light leading-tight md:text-5xl"
            />
            <p
              data-reveal
              className="mt-6 text-sm leading-relaxed text-paper/65"
            >
              Sulfur paints the shore bone-white at 2,434 metres, inside Mount
              Patuha's caldera forty kilometres south of the city. The water
              shifts — pale jade under sun, milky steel under cloud — and the
              air is thin, cold, and faintly rotten with egg. The mountain is
              breathing. You do not look at Kawah Putih; you trespass on it.
            </p>
            <dl
              data-reveal
              className="mt-10 space-y-3 border-t border-paper/20 pt-6 font-mono text-[10px] tracking-[0.18em]"
            >
              {FACTS.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-4">
                  <dt className="text-paper/55">{k}</dt>
                  <dd className="text-right text-paper/85">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
