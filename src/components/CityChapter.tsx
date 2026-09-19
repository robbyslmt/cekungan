import { MEDIA } from "../data/content";
import AnimatedWords from "./AnimatedWords";
import ChapterHead from "./ChapterHead";

const CARDS = [
  {
    fig: "FIG. 03",
    tag: "UNESCO 2010",
    title: "Angklung",
    gloss: "ahng-kloong — the bamboo that sings",
    desc: "Bamboo tubes tuned to a single note, shaken by the thousand. At Saung Angklung Udjo the children's orchestra hands you an instrument — you will play, and it will be glorious.",
    img: MEDIA.img.angklung,
    alt: "Children playing angklung bamboo instruments outdoors",
  },
  {
    fig: "FIG. 04",
    tag: "ALL-NIGHT EPIC",
    title: "Wayang Golek",
    gloss: "why-yung go-lek — wooden puppet theatre",
    desc: "Three-dimensional wooden puppets robed in batik, moved by a single dalang through a whole night of epics. The Mahabharata, as told in the hills of Sunda.",
    img: MEDIA.img.wayang,
    alt: "Colorful traditional Wayang Golek wooden puppets on display",
  },
  {
    fig: "FIG. 05",
    tag: "B. 1970s, BANDUNG",
    title: "Jaipong",
    gloss: "jai-pong — the drum-driven dance",
    desc: "Part martial art, part flirtation, all hips and percussion — born in Bandung's studios and still the city's favorite way to sweat. Sundanese culture does not sit still.",
    img: MEDIA.img.dancers,
    alt: "Two traditional dancers in ornate costumes in West Java",
  },
];

const LANDMARKS = [
  {
    key: "A",
    name: "Jalan Braga",
    body: "In the 1920s, the most European street in the Dutch East Indies — Art Deco facades, cafés, couture. The promenade where Bandung earned its nickname, restored today and neon-lit after dark.",
  },
  {
    key: "B",
    name: "Gedung Sate",
    body: "J. Gerber's 1920 masterwork, crowned with six ornamental satay skewers. West Java's town hall, and the city's compass — everyone gives directions relative to it.",
  },
  {
    key: "C",
    name: "Alun-Alun",
    body: "The green heart of the city: mosque towers, street buskers, and the twin banyans — one straight, one crooked — said to judge the honest. Mojang and bujang gather here at dusk.",
  },
];

export default function CityChapter() {
  return (
    <section
      id="kota"
      data-altitude="768"
      data-chapter="KOTA — THE CITY"
      className="relative bg-paper px-5 pb-28 pt-8 md:px-10 md:pb-40"
    >
      <ChapterHead
        index="01"
        title="Kota"
        gloss="the city"
        alt="0768 M"
        temp="23.1°C"
      />

      <AnimatedWords
        as="h2"
        text="Paris van Java, with a Sundanese soul."
        className="display-op mt-14 max-w-5xl font-display text-5xl font-light leading-[1.02] md:text-7xl"
      />

      {/* text + collage */}
      <div className="mt-20 grid gap-12 md:grid-cols-12 md:items-end">
        <div className="space-y-10 md:col-span-5">
          {LANDMARKS.map((l) => (
            <div key={l.key} data-reveal>
              <h3 className="flex items-baseline gap-3 font-expanded text-xs font-semibold uppercase tracking-[0.3em]">
                <span className="font-mono text-clay">{l.key}.</span>
                {l.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{l.body}</p>
            </div>
          ))}
        </div>

        <div className="relative md:col-span-7">
          <figure data-reveal className="ml-auto w-full md:w-4/5">
            <div className="group overflow-hidden rounded-sm">
              <img
                src={MEDIA.img.bragaSunset}
                alt="Art Deco architecture on Braga Street, Bandung, at sunset"
                loading="lazy"
                className="img-tone aspect-[16/10] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
              />
            </div>
            <figcaption className="mt-3 flex items-center justify-between font-mono text-[10px] tracking-[0.15em] text-ink/60">
              <span>FIG. 01 — ART DECO, JALAN BRAGA</span>
              <span>0768 M</span>
            </figcaption>
          </figure>
          <figure
            data-reveal
            className="absolute -bottom-14 left-0 hidden w-[38%] border-[6px] border-paper shadow-2xl md:block"
          >
            <img
              src={MEDIA.img.gedungSateTall}
              alt="Gedung Sate, Bandung's landmark government building"
              loading="lazy"
              className="img-tone aspect-[3/4] w-full object-cover"
            />
            <figcaption className="absolute -bottom-6 right-0 bg-paper px-2 py-1 font-mono text-[9px] tracking-[0.15em] text-ink/60">
              FIG. 02 — GEDUNG SATE
            </figcaption>
          </figure>
        </div>
      </div>

      {/* rush-hour video strip */}
      <div data-reveal className="mt-32 md:mt-44">
        <div className="relative h-[56vh] overflow-hidden rounded-sm md:h-[72vh]">
          <video
            src={MEDIA.videos.city}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/30" />
          <div className="absolute right-5 top-5 rounded-full border border-paper/30 px-4 py-1.5 font-mono text-[9px] tracking-[0.3em] text-paper/80 md:text-[10px]">
            MOVING POSTCARD N°01
          </div>
          <div className="absolute bottom-5 left-5 md:bottom-8 md:left-8">
            <p className="font-mono text-[10px] tracking-[0.35em] text-teal-bright">
              JALAN ASIA AFRIKA — RUSH HOUR
            </p>
            <p className="display-op mt-2 font-display text-3xl font-light text-paper md:text-5xl">
              The city moves like weather.
            </p>
          </div>
          <p className="absolute bottom-5 right-5 font-mono text-[10px] tracking-[0.2em] text-paper/70 md:bottom-8 md:right-8">
            0768 M
          </p>
        </div>
      </div>

      {/* culture cards */}
      <div className="mt-28 md:mt-40">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <AnimatedWords
            as="h3"
            text="Ngariung — the gathering arts."
            className="display-op font-display text-3xl font-light italic md:text-5xl"
          />
          <p
            data-reveal
            className="max-w-xs font-mono text-[10px] leading-relaxed tracking-[0.15em] text-ink/60"
          >
            NGARIUNG (NGAH-REE-OONG) — V. TO GATHER AROUND; WHAT SUNDA DOES BEST.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {CARDS.map((c) => (
            <article
              key={c.title}
              data-reveal
              className="group overflow-hidden rounded-sm bg-ink text-paper"
            >
              <div className="overflow-hidden">
                <img
                  src={c.img}
                  alt={c.alt}
                  loading="lazy"
                  className="img-tone aspect-[4/3] w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
              </div>
              <div className="p-6 md:p-7">
                <div className="flex items-center justify-between font-mono text-[9px] tracking-[0.25em] text-paper/50">
                  <span>{c.fig}</span>
                  <span>{c.tag}</span>
                </div>
                <h4 className="display-op mt-4 font-display text-2xl font-light">
                  {c.title}
                </h4>
                <p className="mt-1 font-mono text-[10px] italic text-teal-bright">
                  {c.gloss}
                </p>
                <p className="mt-4 text-xs leading-relaxed text-paper/65">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* history interlude */}
      <div
        data-reveal
        className="relative mt-28 overflow-hidden rounded-sm bg-ink px-6 py-12 text-paper md:mt-40 md:px-12 md:py-16"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-screen"
          style={{
            backgroundImage: `url(${MEDIA.topo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative grid gap-12 md:grid-cols-2">
          <div>
            <p className="font-mono text-[10px] tracking-[0.35em] text-sulfur">
              1955 — GEDUNG MERDEKA
            </p>
            <h4 className="display-op mt-4 font-display text-3xl font-light leading-tight md:text-4xl">
              Two continents sign a friendship pact.
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-paper/65">
              Twenty-nine newly sovereign nations gathered on Jalan Asia-Africa
              for the first Asia-Africa Conference — the birth cry of the
              Non-Aligned Movement. The street still carries the name of two
              continents.
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.35em] text-clay-bright">
              1946 — BANDUNG LAUTAN API
            </p>
            <h4 className="display-op mt-4 font-display text-3xl font-light leading-tight md:text-4xl">
              Bandung, sea of fire.
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-paper/65">
              Rather than surrender their city to the returning colonial army,
              the people burned it themselves and marched south. The Bandung you
              are reading about rose from those ashes — a people's answer,
              written in smoke.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
