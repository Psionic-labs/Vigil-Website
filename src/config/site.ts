import {
  Terminal,
  Cpu,
  ShieldAlert,
  GitPullRequest,
  Layers,
  Activity,
  Footprints,
  Github,
  Zap,
  ShieldCheck,
} from "lucide-react";
import {
  NavItem,
  Issue,
  FeatureItem,
  WorkflowStep,
  TestimonialItem,
  ComparisonItem,
} from "@/types";

export const siteConfig = {
  name: "Vigil",
  description: "AI-native bug triage platform. Watches user sessions, clusters failures, and prepares GitHub issues.",
  socials: {
    github: "https://github.com/Psionic-labs/Vigil",
    twitter: "https://twitter.com",
  },
};

export const navLinks: NavItem[] = [
  { name: "Product", href: "#product" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Features", href: "#features" },
  { name: "Docs", href: "#docs" },
  { name: "Blog", href: "#blog" },
];

export const footerLinks = {
  product: [
    { name: "Issues", href: "#product" },
    { name: "Sessions", href: "#features" },
    { name: "GitHub Integration", href: "#features" },
    { name: "Pricing", href: "#install" },
    { name: "Changelog", href: "#" },
  ],
  developers: [
    { name: "Docs", href: "#" },
    { name: "SDK Reference", href: "#" },
    { name: "SDK Contract", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Status", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
};

export const trustCompanies = [
  "Stackframe",
  "Meridian",
  "Orbital",
  "Capsule",
  "Linear",
  "Vercel",
  "Supabase",
  "Clerk",
  "Inngest",
  "Neon",
];

export const taglineBlocks = [
  {
    index: "01",
    word: "VIGIL",
    line1: "Where every broken session becomes a report,",
    line2: "and every report becomes a fix.",
  },
  {
    index: "02",
    word: "SIGNAL",
    line1: "Through the noise of real user behavior,",
    line2: "the failures that matter rise first.",
  },
  {
    index: "03",
    word: "TRIAGE",
    line1: "Before your users open a ticket,",
    line2: "the bug is already in your queue.",
  },
];

export const workflowSteps: WorkflowStep[] = [
  {
    num: "01",
    title: "Record",
    icon: Terminal,
    desc: "Install @vigil/sdk with a single script tag or npm package. It captures DOM mutations, clicks, errors, network failures, and navigations using rrweb — with all inputs masked by default.",
  },
  {
    num: "02",
    title: "Ingest",
    icon: Cpu,
    desc: "Sessions are batched and flushed to Vigil's ingest API. Storage is asynchronous and non-blocking. Your app never feels the overhead.",
  },
  {
    num: "03",
    title: "Triage",
    icon: ShieldAlert,
    desc: "Every completed session enters the AI triage pipeline. Claude analyzes the full event timeline, detects what went wrong, and decides whether it is a new issue, a duplicate of a known failure, or normal behavior.",
  },
  {
    num: "04",
    title: "Act",
    icon: GitPullRequest,
    desc: "Work from a prioritized issue queue. Each issue has a root cause, a suggested fix, reproduction steps, and evidence. Raise a pre-filled GitHub issue with one click.",
  },
];

export const aiTriageJson = `{
  "session_summary": "Payment failed on POST /api/payment 500",
  "goal_completed": false,
  "friction_score": 92,
  "issues": [
    {
      "title": "Payment fails silently on 500 error",
      "severity": "P0",
      "confidence": 0.91,
      "root_cause": "POST /api/payment 500; UI lacks error state",
      "suggested_fix": "Handle !res.ok and surface toast notification",
      "reproduction_steps": [
        "Open /checkout",
        "Click pay button",
        "Observe POST /api/payment -> 500",
        "Observe no user-facing error shown"
      ]
    }
  ]
}`;

export const featureItems: FeatureItem[] = [
  {
    title: "Issue Grouping",
    icon: Layers,
    desc: "Vigil clusters repeated failures automatically. Instead of 500 separate reports, you get one issue affecting 500 sessions — with the first seen, last seen, and all the evidence.",
  },
  {
    title: "Friction Score",
    icon: Activity,
    desc: "Every session gets a 0–100 friction score. Sort your queue by who struggled most, not just who errored out.",
  },
  {
    title: "Reproduction Steps",
    icon: Footprints,
    desc: "AI generates step-by-step reproduction paths from the session timeline. Paste them straight into your GitHub issue.",
  },
  {
    title: "GitHub Integration",
    icon: Github,
    desc: "One-click issue creation with AI-written body, severity labels, session replay links, and stack traces pre-attached. One issue per bug group — not one per affected user.",
  },
  {
    title: "Auto-Raise Mode",
    icon: Zap,
    desc: "Configure Vigil to automatically raise GitHub issues for P0/P1 bugs above your confidence threshold. Your repo gets the issue before anyone on your team notices.",
  },
  {
    title: "Privacy First",
    icon: ShieldCheck,
    desc: "All input values are masked by default. Passwords are never captured. The AI only sees structured event summaries — never raw replay data or unmasked text.",
  },
];

export const previewIssues: Issue[] = [
  {
    severity: "P0",
    title: "Payment submission fails with 500 error",
    sessions: "500 sessions",
    confidence: "91% confidence",
    time: "2h ago",
    github: { linked: true, number: 419 },
  },
  {
    severity: "P1",
    title: "Auth token expires mid-session without refresh",
    sessions: "134 sessions",
    confidence: "87% confidence",
    time: "5h ago",
  },
  {
    severity: "P1",
    title: "Checkout form submit button unresponsive on mobile",
    sessions: "89 sessions",
    confidence: "83% confidence",
    time: "1d ago",
    autoRaised: true,
  },
  {
    severity: "P2",
    title: "Confusing error message on invalid promo code",
    sessions: "41 sessions",
    confidence: "74% confidence",
    time: "2d ago",
  },
  {
    severity: "P3",
    title: "Slow navigation from /dashboard to /settings",
    sessions: "12 sessions",
    confidence: "61% confidence",
    time: "3d ago",
  },
];

export const heroMockupIssues: Issue[] = [
  {
    severity: "P0",
    title: "Silent 500 on POST /api/checkout",
    sessions: "482 sessions",
    confidence: "94% confidence",
    time: "2m ago",
    autoRaised: true,
  },
  {
    severity: "P1",
    title: "JSON parse error in OAuth handler",
    sessions: "89 sessions",
    confidence: "89% confidence",
    time: "14m ago",
    github: { linked: true, number: 412 },
  },
  {
    severity: "P1",
    title: "Settings save button unresponsive on mobile",
    sessions: "34 sessions",
    confidence: "81% confidence",
    time: "1h ago",
  },
  {
    severity: "P2",
    title: "CSS layout breakage in billing panel",
    sessions: "12 sessions",
    confidence: "73% confidence",
    time: "3h ago",
  },
];

export const comparisonBefore: ComparisonItem[] = [
  { text: "Watch recordings manually for hours" },
  { text: "Guess which sessions are worth your time" },
  { text: "Write bug reports from scratch" },
  { text: "Miss duplicate bugs filed separately" },
  { text: "Find out when users complain on Twitter" },
];

export const comparisonAfter: ComparisonItem[] = [
  { text: "AI triages every session automatically" },
  { text: "Issues ranked by severity and affected sessions" },
  { text: "Root cause, fix, and reproduction steps written for you" },
  { text: "Repeated failures clustered into one issue group" },
  { text: "Bug is in your queue before users notice" },
];

export const testimonials: TestimonialItem[] = [
  {
    quote: "We had a payment failure affecting 12% of checkout attempts for three days. Nobody noticed because there was no JS error in Sentry — just a silent 500. Vigil caught it on day one.",
    name: "Pushpendra M.",
    title: "Product Design Intern",
    company: "Someone",
    initials: "PM",
    colorClass: "bg-emerald-100 text-emerald-800 border-emerald-200",
  },
  {
    quote: "The GitHub integration is the thing. One click and there's a proper issue in the repo with the stack trace, the replay link, and steps to reproduce. Our PMs can even understand them.",
    name: "Sachin V.",
    title: "Founder",
    company: "Acadable Labs",
    initials: "SV",
    colorClass: "bg-indigo-100 text-indigo-800 border-indigo-200",
  },
];

export const installSnippets = {
  script: `<script src="https://cdn.vigil.dev/sdk.js" defer></script>
<script>
  Vigil.init({
    projectKey: "pk_playground",
    environment: "production",
    release: "1.0.0", // Replace with your release/version
  });
</script>`,
  npmInstall: `npm install @vigil/sdk`,
  npmInit: `import { Vigil } from "@vigil/sdk";

Vigil.init({
  projectKey: "pk_playground",
});`,
};
