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

export function ReleaseNotesForm({ className }: ReleaseNotesFormProps) {
  const inputId = useId();
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const isDisabled = status === "loading" || status === "success";

  const handleSubmit = async (event: React.SubmitEvent) => {
    event.preventDefault();

    if (!email) {
      return;
    }

    setStatus("loading");

    const result = await joinWaitlist(email);
    if (!result.success) {
      setStatus("error");
      toast.error("Error", {
        description: result.message,
      });
      return;
    }

    setStatus("success");
    toast.success("Success", {
      description: "You're on the list! We'll keep you posted.",
    });
    setEmail("");
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
          onChange={(event) => setEmail(event.target.value)}
          required
          disabled={isDisabled}
          className="h-11 border-home-line bg-home-panel text-[15px] text-home-text shadow-none placeholder:text-home-muted focus-visible:border-home-accent-line focus-visible:ring-home-accent/40 disabled:opacity-60 dark:bg-home-panel"
        />

        <Button
          type="submit"
          disabled={!email || isDisabled}
          className="h-11 shrink-0 rounded-[10px] border-0 bg-linear-to-r from-blue-600 to-sky-600 px-5 text-sm font-medium text-white transition-all hover:from-blue-500 hover:to-sky-500 active:translate-y-px disabled:opacity-60"
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

      <p className="text-xs leading-relaxed text-home-muted">{releaseNotes.microcopy}</p>
    </form>
  );
}
