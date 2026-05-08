import type { ReactNode } from "react";

export type ServiceNavItem = { href: string; label: string };

export type ServicePageData = {
  title: string;
  bgColor: string;
  navItems: ServiceNavItem[];
  overviewContent: ReactNode;
  overviewQuickLinks: { label: string; href: string }[];
  sections: { id: string; heading: string; content: ReactNode }[];
  relatedServices: { label: string; href: string }[];
};

export const servicePages: Record<string, ServicePageData> = {

  /* ─── ELECTRICAL TROUBLESHOOTING ───────────────────────────────────────── */
  "electrical-troubleshooting": {
    title: "Electrical Troubleshooting",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Electrical problems rarely announce themselves clearly. A tripped
          breaker that keeps resetting, lights that flicker unexpectedly, an
          outlet that stops working for no obvious reason — these symptoms point
          to a root cause that needs to be found, not just reset or replaced.
        </p>
        <p>
          O&rsquo;Connor &amp; Sons Electric are experts in troubleshooting
          electrical issues. With over 30 years of experience and a
          European-trained background in electrical diagnostics, Tom and his
          team find the actual source of the problem — and fix it right the
          first time.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (650) 740-1121", href: "tel:6507401121" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Electrical Troubleshooting?",
        content: (
          <>
            <p>
              Call us when you notice: breakers tripping repeatedly without an
              obvious overload; outlets or switches that have stopped working;
              lights flickering or dimming when other appliances run; burning
              smells near outlets, panels, or fixtures; or any circuit behavior
              that seems inconsistent or unexplained.
            </p>
            <p>
              Electrical issues that seem minor can indicate a more serious
              underlying problem — overloaded circuits, deteriorating wiring, or
              loose connections that create fire risk. Early diagnosis is always
              the right call.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Diagnose It",
        content: (
          <>
            <p>
              <strong>Step 1 — Listen.</strong> We start by understanding the
              symptom pattern — when it happens, what was running, how long it&rsquo;s
              been occurring. Patterns point to causes.
            </p>
            <p>
              <strong>Step 2 — Inspect.</strong> We check the panel, the affected
              circuit, and the fixtures or outlets involved. We use professional
              testing equipment to read voltage, continuity, and load — not just
              visual inspection.
            </p>
            <p>
              <strong>Step 3 — Explain.</strong> Before any repair begins, we
              explain what we found, why it happened, and what the fix involves.
              No surprise charges. You approve the work before we proceed.
            </p>
            <p>
              <strong>Step 4 — Fix It Properly.</strong> We repair the root
              cause, not just the symptom. We test the circuit thoroughly before
              leaving to confirm the issue is fully resolved.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Panel & Subpanel Upgrades",     href: "/craft-catalog/panel-subpanel-upgrades"      },
      { label: "Outlet & Switch Repair",         href: "/craft-catalog/outlet-switch-repair"          },
      { label: "Residential Electrical",         href: "/craft-catalog/residential-electrical"        },
      { label: "Lighting Installation",          href: "/craft-catalog/lighting-installation"         },
    ],
  },

  /* ─── PANEL & SUBPANEL UPGRADES ────────────────────────────────────────── */
  "panel-subpanel-upgrades": {
    title: "Panel & Subpanel Upgrades",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          An undersized or aging electrical panel is one of the most common
          limiting factors in older Palo Alto homes and commercial properties.
          Whether you need a full 200-amp service upgrade, a subpanel added to
          a detached structure, or a replacement of a failing panel, O&rsquo;Connor
          &amp; Sons handles it with permits and inspection sign-off.
        </p>
        <p>
          Customers have trusted us with panel replacements and subpanel
          installations across the Palo Alto area for over 30 years. We pull
          all required permits and coordinate city inspections.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (650) 740-1121", href: "tel:6507401121" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need a Panel Upgrade?",
        content: (
          <>
            <p>
              Signs your panel needs attention: breakers that trip frequently
              under normal loads; no room to add new circuits; a panel that
              uses fuses instead of breakers; you&rsquo;re adding an EV charger,
              hot tub, or major appliance that requires a dedicated circuit; or
              an inspector or insurer has flagged the current panel.
            </p>
            <p>
              Subpanels are the right solution when you need to extend service
              to a garage, ADU, workshop, or addition without running circuits
              all the way back to the main panel.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p>
              <strong>Step 1 — Assess.</strong> We evaluate your current panel
              capacity, the service entrance, and your current and future load
              requirements. We recommend the right panel size for your actual
              needs.
            </p>
            <p>
              <strong>Step 2 — Permit.</strong> We pull all necessary permits
              from the City of Palo Alto. No shortcuts on panel work.
            </p>
            <p>
              <strong>Step 3 — Install.</strong> We replace or upgrade the
              panel, reroute circuits as needed, label everything clearly, and
              restore service as quickly as possible.
            </p>
            <p>
              <strong>Step 4 — Inspection.</strong> We coordinate the city
              inspection and make any required corrections before the permit
              closes. Work isn&rsquo;t done until it passes.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Electrical Troubleshooting",    href: "/craft-catalog/electrical-troubleshooting"   },
      { label: "EV Charger & Battery Systems",  href: "/craft-catalog/ev-charger-battery-systems"   },
      { label: "Remodeling & New Construction", href: "/craft-catalog/remodeling-new-construction"  },
      { label: "Commercial Electrical",         href: "/craft-catalog/commercial-electrical"         },
    ],
  },

  /* ─── RESIDENTIAL ELECTRICAL ───────────────────────────────────────────── */
  "residential-electrical": {
    title: "Residential Electrical",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          O&rsquo;Connor &amp; Sons Electric has been the go-to residential
          electrician for Palo Alto homeowners for over 30 years. We handle
          everything from single-circuit repairs to whole-home rewires, and we
          treat every home with the same attention to detail — big or small.
        </p>
        <p>
          Family-owned. Licensed. Local. We know Palo Alto homes — the older
          construction, the ADU additions, the remodeled Eichlers — and we know
          how to work in them correctly.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (650) 740-1121", href: "tel:6507401121" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Residential Electrical Services We Provide",
        content: (
          <>
            <p>
              We handle all standard residential electrical needs: adding or
              moving circuits, installing outlets and switches, wiring for new
              appliances, upgrading panels and subpanels, installing lighting
              fixtures and ceiling fans, troubleshooting unexplained electrical
              problems, and rewiring older homes that still have outdated wiring.
            </p>
            <p>
              We also work with homeowners during home sales — addressing
              electrical items flagged on inspection reports and providing
              documentation of work completed for disclosure purposes.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "What to Expect",
        content: (
          <>
            <p>
              <strong>Responsive Scheduling.</strong> Tom and his team are known
              for responding quickly and arriving when they say they will. Many
              customers have reached us on short notice and been helped the same
              day or next.
            </p>
            <p>
              <strong>Honest Assessment.</strong> We diagnose the situation and
              tell you what we find — including what doesn&rsquo;t need to be
              fixed. We don&rsquo;t upsell work that isn&rsquo;t necessary.
            </p>
            <p>
              <strong>Clean Work.</strong> We respect your home. We work
              carefully, clean up after ourselves, and leave things better than
              we found them. Our customers notice — it&rsquo;s one of the most
              common things they mention in reviews.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Electrical Troubleshooting",   href: "/craft-catalog/electrical-troubleshooting"   },
      { label: "Panel & Subpanel Upgrades",    href: "/craft-catalog/panel-subpanel-upgrades"       },
      { label: "Lighting Installation",        href: "/craft-catalog/lighting-installation"         },
      { label: "Outlet & Switch Repair",       href: "/craft-catalog/outlet-switch-repair"          },
    ],
  },

  /* ─── COMMERCIAL ELECTRICAL ────────────────────────────────────────────── */
  "commercial-electrical": {
    title: "Commercial Electrical",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          O&rsquo;Connor &amp; Sons Electric serves commercial clients
          throughout Palo Alto and the Peninsula — offices, retail spaces,
          small businesses, and multi-unit properties. Commercial electrical
          work requires a licensed contractor who understands load calculations,
          code compliance, and the urgency of keeping your business operational.
        </p>
        <p>
          We work efficiently in occupied commercial spaces, coordinate with
          building management, and document our work thoroughly.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (650) 740-1121", href: "tel:6507401121" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Commercial Electrical Services We Provide",
        content: (
          <>
            <p>
              We handle tenant improvement electrical work, panel and service
              upgrades for commercial buildings, lighting installation and
              retrofits, dedicated circuits for equipment, outlet and switch
              installation, troubleshooting electrical faults, and electrical
              work for multi-unit residential properties.
            </p>
            <p>
              Property managers and business owners on the Peninsula have relied
              on O&rsquo;Connor &amp; Sons for decades. We understand the
              scheduling constraints of occupied commercial spaces and work to
              minimize disruption.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "Working With Commercial Clients",
        content: (
          <>
            <p>
              <strong>Responsive and Direct.</strong> When something stops
              working in a commercial building, downtime costs money. We respond
              promptly and communicate clearly throughout the job.
            </p>
            <p>
              <strong>Code-Compliant Work.</strong> All commercial electrical
              work is performed to code and permitted where required. We
              coordinate inspections and provide complete documentation.
            </p>
            <p>
              <strong>Multi-Property Experience.</strong> We regularly work with
              property owners managing multiple buildings in the area. Repeat
              clients who need consistency and reliability call us first.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Panel & Subpanel Upgrades",     href: "/craft-catalog/panel-subpanel-upgrades"      },
      { label: "Lighting Installation",         href: "/craft-catalog/lighting-installation"         },
      { label: "Electrical Troubleshooting",    href: "/craft-catalog/electrical-troubleshooting"    },
      { label: "Remodeling & New Construction", href: "/craft-catalog/remodeling-new-construction"   },
    ],
  },

  /* ─── REMODELING & NEW CONSTRUCTION ────────────────────────────────────── */
  "remodeling-new-construction": {
    title: "Remodeling & New Construction",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Remodeling electrical work requires a licensed electrician who
          understands the full scope of construction — not just the wiring in
          isolation. O&rsquo;Connor &amp; Sons has spent decades wiring kitchen
          remodels, bathroom renovations, ADU additions, and full home
          renovations across Palo Alto and the surrounding area.
        </p>
        <p>
          We coordinate with your general contractor, pull the necessary
          permits, and complete rough-in and finish electrical that passes
          inspection on the first try.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (650) 740-1121", href: "tel:6507401121" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "What We Handle in Remodels",
        content: (
          <>
            <p>
              Kitchen remodels — dedicated circuits for appliances, under-cabinet
              lighting, island outlets, hood ventilation wiring. Bathroom
              remodels — GFCI protection, exhaust fan wiring, heated floor
              circuits. ADU and addition wiring — subpanels, new circuits, service
              extensions. Whole-home rewires — replacing outdated wiring in older
              Palo Alto homes to modern code.
            </p>
            <p>
              We&rsquo;ve identified dangerous wiring conditions during remodels
              that previous contractors had missed or left unresolved. We flag
              what we find and explain your options clearly before any additional
              work begins.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Work in Remodels",
        content: (
          <>
            <p>
              <strong>Permit Coordination.</strong> We pull all required
              electrical permits and coordinate with the city for inspections.
              Clean permit history is important for your home&rsquo;s value and
              insurability.
            </p>
            <p>
              <strong>GC Coordination.</strong> We communicate directly with
              your general contractor and schedule rough-in and trim-out work
              around the construction sequence to keep your project moving.
            </p>
            <p>
              <strong>Inspection Sign-Off.</strong> We stand behind our work.
              Every remodel electrical job is completed to code and passes
              inspection before we close the permit.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Panel & Subpanel Upgrades",  href: "/craft-catalog/panel-subpanel-upgrades"     },
      { label: "Lighting Installation",      href: "/craft-catalog/lighting-installation"        },
      { label: "Outlet & Switch Repair",     href: "/craft-catalog/outlet-switch-repair"         },
      { label: "Smart Home Wiring",          href: "/craft-catalog/smart-home-wiring"            },
    ],
  },

  /* ─── LIGHTING INSTALLATION ────────────────────────────────────────────── */
  "lighting-installation": {
    title: "Lighting Installation",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          From track lighting and recessed cans to pendant fixtures and
          under-cabinet lighting, O&rsquo;Connor &amp; Sons Electric installs
          all types of residential and commercial lighting throughout Palo Alto.
          Good lighting is part technical and part design — we help you get both
          right.
        </p>
        <p>
          We install new circuits where needed, run wiring through finished
          walls when possible, and make sure every installation is safe,
          clean, and properly supported.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (650) 740-1121", href: "tel:6507401121" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Lighting Work We Handle",
        content: (
          <>
            <p>
              Track lighting installation and relocation. Recessed lighting
              (can lights) — new installs and retrofits. Pendant and chandelier
              installation. Ceiling fan installation with or without existing
              wiring. Under-cabinet lighting. Exterior lighting and security
              lights. Landscape lighting circuits. Dimmer switch installation
              and compatibility work.
            </p>
            <p>
              We also troubleshoot lighting problems — flickering fixtures,
              switches that don&rsquo;t control the right lights, and
              incompatible dimmer/fixture combinations that cause buzzing or
              early lamp failure.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle Lighting Projects",
        content: (
          <>
            <p>
              <strong>Right Circuit First.</strong> We assess whether your
              existing wiring and circuit capacity can support the new
              installation, or whether a new circuit is needed. We tell you
              upfront.
            </p>
            <p>
              <strong>Clean Installation.</strong> We fish wiring through
              finished walls and ceilings where feasible to avoid unnecessary
              drywall work. When walls must be opened, we patch cleanly.
            </p>
            <p>
              <strong>Tested and Confirmed.</strong> We test every switch,
              dimmer, and fixture before we leave and make sure everything
              works as expected.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Outlet & Switch Repair",        href: "/craft-catalog/outlet-switch-repair"        },
      { label: "Residential Electrical",        href: "/craft-catalog/residential-electrical"       },
      { label: "Remodeling & New Construction", href: "/craft-catalog/remodeling-new-construction"  },
      { label: "Smart Home Wiring",             href: "/craft-catalog/smart-home-wiring"            },
    ],
  },

  /* ─── OUTLET & SWITCH REPAIR ───────────────────────────────────────────── */
  "outlet-switch-repair": {
    title: "Outlet & Switch Repair",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Dead outlets, switches that don&rsquo;t work, tripped GFCI receptacles
          that won&rsquo;t reset, and non-weatherproof outdoor outlets are among
          the most common electrical service calls we handle. Most are resolved
          quickly — often the same day.
        </p>
        <p>
          O&rsquo;Connor &amp; Sons responds fast and resolves the issue at the
          source. Whether it&rsquo;s a loose connection, a failed device, or a
          wiring problem upstream, we find it and fix it.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (650) 740-1121", href: "tel:6507401121" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Outlet & Switch Issues We Repair",
        content: (
          <>
            <p>
              Dead or intermittent outlets. GFCI outlets that won&rsquo;t reset
              or trip frequently. Kitchen and bathroom outlets with no power.
              Outdoor outlets that need weatherproof covers or GFCI protection.
              Switches that control the wrong fixtures or no longer function.
              Two-prong outlets that need updating. Dimmer switches that are
              incompatible with LED fixtures.
            </p>
            <p>
              We also install new outlets and switches — adding USB charging
              outlets, moving outlet locations, adding switch legs for new
              fixtures, and upgrading old 2-prong outlets to grounded 3-prong
              with proper protection.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "Fast and Thorough",
        content: (
          <>
            <p>
              <strong>Same-Day Response.</strong> Most outlet and switch issues
              are handled quickly. Tom is known for responding fast — customers
              have reached him on a Friday evening and had the problem resolved
              the same night.
            </p>
            <p>
              <strong>Root Cause, Not Just the Symptom.</strong> A dead outlet
              isn&rsquo;t always a failed device. We check the circuit, the
              connections, and the panel before assuming a simple device swap
              will hold.
            </p>
            <p>
              <strong>Clean Work.</strong> New outlets and switches are
              installed level, with proper cover plates and no visible wire
              gaps. We treat the detail of the finish installation as carefully
              as the wiring itself.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Electrical Troubleshooting",   href: "/craft-catalog/electrical-troubleshooting"   },
      { label: "Lighting Installation",        href: "/craft-catalog/lighting-installation"         },
      { label: "Residential Electrical",       href: "/craft-catalog/residential-electrical"        },
      { label: "Smart Home Wiring",            href: "/craft-catalog/smart-home-wiring"             },
    ],
  },

  /* ─── SMART HOME WIRING ─────────────────────────────────────────────────── */
  "smart-home-wiring": {
    title: "Smart Home Wiring",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Smart home systems require a licensed electrician who understands
          both the electrical infrastructure and how smart devices interact
          with it. O&rsquo;Connor &amp; Sons has experience with Vantage home
          control systems and other smart home wiring projects throughout the
          Palo Alto area.
        </p>
        <p>
          We install the dedicated circuits, low-voltage wiring, and proper
          grounding that smart home systems require to function reliably — and
          troubleshoot existing smart home electrical issues when devices don&rsquo;t
          behave as expected.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (650) 740-1121", href: "tel:6507401121" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Smart Home Electrical Work We Handle",
        content: (
          <>
            <p>
              Smart switch and dimmer installation (including compatibility
              assessment with existing wiring). Vantage home control system
              wiring. Low-voltage wiring for smart home hubs and controllers.
              Dedicated circuits for smart home panels and equipment. Electrical
              troubleshooting for smart devices that aren&rsquo;t working as
              expected. Whole-home smart lighting circuit planning and
              installation.
            </p>
            <p>
              Silicon Valley homes have been early adopters of smart home
              technology, and we&rsquo;ve worked on these systems for years. If
              your smart home electrical isn&rsquo;t behaving, we can diagnose it.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "Our Approach to Smart Home Work",
        content: (
          <>
            <p>
              <strong>Infrastructure First.</strong> Smart devices are only as
              reliable as the electrical infrastructure behind them. We make
              sure the wiring, grounding, and circuit capacity are correct before
              any smart device goes in.
            </p>
            <p>
              <strong>Compatibility Assessment.</strong> Not all smart switches
              work with all wiring configurations. We assess your existing wiring
              and recommend the right devices for your setup.
            </p>
            <p>
              <strong>Tested and Working.</strong> We don&rsquo;t leave until
              every device is installed correctly and functioning as designed.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Lighting Installation",         href: "/craft-catalog/lighting-installation"         },
      { label: "Outlet & Switch Repair",        href: "/craft-catalog/outlet-switch-repair"          },
      { label: "EV Charger & Battery Systems",  href: "/craft-catalog/ev-charger-battery-systems"    },
      { label: "Remodeling & New Construction", href: "/craft-catalog/remodeling-new-construction"   },
    ],
  },

  /* ─── EV CHARGER & BATTERY SYSTEMS ─────────────────────────────────────── */
  "ev-charger-battery-systems": {
    title: "EV Charger & Battery Systems",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          EV charger installation and home battery system wiring are two of the
          most common electrical projects in Palo Alto today. Both require a
          licensed electrician who understands load calculations, panel capacity,
          and permit requirements — not just hardware installation.
        </p>
        <p>
          O&rsquo;Connor &amp; Sons has experience with EV charger circuits and
          battery backup systems including Tesla Powerwall troubleshooting and
          remediation. We work on these systems correctly and to code.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (650) 740-1121", href: "tel:6507401121" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "EV & Battery Work We Handle",
        content: (
          <>
            <p>
              Level 2 EV charger installation (240V dedicated circuit). NEMA
              14-50 outlet installation for EV charging. Panel capacity
              assessment for EV or battery load. Tesla Powerwall and home
              battery system wiring and troubleshooting. Remediation of
              improperly installed EV or battery systems. Permit coordination
              for EV charger and battery system installations.
            </p>
            <p>
              In a community where EV adoption is among the highest in the
              country, we&rsquo;ve installed and serviced these systems many
              times. We also fix problems left by installations that weren&rsquo;t
              done correctly the first time.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle EV & Battery Installs",
        content: (
          <>
            <p>
              <strong>Panel Assessment First.</strong> Before any EV charger
              goes in, we assess your panel&rsquo;s available capacity. If an
              upgrade is needed, we tell you before work begins — not after.
            </p>
            <p>
              <strong>Proper Permitting.</strong> EV charger and battery system
              installations require permits in Palo Alto. We pull them and
              coordinate inspections as part of every job.
            </p>
            <p>
              <strong>Correct Installation.</strong> EV and battery systems
              installed incorrectly create ongoing electrical problems. We do
              it right — with the right wire gauge, breaker sizing, and
              grounding for the load and system involved.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Panel & Subpanel Upgrades",  href: "/craft-catalog/panel-subpanel-upgrades"     },
      { label: "Residential Electrical",     href: "/craft-catalog/residential-electrical"       },
      { label: "Smart Home Wiring",          href: "/craft-catalog/smart-home-wiring"            },
      { label: "Electrical Troubleshooting", href: "/craft-catalog/electrical-troubleshooting"   },
    ],
  },
};
