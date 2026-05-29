export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
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
      { label: "Electrical Troubleshooting", href: "/electrical-troubleshooting" },
      { label: "Panel Upgrade", href: "/panel-upgrade" },
      { label: "Residential Electrical", href: "/residential-electrical" },
      { label: "Commercial Electrical", href: "/commercial-electrical" },
      { label: "Remodeling & New Construction", href: "/remodeling-new-construction" },
      { label: "Lighting Installation", href: "/lighting-installation" },
      { label: "Outlet & Switch Repair", href: "/outlet-switch-repair" },
      { label: "Smart Home Wiring", href: "/smart-home-wiring" },
      { label: "EV Charger Installation", href: "/ev-charger-installation" },
    ],
  },
  { label: "Blog", href: "/blog" },
  {
    label: "Contact",
    href: "/contact-us",
    children: [
      { label: "Get In Touch", href: "/contact-us" },
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
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact-us/" },
];

export const servicesLinks: FooterLink[] = [
  { label: "Electrical Troubleshooting", href: "/electrical-troubleshooting/" },
  { label: "Panel Upgrade", href: "/panel-upgrade/" },
  { label: "Residential Electrical", href: "/residential-electrical/" },
  { label: "Commercial Electrical", href: "/commercial-electrical/" },
  { label: "Remodeling & New Construction", href: "/remodeling-new-construction/" },
  { label: "Lighting Installation", href: "/lighting-installation/" },
  { label: "Outlet & Switch Repair", href: "/outlet-switch-repair/" },
  { label: "Smart Home Wiring", href: "/smart-home-wiring/" },
  { label: "EV Charger Installation", href: "/ev-charger-installation/" },
];
