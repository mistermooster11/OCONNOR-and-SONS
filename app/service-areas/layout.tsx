import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "O'Connor & Sons Electric serves Palo Alto, Menlo Park, Atherton, Mountain View, Los Altos, Sunnyvale, and the surrounding Peninsula. Licensed, insured, and locally owned.",
  alternates: { canonical: "https://oconnor-and-sons-electric.com/service-areas" },
};

export default function ServiceAreasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
