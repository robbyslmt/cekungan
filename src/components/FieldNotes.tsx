import { useLayoutEffect, useRef } from "react";
import { Backpack, Bus, Clock, Languages } from "lucide-react";
import { gsap } from "../lib/gsap";
import { FIELD_NOTES } from "../data/content";
import AnimatedWords from "./AnimatedWords";
import ChapterHead from "./ChapterHead";

const ICONS = {
  clock: Clock,
  backpack: Backpack,
  bus: Bus,
  languages: Languages,
} as const;

/* hand-drawn cross-section, west → east across the basin */
const TERRAIN =
  "M60,78 C90,74 120,79 150,79 C240,79 310,318 380,320 C450,322 540,312 600,313 C660,313 700,302 740,287 C790,268 810,244 850,224 C900,198 960,140 1010,129 C1080,114 1130,84 1180,76";

const MARKERS = [
  { x: 150, y: 79, name: "KAWAH PUTIH", alt: "2,434 M", ly: 52, volcano: true },
  { x: 380, y: 320, name: "BASIN FLOOR", alt: "0715 M", ly: 292, volcano: false },
  { x: 600, y: 313, name: "BANDUNG — KOTA", alt: "0768 M", ly: 344, below: true, volcano: false },
  { x: 740, y: 287, name: "DAGO", alt: "0950 M", ly: 258, volcano: false },
  { x: 850, y: 224, name: "LEMBANG", alt: "1400 M", ly: 195, volcano: false },
  { x: 1010, y: 129, name: "TANGKUBAN PERAHU", alt: "2076 M", ly: 98, volcano: true },
];

export default function FieldNotes() {
  const svgRef = useRef<SVGSVGElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".prof-path",
        { strokeDashoffset: 1 },
        {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: svgRef.current,
            start: "top 85%",
            end: "bottom 45%",
            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        ".prof-label",
        { opacity: 0, y: 8 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: svgRef.current, start: "top 70%" },
        }
      );
    }, svgRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="notes"
      data-altitude="768"
      data-chapter="FIELD NOTES"
      className="relative bg-paper px-5 py-24 md:px-10 md:py-36"
    >
      <ChapterHead
        index="06"
        title="Katerangan"
        gloss="field notes"
        alt="0768 M"
        temp="23.1°C"
      />

      <AnimatedWords
        as="h2"
        text="The profile of the basin."
        className="display-op mt-14 font-display text-4xl font-light leading-tight md:text-6xl"
      />

      {/* cross-section diagram */}
      <div
        data-reveal
        className="mt-12 overflow-x-auto rounded-sm border border-ink/15 bg-paper-deep/40 p-4 md:overflow-x-visible md:p-8"
      >
        <svg
          ref={svgRef}
          viewBox="0 0 1200 370"
          className="w-full min-w-[880px]"
          role="img"
          aria-label="Stylized west-to-east cross section of the Bandung Basin from Kawah Putih through the city to Tangkuban Perahu"
        >
          {/* grid */}
          {[
            { y: 299, label: "1000 M" },
            { y: 229, label: "1500 M" },
            { y: 159, label: "2000 M" },
          ].map((g) => (
            <g key={g.label}>
              <line x1="60" y1={g.y} x2="1180" y2={g.y} stroke="#17140E" strokeOpacity="0.14" strokeDasharray="3 5" />
              <text x="52" y={g.y + 3} textAnchor="end" fontSize="10" fill="#17140E" fillOpacity="0.4" fontFamily="Space Mono, monospace">
                {g.label}
              </text>
            </g>
          ))}
          <line x1="60" y1="350" x2="1180" y2="350" stroke="#17140E" strokeOpacity="0.2" />

          {/* terrain */}
          <path d={`${TERRAIN} L1180,350 L60,350 Z`} fill="#2f7d74" fillOpacity="0.07" />
          <path
            className="prof-path"
            d={TERRAIN}
            fill="none"
            stroke="#17140E"
            strokeWidth="2"
            strokeLinecap="round"
            pathLength={1}
            strokeDasharray={1}
          />

          {/* markers */}
          {MARKERS.map((m) => (
            <g key={m.name} className="prof-label">
              <line x1={m.x} y1={m.y} x2={m.x} y2="350" stroke="#17140E" strokeOpacity="0.18" strokeDasharray="2 4" />
              {m.volcano ? (
                <path d={`M${m.x},${m.y - 9} l5.5,9 h-11 Z`} fill="none" stroke="#bc5a2e" strokeWidth="1.5" />
              ) : m.below ? (
                <circle cx={m.x} cy={m.y} r="6" fill="#d9a62e" />
              ) : (
                <circle cx={m.x} cy={m.y} r="4.5" fill="#17140e" />
              )}
              <text
                x={m.x}
                y={m.ly}
                textAnchor="middle"
                fontSize="12"
                letterSpacing="1.5"
                fill={m.below ? "#bc5a2e" : "#17140E"}
                fontFamily="Space Mono, monospace"
              >
                {m.name}
              </text>
              <text
                x={m.x}
                y={m.ly + 14}
                textAnchor="middle"
                fontSize="10"
                fill="#17140E"
                fillOpacity="0.45"
                fontFamily="Space Mono, monospace"
              >
                {m.alt}
              </text>
            </g>
          ))}

          {/* diagram chrome */}
          <text x="60" y="30" fontSize="11" letterSpacing="2.5" fill="#17140E" fillOpacity="0.6" fontFamily="Space Mono, monospace">
            SECTION A–A′ — THE BANDUNG BASIN, WEST TO EAST
          </text>
          <text x="1180" y="30" textAnchor="end" fontSize="10" fill="#17140E" fillOpacity="0.4" fontFamily="Space Mono, monospace">
            VERTICAL EXAGGERATION ×7, FOR DRAMA
          </text>
        </svg>
      </div>

      {/* practical cards */}
      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {FIELD_NOTES.map((n) => {
          const Icon = ICONS[n.icon];
          return (
            <article
              key={n.title}
              data-reveal
              className="rounded-sm border border-ink/15 p-6 transition-colors duration-300 hover:border-ink/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sulfur/15">
                <Icon className="h-4 w-4 text-clay" strokeWidth={1.5} />
              </div>
              <p className="mt-5 font-mono text-[10px] tracking-[0.35em] text-ink/60">
                {n.title.toUpperCase()}
              </p>
              <p className="display-op mt-2 font-display text-lg italic text-ink/85">
                {n.sundanese}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-ink/60">{n.body}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
