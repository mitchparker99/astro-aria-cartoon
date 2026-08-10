import type { AstroComponentFactory } from "astro/runtime/server/index.js";

/**
 * The `post` content collection is currently empty, so Astro's generated types
 * widen its entries to `unknown`. This is the shape `src/content/config.js`
 * declares — casting to it keeps the blog routes type-safe until the first
 * Markdown file lands in `src/content/post/`.
 */
export type PostEntry = {
	slug: string;
	data: {
		title: string;
		description: string;
		dateFormatted: string;
	};
	render: () => Promise<{ Content: AstroComponentFactory }>;
};
