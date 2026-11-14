This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project thumbnails

Set each project's `thumbnail` path in `src/content/portfolio.ts`. Put local media in
`public/` and use a root-relative path, for example `thumbnail: "/demo.webm"`.

- `.mp4`, `.webm`, and `.ogv` paths (case-insensitive, including query strings or
  fragments) render as muted, autoplaying, looping inline videos without controls.
  Use browser-compatible codecs, such as H.264 in MP4 or VP8/VP9 in WebM.
- Image paths, including animated GIFs, continue to use Next.js Image.
- Both use the same 16:9, cover-cropped thumbnail area and loading fade.
  `thumbnail_alt` supplies the image alt text or video's accessible label.

## Project descriptions

Project `description` strings support Markdown: `[links](https://example.com)`,
`**bold**`, `*italic*`, lists, and inline code. Links open in a new tab.
Links inherit the description text color with a subtle underline and brighten on hover.
Single `\n` line breaks are preserved; `\n\n` starts a new paragraph.
Raw HTML is disabled and unsafe link protocols are filtered.

```ts
description: "Meet fellow builders.\n\nBuilt with the [Hack the North](https://hackthenorth.com) organizing team."
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
