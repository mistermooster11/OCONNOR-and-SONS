import type { ReactNode } from "react";

export type NavItem = { href: string; label: string };

export type ProgramItem = {
  title: string;
  content: ReactNode;
  learnMoreHref: string;
};

export type PartnerItem = {
  href: string;
  imgSrc: string;
  alt: string;
};

export type ProgramsPageData = {
  navItems: NavItem[];
  hero: {
    bgImage: string;
    title: string;
    description: ReactNode;
    breadcrumbParentLabel: string;
    breadcrumbParentHref: string;
  };
  overview: {
    content: ReactNode;
    quickLinks: { label: string; href: string; icon: string }[];
  };
  programs: ProgramItem[];
  partners: PartnerItem[];
};

export const programsData: ProgramsPageData = {
  navItems: [
    { href: "#flex-module-3", label: "Service Details" },
    { href: "#flex-module-4", label: "Service Areas"  },
  ],

  hero: {
    bgImage: "/images/IMG_9750-1024x683.jpg",
    // TODO: Replace with an O'Connor & Sons job site photo
    title: "Our Services",
    description: (
      <p>
        O&rsquo;Connor &amp; Sons Electric handles the full range of
        residential, commercial, and remodeling electrical work throughout
        Palo Alto and the Peninsula — from a single tripped outlet to a
        complete remodel rewire.
      </p>
    ),
    breadcrumbParentLabel: "Services",
    breadcrumbParentHref: "/craft-catalog/",
  },

  overview: {
    content: (
      <>
        <p>
          Every job starts the same way: we assess the situation, explain what
          we find in plain language, and give you a clear price before any work
          begins. Tom O&rsquo;Connor and his sons are licensed, bonded, and
          insured — and they treat every job, big or small, with the same
          attention to detail.
        </p>
        <p>
          Family-owned and Palo Alto-based for over 30 years. European-trained
          electricians with 4+ years of formal trade school. California License
          #513626, Class C10. Call{" "}
          <a href="tel:6507401121">(650) 740-1121</a> to get started.
        </p>
      </>
    ),
    quickLinks: [
      { label: "View All Services", href: "/craft-catalog/", icon: "icon-books" },
    ],
  },

  programs: [
    {
      title: "Electrical Troubleshooting",
      content: (
        <p>
          Tripped breakers that keep resetting, flickering lights, dead outlets,
          and circuits that behave inconsistently all point to a root cause that
          needs to be found — not just reset. O&rsquo;Connor &amp; Sons are
          experts in electrical diagnostics. We find the actual source of the
          problem and fix it right the first time.
        </p>
      ),
      learnMoreHref: "/craft-catalog/electrical-troubleshooting",
    },
    {
      title: "Panel & Subpanel Upgrades",
      content: (
        <p>
          An undersized or aging panel limits what your home or building can
          safely run. We upgrade electrical panels to 200-amp service, install
          subpanels for garages and ADUs, and replace failing panels — pulling
          all required permits and coordinating city inspections from start to
          finish.
        </p>
      ),
      learnMoreHref: "/craft-catalog/panel-subpanel-upgrades",
    },
    {
      title: "Residential Electrical",
      content: (
        <p>
          From circuit additions to whole-home rewires, O&rsquo;Connor &amp;
          Sons handles all residential electrical work in Palo Alto and
          surrounding Peninsula communities. Family-owned for over 30 years, we
          know local homes — the older construction, the ADUs, the remodeled
          Eichlers — and we treat every home with the same care.
        </p>
      ),
      learnMoreHref: "/craft-catalog/residential-electrical",
    },
    {
      title: "Commercial Electrical",
      content: (
        <p>
          Licensed commercial electrical work for offices, retail spaces, small
          businesses, and multi-unit properties throughout Palo Alto and the
          Peninsula. We work efficiently in occupied commercial spaces, pull
          permits, coordinate inspections, and document everything. Property
          managers have relied on us for decades.
        </p>
      ),
      learnMoreHref: "/craft-catalog/commercial-electrical",
    },
    {
      title: "Remodeling & New Construction",
      content: (
        <p>
          Kitchen rewires, bathroom circuits, ADU wiring, and whole-home
          renovations — we handle all phases of remodeling electrical work from
          rough-in through finish. We coordinate with your general contractor,
          pull permits, and pass inspections on the first try. We&rsquo;ve
          identified dangerous wiring conditions that other contractors missed.
        </p>
      ),
      learnMoreHref: "/craft-catalog/remodeling-new-construction",
    },
    {
      title: "Lighting Installation",
      content: (
        <p>
          Track lighting, recessed cans, pendant fixtures, ceiling fans, and
          under-cabinet lighting — we install all types of residential and
          commercial lighting throughout Palo Alto. We assess circuit capacity,
          fish wiring through finished walls where possible, and test every
          switch and dimmer before we leave.
        </p>
      ),
      learnMoreHref: "/craft-catalog/lighting-installation",
    },
    {
      title: "Outlet & Switch Repair",
      content: (
        <p>
          Dead outlets, GFCI receptacles that won&rsquo;t reset, switches that
          control the wrong fixtures, and non-weatherproof outdoor outlets are
          among our most common service calls — and most are handled quickly,
          often the same day. We resolve the root cause, not just the symptom.
        </p>
      ),
      learnMoreHref: "/craft-catalog/outlet-switch-repair",
    },
    {
      title: "Smart Home Wiring",
      content: (
        <p>
          Smart switches, Vantage home control systems, and whole-home smart
          lighting require properly installed electrical infrastructure to
          function reliably. We handle the wiring, dedicated circuits, and
          compatibility assessment that smart home installations demand — and
          troubleshoot existing systems that aren&rsquo;t behaving.
        </p>
      ),
      learnMoreHref: "/craft-catalog/smart-home-wiring",
    },
    {
      title: "EV Charger & Battery Systems",
      content: (
        <p>
          Level 2 EV charger installation, NEMA 14-50 outlet circuits, Tesla
          Powerwall troubleshooting and remediation, and home battery system
          wiring — done correctly, permitted, and inspected. In Palo Alto, EV
          and battery systems are now routine for us. We also fix installations
          that weren&rsquo;t done right the first time.
        </p>
      ),
      learnMoreHref: "/craft-catalog/ev-charger-battery-systems",
    },
  ],

  partners: [],
};
