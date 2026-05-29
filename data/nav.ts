export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Homepage", href: "/" },
  {
    label: "About",
    href: "/about-us",
    children: [
      { label: "About Us", href: "/about-us" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Services",
    href: "/services-page",
    children: [
      { label: "Grease Trap Cleaning", href: "/grease-trap-cleaning" },
      { label: "Commercial Unclogging", href: "/commercial-unclogging" },
      { label: "Residential Unclogging", href: "/residential-unclogging" },
      { label: "Camera Inspection", href: "/camera-inspection" },
    ],
  },
  { label: "Blog", href: "/blog-unclogme" },
  {
    label: "Contact",
    href: "/contact-us",
    children: [
      { label: "Get In Touch", href: "/contact-us" },
      { label: "Become an unclogger", href: "/become-an-unclogger" },
    ],
  },
];

/* ── Footer links ─────────────────────────────── */
export type FooterLink = { label: string; href: string };

export const quickLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us/" },
  { label: "Services", href: "/services-page/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Become an Unclogger", href: "/become-an-unclogger/" },
];

export const servicesLinks: FooterLink[] = [
  { label: "Grease trap cleaning", href: "/grease-trap-cleaning/" },
  { label: "Residential Unclogging", href: "/residential-unclogging/" },
  { label: "Commercial Unclogging", href: "/commercial-unclogging/" },
  { label: "Camera Inspection", href: "/camera-inspection/" },
];
