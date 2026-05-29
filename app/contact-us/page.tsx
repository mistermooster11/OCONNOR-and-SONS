import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ContactSection from "@/components/custom/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us — O'Connor & Sons Electric | Get a Free Estimate",
  description:
    "Contact O'Connor & Sons Electric for electrical service in Palo Alto. Licensed C10 contractor — same-day availability, transparent pricing, free estimates.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeroSection
        title="Contact Us"
        subtitle="Same-day service available — call or fill out the form for a free estimate from a licensed C10 electrician."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <ContactSection />
      <div className="contact-map">
        <iframe
          title="O'Connor &amp; Sons Electric Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6!2d-122.1!3d37.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbad6c0d0ac2d%3A0x0!2s849+Clara+Dr%2C+Palo+Alto%2C+CA+94303!5e0!3m2!1sen!2sus!4v1"
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
