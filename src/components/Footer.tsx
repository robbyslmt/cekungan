import { ArrowUp, Asterisk } from "lucide-react";
import { PHRASES } from "../data/content";
import { scrollToId } from "../lib/scroll";
import AnimatedWords from "./AnimatedWords";
import Marquee from "./Marquee";

export default function Footer() {
  return (
    <footer
      id="end"
      data-altitude="715"
      data-chapter="HANGGAR DEUI"
      className="relative overflow-hidden bg-ink text-paper"
    >
      {/* phrase ticker */}
      <Marquee
        slow
        className="border-b border-paper/15 py-4 font-mono text-[10px] tracking-[0.25em] text-paper/60"
      >
        {PHRASES.map((p) => (
          <span key={p.word} className="flex items-center whitespace-nowrap">
            <Asterisk className="mx-6 h-3 w-3 text-sulfur" strokeWidth={1.5} />
            <span className="text-paper/90">{p.word.toUpperCase()}</span>
            <span className="ml-2 text-paper/55">
              ({p.roman}) — {p.meaning}
            </span>
          </span>
        ))}
      </Marquee>

      <div className="relative px-5 pb-10 pt-20 md:px-10 md:pt-28">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="font-mono text-[10px] tracking-[0.4em] text-sulfur">
              PAMIT (PAH-MEET) — V. TO TAKE ONE'S LEAVE
            </p>
            <AnimatedWords
              as="h2"
              text="Hanggar deui."
              className="display-op mt-6 font-display text-[15vw] font-light leading-[0.9] md:text-[11vw]"
            />
            <p className="mt-5 font-mono text-[10px] tracking-[0.3em] text-paper/50">
              HANG-GAR DEH-EE — "SEE YOU AGAIN"
            </p>
          </div>
          <button
            onClick={() => scrollToId("#top")}
            aria-label="Back to top"
            className="group mt-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-paper/25 transition-colors hover:border-sulfur"
          >
            <ArrowUp
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1"
              strokeWidth={1.5}
            />
          </button>
        </div>

        <div className="mt-16 grid gap-6 border-t border-paper/15 pt-8 font-mono text-[10px] leading-relaxed tracking-[0.18em] text-paper/55 md:grid-cols-3">
          <span>
            THIS JOURNAL ASCENDS 715 M → 2,434 M AND BACK.
            <br />
            NUHUN FOR WALKING IT.
          </span>
          <span className="md:text-center">
            IMAGERY &amp; MOTION — PEXELS
            <br />
            TYPE — FRAUNCES / ARCHIVO / SPACE MONO
          </span>
          <span className="md:text-right">
            CEKUNGAN N°07 — MMXXV
            <br />
            06°54′S 107°36′E · WEST JAVA, ID
            <br />
            <a
              href="privacy.html"
              className="text-paper/60 transition-colors hover:text-sulfur"
              style={{ textDecoration: "underline", textUnderlineOffset: 4 }}
            >
              Privacy · notes
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
