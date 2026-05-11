import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "Photos of electrical work completed by O'Connor & Sons Electric across Palo Alto and the Peninsula. Panel upgrades, EV charger installs, lighting, and more.",
  alternates: { canonical: "https://oconnor-and-sons-electric.com/gallery" },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
