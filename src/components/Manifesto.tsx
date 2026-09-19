import { MEDIA } from "../data/content";
import AnimatedWords from "./AnimatedWords";
import ChapterHead from "./ChapterHead";

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      data-altitude="715"
      data-chapter="MANIFESTO"
      className="relative overflow-hidden bg-paper px-5 py-24 md:px-10 md:py-36"
    >
      {/* watermark */}
      <div
        aria-hidden
        className="display-op pointer-events-none absolute -right-6 top-8 select-none font-display text-[22vw] font-bold leading-none text-ink/[0.05]"
      >
        0715
      </div>

      <div className="relative grid gap-14 md:grid-cols-12">
        <div className="md:col-span-7">
          <ChapterHead
            index="00"
            title="Manifesto"
            gloss="the basin floor"
            alt="0715 M"
            temp="24.0°C"
          />

          <AnimatedWords
            as="h2"
            text="Someah (su·mah) — n."
            className="display-op mt-12 font-display text-4xl font-light leading-[1.05] md:text-6xl"
          />
          <AnimatedWords
            as="p"
            delay={0.2}
            text="the Sundanese art of making a stranger feel expected."
            className="display-op mt-3 font-display text-4xl font-light italic leading-[1.05] text-teal md:text-6xl"
          />

          <div
            data-reveal
            className="mt-12 max-w-xl space-y-5 text-sm leading-relaxed text-ink/70 md:text-base"
          >
            <p>
              It is the first thing you notice in Bandung — before the Art Deco,
              before the volcanoes leaning over the rooftops:{" "}
              <em className="font-display text-ink">
                the door is open before you knock.
              </em>{" "}
              Ask for nothing, and a hand is already pointing the way. This is{" "}
              <em className="font-display text-ink">someah</em> — hospitality so
              casual it feels like family, because here, it is. You arrive a
              tourist. You leave a cousin.
            </p>
            <p>
              This journal is not a guide. It is an ascent — from the basin floor
              at 715 metres to the crater rim at 2,434. Read it the way you would
              climb: slowly, and upward.
            </p>
          </div>

          <p
            data-reveal
            className="mt-12 font-mono text-[10px] tracking-[0.25em] text-ink/60"
          >
            N.B. — ELEVATIONS IN THIS JOURNAL ARE REAL. SO IS THE MIST.
          </p>
        </div>

        <div className="md:col-span-5 md:pt-24">
          <figure data-reveal>
            <div className="overflow-hidden rounded-sm">
              <img
                src={MEDIA.img.bragaFashion}
                alt="Three young people in traditional Indonesian attire walking on Braga Street, Bandung"
                loading="lazy"
                className="img-tone aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <figcaption className="mt-3 flex items-center justify-between font-mono text-[10px] tracking-[0.15em] text-ink/60">
              <span>FIG. 00 — MOJANG &amp; BUJANG, BRAGA ST.</span>
              <span>0768 M</span>
            </figcaption>
          </figure>
          <blockquote
            data-reveal
            className="display-op mt-10 border-l-2 border-sulfur pl-5 font-display text-xl italic leading-snug text-ink/85 md:text-2xl"
          >
            "Punten," they say — and the city opens like a hand.
          </blockquote>
        </div>
      </div>
    </section>
  );
}
