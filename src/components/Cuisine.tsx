import { useLayoutEffect, useRef, useState } from "react";
import { ArrowUpRight, Flame } from "lucide-react";
import { gsap } from "../lib/gsap";
import { DISHES, MEDIA, type Dish } from "../data/content";
import AnimatedWords from "./AnimatedWords";
import ChapterHead from "./ChapterHead";
import { cn } from "../utils/cn";

function SambalMeter({ heat }: { heat: number }) {
  return (
    <span className="flex items-center gap-1" title={`Sambal meter: ${heat}/5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Flame
          key={i}
          className={cn(
            "h-3 w-3",
            i < heat ? "fill-clay text-clay" : "text-ink/15"
          )}
          strokeWidth={1.5}
        />
      ))}
      <span className="ml-2 font-mono text-[9px] tracking-[0.15em] text-ink/60">
        {heat}/5
      </span>
    </span>
  );
}

function DishRow({
  dish,
  index,
  onEnter,
  onLeave,
}: {
  dish: Dish;
  index: number;
  onEnter: (i: number) => void;
  onLeave: () => void;
}) {
  return (
    <div
      data-reveal
      data-hover
      onMouseEnter={() => onEnter(index)}
      onMouseLeave={onLeave}
      className="group grid grid-cols-[2rem_1fr_auto] items-center gap-4 border-b border-ink/20 py-5 transition-colors hover:bg-paper md:grid-cols-[3.5rem_1.1fr_1fr_auto] md:gap-8 md:py-6"
    >
      <span className="font-mono text-xs text-clay">{dish.no}</span>
      <div>
        <h3 className="display-op font-display text-2xl font-light transition-colors duration-300 group-hover:text-teal md:text-4xl">
          {dish.name}
        </h3>
        <p className="mt-1 font-mono text-[10px] italic text-ink/60">{dish.gloss}</p>
        <div className="mt-4 overflow-hidden rounded-sm lg:hidden">
          <img
            src={dish.img}
            alt={dish.name}
            loading="lazy"
            className="img-tone aspect-[16/10] w-full object-cover"
          />
        </div>
      </div>
      <div className="hidden md:block">
        <p className="max-w-md text-xs leading-relaxed text-ink/60">{dish.desc}</p>
        <div className="mt-3">
          <SambalMeter heat={dish.heat} />
        </div>
      </div>
      <div className="flex flex-col items-end gap-3">
        <span className="font-mono text-[10px] tracking-[0.25em] text-ink/60">
          {dish.tag}
        </span>
        <ArrowUpRight className="hidden h-4 w-4 text-ink/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block" />
        <div className="md:hidden">
          <SambalMeter heat={dish.heat} />
        </div>
      </div>
    </div>
  );
}

export default function Cuisine() {
  const menuRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  /* cursor-following preview */
  useLayoutEffect(() => {
    const preview = previewRef.current;
    const menu = menuRef.current;
    if (!preview || !menu) return;
    const xTo = gsap.quickTo(preview, "x", { duration: 0.5, ease: "power3" });
    const yTo = gsap.quickTo(preview, "y", { duration: 0.5, ease: "power3" });
    const move = (e: MouseEvent) => {
      const rect = menu.getBoundingClientRect();
      xTo(e.clientX - rect.left + 30);
      yTo(e.clientY - rect.top - 160);
    };
    menu.addEventListener("mousemove", move, { passive: true });
    return () => menu.removeEventListener("mousemove", move);
  }, []);

  return (
    <section
      id="dahareun"
      data-altitude="768"
      data-chapter="DAHAREUN — FOOD"
      className="relative bg-paper-deep px-5 pb-28 pt-8 md:px-10 md:pb-40"
    >
      <ChapterHead
        index="02"
        title="Dahareun"
        gloss="food, a feast"
        alt="0768 M"
        temp="23.1°C"
      />

      <div className="mt-14 grid gap-10 md:grid-cols-12 md:items-end">
        <AnimatedWords
          as="h2"
          text="The city eats in the street."
          className="display-op font-display text-5xl font-light leading-[1.02] md:col-span-8 md:text-7xl"
        />
        <div data-reveal className="space-y-5 md:col-span-4">
          <p className="text-sm leading-relaxed text-ink/65">
            Bandung's great restaurants have wheels —{" "}
            <em className="font-display text-ink">kaki lima</em> (kaa-kee
            lee-mah, "five feet": a cart, a stove, and three legs of trade).
            Track them by smell; bring small notes.
          </p>
          <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
            <video
              src={MEDIA.videos.food}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
            <p className="absolute bottom-3 left-3 font-mono text-[9px] tracking-[0.25em] text-paper/85">
              MOVING POSTCARD N°02 — THE NIGHT GRIDDLE
            </p>
          </div>
        </div>
      </div>

      {/* interactive menu */}
      <div ref={menuRef} className="relative mt-16 md:mt-20">
        <div
          ref={previewRef}
          className="pointer-events-none absolute left-0 top-0 z-20 hidden lg:block"
        >
          <div
            className={cn(
              "w-64 overflow-hidden rounded-sm shadow-2xl transition-all duration-300",
              active !== null ? "rotate-3 opacity-100" : "rotate-0 opacity-0"
            )}
          >
            {/* decorative hover/active mirror of the dish image; the real,
                credited dish photo with an alt text lives in the menu list
                below — so this one is intentionally alt="" (decorative). */}
            <img
              src={active !== null ? DISHES[active].img : DISHES[0].img}
              alt=""
              className="img-tone h-80 w-full object-cover"
            />
            <p className="bg-ink px-3 py-2 font-mono text-[9px] tracking-[0.25em] text-paper/70">
              FIG. {active !== null ? DISHES[active].no : "01"} —{" "}
              {active !== null ? DISHES[active].name.toUpperCase() : "BATAGOR"}
            </p>
          </div>
        </div>

        <div className="border-t border-ink/20">
          {DISHES.map((d, i) => (
            <DishRow
              key={d.no}
              dish={d}
              index={i}
              onEnter={setActive}
              onLeave={() => setActive(null)}
            />
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] leading-relaxed tracking-[0.2em] text-ink/60">
        <span>SAMBAL METER — CALIBRATED IN WARUNGS, NOT LABS.</span>
        <span>SUNDANESE FOOD IS VEGETABLE-BY-NATURE. SAMBAL NEGOTIABLE, REFUSAL FUTILE.</span>
      </div>
    </section>
  );
}
