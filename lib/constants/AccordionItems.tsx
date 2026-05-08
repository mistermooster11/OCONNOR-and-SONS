
type AccordionStep = { label: string; body: string };

export const accordionItems = [
  {
    id: "accordion-0",
    title: "Electrical Troubleshooting",
    image: "/images/IMG_9688-1024x682.jpg",
    // TODO: Replace with an O'Connor & Sons troubleshooting job photo
    description:
      "Tripped breakers, flickering lights, dead outlets — we find the root cause and fix it right. European-trained electricians with 30+ years of diagnostic experience in Palo Alto.",
    learnHref: "/craft-catalog/electrical-troubleshooting",
    steps: [
      { label: "Listen & Assess", body: "We understand the symptom pattern before picking up a tool — patterns point to causes." },
      { label: "Diagnose", body: "We use professional testing equipment to measure voltage, continuity, and load — not just visual inspection." },
      { label: "Explain First", body: "We tell you what we found and what the fix involves before any work begins. No surprise charges." },
      { label: "Fix the Root Cause", body: "We repair the underlying issue — not just the symptom — and test thoroughly before leaving." },
    ] as AccordionStep[],
  },
  {
    id: "accordion-1",
    title: "Panel & Subpanel Upgrades",
    image: "/images/IMG_9750-1024x683.jpg",
    // TODO: Replace with an O'Connor & Sons panel upgrade photo
    description:
      "Undersized panels can't support modern loads — EVs, appliances, and additions all demand more capacity. We upgrade to 200-amp service, add subpanels, and handle all permits and inspections.",
    learnHref: "/craft-catalog/panel-subpanel-upgrades",
    steps: [
      { label: "Assess Capacity", body: "We evaluate your current panel and your actual load requirements before recommending a solution." },
      { label: "Pull Permits", body: "All panel work is permitted. We handle the paperwork and coordinate the city inspection." },
      { label: "Install", body: "We replace or upgrade the panel, reroute circuits as needed, and restore power as quickly as possible." },
      { label: "Inspection Sign-Off", body: "Work isn't done until the city inspection passes. We stand behind every panel job." },
    ] as AccordionStep[],
  },
  {
    id: "accordion-2",
    title: "Remodeling Electrical",
    image: "/images/IMG_9688-1024x682.jpg",
    // TODO: Replace with an O'Connor & Sons remodel wiring photo
    description:
      "Kitchen rewires, bathroom circuits, ADU wiring, and whole-home renovations. We coordinate with your GC, pull permits, and pass inspection the first time — every time.",
    learnHref: "/craft-catalog/remodeling-new-construction",
    steps: [
      { label: "Scope the Work", body: "We review the project plans with you and identify what electrical work the remodel requires — rough-in, trim-out, and new circuits." },
      { label: "Coordinate", body: "We work directly with your GC and schedule around the construction sequence to keep the project moving." },
      { label: "Rough-In & Trim-Out", body: "We complete all phases of the electrical work — from framing stage through fixture installation at finish." },
      { label: "Permit & Inspect", body: "We pull the electrical permit and attend the inspection. Work isn't closed until it passes." },
    ] as AccordionStep[],
  },
  {
    id: "accordion-3",
    title: "EV Charger & Battery Systems",
    image: "/images/IMG_9688-1024x682.jpg",
    // TODO: Replace with an O'Connor & Sons EV charger or Powerwall photo
    description:
      "Level 2 EV charger installation, NEMA 14-50 outlets, Tesla Powerwall wiring and troubleshooting. Done correctly, permitted, and inspected — and we fix installations that weren't done right.",
    learnHref: "/craft-catalog/ev-charger-battery-systems",
    steps: [
      { label: "Panel Assessment", body: "We check available capacity before any EV or battery system goes in. If an upgrade is needed, we tell you before work begins." },
      { label: "Permit", body: "EV charger and battery system installations require permits in Palo Alto. We pull them." },
      { label: "Install Correctly", body: "Right wire gauge, right breaker sizing, right grounding — for the actual load and system involved." },
      { label: "Inspection", body: "We coordinate the city inspection and close the permit. Done right, the first time." },
    ] as AccordionStep[],
  },
];
