export type DomainHighlight = {
  name: string;
  weight: number;
  focus: string[];
};

export type Lab = {
  title: string;
  description: string;
  path: string;
  type: "demo" | "script" | "quiz";
};

export type Track = {
  id: string;
  examCode: string;
  title: string;
  status: "available" | "beta" | "planned";
  summary: string;
  repoUrl: string;
  quickStart: string;
  highlights: string[];
  domains: DomainHighlight[];
  labs: Lab[];
};

const gh500Domains: DomainHighlight[] = [
  {
    name: "GHAS Fundamentals",
    weight: 15,
    focus: ["Architecture & licensing", "Security overview dashboards", "Enablement runbooks"]
  },
  {
    name: "Secret Scanning",
    weight: 15,
    focus: ["Push protection policies", "Custom patterns", "Alert triage automation"]
  },
  {
    name: "Dependabot & Dependency Review",
    weight: 35,
    focus: ["Grouped update strategies", "Review gates", "Workflow automation"]
  },
  {
    name: "CodeQL & Code Scanning",
    weight: 25,
    focus: ["Workflow tuning", "Query packs", "SARIF pipelines"]
  },
  {
    name: "Response & Best Practices",
    weight: 10,
    focus: ["Alert lifecycle", "Incident rituals", "Rollbacks & suppressions"]
  }
];

const gh100Domains: DomainHighlight[] = [
  {
    name: "Enterprise Administration",
    weight: 25,
    focus: ["Organizations & teams", "SSO / SCIM", "Audit logging"]
  },
  {
    name: "Actions Governance",
    weight: 20,
    focus: ["Runner fleets", "Reusable workflows", "OIDC hardening"]
  },
  {
    name: "Security & Compliance",
    weight: 20,
    focus: ["Policy enforcement", "Dependabot posture", "Compliance evidence"]
  },
  {
    name: "Collaboration & Projects",
    weight: 20,
    focus: ["Project templates", "Issue forms", "Alias routing"]
  },
  {
    name: "Automation & Ecosystem",
    weight: 15,
    focus: ["Marketplace curation", "GitHub Connect", "Insights"]
  }
];

const ai102Domains: DomainHighlight[] = [
  {
    name: "Azure AI Services",
    weight: 30,
    focus: ["Vision", "Speech", "Document Intelligence"]
  },
  {
    name: "Natural Language Processing",
    weight: 25,
    focus: ["Custom question answering", "Conversational bots", "Retrieval plans"]
  },
  {
    name: "Responsible AI & Governance",
    weight: 15,
    focus: ["Fairness & bias", "Content filters", "Policy docs"]
  },
  {
    name: "Integrations & DevOps",
    weight: 15,
    focus: ["CI/CD integration", "Endpoint monitoring", "Scaling patterns"]
  },
  {
    name: "Knowledge Mining",
    weight: 15,
    focus: ["Cognitive search", "Indexer tuning", "Data enrichment"]
  }
];

export const tracks: Track[] = [
  {
    id: "gh-500",
    examCode: "GH-500",
    title: "GitHub Advanced Security",
    status: "available",
    summary:
      "CodeQL, Dependabot, secret scanning, and response playbooks engineered for security practitioners preparing for GHAS certification.",
    repoUrl: "https://github.com/certforge/GH_500_Cert_Prep",
    quickStart: "docs/01-ghas-overview.md",
    highlights: [
      "Real SARIF outputs and triage drills",
      "Intentionally vulnerable sample applications",
      "Org-wide automation scripts for GHAS enablement"
    ],
    domains: gh500Domains,
    labs: [
      {
        title: "Enable GHAS Org-Wide",
        description: "API-driven rollout runbooks with guardrails and dry-run support.",
        path: "demos/01-enable-ghas",
        type: "demo"
      },
      {
        title: "CodeQL Deep Dive",
        description: "Custom queries, query packs, and SARIF uploads.",
        path: "docs/04-codeql-deep-dive.md",
        type: "demo"
      },
      {
        title: "Dependabot Command Center",
        description: "Group policies, dismissals with reasons, and automated reviewers.",
        path: ".github/dependabot.yml",
        type: "script"
      }
    ]
  },
  {
    id: "gh-100",
    examCode: "GH-100",
    title: "GitHub Administration",
    status: "available",
    summary:
      "Enterprise policy governance, Actions fleet management, and GitHub Connect scenarios mapped to GH-100 objectives.",
    repoUrl: "https://github.com/certforge/GH_100_Cert_Prep",
    quickStart: "docs/01-platform-fundamentals.md",
    highlights: [
      "IAM and SSO walkthroughs with SCIM labs",
      "Reusable workflow library with compliance gates",
      "Projects and governance templates you can fork"
    ],
    domains: gh100Domains,
    labs: [
      {
        title: "Actions Runner Hardening",
        description: "Design a hybrid runner fleet with network boundaries.",
        path: "demos/02-runner-hardening",
        type: "demo"
      },
      {
        title: "Enterprise Policy Audits",
        description: "Scripts to enumerate settings across orgs.",
        path: "scripts/list-enterprise-policies.sh",
        type: "script"
      },
      {
        title: "Project Template Launch",
        description: "Opinionated board and issue form ready for reuse.",
        path: "docs/03-collaboration.md",
        type: "demo"
      }
    ]
  },
  {
    id: "ai-102",
    examCode: "AI-102",
    title: "Azure AI Engineer",
    status: "available",
    summary:
      "Hands-on Azure AI labs with infrastructure-as-code, responsible AI reviews, and production-focused integration tests.",
    repoUrl: "https://github.com/certforge/AI-102_Cert_Prep",
    quickStart: "docs/01-azure-ai-services.md",
    highlights: [
      "Bicep/Terraform IaC for AI workloads",
      "End-to-end bot + search solution labs",
      "Responsible AI design templates"
    ],
    domains: ai102Domains,
    labs: [
      {
        title: "Vision + Document AI Lab",
        description: "Build an intake workflow with Layout, OCR, and classification.",
        path: "demos/03-vision-automation",
        type: "demo"
      },
      {
        title: "Bot + Search Fusion",
        description: "Integrate Azure Bot Service with Cognitive Search and embeddings.",
        path: "demos/05-nlp-knowledge",
        type: "demo"
      },
      {
        title: "Responsible AI Review",
        description: "Checklist-driven deployment gate with policy artifacts.",
        path: "docs/05-responsible-ai.md",
        type: "demo"
      }
    ]
  }
];
