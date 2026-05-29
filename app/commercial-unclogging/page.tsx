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
  title: "Commercial Unclogging Miami — UnclogMe | Business Drain Experts",
  description:
    "Keep your business running with UnclogMe's commercial unclogging services in Miami-Dade. Restaurants, offices, retail — fast response 24/7.",
};

export default function CommercialUncloggingPage() {
  return (
    <>
      <PageHeroSection
        title="Commercial Unclogging"
        subtitle="Minimize downtime with UnclogMe's commercial drain unclogging services — fast, compliant, and available 24/7 across Miami-Dade."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Commercial Unclogging" },
        ]}
      />
      <ServiceDetailSection
        activeService="Commercial Unclogging"
        sidebarImage="/images/service-4.webp"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Commercial Drain Unclogging Services"
        intro={[
          "A blocked drain in a commercial property can cost your business hours of operation and thousands of dollars. UnclogMe specializes in fast, efficient commercial drain services for restaurants, hotels, offices, retail spaces, and industrial facilities.",
          "We work around your operating hours to minimize downtime and provide documentation for health and compliance inspections when needed.",
        ]}
        whatWeDo={[
          "High-capacity hydro-jetting for large-diameter pipes",
          "Drain unclogging for restaurants, hotels, offices, and retail",
          "Emergency response 24/7 with no extra charge",
          "Camera inspection to identify root causes",
          "Preventive maintenance contracts to avoid future blockages",
        ]}
        whyChooseUs={[
          "Minimal business disruption — we work around your hours",
          "Industrial-grade equipment for any scale",
          "Compliance documentation available on request",
          "Licensed, insured, and trained commercial technicians",
          "Fast response across Miami-Dade County",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
