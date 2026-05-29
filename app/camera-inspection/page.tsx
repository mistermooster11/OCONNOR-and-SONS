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
  title: "Camera Inspection Miami — UnclogMe | Sewer & Drain Diagnostics",
  description:
    "Accurate sewer and drain camera inspections in Miami-Dade. Pinpoint blockages, cracks, and root intrusions before they become costly problems.",
};

export default function CameraInspectionPage() {
  return (
    <>
      <PageHeroSection
        title="Camera Inspection"
        subtitle="See exactly what's happening inside your pipes. High-definition sewer and drain camera inspections across Miami-Dade, Broward & Palm Beach."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Camera Inspection" },
        ]}
      />
      <ServiceDetailSection
        activeService="Camera Inspection"
        sidebarImage="/images/service-1.png"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Drain & Sewer Camera Inspection"
        intro={[
          "Camera inspections take the guesswork out of drain problems. Our technicians insert a high-definition waterproof camera directly into your pipe to identify blockages, cracks, root intrusions, and pipe deterioration.",
          "You receive a clear diagnosis before any work begins — no unnecessary repairs, no hidden costs.",
        ]}
        whatWeDo={[
          "HD waterproof camera inserted directly into your pipe",
          "Real-time video feed shared with the property owner",
          "Identification of blockages, root intrusions, cracks, and collapses",
          "Pre-purchase sewer line inspections for property buyers",
          "Video recording and written report after every inspection",
        ]}
        whyChooseUs={[
          "Accurate diagnosis before any repair work begins",
          "Avoid unnecessary excavation or guesswork",
          "Licensed technicians with professional-grade equipment",
          "Available for residential and commercial properties",
          "Fast scheduling across Miami-Dade County",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
