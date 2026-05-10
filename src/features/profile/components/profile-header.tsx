import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";
import { FlipSentences } from "@/registry/flip-sentences";

import { PronounceMyName } from "./pronounce-my-name";
import { VerifiedIcon } from "./verified-icon";

export function ProfileHeader() {
  return (
    <div className="screen-line-after flex border-x border-edge">
      <div className="shrink-0 border-r border-edge">
        <div className="mx-[2px] my-[3px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            fetchPriority="high"
          />
        </div>

        <SimpleTooltip content="I'm from IN">
          {/* Flag of India */}
          <svg
            className="absolute top-0 -left-px h-8 sm:h-9"
            viewBox="0 0 20 13.33"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Saffron, white, green stripes */}
            <rect width="20" height="4.44" y="0" fill="#FF9933" />
            <rect width="20" height="4.45" y="4.44" fill="#FFFFFF" />
            <rect width="20" height="4.44" y="8.89" fill="#138808" />

            {/* Ashoka Chakra */}
            <circle
              cx="10"
              cy="6.665"
              r="1.47"
              fill="none"
              stroke="#000080"
              strokeWidth="0.2"
            />
            <g stroke="#000080" strokeWidth="0.15">
              {Array.from({ length: 24 }).map((_, i) => (
                <line
                  key={i}
                  x1="10"
                  y1="6.665"
                  x2={10 + 1.47 * Math.cos((i * 15 * Math.PI) / 180)}
                  y2={6.665 + 1.47 * Math.sin((i * 15 * Math.PI) / 180)}
                />
              ))}
            </g>
          </svg>
        </SimpleTooltip>
      </div>

      <div className="flex flex-1 flex-col">
        <div
          className={cn(
            "flex grow items-end pb-1 pl-4",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
          )}
        >
          <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800">
            {"text-3xl "}
            <span className="inline dark:hidden">text-zinc-950</span>
            <span className="hidden dark:inline">text-zinc-50</span>
            {" font-medium"}
          </div>
        </div>

        <div className="border-t border-edge">
          <h1 className="flex items-center pl-4 text-3xl font-semibold">
            {USER.displayName}
            &nbsp;
            <SimpleTooltip content="Verified">
              <VerifiedIcon className="size-[0.6em] translate-y-px text-info select-none" />
            </SimpleTooltip>
            {USER.namePronunciationUrl && (
              <>
                &nbsp;
                <PronounceMyName
                  className="translate-y-px"
                  namePronunciationUrl={USER.namePronunciationUrl}
                />
              </>
            )}
          </h1>

          <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
            <FlipSentences sentences={USER.flipSentences} />
          </div>
        </div>
      </div>
    </div>
  );
}
