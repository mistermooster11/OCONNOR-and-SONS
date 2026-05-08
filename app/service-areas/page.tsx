"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

/* ── Service Area Data ──────────────────────────────────────── */

const areas = [
  {
    slug: "palo-alto",
    region: "Palo Alto",
    headline: "Licensed Electricians in Palo Alto",
    description:
      "O'Connor & Sons Electric has been based in midtown Palo Alto for over 30 years. We know the city's homes inside and out — the Eichlers with their unique electrical layouts, the older ranches and colonials with aging wiring, the newer custom builds, and the commercial buildings along El Camino Real. When Palo Alto homeowners and business owners have an electrical issue, they call us first.",
    callouts: [
      "30+ years serving Palo Alto homes and businesses",
      "Expertise with Eichlers and older residential wiring",
      "Fast response — often same day",
    ],
    neighborhoods:
      "Midtown • Crescent Park • Barron Park • College Terrace • Old Palo Alto • Downtown Palo Alto • South Palo Alto • Duveneck/St. Francis • East Palo Alto",
  },
  {
    slug: "menlo-park-atherton",
    region: "Menlo Park & Atherton",
    headline: "Licensed Electricians in Menlo Park & Atherton",
    description:
      "Menlo Park and Atherton are home to a wide range of properties — from classic California ranches and bungalows in the flats to large custom estates on multi-acre parcels. Many of these homes have significant electrical infrastructure that requires a knowledgeable, licensed electrician who understands both old and new construction. We serve the full spectrum.",
    callouts: [
      "Residential and estate electrical work",
      "Remodeling and addition wiring",
      "Panel upgrades for older homes",
    ],
    neighborhoods:
      "Downtown Menlo Park • Belle Haven • Allied Arts District • Sharon Heights • West Menlo Park • Atherton • Fair Oaks",
  },
  {
    slug: "mountain-view-los-altos-sunnyvale",
    region: "Mountain View, Los Altos & Sunnyvale",
    headline: "Licensed Electricians Serving Mountain View, Los Altos & Sunnyvale",
    description:
      "The communities south of Palo Alto share many of the same electrical challenges — aging mid-century homes, growing EV adoption, remodeling projects that require careful coordination, and commercial spaces that need reliable, code-compliant electrical work. O'Connor & Sons serves homeowners and businesses throughout this corridor.",
    callouts: [
      "EV charger installation and panel upgrades",
      "Residential and light commercial electrical",
      "Remodeling wiring and permit coordination",
    ],
    neighborhoods:
      "Mountain View • Los Altos • Los Altos Hills • Sunnyvale • Cupertino",
  },
  {
    slug: "surrounding-peninsula",
    region: "Surrounding Peninsula Communities",
    headline: "Licensed Electricians Throughout the Peninsula",
    description:
      "Our service area extends to surrounding Peninsula communities west and south of Palo Alto. Whether it's a Portola Valley estate, a Redwood City commercial building, or a home in Woodside, our licensed team brings the same standard of work that has earned us a 5-star reputation across 590+ reviews.",
    callouts: [
      "Full residential and commercial electrical service",
      "Same licensed team — no subcontracting",
      "Permitted work, inspections handled",
    ],
    neighborhoods:
      "Portola Valley • Woodside • Redwood City • Stanford University Area • and surrounding communities",
  },
];

/* ── Sub-components ─────────────────────────────────────────── */

function AreaSection({ area, reversed }: { area: typeof areas[number]; reversed: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div
      ref={ref}
      id={area.slug}
      className={`content-block-flex flex-module fadeIn wow${vis}`}
      style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}
    >
      <div className="inner inner--slim-1172">
        <div className="content-block-head wide">
          <h2 className={`h3 fadeInUpS wow${vis}`} style={{ animationDelay: "0.1s" }}>
            {area.headline}
          </h2>
        </div>
        <div className="content-block-in wide">
          <div className="content-block-text content-entry p2 full-width">
            <p>{area.description}</p>
            <ul>
              {area.callouts.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <p>
              <strong>Neighborhoods served:</strong> {area.neighborhoods}
            </p>
            <p>
              Not sure if we cover your street?{" "}
              <a href="tel:6507401121" className="ia-link">Call (650) 740-1121</a>{" "}
              — we almost certainly do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────── */

export default function ServiceAreasPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, margin: "0px 0px -60px 0px" });
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "0px 0px -60px 0px" });

  const heroVis = heroInView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">

      {/* ── Hero ── */}
      <div ref={heroRef} className={`hero-org flex-module fadeIn wow${heroVis}`}>
        <div className="hero-org__top ia-bg-dark">
          <div className="inner inner--slim-1172">
            <div className={`breadcrumbs ia-sky fadeInUpS wow${heroVis}`}>
              <span><a href="/">Home</a></span>
              <em>&gt;</em>
              <span className="post post-page current-item">Service Areas</span>
            </div>
            <h1 className={`ia-white ia-margin-0 fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
              We Come to You
            </h1>
          </div>
        </div>

        <div className="hero-org__bottom flex-module">
          <div className="inner inner--slim-1172 cleared">
            <div className={`hero-org__left wow${heroVis}`}>
              <div className={`sub-heading fadeInUpS wow${heroVis}`}>Coverage Area</div>
              <div className={`content-entry fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                <p>
                  O'Connor & Sons Electric serves Palo Alto and communities throughout the Peninsula. We don&apos;t
                  subcontract — our own techs cover every neighborhood, every day, seven days a week.
                  Same-day scheduling is available across our entire service area.
                </p>
              </div>
            </div>

            <div className="hero-org__right">
              <div className={`sub-heading fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                Jump to Area
              </div>
              <ul className="quick-links" role="list">
                {areas.map((area, i) => (
                  <li key={area.slug} className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
                    <a className="ia-link ia-link--arrow" href={`#${area.slug}`}>
                      <i className="icon-link" />
                      <span>{area.region}</span>
                    </a>
                  </li>
                ))}
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.4s" }}>
                  <a className="ia-link ia-link--arrow" href="tel:6507401121">
                    <i className="icon-link" />
                    <span>Call (650) 740-1121</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── Area Sections ── */}
      {areas.map((area, i) => (
        <AreaSection key={area.slug} area={area} reversed={i % 2 !== 0} />
      ))}

      {/* ── CTA ── */}
      <div
        ref={ctaRef}
        className={`front-donation ia-bg-sky flex-module wow fadeInUpS${ctaInView ? " is-visible" : ""}`}
      >
        <div className="inner inner--slim-1172">
          <div className={`sub-heading wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.1s" }}>
            Not Sure If We Cover You?
          </div>
          <h2 className={`h2 wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            Just Call — We Almost Certainly Do
          </h2>
          <div className={`front-donation__in wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            <div className="content-entry">
              <p>
                Our dispatch is fast and our coverage is wide. Call <strong>(650) 740-1121</strong> and
                we&apos;ll confirm in 30 seconds and get you on the schedule the same day.
              </p>
            </div>
            <div className="front-donation__btn-wrap">
              <div className="front-donation__btn">
                <a className="btn btn--primary" href="tel:6507401121">
                  Call (650) 740-1121
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
