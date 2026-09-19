import { MEDIA } from "../data/content";
import AnimatedWords from "./AnimatedWords";
import ChapterHead from "./ChapterHead";

const HIGHLANDS = [
  {
    fig: "FIG. 08",
    tag: "LEMBANG",
    title: "Floating Market",
    desc: "Breakfast paddled to your table across a mountain lake, with the hills doing all the decorating.",
    img: MEDIA.img.floatingMarket,
    alt: "Colorful boats at a floating market in Southeast Asia",
  },
  {
    fig: "FIG. 09",
    tag: "CIATER",
    title: "Hot Springs",
    desc: "Volcanic water, bathtub-warm, piped into pools at the foot of Tangkuban Perahu. Sore legs: solved.",
    img: MEDIA.img.hotSpring,
    alt: "Steaming geothermal pool surrounded by mountains",
  },
  {
    fig: "FIG. 10",
    tag: "PICK-YOUR-OWN",
    title: "Strawberry Farms",
    desc: "Greenhouse after greenhouse of pick-your-own strawberries — Lembang's red currency. Fresh milk is the obvious chaser.",
    img: MEDIA.img.strawberry,
    alt: "A boy picking strawberries in a highland greenhouse",
  },
  {
    fig: "FIG. 11",
    tag: "CIHIDEUNG",
    title: "Kota Kembang",
    desc: "'City of Flowers' is not a metaphor — Cihideung's greenhouses dress bouquets for the whole island.",
    img: MEDIA.img.flowers,
    alt: "Orange roses blooming in a West Java greenhouse",
  },
];

export default function Ascent() {
  return (
    <section
      id="lembang"
      data-altitude="1400"
      data-chapter="LEMBANG — HIGHLANDS"
      className="relative bg-paper"
    >
      {/* video header */}
      <div className="relative h-[82vh] overflow-hidden md:h-[92vh]">
        <video
          src={MEDIA.videos.tea}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/10 to-ink/75" />
        <div className="absolute inset-0 flex flex-col justify-between p-5 pb-8 text-paper md:p-10 md:pb-12">
          <ChapterHead
            dark
            index="03"
            title="Lembang"
            gloss="the highlands"
            alt="1400 M"
            temp="17.5°C"
            className="mt-16 md:mt-20"
          />
          <div className="flex flex-wrap items-end justify-between gap-8">
            <AnimatedWords
              as="h2"
              text="The air changes."
              className="display-op font-display text-5xl font-light leading-[0.95] md:text-8xl"
            />
            <div className="text-right">
              <p className="display-op font-display text-5xl font-light italic text-teal-bright md:text-7xl">
                1,400 M
              </p>
              <p className="mt-2 font-mono text-[10px] leading-relaxed tracking-[0.3em] text-paper/60">
                THE CITY EXHALES
                <br />
                INTO FARMLAND
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* statement + cards */}
      <div className="px-5 py-16 md:px-10 md:py-24">
        <p
          data-reveal
          className="display-op max-w-3xl font-display text-2xl font-light leading-snug text-ink/85 md:text-3xl"
        >
          Leave the basin floor and Bandung softens into{" "}
          <em className="text-teal">
            dairy pastures, pine tunnels and strawberry greenhouses
          </em>{" "}
          — tea unravelling over the ridgelines at the roof of the island.
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLANDS.map((h) => (
            <article
              key={h.title}
              data-reveal
              data-hover
              className="group overflow-hidden rounded-sm border border-ink/10 bg-paper"
            >
              <div className="overflow-hidden">
                <img
                  src={h.img}
                  alt={h.alt}
                  loading="lazy"
                  className="img-tone aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between font-mono text-[9px] tracking-[0.25em] text-ink/60">
                  <span>{h.fig}</span>
                  <span>{h.tag}</span>
                </div>
                <h4 className="display-op mt-3 font-display text-xl font-light">
                  {h.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-ink/60">{h.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <figure data-reveal className="mt-16 md:mt-20">
          <img
            src={MEDIA.img.teaAerial}
            alt="Aerial view of lush green tea plantations"
            loading="lazy"
            className="img-tone aspect-[21/9] w-full rounded-sm object-cover"
          />
          <figcaption className="mt-3 flex items-center justify-between font-mono text-[10px] tracking-[0.15em] text-ink/60">
            <span>
              FIG. 12 — TEA AT THE RIM: PLUCKED, ROLLED, POURED WITHIN SIGHT OF
              THE CRATER
            </span>
            <span className="hidden md:inline">±1,500 M</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
