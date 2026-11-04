"use client";

import { useState } from "react";

import { useForm } from "@tanstack/react-form";
import { Send } from "lucide-react";
import { toast } from "sonner";

import { contactUs } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const fallbackErrorMessage = "Something went wrong. Please try again later.";

export default function ContactUsForm() {
  const [formError, setFormError] = useState<string | null>(null);

  const form = useForm({
    defaultValues: {
      email: "",
      message: "",
    },
    onSubmit: async ({ value, formApi }) => {
      setFormError(null);

      try {
        const result = await contactUs(value.email, value.message);
        if (!result.success) {
          const message = result.message || fallbackErrorMessage;
          setFormError(message);
          toast.error("Could not send message", {
            description: message,
          });
          return;
        }

        setFormError(null);
        toast.success("Message sent", {
          description: "Thanks for reaching out. We'll get back to you soon.",
        });
        formApi.reset();
      } catch {
        // Network/server-action failures must still resolve the submitting state.
        setFormError(fallbackErrorMessage);
        toast.error("Could not send message", {
          description: fallbackErrorMessage,
        });
      }
    },
  });

  const clearFormError = () => {
    if (formError !== null) {
      setFormError(null);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className="space-y-5"
    >
      <form.Field
        name="email"
        children={(field) => (
          <div className="space-y-2">
            <Label htmlFor={field.name} className="text-[13px] font-medium text-home-muted-strong">
              Email
            </Label>
            <Input
              id={field.name}
              name="email"
              type="email"
              autoComplete="email"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => {
                field.handleChange(e.target.value);
                clearFormError();
              }}
              placeholder="you@example.com"
              required
              className="h-11 border-white/35 bg-home-panel text-[15px] text-home-text shadow-none placeholder:text-home-muted focus-visible:border-home-accent-bright focus-visible:ring-2 focus-visible:ring-home-accent-bright focus-visible:ring-offset-2 focus-visible:ring-offset-home-panel-raised disabled:opacity-60 dark:bg-home-panel"
            />
          </div>
        )}
      />
      <form.Field
        name="message"
        children={(field) => (
          <div className="space-y-2">
            <Label htmlFor={field.name} className="text-[13px] font-medium text-home-muted-strong">
              Message
            </Label>
            <Textarea
              id={field.name}
              name="message"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => {
                field.handleChange(e.target.value);
                clearFormError();
              }}
              placeholder="How can we help you?"
              required
              className="min-h-[9rem] resize-y border-white/35 bg-home-panel text-[15px] text-home-text shadow-none placeholder:text-home-muted focus-visible:border-home-accent-bright focus-visible:ring-2 focus-visible:ring-home-accent-bright focus-visible:ring-offset-2 focus-visible:ring-offset-home-panel-raised disabled:opacity-60 dark:bg-home-panel"
            />
          </div>
        )}
      />

      {formError ? (
        <p role="alert" className="text-[13px] leading-relaxed text-red-400">
          {formError}
        </p>
      ) : null}

      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => (
          <Button
            type="submit"
            disabled={!canSubmit}
            className="h-11 w-full rounded-[10px] border-0 bg-linear-to-r from-blue-700 to-sky-700 text-sm font-medium text-white transition-all hover:from-blue-800 hover:to-sky-800 focus-visible:ring-2 focus-visible:ring-home-accent-bright focus-visible:ring-offset-2 focus-visible:ring-offset-home-panel-raised active:translate-y-px disabled:opacity-60"
          >
            <Send className="size-4" aria-hidden="true" />
            {isSubmitting ? "Sending..." : "Send message"}
          </Button>
        )}
      />
    </form>
  );
}
