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
  title: "Grease Trap Cleaning Miami — UnclogMe | Certified & Compliant",
  description:
    "Professional grease trap cleaning for restaurants and commercial kitchens in Miami-Dade. Stay compliant, avoid fines, and prevent backups with UnclogMe.",
};

export default function GreaseTrapPage() {
  return (
    <>
      <PageHeroSection
        title="Grease Trap Cleaning"
        subtitle="Certified grease trap cleaning for commercial kitchens and restaurants — stay compliant, avoid violations, and prevent costly backups."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Grease Trap Cleaning" },
        ]}
      />
      <ServiceDetailSection
        activeService="Recurring Grease Trap Cleaning"
        sidebarImage="/images/service-2.png"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Keep Your Kitchen Compliant and Running Smoothly"
        intro={[
          "Grease traps are essential for preventing fats, oils, and grease from entering the sewer system. Without regular cleaning, buildup can lead to backups, foul odors, and compliance violations.",
          "Our recurring grease trap cleaning and maintenance service helps restaurants and commercial kitchens across Miami-Dade County stay compliant, avoid disruptions, and protect their operations.",
        ]}
        whatWeDo={[
          "Scheduled grease trap cleaning based on your operation",
          "Safe removal of grease, sludge, and waste",
          "Prevent backups, odors, and overflows",
          "Service documentation for compliance records",
          "Ongoing maintenance programs for restaurants",
        ]}
        whyChooseUs={[
          "Compliance-focused service aligned with local regulations",
          "Flexible recurring schedules (monthly, quarterly, custom)",
          "Professional equipment and trained technicians",
          "Reliable service for restaurants and commercial kitchens",
          "Ongoing maintenance programs for restaurants",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
