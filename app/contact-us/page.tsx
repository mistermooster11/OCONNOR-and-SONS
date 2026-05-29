import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ContactSection from "@/components/custom/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us — UnclogMe | Get a Fast Quote",
  description:
    "Contact UnclogMe for fast grease trap cleaning and drain unclogging services in Miami-Dade. Available 24/7 — call or fill out our quick quote form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeroSection
        title="Contact Us"
        subtitle="Available 24/7 — no extra charge for emergency calls. Fill out the form or call us directly."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <ContactSection />
      <div className="contact-map">
        <iframe
          title="UnclogMe Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.8263869997!2d-80.13571!3d25.80357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b4e2a5555555%3A0x0!2s333+W+41st+St+%23606%2C+Miami+Beach%2C+FL+33140!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="450"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
