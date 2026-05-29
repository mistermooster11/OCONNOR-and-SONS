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
  title: "Commercial Electrician Palo Alto — O'Connor & Sons Electric",
  description:
    "Commercial electrical contractor in Palo Alto. Office build-outs, tenant improvements, panel upgrades, and code compliance for businesses across the Peninsula.",
};

export default function CommercialElectricalPage() {
  return (
    <>
      <PageHeroSection
        title="Commercial Electrical"
        subtitle="Reliable commercial electrical services for offices, retail, and multi-unit properties across Palo Alto and the Peninsula. Licensed, insured, and code-compliant."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Commercial Electrical" },
        ]}
      />
      <ServiceDetailSection
        activeService="Commercial Electrical"
        sidebarImage="/images/service-commercial.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={400}
        heading="Commercial Electrical Services"
        intro={[
          "Businesses need electrical work done right, on time, and with minimal disruption. O'Connor & Sons Electric works with property managers, landlords, general contractors, and business owners throughout the Peninsula on commercial electrical projects of all sizes.",
          "We handle code compliance, permit coordination, and inspection-ready work for every commercial job.",
        ]}
        whatWeDo={[
          "Office and retail build-out wiring",
          "Tenant improvement electrical",
          "Commercial panel upgrades and load center work",
          "Three-phase power installation",
          "Lighting system installation and retrofit",
          "EV charging station installation for fleets and parking lots",
          "Code compliance and permit coordination",
        ]}
        whyChooseUs={[
          "Experienced with commercial and mixed-use properties",
          "C10 licensed — meets California contractor requirements",
          "Minimal disruption scheduling for operating businesses",
          "Permit coordination and code compliance handled",
          "Serving the Peninsula for 30+ years",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
