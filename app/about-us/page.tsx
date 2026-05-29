import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import AboutSection from "@/components/custom/about/AboutSection";
import WhyChooseSection from "@/components/custom/why-choose/WhyChooseSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "About Us — O'Connor & Sons Electric | Palo Alto C10 Electrician",
  description:
    "Learn about O'Connor & Sons Electric — a family-owned C10 licensed electrical contractor serving Palo Alto and the Peninsula for 30+ years.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeroSection
        title="About Us"
        subtitle="Family-owned, C10-licensed electrical contractor serving Palo Alto and the Peninsula for over 30 years."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />
      <AboutSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CTAFormSection />
    </>
  );
}
