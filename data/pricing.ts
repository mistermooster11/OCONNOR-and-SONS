export type PricingCard = {
  price: number;
  note: string;
  title: string;
  features: string[];
  description: string;
  highlight?: boolean;
};

export const pricingCards: PricingCard[] = [
  {
    price: 299,
    note: "Flat rate. No hidden fees.",
    title: "Electrical Diagnostic",
    features: [
      "Full system inspection",
      "Outlet & switch testing",
      "Panel condition check",
      "Written estimate included",
    ],
    description:
      "Our licensed electricians diagnose the root cause of any electrical issue — flickering lights, tripped breakers, dead outlets — and provide a clear, upfront repair quote.",
  },
  {
    price: 1499,
    note: "Starting price. Final price based on panel size.",
    title: "Panel Upgrade",
    features: [
      "100A, 200A, or 400A upgrades",
      "Code-compliant installation",
      "Permit coordination included",
      "Inspection-ready work",
    ],
    description:
      "Upgrade your electrical panel safely and to code. We handle everything from permit filing to final inspection sign-off.\n\nPrice varies by amperage and existing infrastructure.",
    highlight: true,
  },
  {
    price: 799,
    note: "Per charger. Installation included.",
    title: "EV Charger Installation",
    features: [
      "Level 2 charger setup (240V)",
      "Indoor & outdoor rated",
      "Dedicated circuit installation",
      "All major brands supported",
    ],
    description:
      "Charge your EV faster at home. We install Level 2 chargers with a dedicated 240V circuit so you're always road-ready by morning.\n\nPrice includes labor and standard wiring run.",
  },
  {
    price: 199,
    note: "Per circuit. Labor included.",
    title: "Outlet & Switch Repair",
    features: [
      "GFCI & AFCI outlets",
      "Dimmer & smart switch installs",
      "Damaged wiring repair",
      "Same-day service available",
    ],
    description:
      "Dead outlets, sparking switches, or non-functioning circuits fixed fast by a licensed C10 electrician. We carry common parts on the truck for same-day repairs.",
  },
];
