import { getAllIndexablePaths, absoluteUrl } from "../lib/site";

export const prerender = true;

export function GET() {
  const now = new Date().toISOString();
  const urls = getAllIndexablePaths()
    .map(
      (path) => `  <url>
    <loc>${absoluteUrl(path)}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${path === "/" ? "1.0" : path === "/exam-prep" ? "0.9" : "0.8"}</priority>
  </url>`
    )
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
