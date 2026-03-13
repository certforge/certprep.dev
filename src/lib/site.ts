import { tracks } from "../data/tracks";

export const SITE_URL = "https://certprep.dev";
export const SITE_NAME = "CertPrep";
export const SITE_TAGLINE = "Learn. Build. Certify.";
export const DEFAULT_DESCRIPTION =
  "Open certification prep labs with blueprint-aligned guides, runnable demos, mock exams, and community-maintained study resources.";
export const DEFAULT_OG_IMAGE = "/certprep-logo.svg";

export const staticPages = [
  { path: "/", title: "CertPrep | Certification Prep Hub" },
  { path: "/exam-prep", title: "CertPrep | Exam Blueprints" }
];

export function absoluteUrl(pathname: string) {
  return new URL(pathname, SITE_URL).toString();
}

export function getTrackById(trackId: string) {
  return tracks.find((track) => track.id === trackId);
}

export function getExamPrepPath(trackId: string) {
  return `/exam-prep/${trackId}`;
}

export function getAllIndexablePaths() {
  return [
    ...staticPages.map((page) => page.path),
    ...tracks.map((track) => getExamPrepPath(track.id))
  ];
}
