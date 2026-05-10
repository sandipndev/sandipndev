"use client";

import { InfoIcon } from "lucide-react";

import {
  CollapsibleChevronsIcon,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleWithContext,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

export function InfoCollapsible({
  title,
  children,
  className,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
}) {
  return (
    <CollapsibleWithContext
      defaultOpen={defaultOpen}
      className={cn("not-prose my-4 rounded-lg bg-code font-sans", className)}
    >
      <CollapsibleTrigger className="group/info inline-flex w-full items-center gap-2 py-2.5 pr-3 pl-4 text-sm font-medium [&_svg]:size-4">
        <InfoIcon className="-translate-x-0.5" />
        {title}
        <div className="ml-auto shrink-0 text-muted-foreground" aria-hidden>
          <CollapsibleChevronsIcon />
        </div>
      </CollapsibleTrigger>

      <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-fade-up data-[state=open]:animate-collapsible-fade-down">
        <div className="prose prose-sm px-4 pb-4 text-muted-foreground dark:prose-invert [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
          {children}
        </div>
      </CollapsibleContent>
    </CollapsibleWithContext>
  );
}
