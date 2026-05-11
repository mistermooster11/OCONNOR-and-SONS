import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "@/styles/homepage.css";
import "@/styles/contact.css";
import "@/styles/channel.css";
import "@/styles/faq.css";
import "@/styles/craft-catalog.css";
import "@/styles/programs.css";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
});

const SITE_URL = "https://oconnor-and-sons-electric.com"; // TODO: update to live domain before launch

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "O'Connor & Sons Electric | Licensed Electricians in Palo Alto",
    template: "%s | O'Connor & Sons Electric",
  },
  description:
    "Family-owned electrical contractors serving Palo Alto and the Peninsula for 30+ years. Panel upgrades, EV chargers, remodeling wiring, and more. C10 Licensed — Call (650) 740-1121.",
  keywords: [
    "electrician Palo Alto",
    "electrical contractor Palo Alto",
    "panel upgrade Palo Alto",
    "EV charger installation Palo Alto",
    "licensed electrician Peninsula",
    "residential electrician Menlo Park",
    "commercial electrician Sunnyvale",
    "O'Connor and Sons Electric",
  ],
  authors: [{ name: "O'Connor & Sons Electric" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "O'Connor & Sons Electric",
    title: "O'Connor & Sons Electric | Licensed Electricians in Palo Alto",
    description:
      "Family-owned electrical contractors serving Palo Alto and the Peninsula for 30+ years. Panel upgrades, EV chargers, remodeling wiring. C10 Licensed — (650) 740-1121.",
    images: [
      {
        url: "/images/og-default.jpg", // TODO: replace with real OG image (1200×630)
        width: 1200,
        height: 630,
        alt: "O'Connor & Sons Electric — Licensed Electricians in Palo Alto, CA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "O'Connor & Sons Electric | Licensed Electricians in Palo Alto",
    description:
      "Family-owned electrical contractors serving Palo Alto and the Peninsula for 30+ years. C10 Licensed — (650) 740-1121.",
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: "O'Connor & Sons Electric",
  image: `${SITE_URL}/images/og-default.jpg`,
  url: SITE_URL,
  telephone: "+16507401121",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "849 Clara Drive",
    addressLocality: "Palo Alto",
    addressRegion: "CA",
    postalCode: "94303",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.4292,
    longitude: -122.1381,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:30",
      closes: "20:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "10:00",
      closes: "17:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "593",
    bestRating: "5",
    worstRating: "1",
  },
  areaServed: [
    { "@type": "City", name: "Palo Alto" },
    { "@type": "City", name: "Menlo Park" },
    { "@type": "City", name: "Mountain View" },
    { "@type": "City", name: "Los Altos" },
    { "@type": "City", name: "Sunnyvale" },
    { "@type": "City", name: "Atherton" },
  ],
  hasCredential: "California C10 Electrical Contractor License #513626",
  description:
    "Family-owned electrical contractors serving Palo Alto and the Peninsula since 1994. European-trained electricians specializing in residential, commercial, and remodeling electrical work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
