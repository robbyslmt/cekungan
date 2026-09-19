import { useLayoutEffect, useRef, type ElementType } from "react";
import { gsap } from "../lib/gsap";

interface Props {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

/** Splits a line into masked words that rise on scroll. */
export default function AnimatedWords({
  text,
  className = "",
  delay = 0,
  stagger = 0.05,
  as = "div",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll(".aw-in"),
        { yPercent: 120 },
        {
          yPercent: 0,
          duration: 1.15,
          ease: "power4.out",
          stagger,
          delay,
          scrollTrigger: { trigger: el, start: "top 90%" },
        }
      );
    }, el);
    return () => ctx.revert();
  }, [text, delay, stagger]);

  const Tag = as as ElementType;
  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]"
        >
          <span className="aw-in inline-block will-change-transform">
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
