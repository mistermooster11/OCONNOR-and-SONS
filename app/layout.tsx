import type { Metadata } from "next";
import "./globals.css";
import "@/styles/common.css";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/footer/Footer";
import PageTransition from "@/components/custom/page-transition/PageTransition";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import SalePopup from "@/components/custom/popup/SalePopup"

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const SITE_URL = "https://oconnorelectric.com";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "O'Connor & Sons Electric — Licensed Electrician in Palo Alto & the Peninsula",
    template: "%s | O'Connor & Sons Electric",
  },
  description:
    "Licensed C10 electrical contractor serving Palo Alto and the Peninsula for 30+ years. Panel upgrades, EV charger installation, residential & commercial electrical — same-day service available.",
  openGraph: {
    type: "website",
    siteName: "O'Connor & Sons Electric",
    title: "O'Connor & Sons Electric — Licensed Electrician in Palo Alto & the Peninsula",
    description:
      "Licensed C10 electrical contractor serving Palo Alto and the Peninsula for 30+ years. Panel upgrades, EV charger installation, residential & commercial electrical.",
    url: SITE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "O'Connor & Sons Electric" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "O'Connor & Sons Electric — Licensed Electrician in Palo Alto",
    description:
      "Licensed C10 electrical contractor serving Palo Alto and the Peninsula for 30+ years.",
    images: [OG_IMAGE],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: "O'Connor & Sons Electric",
  url: SITE_URL,
  logo: `${SITE_URL}/Oconnor_logo_lightbackground.png`,
  image: OG_IMAGE,
  telephone: "+16507401121",
  email: "info@oconnorelectric.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "849 Clara Dr",
    addressLocality: "Palo Alto",
    addressRegion: "CA",
    postalCode: "94303",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.4419,
    longitude: -122.143,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:30",
      closes: "20:30",
    },
  ],
  priceRange: "$$",
  areaServed: [
    "Palo Alto", "Menlo Park", "Redwood City", "Mountain View",
    "Sunnyvale", "Los Altos", "Atherton", "Portola Valley",
  ],
  hasCredential: "California C10 Electrical Contractor License",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <PageTransition />
        <SalePopup businessName="O'Connor & Sons Electric" expiryDate="June 20, 2026" trade="electricians" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
