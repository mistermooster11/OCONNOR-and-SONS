import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with O'Connor & Sons Electric. Call (650) 740-1121 or fill out the form to schedule service in Palo Alto, Menlo Park, Mountain View, and the surrounding Peninsula.",
  alternates: { canonical: "https://oconnor-and-sons-electric.com/contact-us" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
