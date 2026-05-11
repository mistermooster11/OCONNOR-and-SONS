import { MetadataRoute } from "next";

const BASE = "https://oconnor-and-sons-electric.com";

const serviceSlug = [
  "electrical-troubleshooting",
  "panel-subpanel-upgrades",
  "residential-electrical",
  "commercial-electrical",
  "remodeling-new-construction",
  "lighting-installation",
  "outlet-switch-repair",
  "smart-home-wiring",
  "ev-charger-battery-systems",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,                              lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/craft-catalog`,           lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/explore/oconnor-sons`,    lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/contact-us`,              lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/service-areas`,           lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/gallery`,                 lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/general-faqs`,            lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/blog`,                    lastModified: now, changeFrequency: "weekly",  priority: 0.6 },
    { url: `${BASE}/programs-crafts/programs`,lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/privacy-policy`,          lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = serviceSlug.map((slug) => ({
    url: `${BASE}/craft-catalog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
