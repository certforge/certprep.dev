import { tracks } from "../data/tracks";
import { SITE_NAME, SITE_TAGLINE, SITE_URL, getExamPrepPath } from "../lib/site";

export const prerender = true;

export function GET() {
  const sections = tracks.map((track) =>
    [
      `## ${track.examCode}: ${track.title}`,
      `URL: ${SITE_URL}${getExamPrepPath(track.id)}`,
      `Repo: ${track.repoUrl}`,
      `Summary: ${track.summary}`,
      `Highlights: ${track.highlights.join("; ")}`,
      `Domains: ${track.domains.map((domain) => `${domain.name} (${domain.weight}%)`).join("; ")}`,
      `Practice assets: ${track.labs.map((lab) => `${lab.type}: ${lab.title}`).join("; ")}`
    ].join("\n")
  );

  const body = [
    `# ${SITE_NAME} full index`,
    "",
    `> ${SITE_TAGLINE}`,
    "",
    `${SITE_NAME} publishes certification prep resources and exam blueprint pages for engineering-focused cloud, GitHub, and AI certifications.`,
    "",
    ...sections
  ].join("\n\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
