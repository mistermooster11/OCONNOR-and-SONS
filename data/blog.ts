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
    slug: "/2026/02/02/how-proper-grease-disposal-protects-your-business-and-the-environment/",
    image: "/images/blog-3.png",
    date: "02",
    monthYear: "Feb '26",
    category: "Grease Trap Cleaning",
    categoryHref: "/category/grease-trap-cleaning/",
    title: "How Proper Grease Disposal Protects Your Business and the Environment",
    excerpt:
      "Grease disposal isn't just a plumbing issue — it's an environmental responsibility. This article explains how certified grease disposal protects sewer systems, waterways, and business",
  },
  {
    slug: "/2026/02/02/emergency-vs-preventive-grease-trap-maintenance-what-really-costs-more/",
    image: "/images/blog-2.png",
    date: "02",
    monthYear: "Feb '26",
    category: "Grease Trap Cleaning",
    categoryHref: "/category/grease-trap-cleaning/",
    title: "Emergency vs Preventive Grease Trap Maintenance: What Really Costs More?",
    excerpt:
      "This post compares emergency grease trap services with preventive maintenance plans, showing how planned cleaning reduces downtime, avoids fines, and protects restaurants from costly surpris",
  },
];
