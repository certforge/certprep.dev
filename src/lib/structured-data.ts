import { tracks, type Track } from "../data/tracks";
import {
  DEFAULT_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  absoluteUrl,
  getExamPrepPath
} from "./site";

function organizationNode() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/certprep-logo.svg"),
    sameAs: ["https://github.com/certforge"],
    description: DEFAULT_DESCRIPTION
  };
}

function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}#organization` },
    inLanguage: "en"
  };
}

export function homeStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode(),
      websiteNode(),
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}#home`,
        name: `${SITE_NAME} certification prep hub`,
        url: SITE_URL,
        description: DEFAULT_DESCRIPTION,
        isPartOf: { "@id": `${SITE_URL}#website` },
        about: tracks.map((track) => `${track.examCode}: ${track.title}`),
        mainEntity: {
          "@type": "ItemList",
          itemListElement: tracks.map((track, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: absoluteUrl(getExamPrepPath(track.id)),
            name: `${track.examCode}: ${track.title}`
          }))
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "How should I use CertPrep to study for an exam?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Start with the exam blueprint page, follow the weighted domain guides, run the matching demos or scripts, and then review using mock exams or quick-reference notes."
            }
          },
          {
            "@type": "Question",
            name: "Does CertPrep include hands-on labs and mock exams?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Tracks include runnable demos, scripts, quick references, and where available mock exams or practice-question sets inside the linked repositories."
            }
          },
          {
            "@type": "Question",
            name: "Which certification tracks are currently available?",
            acceptedAnswer: {
              "@type": "Answer",
              text: tracks.map((track) => `${track.examCode}: ${track.title}`).join("; ")
            }
          }
        ]
      }
    ]
  };
}

export function examPrepIndexStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode(),
      websiteNode(),
      {
        "@type": "CollectionPage",
        name: `${SITE_NAME} exam blueprints`,
        url: absoluteUrl("/exam-prep"),
        description:
          "Certification exam blueprint pages covering domain weights, focus areas, and direct links into each CertPrep repository.",
        isPartOf: { "@id": `${SITE_URL}#website` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: tracks.map((track, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: absoluteUrl(getExamPrepPath(track.id)),
            name: `${track.examCode}: ${track.title}`
          }))
        }
      }
    ]
  };
}

export function examTrackStructuredData(track: Track) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode(),
      websiteNode(),
      {
        "@type": "LearningResource",
        name: `${track.examCode}: ${track.title} exam blueprint`,
        url: absoluteUrl(getExamPrepPath(track.id)),
        description: track.summary,
        isPartOf: { "@id": `${SITE_URL}#website` },
        publisher: { "@id": `${SITE_URL}#organization` },
        learningResourceType: "Certification exam blueprint",
        educationalLevel: "Professional certification",
        about: track.domains.map((domain) => ({
          "@type": "DefinedTerm",
          name: domain.name,
          description: domain.focus.join(", ")
        })),
        teaches: track.highlights,
        keywords: [track.examCode, track.title, SITE_NAME, SITE_TAGLINE]
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: SITE_NAME,
            item: SITE_URL
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Exam Prep Help",
            item: absoluteUrl("/exam-prep")
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `${track.examCode}: ${track.title}`,
            item: absoluteUrl(getExamPrepPath(track.id))
          }
        ]
      }
    ]
  };
}
