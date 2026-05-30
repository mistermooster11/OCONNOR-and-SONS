import type { MetadataRoute } from "next";

const BASE = "https://oconnorelectric.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/about-us/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services-page/", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/contact-us/", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/faq/", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/", priority: 0.7, changeFrequency: "weekly" as const },
    // Service detail pages
    { url: "/residential-electrical/", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/commercial-electrical/", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/panel-upgrade/", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/ev-charger-installation/", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/lighting-installation/", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/electrical-troubleshooting/", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/remodeling-new-construction/", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/outlet-switch-repair/", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/smart-home-wiring/", priority: 0.85, changeFrequency: "monthly" as const },
  ];

  return routes.map((r) => ({
    url: `${BASE}${r.url}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
