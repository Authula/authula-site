import { createHighlighter } from "@tanstack/highlight/core";
import { go } from "@tanstack/highlight/languages/go";
import { plaintext } from "@tanstack/highlight/languages/plaintext";
import { shell } from "@tanstack/highlight/languages/shell";
import { toml } from "@tanstack/highlight/languages/toml";

export type CodeLanguage = "go" | "toml" | "bash" | "text";

const LANGUAGE_MAP: Record<CodeLanguage, string> = {
  go: "go",
  toml: "toml",
  bash: "shell",
  text: "plaintext",
};

const highlighter = createHighlighter({
  languages: [go, toml, shell, plaintext],
  fallbackLanguage: "plaintext",
});

export function renderCodeBlock(code: string, language: CodeLanguage, lineNumbers = true) {
  return highlighter.renderCodeBlockData({
    code,
    lang: LANGUAGE_MAP[language],
    lineNumbers,
  });
}
