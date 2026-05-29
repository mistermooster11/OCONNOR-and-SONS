export type Service = {
  number: string;
  title: string;
  image: string;
  href: string;
  width: number;
  height: number;
};

export type SidebarService = {
  label: string;
  href: string;
};

export const sidebarServices: SidebarService[] = [
  { label: "Electrical Troubleshooting",     href: "/electrical-troubleshooting/" },
  { label: "Panel Upgrade",                  href: "/panel-upgrade/" },
  { label: "Residential Electrical",         href: "/residential-electrical/" },
  { label: "Commercial Electrical",          href: "/commercial-electrical/" },
  { label: "Remodeling & New Construction",  href: "/remodeling-new-construction/" },
  { label: "Lighting Installation",          href: "/lighting-installation/" },
  { label: "Outlet & Switch Repair",         href: "/outlet-switch-repair/" },
  { label: "Smart Home Wiring",              href: "/smart-home-wiring/" },
  { label: "EV Charger Installation",        href: "/ev-charger-installation/" },
];

export const services: Service[] = [
  {
    number: "01",
    title: "Electrical Troubleshooting",
    image: "/images/service-troubleshooting.jpg",
    href: "/electrical-troubleshooting/",
    width: 535,
    height: 400,
  },
  {
    number: "02",
    title: "Panel Upgrade",
    image: "/images/service-panel-upgrade.jpg",
    href: "/panel-upgrade/",
    width: 535,
    height: 400,
  },
  {
    number: "03",
    title: "Residential Electrical",
    image: "/images/service-residential.jpg",
    href: "/residential-electrical/",
    width: 535,
    height: 400,
  },
  {
    number: "04",
    title: "Commercial Electrical",
    image: "/images/service-commercial.jpg",
    href: "/commercial-electrical/",
    width: 535,
    height: 400,
  },
  {
    number: "05",
    title: "Remodeling & New Construction",
    image: "/images/service-remodeling.jpg",
    href: "/remodeling-new-construction/",
    width: 535,
    height: 400,
  },
  {
    number: "06",
    title: "Lighting Installation",
    image: "/images/service-lighting.jpg",
    href: "/lighting-installation/",
    width: 535,
    height: 400,
  },
  {
    number: "07",
    title: "Outlet & Switch Repair",
    image: "/images/service-outlet-switch.jpg",
    href: "/outlet-switch-repair/",
    width: 535,
    height: 400,
  },
  {
    number: "08",
    title: "Smart Home Wiring",
    image: "/images/service-smart-home.jpg",
    href: "/smart-home-wiring/",
    width: 535,
    height: 400,
  },
  {
    number: "09",
    title: "EV Charger Installation",
    image: "/images/service-ev-charger.jpg",
    href: "/ev-charger-installation/",
    width: 535,
    height: 400,
  },
];
