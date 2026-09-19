import Lenis from "lenis";
import { gsap, ScrollTrigger } from "./gsap";
import "lenis/dist/lenis.css";

let lenis: Lenis | null = null;
let tickerFn: ((time: number) => void) | null = null;

export function initLenis(): Lenis {
  if (lenis) return lenis;
  lenis = new Lenis({
    lerp: 0.09,
    wheelMultiplier: 1,
    touchMultiplier: 1.4,
  });
  lenis.on("scroll", ScrollTrigger.update);
  tickerFn = (time: number) => {
    lenis?.raf(time * 1000);
  };
  gsap.ticker.add(tickerFn);
  gsap.ticker.lagSmoothing(0);
  return lenis;
}

export function getLenis(): Lenis | null {
  return lenis;
}

export function scrollToId(id: string) {
  if (!lenis) {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    return;
  }
  lenis.scrollTo(id, {
    duration: 1.6,
    offset: -72,
    easing: (t: number) => 1 - Math.pow(1 - t, 4),
  });
}
