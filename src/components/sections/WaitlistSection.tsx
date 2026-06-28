"use client";

import { useState } from "react";

import { ArrowRight, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BorderIndicators from "@/components/shared/BorderIndicators";
import { subscribeToMailingList } from "@/app/actions";

export default function WaitlistSection() {
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    if (!email) {
      return;
    }

    setStatus("loading");

    const result = await subscribeToMailingList(email);
    if (!result.success) {
      setStatus("error");
      toast.error("Error", {
        description: result.error,
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
    <section className="relative border-b border-dashed border-sky-950">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.15]" />

      <div className="custom-container relative border-x border-dashed border-sky-950">
        <BorderIndicators />

        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Join the waitlist
          </h2>
          <p className="text-muted-foreground mt-2 text-lg">
            Be the first to know about new releases and updates.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === "loading" || status === "success"}
              className="h-12 text-base"
            />
            <Button
              type="submit"
              disabled={!email || status === "loading" || status === "success"}
              className="h-12 px-6 text-base bg-linear-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 border-0 text-white shrink-0"
            >
              {status === "loading" ? (
                <>
                  <span>Subscribing...</span>
                  <Loader2 className="h-4 w-4 animate-spin" />
                </>
              ) : status === "success" ? (
                <Check className="h-4 w-4" />
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="ml-1 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
