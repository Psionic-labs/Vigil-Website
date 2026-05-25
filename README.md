# Vigil — AI-Native Bug Triage Marketing Website

This repository contains the public-facing marketing website for **Vigil** — an AI-native bug triage platform for developers. Vigil captures user sessions, clusters failures, and prepares GitHub-ready bug reports.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (purposeful scroll & hover transitions)
- **Icons:** Lucide React
- **Typography:** Lora (headings) & Plus Jakarta Sans (body/UI) loaded via Google Fonts
- **Package Manager:** `pnpm`

## Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run the local development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to preview the site.

## Building for Production

To validate types, check formatting, and build the optimized production static bundle:

```bash
pnpm build
```

The output build files will be optimized and compiled into the `.next` directory.

## Project Structure

```
src/
  app/
    layout.tsx         # Root layout configuring Lora and Plus Jakarta Sans
    page.tsx           # Page assembly importing all section layouts
    globals.css        # Core light theme resets and base rules
  components/
    nav/
      Navbar.tsx       # Glassmorphic sticky header with scroll detection
    hero/
      HeroSection.tsx  # Hero header grid with decoupled mockup view
      TrustStrip.tsx   # Infinitely scrolling text logo marquee
      AnimatedTaglines.tsx # Centerpiece blocks detailing Vigil, Signal, Triage
    sections/
      HowItWorks.tsx   # Visual steps detailing ingestion flow
      AITriageSection.tsx # AI telemetry demonstration block (Claude JSON schema)
      FeaturesGrid.tsx # Modular product feature cards grid
      DashboardPreview.tsx # Perspective table mockup of issue queues
      Comparison.tsx   # Life before vs. after Vigil cards comparison
      Testimonials.tsx # Customer feedback initial avatars cards
      InstallSection.tsx # Tabbed command lines copy snippet guides
      CTASection.tsx   # Call-to-action conversion grid
    footer/
      Footer.tsx       # Multi-column structured footer
    ui/                # Base primitives and design elements
      Button.tsx       # Polymorphic layout-styled button
      Section.tsx      # Section wrappers mapping paddings and scroll anims
      SectionHeader.tsx # Standard badge, header headers layout
      SeverityBadge.tsx # P0-P3 severity status badges
      CodeBlock.tsx    # Highlighting viewer with clipboard actions
      FrictionBar.tsx  # Friction score gauges
  config/
    site.ts            # Centralized marketing text, scripts, lists, and config variables
  types/
    index.ts           # Shared TypeScript type definitions
```
