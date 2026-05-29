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
  title: "Electrical Panel Upgrade Palo Alto — O'Connor & Sons Electric",
  description:
    "Expert panel upgrades in Palo Alto. Licensed C10 electricians upgrade 100A, 200A, and 400A panels with permit coordination and inspection-ready work.",
};

export default function PanelUpgradePage() {
  return (
    <>
      <PageHeroSection
        title="Panel Upgrade"
        subtitle="Upgrade your electrical panel safely and to code. O'Connor & Sons handles everything from permit filing to final inspection across Palo Alto and the Peninsula."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Panel Upgrade" },
        ]}
      />
      <ServiceDetailSection
        activeService="Panel Upgrade"
        sidebarImage="/images/service-panel-upgrade.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={400}
        heading="Electrical Panel Upgrade & Replacement"
        intro={[
          "An outdated or undersized electrical panel is one of the most common safety hazards in Peninsula homes and businesses. Whether you're adding EV chargers, a home addition, or simply have an aging panel that no longer meets your needs, we handle the full upgrade.",
          "We coordinate permits, schedule inspections, and deliver work that passes the first time.",
        ]}
        whatWeDo={[
          "100A, 200A, and 400A panel upgrades",
          "Subpanel installation and circuit expansion",
          "Fuse box replacement with modern breaker panels",
          "Permit coordination and filing with the city",
          "Final inspection coordination and sign-off",
          "Compliance with current California electrical codes",
        ]}
        whyChooseUs={[
          "C10 licensed — required for panel work in California",
          "We pull permits and coordinate inspections",
          "Inspection-ready work, first try",
          "30+ years of panel work across the Peninsula",
          "Transparent pricing, no surprise invoices",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
