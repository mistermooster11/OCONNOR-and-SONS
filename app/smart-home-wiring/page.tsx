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
  title: "Smart Home Wiring Palo Alto — O'Connor & Sons Electric",
  description:
    "Smart home wiring and device integration in Palo Alto. Smart switches, EV chargers, whole-home automation wiring — licensed C10 electrician.",
};

export default function SmartHomeWiringPage() {
  return (
    <>
      <PageHeroSection
        title="Smart Home Wiring"
        subtitle="Upgrade your home with professional smart home wiring and device integration. Licensed C10 electricians handle smart switches, EV chargers, whole-home automation, and more."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Smart Home Wiring" },
        ]}
      />
      <ServiceDetailSection
        activeService="Smart Home Wiring"
        sidebarImage="/images/service-smart-home.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={400}
        heading="Smart Home Wiring & Integration"
        intro={[
          "Smart home technology is only as reliable as the electrical infrastructure behind it. O'Connor & Sons Electric provides the wiring, circuit work, and device installation needed to make your smart home actually work — correctly and safely.",
          "From smart switches and dimmers to EV chargers and whole-home automation wiring, we handle the electrical side so your integrations run flawlessly.",
        ]}
        whatWeDo={[
          "Smart switch and dimmer installation (Lutron, Leviton, Caseta)",
          "Whole-home automation wiring and low-voltage runs",
          "EV charger installation and dedicated circuit work",
          "Smart thermostat wiring and installation",
          "Whole-home surge protector installation",
          "USB and USB-C outlet upgrades",
          "Outdoor camera and landscape lighting wiring",
        ]}
        whyChooseUs={[
          "C10 licensed — required for all electrical device work",
          "Experience with major smart home platforms",
          "Clean installations that pass inspection",
          "Coordination with AV and automation integrators",
          "Serving tech-forward Peninsula homes for 30+ years",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
