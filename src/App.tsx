import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { gsap, ScrollTrigger } from "./lib/gsap";
import { getLenis, initLenis } from "./lib/scroll";
import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import Altimeter from "./components/Altimeter";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import CityChapter from "./components/CityChapter";
import Cuisine from "./components/Cuisine";
import Ascent from "./components/Ascent";
import Volcano from "./components/Volcano";
import Crater from "./components/Crater";
import FieldNotes from "./components/FieldNotes";
import Footer from "./components/Footer";

/** fixed journal plate frame with survey corner marks */
function Frame() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-3 z-[45] border border-white/20 mix-blend-difference md:inset-4"
    >
      <span className="absolute -left-[5px] -top-[7px] font-mono text-[11px] text-white/50">
        +
      </span>
      <span className="absolute -right-[5px] -top-[7px] font-mono text-[11px] text-white/50">
        +
      </span>
      <span className="absolute -bottom-[7px] -left-[5px] font-mono text-[11px] text-white/50">
        +
      </span>
      <span className="absolute -bottom-[7px] -right-[5px] font-mono text-[11px] text-white/50">
        +
      </span>
    </div>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const lenis = initLenis();
    lenis.stop();
  }, []);

  const handleDone = useCallback(() => {
    setLoaded(true);
    getLenis()?.start();
  }, []);

  /* global fade-up reveals */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%" },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  /* re-measure once webfonts settle */
  useEffect(() => {
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
  }, []);

  return (
    <div id="top" className="relative">
      <Cursor />
      <Preloader onDone={handleDone} />
      <Header />
      <Altimeter />
      <Frame />
      {/* film grain over everything */}
      <div
        aria-hidden
        className="grain pointer-events-none fixed inset-0 z-[44] opacity-[0.06]"
      />
      <main>
        <Hero ready={loaded} />
        <Manifesto />
        <CityChapter />
        <Cuisine />
        <Ascent />
        <Volcano />
        <Crater />
        <FieldNotes />
      </main>
      <Footer />
    </div>
  );
}
