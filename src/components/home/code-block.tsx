"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { Check, Copy } from "lucide-react";
import { toast } from "sonner";

import { renderCodeBlock, type CodeLanguage } from "@/lib/highlight";
import { cn } from "@/lib/utils";

export type { CodeLanguage } from "@/lib/highlight";

export type CodeBlockProps = {
  code: string;
  language: CodeLanguage;
  filename?: string;
  showLineNumbers?: boolean;
  className?: string;
};

function fallbackCopy(text: string): boolean {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "0";
  textarea.style.left = "0";
  textarea.style.opacity = "0";
  textarea.style.pointerEvents = "none";
  document.body.appendChild(textarea);
  textarea.select();
  textarea.setSelectionRange(0, text.length);

  let copied = false;

  try {
    copied = document.execCommand("copy");
  } catch {
    copied = false;
  }

  document.body.removeChild(textarea);
  return copied;
}

async function copyToClipboard(text: string): Promise<boolean> {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall through to the legacy path when permission is denied.
    }
  }

  return fallbackCopy(text);
}

export function CodeBlock({
  code,
  language,
  filename,
  showLineNumbers = true,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const resetTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rendered = useMemo(
    () => renderCodeBlock(code, language, showLineNumbers),
    [code, language, showLineNumbers],
  );
  const label = filename ?? language;

  useEffect(() => {
    return () => {
      if (resetTimeout.current) {
        clearTimeout(resetTimeout.current);
      }
    };
  }, []);

  const handleCopy = async () => {
    const copiedSuccessfully = await copyToClipboard(rendered.copyText);

    if (!copiedSuccessfully) {
      toast.error("Could not copy", {
        description: "Select the code and copy it manually.",
      });
      return;
    }

    setCopied(true);
    toast.success("Copied to clipboard");

    if (resetTimeout.current) {
      clearTimeout(resetTimeout.current);
    }

    resetTimeout.current = setTimeout(() => {
      setCopied(false);
    }, 1800);
  };

  return (
    <div className={cn("home-code flex w-full min-w-0 flex-col", className)}>
      <div className="flex items-center justify-between gap-3 border-b border-home-line px-4 py-2.5 font-mono text-[11px]">
        <div className="flex min-w-0 items-center gap-3">
          <span aria-hidden="true" className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-home-line-strong" />
            <span className="size-1.5 rounded-full bg-home-line-strong" />
            <span className="size-1.5 rounded-full bg-home-line-strong" />
          </span>
          {filename ? (
            <span className="truncate tracking-normal text-home-muted-strong">{filename}</span>
          ) : null}
        </div>

        <div className="flex shrink-0 items-center gap-2.5">
          <span className="uppercase tracking-[0.12em] text-home-code-comment">{language}</span>
          <button
            type="button"
            onClick={handleCopy}
            aria-label={copied ? "Copied" : "Copy code"}
            className="inline-flex size-7 items-center justify-center rounded-[6px] border border-transparent text-home-code-comment transition-colors hover:border-home-line hover:text-home-muted-strong focus-visible:ring-2 focus-visible:ring-home-accent/60 focus-visible:outline-none"
          >
            {copied ? (
              <Check className="size-3.5" aria-hidden="true" />
            ) : (
              <Copy className="size-3.5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* htmlMarkup comes directly from TanStack Highlight, which escapes source text and
          attributes. Never pass user-authored HTML into this element. */}
      <div
        className="home-code-body min-w-0 focus-visible:ring-2 focus-visible:ring-home-accent/60 focus-visible:ring-inset focus-visible:outline-none"
        role="group"
        tabIndex={0}
        aria-label={`${label} code sample`}
        dangerouslySetInnerHTML={{ __html: rendered.htmlMarkup }}
      />
    </div>
  );
}
