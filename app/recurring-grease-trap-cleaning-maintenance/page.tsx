import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";

export const metadata: Metadata = {
  title: "Recurring Grease Trap Cleaning Maintenance — UnclogMe Miami",
  description:
    "Scheduled recurring grease trap cleaning and maintenance for restaurants and commercial kitchens in Miami-Dade. Stay compliant and prevent costly backups.",
};

export default function RecurringGreaseTrapPage() {
  return (
    <>
      <PageHeroSection
        title="Recurring Grease Trap Cleaning Maintenance"
        subtitle="Keep your kitchen compliant with scheduled grease trap maintenance — no surprises, no violations."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Recurring Grease Trap Cleaning" },
        ]}
      />
      <ServiceDetailSection
        activeService="Recurring Grease Trap Cleaning"
        sidebarImage="/images/service-2.png"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Scheduled Maintenance That Keeps You Compliant"
        intro={[
          "A recurring grease trap maintenance program is the most reliable way to prevent backups, fines, and health code violations. Instead of reactive service calls, we put your kitchen on a proactive schedule.",
          "UnclogMe designs custom maintenance intervals based on your kitchen's volume, grease trap capacity, and local regulatory requirements across Miami-Dade, Broward, and Palm Beach counties.",
        ]}
        whatWeDo={[
          "Custom maintenance schedule (monthly, quarterly, or as needed)",
          "Full pump-out and cleaning at every visit",
          "Grease, sludge, and FOG (fats, oils, grease) removal",
          "Detailed service reports for compliance documentation",
          "Inspection for leaks, cracks, or structural issues",
          "Technician notifications before each visit",
        ]}
        whyChooseUs={[
          "Never miss a cleaning — we track your schedule for you",
          "Compliance-ready documentation for health inspections",
          "Flexible intervals tailored to your kitchen output",
          "Same certified technicians each visit for consistency",
          "Emergency service available between scheduled cleanings",
          "Serving restaurants, hotels, and commercial kitchens across Miami",
        ]}
      />
      <CTAFormSection />
      <TestimonialsSection />
    </>
  );
}
