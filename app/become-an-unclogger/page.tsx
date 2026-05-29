import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import BecomeSection from "@/components/custom/become/BecomeSection";
import NeedServicesSection from "@/components/custom/need-services/NeedServicesSection";

export const metadata: Metadata = {
  title: "Become an Unclogger — Join the UnclogMe Team",
  description:
    "Join UnclogMe's growing team of drain and grease trap professionals across Miami-Dade. Flexible schedule, competitive pay, and full training provided.",
};

export default function BecomeAnUncloggerPage() {
  return (
    <>
      <PageHeroSection
        title="Become an Unclogger"
        subtitle="Join our growing team of drain and grease trap professionals across South Florida."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Become an Unclogger" },
        ]}
      />
      <BecomeSection />
      <NeedServicesSection />
    </>
  );
}
