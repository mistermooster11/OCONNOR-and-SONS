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
  title: "Electrical for Remodeling & New Construction Palo Alto — O'Connor & Sons Electric",
  description:
    "Electrical contractor for remodels and new construction in Palo Alto. Rough-in, finish, panel upgrades, and permit coordination — C10 licensed Peninsula electrician.",
};

export default function RemodelingNewConstructionPage() {
  return (
    <>
      <PageHeroSection
        title="Remodeling & New Construction"
        subtitle="From rough-in to finish, O'Connor & Sons handles all electrical work for kitchen and bath remodels, additions, and new construction throughout the Peninsula."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Remodeling & New Construction" },
        ]}
      />
      <ServiceDetailSection
        activeService="Remodeling & New Construction"
        sidebarImage="/images/service-remodeling.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={400}
        heading="Remodeling & New Construction Electrical"
        intro={[
          "Remodels and new construction require a licensed electrician who can coordinate with your general contractor, pull the right permits, and deliver work that passes inspection. O'Connor & Sons Electric has been the go-to Peninsula electrician for remodels and new builds for over 30 years.",
          "We work on kitchens, bathrooms, additions, ADUs, and full new construction — from rough-in through final trim.",
        ]}
        whatWeDo={[
          "Rough-in wiring for new construction and additions",
          "Kitchen and bathroom remodel electrical",
          "ADU (accessory dwelling unit) electrical",
          "Panel upgrades to support new loads",
          "Recessed lighting and fixture installation",
          "Permit coordination and city inspections",
          "Coordination with general contractors and sub-trades",
        ]}
        whyChooseUs={[
          "30+ years working on Peninsula remodels and new builds",
          "C10 licensed — required for permitted electrical work",
          "Experienced coordinating with GCs and inspectors",
          "Inspection-ready work, first time",
          "Competitive pricing for full remodel scopes",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
