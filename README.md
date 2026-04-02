<p align="center">
  <img src="./project-logo.png" alt="Authula Logo" width="200"/>
</p>

<p align="center">
All-in-one landing page and docs site for Authula.
</p>

---

## Development

Run development server:

```bash
# Install npm packages
$ pnpm i

# Run development server
$ pnpm dev

# Navigate to http://localhost:3000 to see the webapp.
```

### AI

If you're using AI Agents, you can run the following script to make sure all Agent Skills are available for a variety of agent CLI tools.

```bash
$ bash ./scripts/agent-skills-symlinker.sh
```

---

## Explore

This project is built with [Next.js](https://nextjs.org/) and
[Fumadocs](https://fumadocs.dev/).

In the project, you can see:

- `lib/source.ts`: Code for content source adapter, [`loader()`](https://fumadocs.dev/docs/headless/source-api) provides the interface to access your content.
- `lib/layout.shared.tsx`: Shared options for layouts, optional but preferred to keep.

| Route                     | Description                                           |
| ------------------------- | ----------------------------------------------------- |
| `app/(home)`              | The route group for the landing page and other pages. |
| `app/docs`                | The documentation layout and pages.                   |
| `app/api/search/route.ts` | The Route Handler for search.                         |

### Fumadocs MDX

A `source.config.ts` config file has been included, you can customise different options like frontmatter schema.

Read the [Introduction](https://fumadocs.dev/docs/mdx) for further details.

---

## Learn More

To learn more about Next.js and Fumadocs, take a look at the following
resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Fumadocs](https://fumadocs.dev) - learn about Fumadocs
