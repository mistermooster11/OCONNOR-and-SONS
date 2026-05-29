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
  title: "Residential Unclogging Miami — UnclogMe | Fast Home Drain Services",
  description:
    "Fast and reliable residential drain unclogging in Miami-Dade. Bathrooms, kitchens, sewer lines — UnclogMe arrives within the hour, 24/7.",
};

export default function ResidentialUncloggingPage() {
  return (
    <>
      <PageHeroSection
        title="Residential Unclogging"
        subtitle="Fast, reliable drain unclogging for homes across Miami-Dade, Broward & Palm Beach — available 24/7 with no extra charge."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Residential Unclogging" },
        ]}
      />
      <ServiceDetailSection
        activeService="Residential Unclogging"
        sidebarImage="/images/service-3.webp"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Home Drain Unclogging Services"
        intro={[
          "A clogged drain at home can disrupt your entire routine. UnclogMe's residential team arrives fast, diagnoses the problem, and clears any blockage — kitchen sinks, bathroom drains, toilets, and main sewer lines.",
          "We serve homeowners across Miami-Dade County with transparent pricing, professional equipment, and a commitment to getting the job done right the first time.",
        ]}
        whatWeDo={[
          "Same-day service across Miami-Dade County",
          "Kitchen, bathroom, laundry, and floor drains",
          "Main sewer line unclogging and hydro-jetting",
          "Camera inspection to diagnose hidden blockages",
          "Emergency response available 24/7",
        ]}
        whyChooseUs={[
          "Upfront pricing — you approve before work begins",
          "Licensed and insured residential technicians",
          "Fast response within the hour",
          "Professional-grade equipment for any blockage",
          "Reliable, transparent, and efficient service",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
