import { LucideIcon } from "lucide-react";

export type Severity = "P0" | "P1" | "P2" | "P3";

export interface NavItem {
  name: string;
  href: string;
}

export interface Issue {
  severity: Severity;
  title: string;
  sessions: string;
  confidence: string;
  time: string;
  github?: {
    linked: boolean;
    number: number;
  };
  autoRaised?: boolean;
}

export interface FeatureItem {
  title: string;
  icon: LucideIcon;
  desc: string;
}

export interface WorkflowStep {
  num: string;
  title: string;
  icon: LucideIcon;
  desc: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  title: string;
  company: string;
  initials: string;
  colorClass: string;
}

export interface ComparisonItem {
  text: string;
}
