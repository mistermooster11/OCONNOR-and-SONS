import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import BlogSection from "@/components/custom/blog/BlogSection";
import NeedServicesSection from "@/components/custom/need-services/NeedServicesSection";

export const metadata: Metadata = {
  title: "Blog — O'Connor & Sons Electric | Electrical Tips & Guides",
  description:
    "Read the O'Connor & Sons Electric blog for expert electrical tips, safety guides, EV charger information, and insights from a licensed C10 Peninsula electrician.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeroSection
        title="Blog"
        subtitle="Expert electrical tips, safety guides, and industry insights from the O'Connor & Sons Electric team."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />
      <BlogSection />
      <NeedServicesSection />
    </>
  );
}
