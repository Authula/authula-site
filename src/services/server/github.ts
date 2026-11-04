import { cache } from "react";

import { CONSTANTS } from "@/constants/constants";
import { gitHubRepoResponseSchema } from "@/models";

/**
 * Fetch the repository star count.
 *
 * - Not a server action: this is only called from server components.
 * - Wrapped in React `cache()` so every component in a request (Hero,
 *   Community) shares a single upstream fetch.
 * - Aborts after 2s so a slow GitHub response cannot hold the page.
 */
export const getGitHubRepoStars = cache(async (): Promise<number | null> => {
  try {
    const response = await fetch(CONSTANTS.githubRepoApiUrl, {
      next: {
        revalidate: 60 * 60 * 24, // Revalidate once a day
      },
      headers: {
        Accept: "application/vnd.github+json",
      },
      signal: AbortSignal.timeout(2000),
    });
    if (!response.ok) {
      console.error(`Failed to fetch GitHub repo data: ${response.statusText}`);
      return null;
    }

    const data = await response.json();

    const validationResult = gitHubRepoResponseSchema.safeParse(data);
    if (!validationResult.success) {
      console.error(validationResult.error.message);
      return null;
    }

    return validationResult.data.stargazers_count ?? null;
  } catch (error: unknown) {
    console.error(`Error fetching GitHub repo stars:`, error);
    return null;
  }
});
