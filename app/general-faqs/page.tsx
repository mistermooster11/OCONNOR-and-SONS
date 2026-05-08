"use client";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import SecondaryButton from "@/components/custom/buttons/SecondaryButton";

interface FaqItem {
  title: string;
  content: React.ReactNode;
  link?: { label: string; href: string };
}

const faqItems: FaqItem[] = [
  {
    title: "How quickly can you respond?",
    content: (
      <p>
        Tom and his team are known for responding fast — often the same day,
        and sometimes within hours. Many customers have reached us on short
        notice and been helped the same day or evening. Call us at{" "}
        <a href="tel:6507401121" className="ia-link">(650) 740-1121</a>{" "}
        and we&apos;ll give you an honest ETA.
      </p>
    ),
  },
  {
    title: "Are you licensed, bonded, and insured?",
    content: (
      <p>
        Yes. O&apos;Connor &amp; Sons Electric holds California State License
        #513626, Class C10 (Electrical Contractor). We are fully bonded and
        insured. All work is performed by licensed electricians — not
        unlicensed helpers.
      </p>
    ),
  },
  {
    title: "Do you pull permits?",
    content: (
      <p>
        Yes — for all work that requires a permit. Panel upgrades, EV charger
        installations, remodeling electrical, and other qualifying work are
        all permitted and inspected. We handle the paperwork and coordinate
        city inspections as part of the job. No shortcuts on permit-required
        work.
      </p>
    ),
  },
  {
    title: "Do you do both residential and commercial work?",
    content: (
      <p>
        Yes. We handle residential homes, condos, apartments, and commercial
        buildings throughout Palo Alto and the Peninsula. Property managers
        and business owners have relied on O&apos;Connor &amp; Sons for
        decades. We&apos;re experienced working in occupied commercial spaces
        and coordinate to minimize disruption.
      </p>
    ),
  },
  {
    title: "Can you troubleshoot electrical problems that other electricians couldn't diagnose?",
    content: (
      <p>
        That&apos;s what we&apos;re known for. Tom O&apos;Connor completed 4+
        years of formal European electrical trade school — a rigorous,
        apprenticeship-based training program. Our customers regularly report
        that Tom identified dangerous wiring conditions and root causes that
        other contractors had missed. Troubleshooting is our specialty.
      </p>
    ),
  },
  {
    title: "Do you install EV chargers and work on Tesla Powerwalls?",
    content: (
      <p>
        Yes. We install Level 2 EV charger circuits, NEMA 14-50 outlets,
        and work on home battery systems including Tesla Powerwall installations
        and troubleshooting. We also remediate Powerwall and EV charger
        installations that weren&apos;t done correctly by others.
      </p>
    ),
  },
  {
    title: "What areas do you serve?",
    content: (
      <>
        <p>
          We are based in midtown Palo Alto and serve the greater Peninsula
          area including: Palo Alto, Menlo Park, Mountain View, Los Altos,
          Los Altos Hills, Sunnyvale, Cupertino, Atherton, Portola Valley,
          Woodside, East Palo Alto, and surrounding communities. If you&apos;re
          not sure, just call — we almost certainly cover your area.
        </p>
      </>
    ),
  },
  {
    title: "How do you charge — by the hour or by the job?",
    content: (
      <p>
        We assess the work and give you a clear price before we start. Our
        goal is that you know exactly what you&apos;re paying before we touch
        anything. We&apos;re not the cheapest option in Palo Alto — and we
        don&apos;t try to be. We&apos;re the best at what we do, and our 5-star
        reviews across hundreds of customers reflect that.
      </p>
    ),
  },
];

export default function GeneralFaqsPage() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const heroRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const donationRef = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef, { once: true, margin: "0px 0px -60px 0px" });
  const accordionInView = useInView(accordionRef, { once: true, margin: "0px 0px -60px 0px" });
  const donationInView = useInView(donationRef, { once: true, margin: "0px 0px -60px 0px" });

  const toggle = (idx: number) =>
    setOpenIndex((prev) => (prev === idx ? -1 : idx));

  return (
    <main>
      <div id="content">

        {/* ── Hero ── */}
        <div
          ref={heroRef}
          className={`hero-org flex-module wow fadeIn${heroInView ? " is-visible" : ""}`}
        >
          <div className="hero-org__top ia-bg-dark">
            <div className="inner inner--slim-1172">
              <div className={`breadcrumbs ia-sky wow fadeInUpS${heroInView ? " is-visible" : ""}`}>
                <span><a href="/" className="home ia-link">Home</a></span>{" "}
                <em>&gt;</em>{" "}
                <span className="post post-page current-item">FAQs</span>
              </div>
              <h1
                className={`ia-white ia-margin-0 wow fadeInUpS${heroInView ? " is-visible" : ""}`}
                style={{ animationDelay: "0.1s" }}
              >
                Frequently Asked Questions
              </h1>
            </div>
          </div>
        </div>

        {/* ── Accordion ── */}
        <div className="accordion-module flex-module">
          <div className="inner inner--slim-1172">
            <div
              ref={accordionRef}
              className={`accordion-wrap-flex wow fadeInUpS${accordionInView ? " is-visible" : ""}`}
              style={{ animationDelay: "0.3s" }}
            >
              {faqItems.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div className="accordion-item-flex" key={idx}>
                    <a
                      className={`accordion-title-flex h4${isOpen ? " current" : ""}`}
                      href="#"
                      onClick={(e) => { e.preventDefault(); toggle(idx); }}
                      aria-expanded={isOpen}
                    >
                      {item.title}
                      <i className="icon-arr-down" aria-hidden="true" />
                    </a>
                    <div className={`accordion-info-flex${isOpen ? " open" : ""}`}>
                      <div className="content-entry">{item.content}</div>
                      {item.link && (
                        <a href={item.link.href} className="ia-link ia-link--arrow">
                          <i className="icon-arrow-right" aria-hidden="true" />
                          <span>{item.link.label}</span>
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div
          ref={donationRef}
          className={`front-donation ia-bg-sky flex-module wow fadeInUpS${donationInView ? " is-visible" : ""}`}
        >
          <div className="inner inner--slim-1172">
            <div className={`sub-heading wow fadeInUpS${donationInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
              Still have questions?
            </div>
            <h2 className={`h2 wow fadeInUpS${donationInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
              We&apos;re Here to Help
            </h2>
            <div className={`front-donation__in wow fadeInUpS${donationInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
              <div className="content-entry">
                <p>
                  Call us at <strong>(650) 740-1121</strong> — Tom picks up fast
                  and can answer any question, discuss your project, or give you
                  an honest assessment over the phone.
                </p>
              </div>
              <div className="front-donation__btn-wrap">
                <div className="front-donation__btn">
                  <SecondaryButton
                    label="Call (650) 740-1121"
                    href="tel:6507401121"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
