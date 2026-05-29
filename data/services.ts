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
  { label: "Commercial Unclogging",           href: "/commercial-unclogging/" },
  { label: "Residential Unclogging",          href: "/residential-unclogging/" },
  { label: "Recurring Grease Trap Cleaning",  href: "/recurring-grease-trap-cleaning-maintenance/" },
  { label: "Grease Trap Cleaning",            href: "/grease-trap-cleaning/" },
  { label: "Camera Inspection",               href: "/camera-inspection/" },
];

export const services: Service[] = [
  {
    number: "01",
    title: "Camera Inspection",
    image: "/images/service-1.png",
    href: "/camera-inspection/",
    width: 535,
    height: 643,
  },
  {
    number: "02",
    title: "Grease Trap Cleaning",
    image: "/images/service-2.png",
    href: "/grease-trap-cleaning/",
    width: 535,
    height: 643,
  },
  {
    number: "03",
    title: "Residential Unclogging",
    image: "/images/service-3.webp",
    href: "/residential-unclogging/",
    width: 535,
    height: 643,
  },
  {
    number: "04",
    title: "Commercial Unclogging",
    image: "/images/service-4.webp",
    href: "/commercial-unclogging/",
    width: 535,
    height: 643,
  },
];
