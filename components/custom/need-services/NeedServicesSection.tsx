"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";

export default function NeedServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cancelled = false;
    let ctx: any;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.from(".need-services__inner > *", {
          y: 35, opacity: 0, duration: 0.7, ease: "power3.out", stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
        });
      });
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section className="need-services" ref={sectionRef}>
      <div className="need-services__inner">
        <h2 className="need-services__heading">
          Need a Licensed Electrician
          <br />in Palo Alto or the Peninsula?
        </h2>
        <p className="need-services__text">
          Call O&apos;Connor &amp; Sons Electric for same-day service, panel upgrades, EV charger
          installation, and all residential or commercial electrical work — done right the first time.
        </p>
        <Link href="/contact-us/" className="need-services__btn">
          Get a Free Quote
        </Link>
      </div>
    </section>
  );
}
