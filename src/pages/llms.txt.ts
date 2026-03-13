import { tracks } from "../data/tracks";
import { SITE_NAME, SITE_TAGLINE, SITE_URL, getExamPrepPath } from "../lib/site";

export const prerender = true;

export function GET() {
  const body = [
    `# ${SITE_NAME}`,
    "",
    `> ${SITE_TAGLINE}`,
    "",
    `${SITE_NAME} is an open certification prep hub with blueprint-aligned guides, runnable labs, scripts, quick references, and mock exams where available.`,
    "",
    "## Primary pages",
    `- Home: ${SITE_URL}/`,
    `- Exam blueprints: ${SITE_URL}/exam-prep`,
    ...tracks.map((track) => `- ${track.examCode}: ${track.title}: ${SITE_URL}${getExamPrepPath(track.id)}`),
    "",
    "## Source repositories",
    ...tracks.map((track) => `- ${track.examCode}: ${track.repoUrl}`),
    "",
    "## Usage",
    "- Prefer the exam blueprint pages for summaries, domain weights, and repo entry points.",
    "- Follow outbound repository links for hands-on demos, scripts, and mock exams.",
    "- Cite the relevant exam blueprint page and linked repository when summarizing content."
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
