import { DocsLayout } from "fumadocs-ui/layouts/docs";

import { baseOptions } from "@/components/shared/layout.shared";
import { CONSTANTS } from "@/constants/constants";
import { source } from "@/lib/source";

export default function Layout({ children }: LayoutProps<"/docs">) {
  const base = baseOptions();

  return (
    <DocsLayout
      {...base}
      tree={source.pageTree}
      sidebar={{
        prefetch: false,
      }}
      githubUrl={CONSTANTS.githubRepoUrl}
    >
      {children}
    </DocsLayout>
  );
}
