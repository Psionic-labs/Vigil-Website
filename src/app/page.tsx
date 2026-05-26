import Navbar from "@/components/nav/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import AnimatedTaglines from "@/components/hero/AnimatedTaglines";
import HowItWorks from "@/components/sections/HowItWorks";
import AITriageSection from "@/components/sections/AITriageSection";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import DashboardPreview from "@/components/sections/DashboardPreview";
import Comparison from "@/components/sections/Comparison";
import Testimonials from "@/components/sections/Testimonials";
import InstallSection from "@/components/sections/InstallSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />

        {/* Vertical Centerpiece blocks */}
        <AnimatedTaglines />

        {/* 4-Step Diagram */}
        <HowItWorks />

        {/* AI Triage JSON Details */}
        <AITriageSection />

        {/* Feature grid */}
        <FeaturesGrid />

        {/* Perspective Dashboard Mockup */}
        <DashboardPreview />

        {/* Before/After comparison */}
        <Comparison />

        {/* Testimonials */}
        <Testimonials />

        {/* Tabbed Installer */}
        <InstallSection />

        {/* Call to action */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
