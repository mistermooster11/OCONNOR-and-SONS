import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for O'Connor & Sons Electric.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://oconnor-and-sons-electric.com/privacy-policy" },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
