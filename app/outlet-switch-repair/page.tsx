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
  title: "Outlet & Switch Repair Palo Alto — O'Connor & Sons Electric",
  description:
    "Outlet and switch repair in Palo Alto. Dead outlets, GFCI replacement, dimmer installs, sparking switches — licensed C10 electrician with same-day service.",
};

export default function OutletSwitchRepairPage() {
  return (
    <>
      <PageHeroSection
        title="Outlet & Switch Repair"
        subtitle="Dead outlets, sparking switches, or GFCI problems? Our licensed electricians carry common parts on the truck for fast, same-day repairs across Palo Alto and the Peninsula."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Outlet & Switch Repair" },
        ]}
      />
      <ServiceDetailSection
        activeService="Outlet & Switch Repair"
        sidebarImage="/images/service-outlet-switch.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={400}
        heading="Outlet & Switch Repair and Installation"
        intro={[
          "Dead outlets, non-responsive switches, sparking receptacles, and faulty GFCI outlets are among the most common electrical issues in Peninsula homes and businesses. While they may seem minor, they can indicate deeper wiring issues and should be addressed by a licensed electrician.",
          "O'Connor & Sons carries common parts on every truck for fast, often same-day repairs.",
        ]}
        whatWeDo={[
          "Dead and non-functioning outlet diagnosis and repair",
          "GFCI and AFCI outlet replacement and installation",
          "Standard, dimmer, and smart switch installation",
          "Sparking, burning, or discolored outlet replacement",
          "USB and USB-C outlet upgrades",
          "Outdoor and weatherproof outlet installation",
          "Multi-room outlet additions for home offices and kitchens",
        ]}
        whyChooseUs={[
          "Common parts stocked on every truck — often same-day",
          "Licensed C10 contractor — no handyman risk",
          "GFCI and AFCI expertise for code compliance",
          "Transparent pricing before any work begins",
          "Serving Peninsula homeowners for 30+ years",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
