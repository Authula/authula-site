import { createElement } from "react";

import type { LoaderPlugin } from "fumadocs-core/source";

/**
 * Page-tree icons can be either a Lucide icon name (handled by
 * `lucideIconsPlugin`) or an image URL/path such as
 * `/images/providers/github.svg`.
 *
 * Image icons are resolved first so the Lucide plugin leaves them untouched.
 */
function isImageIcon(icon: string): boolean {
  return icon.startsWith("/") || icon.startsWith("http://") || icon.startsWith("https://");
}

function replaceImageIcon<T extends { icon?: unknown }>(node: T): T {
  if (typeof node.icon !== "string" || !isImageIcon(node.icon)) return node;

  return {
    ...node,
    icon: createElement("img", {
      src: node.icon,
      alt: "",
      "aria-hidden": "true",
      width: 16,
      height: 16,
      loading: "lazy",
      decoding: "async",
      className: "size-4 shrink-0 object-contain dark:invert",
    }),
  };
}

export function imageIconsPlugin(): LoaderPlugin {
  return {
    name: "authula:image-icons",
    transformPageTree: {
      file: replaceImageIcon,
      folder: replaceImageIcon,
      separator: replaceImageIcon,
    },
  };
}
