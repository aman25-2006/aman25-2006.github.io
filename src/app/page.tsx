import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MetricsBar from "@/components/MetricsBar";
import AboutEducation from "@/components/AboutEducation";
import SkillsGrid from "@/components/SkillsGrid";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Certifications from "@/components/Certifications";
import Leadership from "@/components/Leadership";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <div className="flex-grow">
        <Hero />
        <MetricsBar />
        <AboutEducation />
        <SkillsGrid />
        <ProjectsShowcase />
        <Certifications />
        <Leadership />
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}

