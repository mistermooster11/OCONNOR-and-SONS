"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

/* ── Blog Posts (placeholder — swap with real posts or CMS data) */

// TODO: Replace with real blog posts or connect to a CMS
const posts = [
  {
    id: "do-i-need-panel-upgrade",
    title: "Do I Need a 200-Amp Panel Upgrade? A Palo Alto Homeowner's Guide",
    excerpt:
      "Breakers tripping frequently, no room to add circuits, planning an EV charger or addition — these are all signs your panel may be limiting you. Here's how to know for sure.",
    category: "Homeowner Guide",
    date: "April 2026",
    href: "/blog/do-i-need-panel-upgrade",
  },
  {
    id: "ev-charger-installation-palo-alto",
    title: "EV Charger Installation in Palo Alto: What You Need to Know",
    excerpt:
      "Level 2 chargers require a 240V dedicated circuit, a panel with available capacity, and a permit. Here's what the installation process actually looks like — and what can go wrong.",
    category: "EV & Battery",
    date: "March 2026",
    href: "/blog/ev-charger-installation-palo-alto",
  },
  {
    id: "electrical-troubleshooting-101",
    title: "5 Electrical Problems That Seem Minor But Aren't",
    excerpt:
      "A breaker that trips occasionally, an outlet that's warm to the touch, lights that flicker when the AC runs — these symptoms have root causes that need to be found, not just reset.",
    category: "Safety",
    date: "February 2026",
    href: "/blog/electrical-troubleshooting-101",
  },
  {
    id: "eichler-electrical-guide",
    title: "Eichler Electrical: What Palo Alto Homeowners Should Know",
    excerpt:
      "Eichler homes have unique electrical characteristics — original panels, radiant heat systems, and layouts that require a licensed electrician who knows what to look for.",
    category: "Local Guide",
    date: "January 2026",
    href: "/blog/eichler-electrical-guide",
  },
  {
    id: "smart-home-wiring-mistakes",
    title: "Smart Home Wiring: The Most Common Installation Mistakes",
    excerpt:
      "Smart switches, dimmers, and home control systems fail most often due to wiring errors — wrong neutral wire, incompatible dimmer-fixture combinations, or inadequate grounding.",
    category: "Smart Home",
    date: "December 2025",
    href: "/blog/smart-home-wiring-mistakes",
  },
  {
    id: "tesla-powerwall-troubleshooting",
    title: "Tesla Powerwall Problems: What a Licensed Electrician Actually Sees",
    excerpt:
      "We've resolved Powerwall issues caused by improper installation more than once. Here's what typically goes wrong and why proper electrical infrastructure matters.",
    category: "EV & Battery",
    date: "November 2025",
    href: "/blog/tesla-powerwall-troubleshooting",
  },
];

/* ── Sub-components ─────────────────────────────────────────── */

function PostCard({ post, delay }: { post: typeof posts[number]; delay: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div
      ref={ref}
      className={`user-grid-item user-grid-item--three fadeInUpS wow${vis}`}
      style={{ animationDelay: delay }}
    >
      <div className="user-grid-item-info">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem" }}>
          <span
            className="p3 ia-medium"
            style={{
              padding: "0.3rem 1rem",
              background: "var(--ia-sky, #FFD268)",
              borderRadius: "4px",
              fontSize: "1.2rem",
            }}
          >
            {post.category}
          </span>
          <span className="p3 ia-dark" style={{ fontSize: "1.2rem", opacity: 0.6 }}>{post.date}</span>
        </div>
        <h3 className="h6 ia-margin-1">
          {/* [TODO: Enable when blog CMS is wired up] */}
          {post.title}
        </h3>
        <p className="p3 ia-regular ia-dark" style={{ marginBottom: "1.2rem" }}>
          {post.excerpt}
        </p>
        <a className="ia-link ia-link--arrow" href={post.href}>
          <i className="icon-link" />
          <span>Read More</span>
        </a>
        {/* [TODO: Wire each href to real blog post pages] */}
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────── */

export default function BlogPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, margin: "0px 0px -60px 0px" });
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "0px 0px -60px 0px" });
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
              <span className="post post-page current-item">Blog</span>
            </div>
            <h1 className={`ia-white ia-margin-0 fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
              Drain Tips & Homeowner Guides
            </h1>
          </div>
        </div>

        <div className="hero-org__bottom flex-module">
          <div className="inner inner--slim-1172 cleared">
            <div className={`hero-org__left wow${heroVis}`}>
              <div className={`sub-heading fadeInUpS wow${heroVis}`}>From the O'Connor & Sons Electric Team</div>
              <div className={`content-entry fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                <p>
                  Practical electrical advice from the licensed techs who serve Palo Alto and the Peninsula</p>
              </div>
            </div>

            <div className="hero-org__right">
              <div className={`sub-heading fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                Quick Links
              </div>
              <ul className="quick-links" role="list">
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                  <a className="ia-link ia-link--arrow" href="/craft-catalog">
                    <i className="icon-link" />
                    <span>Our Services</span>
                  </a>
                </li>
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.2s" }}>
                  <a className="ia-link ia-link--arrow" href="/general-faqs">
                    <i className="icon-link" />
                    <span>FAQs</span>
                  </a>
                </li>
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.3s" }}>
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

      {/* ── Post Grid ── */}
      <div
        ref={gridRef}
        className={`user-grid-small fadeIn wow${gridInView ? " is-visible" : ""} flex-module`}
      >
        <div className="inner inner--slim-1172">
          <h2
            className={`h3 fadeInUpS wow${gridInView ? " is-visible" : ""}`}
            style={{ animationDelay: "0.1s" }}
          >
            Latest Articles
          </h2>
          {/* [TODO: Replace placeholder posts with real content from client or CMS] */}
          <div className="user-grid-list user-grid-list--small">
            {posts.map((post, i) => (
              <PostCard key={post.id} post={post} delay={`${(i % 3) * 0.1}s`} />
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div
        ref={ctaRef}
        className={`front-donation ia-bg-sky flex-module wow fadeInUpS${ctaInView ? " is-visible" : ""}`}
      >
        <div className="inner inner--slim-1172">
          <div className={`sub-heading wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.1s" }}>
            Have a Drain Emergency?
          </div>
          <h2 className={`h2 wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            Don&apos;t Wait — We Pick Up Fast
          </h2>
          <div className={`front-donation__in wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            <div className="content-entry">
              <p>
                Call <strong>(650) 740-1121</strong> and we&apos;ll give you an ETA on the spot.
                Same-day service available seven days a week across Palo Alto and the Peninsula.
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
