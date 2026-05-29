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
  title: "EV Charger Installation Palo Alto — O'Connor & Sons Electric",
  description:
    "Level 2 EV charger installation in Palo Alto. All major brands, dedicated circuits, permit coordination — licensed C10 electrician with same-day availability.",
};

export default function EvChargerInstallationPage() {
  return (
    <>
      <PageHeroSection
        title="EV Charger Installation"
        subtitle="Level 2 EV charger installation for Palo Alto homeowners and businesses. All major brands supported, dedicated circuits installed, permits handled start to finish."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "EV Charger Installation" },
        ]}
      />
      <ServiceDetailSection
        activeService="EV Charger Installation"
        sidebarImage="/images/service-ev-charger.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={400}
        heading="EV Charger Installation"
        intro={[
          "Level 2 home EV charging is one of the most popular upgrades we do across the Peninsula — and for good reason. A properly installed 240V charger can fully charge most EVs overnight, dramatically faster than a standard wall outlet.",
          "O'Connor & Sons Electric installs Level 2 chargers for all major brands — Tesla Wall Connector, ChargePoint, Emporia, JuiceBox, and more — with permit coordination and inspection-ready work.",
        ]}
        whatWeDo={[
          "Level 2 (240V) EV charger installation — all major brands",
          "Dedicated 50A or 60A circuit installation",
          "Panel capacity assessment and upgrade if needed",
          "Indoor and outdoor-rated installation",
          "Hardwired and plug-in NEMA 14-50 outlet setups",
          "Commercial EV charging station installation",
          "Permit coordination and city inspection",
        ]}
        whyChooseUs={[
          "Most requested service on the Peninsula — we have the experience",
          "All major charger brands supported",
          "Permit coordination included in every install",
          "Licensed C10 — required for 240V circuit work",
          "Same-day availability for many installations",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
