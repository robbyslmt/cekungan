import { useLayoutEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import { MEDIA } from "../data/content";

export default function Preloader({ onDone }: { onDone: () => void }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const counter = { v: 2434 };
      const tl = gsap.timeline();
      tl.to(counter, {
        v: 715,
        duration: 2.1,
        ease: "power2.inOut",
        onUpdate: () => {
          if (numRef.current)
            numRef.current.textContent = String(Math.round(counter.v)).padStart(4, "0");
        },
      })
        .to(barRef.current, { scaleX: 1, duration: 2.1, ease: "power2.inOut" }, 0)
        .to(".pre-fade", {
          opacity: 0,
          y: -12,
          duration: 0.35,
          stagger: 0.06,
          ease: "power2.in",
        }, "+=0.3")
        .addLabel("exit", "+=0.05")
        .add(() => onDone(), "exit")
        .to(".pre-panel-main", {
          yPercent: -100,
          duration: 1,
          ease: "expo.inOut",
        }, "exit")
        .to(".pre-panel-accent", {
          yPercent: -100,
          duration: 1,
          ease: "expo.inOut",
        }, "exit+=0.09")
        .set(rootRef.current, { display: "none" });
    }, rootRef);
    return () => ctx.revert();
  }, [onDone]);

  return (
    <div ref={rootRef} className="fixed inset-0 z-[100]">
      {/* layered curtain panels */}
      <div className="pre-panel-accent absolute inset-0 bg-teal" />
      <div className="pre-panel-main absolute inset-0 flex flex-col overflow-hidden bg-ink text-paper">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-screen"
          style={{ backgroundImage: `url(${MEDIA.topo})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="grain pointer-events-none absolute inset-0 opacity-[0.08]" />

        {/* top chrome */}
        <div className="pre-fade relative z-10 flex items-center justify-between px-5 pt-6 font-mono text-[10px] tracking-[0.3em] text-paper/60 md:px-10 md:text-xs">
          <span>CEKUNGAN — FIELD JOURNAL N°07</span>
          <span className="hidden md:inline">06°54′S — 107°36′E</span>
        </div>

        {/* center readout */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center">
          <p className="pre-fade mb-6 font-mono text-[10px] tracking-[0.45em] text-sulfur md:text-xs">
            DESCENDING INTO THE BASIN
          </p>
          <div className="pre-fade flex items-baseline gap-3">
            <span
              ref={numRef}
              className="display-op font-display text-[26vw] leading-none font-medium tabular-nums md:text-[16rem]"
            >
              2434
            </span>
            <span className="font-mono text-sm text-paper/50 md:text-lg">M</span>
          </div>
          <p className="pre-fade mt-8 max-w-xs px-6 text-center font-mono text-[10px] leading-relaxed tracking-[0.2em] text-paper/55 md:text-xs">
            CEKUNGAN BANDUNG — THE BOWL OF MOUNTAINS
          </p>
        </div>

        {/* bottom chrome */}
        <div className="pre-fade relative z-10 px-5 pb-8 md:px-10">
          <div className="mb-3 flex items-center justify-between font-mono text-[10px] tracking-[0.3em] text-paper/60 md:text-xs">
            <span>CALIBRATING ALTIMETER</span>
            <span className="animate-pulse-soft">● </span>
          </div>
          <div className="h-px w-full bg-paper/20">
            <div ref={barRef} className="h-px w-full origin-left scale-x-0 bg-sulfur" />
          </div>
        </div>
      </div>
    </div>
  );
}
