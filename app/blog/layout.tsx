import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electrical Tips & Advice",
  description:
    "Practical electrical advice from licensed electricians at O'Connor & Sons Electric. Panel upgrades, EV chargers, Palo Alto permits, and home electrical guides.",
  alternates: { canonical: "https://oconnor-and-sons-electric.com/blog" },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
