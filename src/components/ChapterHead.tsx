import { Mountain } from "lucide-react";
import { cn } from "../utils/cn";

interface Props {
  index: string;
  title: string;
  gloss?: string;
  alt: string;
  temp: string;
  dark?: boolean;
  className?: string;
}

/** Survey-style chapter divider: index / name / gloss / altitude / temperature. */
export default function ChapterHead({
  index,
  title,
  gloss,
  alt,
  temp,
  dark,
  className,
}: Props) {
  return (
    <div
      data-reveal
      className={cn(
        "border-b pb-4",
        dark ? "border-paper/25" : "border-ink/20",
        className
      )}
    >
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2 font-mono text-[10px] tracking-[0.22em] uppercase md:text-xs">
        <div className="flex flex-wrap items-baseline gap-x-4">
          <span className={cn("font-bold", dark ? "text-clay-bright" : "text-clay")}>{index}</span>
          <span className="font-expanded font-semibold">{title}</span>
          {gloss && (
            <span className="font-sans normal-case italic tracking-normal opacity-55">
              — {gloss}
            </span>
          )}
        </div>
        <div
          className={cn(
            "flex items-center gap-4",
            dark ? "text-paper/70" : "text-ink/60"
          )}
        >
          <span>{alt}</span>
          <span className="hidden md:inline">{temp}</span>
          <Mountain className="h-3.5 w-3.5" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}
