import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electrical FAQs",
  description:
    "Answers to common questions about electrical work in Palo Alto — permits, panel upgrades, EV chargers, same-day service, and more. From the team at O'Connor & Sons Electric.",
  alternates: { canonical: "https://oconnor-and-sons-electric.com/general-faqs" },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
