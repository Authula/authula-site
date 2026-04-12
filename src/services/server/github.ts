"use server";

import { CONSTANTS } from "@/constants/constants";
import { gitHubRepoResponseSchema } from "@/models";

export const getGitHubRepoStars = async (): Promise<number | null> => {
  try {
    const response = await fetch(CONSTANTS.githubRepoApiUrl, {
      next: {
        revalidate: 60 * 60 * 24, // Revalidate once a day
      },
      headers: {
        Accept: "application/vnd.github+json",
      },
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
  } catch (error: any) {
    console.error(`Error fetching GitHub repo stars:`, error);
    return null;
  }
};
