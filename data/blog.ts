export type BlogPost = {
  slug: string;
  image: string;
  date: string;
  monthYear: string;
  category: string;
  categoryHref: string;
  title: string;
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "/contact-us/",
    image: "/images/blog-panel-upgrade.jpg",
    date: "15",
    monthYear: "Jan '26",
    category: "Panel Upgrades",
    categoryHref: "/category/panel-upgrades/",
    title: "5 Signs Your Electrical Panel Needs an Upgrade",
    excerpt:
      "Flickering lights, tripped breakers, and a panel that still uses fuses are all warning signs. Here's how to know when it's time to upgrade and what the process looks like.",
  },
  {
    slug: "/contact-us/",
    image: "/images/blog-ev-charger.jpg",
    date: "10",
    monthYear: "Feb '26",
    category: "EV Charger Installation",
    categoryHref: "/category/ev-charger-installation/",
    title: "EV Charger Installation at Home: What to Expect",
    excerpt:
      "Thinking about installing a Level 2 EV charger at home? This guide walks you through the process, costs, permit requirements, and what makes a good installation.",
  },
];
