"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useWowAnimation } from "@/hooks/useWowAnimation";
import CraftHero from "@/components/custom/craft-catalog/CraftHero";

/* ── Service Area Data ───────────────────────────────────────── */

const serviceAreas = [
  {
    region: "Palo Alto & Central Peninsula",
    description:
      "Based in midtown Palo Alto, O'Connor & Sons has served the city's homes and businesses for over 30 years. We know Palo Alto's older residential stock, the Eichlers, the remodeled ranches, and the commercial buildings along El Camino.",
    neighborhoods:
      "Midtown • Crescent Park • Barron Park • College Terrace • Old Palo Alto • Downtown Palo Alto • South Palo Alto • East Palo Alto",
  },
  {
    region: "Menlo Park & Atherton",
    description:
      "Menlo Park and Atherton homes range from classic California ranches to large custom estates — many with aging electrical infrastructure that needs careful, knowledgeable work. We serve the full range.",
    neighborhoods:
      "Downtown Menlo Park • Belle Haven • Allied Arts • Sharon Heights • Atherton • Fair Oaks",
  },
  {
    region: "Mountain View, Los Altos & Sunnyvale",
    description:
      "We regularly serve the tech-corridor communities south of Palo Alto — residential and light commercial electrical work for homeowners and businesses throughout the area.",
    neighborhoods:
      "Mountain View • Los Altos • Los Altos Hills • Sunnyvale • Cupertino",
  },
  {
    region: "Surrounding Peninsula Communities",
    description:
      "Our service area extends to surrounding Peninsula communities. If you're not sure whether we cover your neighborhood, just call — we almost certainly do.",
    neighborhoods:
      "Portola Valley • Woodside • Redwood City • Stanford • and surrounding areas",
  },
];

/* ── Stacked area section ────────────────────────────────────── */

function AreaSection({
  area,
  index,
  vis,
}: {
  area: (typeof serviceAreas)[number];
  index: number;
  vis: string;
}) {
  return (
    <div
      className={`fadeInUpS wow${vis}`}
      style={{
        animationDelay: `${index * 0.1}s`,
        paddingBottom: "2.5rem",
        borderBottom: "1px solid #e8e8e8",
      }}
    >
      <h3 className="h4 ia-margin-1">{area.region}</h3>
      <p className="p2 ia-dark" style={{ marginBottom: "0.75rem" }}>
        {area.description}
      </p>
      <p className="p3 ia-medium">{area.neighborhoods}</p>
    </div>
  );
}

/* ── Styled submit button ────────────────────────────────────── */

function SubmitBtn() {
  const btnRef = useWowAnimation<HTMLButtonElement>("contact-submit-btn", true);
  return (
    <button
      ref={btnRef}
      type="submit"
      className="ia-btn wow"
      style={{ cursor: "pointer", fontFamily: "inherit" }}
    >
      <em className="ia-b ia-b-1" />
      <em className="ia-b ia-b-2" />
      <em className="ia-b ia-b-3" />
      <em className="ia-b ia-b-4" />
      <span>Send Message</span>
    </button>
  );
}

/* ── Page ────────────────────────────────────────────────────── */

export default function ContactPage() {
  const formRef  = useRef<HTMLDivElement>(null);
  const hoursRef = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);

  const formInView  = useInView(formRef,  { once: true, margin: "0px 0px -60px 0px" });
  const hoursInView = useInView(hoursRef, { once: true, margin: "0px 0px -60px 0px" });
  const areasInView = useInView(areasRef, { once: true, margin: "0px 0px -60px 0px" });

  const formVis  = formInView  ? " is-visible" : "";
  const hoursVis = hoursInView ? " is-visible" : "";
  const areasVis = areasInView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <CraftHero
        title="Contact Us"
        bgImage="/images/IMG_9688-1024x682.jpg"
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      {/* ── Contact Form + Map ───────────────────────────────────── */}
      <div ref={formRef} className={`flex-module fadeIn wow${formVis}`}>
        <div className="inner inner--slim-1172">

          {/* Section heading */}
          <div className="content-block-head wide">
            <h2
              id="getstarted"
              className={`h3 fadeInUpS wow${formVis}`}
              style={{ animationDelay: "0.1s" }}
            >
              Schedule Service or Ask a Question
            </h2>
            <p
              className={`p2 fadeInUpS wow${formVis}`}
              style={{ animationDelay: "0.15s" }}
            >
              Fill out the form below or call us directly at{" "}
              <strong>(650) 740-1121</strong>. Tom responds promptly — often
              within the hour.
            </p>
          </div>

          {/* Form + Map side-by-side */}
          <div className={`contact-form-map-grid fadeInUpS wow${formVis}`} style={{ animationDelay: "0.2s" }}>

            {/* Form column */}
            <div className="contact-form-col">
              {/* TODO: Replace action URL with live form endpoint before launch */}
              <form
                action="https://formspree.io/f/REPLACE_WITH_FORM_ID"
                method="POST"
                className="contact-form"
              >
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="name" className="p3 ia-medium">Name *</label>
                    <input
                      id="name" name="name" type="text" required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="phone" className="p3 ia-medium">Phone *</label>
                    <input
                      id="phone" name="phone" type="tel" required
                      placeholder="(555) 000-0000"
                    />
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="email" className="p3 ia-medium">Email</label>
                    <input
                      id="email" name="email" type="email"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="service" className="p3 ia-medium">Service Needed</label>
                    <select id="service" name="service">
                      <option value="">Select a service…</option>
                      <option>Electrical Troubleshooting</option>
                      <option>Panel &amp; Subpanel Upgrade</option>
                      <option>Residential Electrical</option>
                      <option>Commercial Electrical</option>
                      <option>Remodeling / New Construction</option>
                      <option>Lighting Installation</option>
                      <option>Outlet &amp; Switch Repair</option>
                      <option>Smart Home Wiring</option>
                      <option>EV Charger / Battery System</option>
                      <option>Not Sure / Other</option>
                    </select>
                  </div>
                </div>

                <div className="contact-field contact-field--full">
                  <label htmlFor="message" className="p3 ia-medium">Message</label>
                  <textarea
                    id="message" name="message" rows={5}
                    placeholder="Describe the work you need — what's happening, what type of property, and any relevant details."
                  />
                </div>

                <div>
                  <SubmitBtn />
                </div>
              </form>
            </div>

            {/* Map column */}
            <div className="contact-map-col">
              {/* TODO: Replace with Google Maps embed centered on 849 Clara Dr, Palo Alto, CA 94303 */}
              <iframe
                title="O'Connor & Sons Electric — Palo Alto, CA"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.3!2d-122.1224!3d37.4351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbb28416493a7%3A0xd067359d5e79b625!2s849+Clara+Dr%2C+Palo+Alto%2C+CA+94303!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </div>

      {/* ── Office Hours ─────────────────────────────────────────── */}
      <div
        ref={hoursRef}
        className={`flex-module fadeIn wow${hoursVis}`}
        style={{ backgroundColor: "#FEFEF0" }}
      >
        <div className="inner inner--slim-1172">
          <h2
            className={`h3 fadeInUpS wow${hoursVis}`}
            style={{ animationDelay: "0.1s" }}
          >
            Office Hours
          </h2>
          <div className={`contact-hours-grid fadeInUpS wow${hoursVis}`} style={{ animationDelay: "0.2s" }}>
            <div className="contact-hours-card">
              <div className="contact-hours-label p3 ia-medium">Monday – Friday</div>
              <div className="contact-hours-time h4">7:30 am – 8:30 pm</div>
            </div>
            <div className="contact-hours-card">
              <div className="contact-hours-label p3 ia-medium">Saturday</div>
              <div className="contact-hours-time h4">7:30 am – 8:30 pm</div>
            </div>
            <div className="contact-hours-card">
              <div className="contact-hours-label p3 ia-medium">Sunday</div>
              <div className="contact-hours-time h4">10:00 am – 5:00 pm</div>
            </div>
            <div className="contact-hours-card contact-hours-card--accent">
              <div className="contact-hours-label p3">Emergency Service</div>
              <div className="contact-hours-time h4">7 Days a Week</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Service Areas ────────────────────────────────────────── */}
      <div ref={areasRef} className={`flex-module fadeIn wow${areasVis}`}>
        <div className="inner inner--slim-1172">
          <h2
            className={`h3 fadeInUpS wow${areasVis}`}
            style={{ animationDelay: "0.1s" }}
          >
            Service Areas
          </h2>
          <div
            className={`content-entry fadeInUpS wow${areasVis}`}
            style={{ animationDelay: "0.2s", marginBottom: "3rem" }}
          >
            <p>
              We serve Palo Alto and the broader Peninsula. If you&apos;re
              not sure whether we cover your area, call us — we almost
              certainly do.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {serviceAreas.map((area, i) => (
              <AreaSection key={area.region} area={area} index={i} vis={areasVis} />
            ))}
          </div>
        </div>
      </div>

    </main>
  );
}
