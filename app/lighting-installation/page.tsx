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
  title: "Lighting Installation Palo Alto — O'Connor & Sons Electric",
  description:
    "Professional lighting installation in Palo Alto. Recessed lighting, pendant lights, under-cabinet, outdoor, and smart lighting — licensed C10 electrician.",
};

export default function LightingInstallationPage() {
  return (
    <>
      <PageHeroSection
        title="Lighting Installation"
        subtitle="Upgrade your home or business lighting with professional installation from a licensed C10 electrician. Recessed lighting, fixtures, smart lighting, and outdoor lighting across the Peninsula."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Lighting Installation" },
        ]}
      />
      <ServiceDetailSection
        activeService="Lighting Installation"
        sidebarImage="/images/service-lighting.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={400}
        heading="Lighting Installation Services"
        intro={[
          "Good lighting transforms a space. Whether you're updating outdated fixtures, adding recessed lighting to a remodel, or installing exterior lighting for security, O'Connor & Sons Electric delivers clean, professional results.",
          "We handle wiring, fixture installation, dimmer switches, and smart lighting integration across residential and commercial properties.",
        ]}
        whatWeDo={[
          "Recessed (can) lighting installation",
          "Pendant, chandelier, and ceiling fan installation",
          "Under-cabinet and task lighting",
          "Exterior and landscape lighting",
          "Smart lighting and dimmer switch installation",
          "Track lighting and accent lighting",
          "Parking lot and commercial exterior lighting",
        ]}
        whyChooseUs={[
          "Licensed C10 Electrician — safe, code-compliant installs",
          "Experience with all fixture and lighting types",
          "Smart home lighting integration available",
          "Clean, damage-free installation",
          "Serving Palo Alto and the Peninsula for 30+ years",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
