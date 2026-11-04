"use client";

import { useId, useState } from "react";

import { ArrowRight, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { joinWaitlist } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { releaseNotes } from "@/data/home";
import { cn } from "@/lib/utils";

type ReleaseNotesFormProps = {
  className?: string;
};

const fallbackErrorMessage = "Something went wrong. Please try again later.";

export function ReleaseNotesForm({ className }: ReleaseNotesFormProps) {
  const inputId = useId();
  const errorId = useId();
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const isDisabled = status === "loading" || status === "success";
  const isInvalid = status === "error";

  const handleSubmit = async (event: React.SubmitEvent) => {
    event.preventDefault();

    if (!email) {
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const result = await joinWaitlist(email);
      if (!result.success) {
        setStatus("error");
        setErrorMessage(result.message || fallbackErrorMessage);
        toast.error("Could not subscribe", {
          description: result.message || fallbackErrorMessage,
        });
        return;
      }

      setStatus("success");
      toast.success("Subscribed", {
        description: "We'll keep you posted.",
      });
      setEmail("");
    } catch {
      // Network/server-action failures must still resolve the loading state.
      setStatus("error");
      setErrorMessage(fallbackErrorMessage);
      toast.error("Could not subscribe", {
        description: fallbackErrorMessage,
      });
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col gap-3", className)}>
      <Label htmlFor={inputId} className="text-[13px] font-medium text-home-muted-strong">
        {releaseNotes.label}
      </Label>

      <div className="flex flex-col gap-2 sm:flex-row">
        <Input
          id={inputId}
          name="email"
          type="email"
          autoComplete="email"
          placeholder={releaseNotes.placeholder}
          value={email}
          onChange={handleEmailChange}
          required
          disabled={isDisabled}
          aria-invalid={isInvalid || undefined}
          aria-describedby={isInvalid ? errorId : undefined}
          className="h-11 border-white/35 bg-home-panel text-[15px] text-home-text shadow-none placeholder:text-home-muted focus-visible:border-home-accent-bright focus-visible:ring-2 focus-visible:ring-home-accent-bright focus-visible:ring-offset-2 focus-visible:ring-offset-home-panel-raised disabled:opacity-60 dark:bg-home-panel"
        />

        <Button
          type="submit"
          disabled={!email || isDisabled}
          className="h-11 shrink-0 rounded-[10px] border-0 bg-linear-to-r from-blue-700 to-sky-700 px-5 text-sm font-medium text-white transition-all hover:from-blue-800 hover:to-sky-800 focus-visible:ring-2 focus-visible:ring-home-accent-bright focus-visible:ring-offset-2 focus-visible:ring-offset-home-panel-raised active:translate-y-px disabled:opacity-60"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              <span>Subscribing...</span>
            </>
          ) : status === "success" ? (
            <>
              <Check className="size-4" aria-hidden="true" />
              <span>Subscribed</span>
            </>
          ) : (
            <>
              <span>{releaseNotes.button}</span>
              <ArrowRight className="size-4" aria-hidden="true" />
            </>
          )}
        </Button>
      </div>

      {isInvalid ? (
        <p id={errorId} role="alert" className="text-xs leading-relaxed text-red-400">
          {errorMessage}
        </p>
      ) : null}

      <p className="text-xs leading-relaxed text-home-muted">{releaseNotes.microcopy}</p>
    </form>
  );
}
