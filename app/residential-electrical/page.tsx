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
  title: "Residential Electrician Palo Alto — O'Connor & Sons Electric",
  description:
    "Licensed residential electrician in Palo Alto. Panel upgrades, rewiring, outlet installs, EV chargers, and more — C10 licensed, 30+ years on the Peninsula.",
};

export default function ResidentialElectricalPage() {
  return (
    <>
      <PageHeroSection
        title="Residential Electrical"
        subtitle="Full-service residential electrical from a C10-licensed contractor. From simple repairs to complete rewires, we serve Palo Alto homeowners with expert workmanship and transparent pricing."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Residential Electrical" },
        ]}
      />
      <ServiceDetailSection
        activeService="Residential Electrical"
        sidebarImage="/images/service-residential.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={400}
        heading="Residential Electrical Services"
        intro={[
          "Your home's electrical system is the foundation of your safety and comfort. O'Connor & Sons Electric provides a full range of residential electrical services — from quick repairs to full rewires — for homeowners across Palo Alto and the surrounding Peninsula.",
          "Every job is done to California code, properly permitted where required, and backed by 30+ years of Peninsula experience.",
        ]}
        whatWeDo={[
          "Panel upgrades and subpanel installation",
          "Whole-home and partial rewiring",
          "New circuit installation for appliances and additions",
          "Outlet, switch, and dimmer installation and repair",
          "EV charger installation (Level 2)",
          "Lighting installation and recessed lighting",
          "Smoke and CO detector installation",
        ]}
        whyChooseUs={[
          "Licensed C10 Electrical Contractor #513626",
          "Fully insured — protects your home and family",
          "Permit coordination on all applicable work",
          "5.0-star Yelp rating from Peninsula homeowners",
          "Same-day and emergency service available",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
