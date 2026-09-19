import type { ReactNode } from "react";
import { cn } from "../utils/cn";

interface Props {
  children: ReactNode;
  className?: string;
  slow?: boolean;
}

/** Seamless infinite ticker. Children are duplicated for the loop. */
export default function Marquee({ children, className, slow }: Props) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div className={cn("flex w-max", slow ? "animate-marquee-slow" : "animate-marquee")}>
        {/* two identical halves, each rendered twice, so a half always
            exceeds the viewport width on any screen */}
        <div className="flex shrink-0 items-center">
          {children}
          {children}
        </div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
          {children}
        </div>
      </div>
    </div>
  );
}
