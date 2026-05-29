import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import PricingSection from "@/components/custom/pricing/PricingSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Electrical Troubleshooting Palo Alto — O'Connor & Sons Electric",
  description:
    "Fast electrical troubleshooting in Palo Alto. Licensed C10 electricians diagnose flickering lights, tripped breakers, dead outlets, and more — same day.",
};

export default function ElectricalTroubleshootingPage() {
  return (
    <>
      <PageHeroSection
        title="Electrical Troubleshooting"
        subtitle="Flickering lights, tripped breakers, or dead outlets? Our licensed C10 electricians diagnose and fix electrical issues the same day across Palo Alto and the Peninsula."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Electrical Troubleshooting" },
        ]}
      />
      <ServiceDetailSection
        activeService="Electrical Troubleshooting"
        sidebarImage="/images/service-troubleshooting.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={400}
        heading="Electrical Troubleshooting & Diagnostics"
        intro={[
          "Electrical problems can be frustrating — and potentially dangerous if ignored. Our licensed C10 electricians arrive equipped to diagnose any issue from the first visit, whether it's a mysterious breaker that won't stay on, outlets that aren't working, or lights that flicker.",
          "We give you a clear diagnosis and upfront quote before any work begins. No guesswork, no unnecessary repairs.",
        ]}
        whatWeDo={[
          "Full electrical system inspection and diagnosis",
          "Breaker panel testing and identification of faulty circuits",
          "Dead outlet and non-functioning switch diagnosis",
          "Flickering and dimming light investigation",
          "Burning smell and sparking outlet assessment",
          "Written estimate provided before any repair work begins",
        ]}
        whyChooseUs={[
          "Licensed C10 contractor — not a handyman",
          "Same-day dispatch available across the Peninsula",
          "Transparent, upfront pricing before work starts",
          "30+ years diagnosing Peninsula electrical systems",
          "Residential and commercial properties served",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
