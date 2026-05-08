export type CraftItem = {
  slug:  string;
  title: string;
};

export const crafts: CraftItem[] = [
  { slug: "electrical-troubleshooting",   title: "Electrical Troubleshooting"        },
  { slug: "panel-subpanel-upgrades",      title: "Panel & Subpanel Upgrades"         },
  { slug: "residential-electrical",       title: "Residential Electrical"            },
  { slug: "commercial-electrical",        title: "Commercial Electrical"             },
  { slug: "remodeling-new-construction",  title: "Remodeling & New Construction"     },
  { slug: "lighting-installation",        title: "Lighting Installation"             },
  { slug: "outlet-switch-repair",         title: "Outlet & Switch Repair"            },
  { slug: "smart-home-wiring",            title: "Smart Home Wiring"                 },
  { slug: "ev-charger-battery-systems",   title: "EV Charger & Battery Systems"      },
];
