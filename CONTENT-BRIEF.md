# O'Connor & Sons Electric — Content Brief
**QuickFlip Sites | Build Log**
Date: 2026-05-08
Prospect: https://paloaltoelectric.com (redirects to O'Connor & Sons Electric site)
Template: PipeMonkey-Redesign
Reference site: N/A (source site was the primary reference)

---

## Source Material Summary

**Business:** O'Connor & Sons Electric
**Phone:** (650) 740-1121
**Address:** 849 Clara Drive, Palo Alto, CA 94303
**Email:** oconnorelectric@comcast.net
**Hours:** Mon–Sat 7:30AM–8:30PM · Sun 10AM–5PM
**License:** California C10 Electrical — License #513626

**Ratings:**
- Yelp: 5.0★, 593 reviews
- Nextdoor: 172 Faves
- BBB: Accredited since July 17, 2017

**Service Area:** Palo Alto, Menlo Park, Mountain View, Los Altos, Sunnyvale, Atherton, and surrounding Peninsula communities

**Key differentiators (from prospect site + reviews):**
- Family-owned, 30+ years serving Palo Alto
- European-trained electricians
- Owners answer calls directly — Tom picks up
- Same-day service commonly available
- Permitted work, inspections passed first time

**Crawl notes:** The prospect's own website (paloaltoelectric.com) had near-zero content — just a phone number, address, and three bullet-point value props ("Commercial · Residential · Remodeling"). All service detail, testimonials, and differentiators were sourced from:
- Yelp listing (scraped via Yahoo Local and search result snippets — direct Yelp was 403 blocked)
- Nextdoor listing (successfully scraped via Apify RAG browser)
- BBB listing (data confirmed via search snippets)
- Google Business Profile snippets (hours, address, license)

---

## Service Inventory

Every service below was inferred from review content and the prospect's stated trade categories (Commercial · Residential · Remodeling), since the source site listed no individual services.

1. Electrical Troubleshooting
2. Panel & Subpanel Upgrades
3. Residential Electrical
4. Commercial Electrical
5. Remodeling & New Construction
6. Lighting Installation
7. Outlet & Switch Repair
8. Smart Home Wiring (Vantage systems mentioned in reviews)
9. EV Charger & Battery Systems (Tesla Powerwall mentioned in reviews)

---

## Services Consolidated

None. All 9 services kept as separate entries.

---

## Pages Built & Content Decisions

### Homepage (app/page.tsx)
Kept: Hero, Difference, Announcements, Insights accordion, Testimonials, HomeCTA sections.
Removed: Donation widget (not applicable to trade clients).
All section copy rewritten for electrical trade / O'Connor & Sons.

### About Us (data/channel/oconnor-sons.tsx → /explore/oconnor-sons)
Built from: prospect site value props, Yelp/Nextdoor review content, BBB accreditation data.
Generated: learnMore long-form copy (European training background, 30-year history, care philosophy) — flagged in Copy Generation Log.

### Services Index (/craft-catalog)
9 services matching the Service Inventory. Each service has its own dynamic page under /craft-catalog/[slug].

### Service Pages (data/craft-catalog/service-pages.tsx)
Built from: trade knowledge + review mentions of specific job types.
Each service has: overview, 2 detail sections, quick-links with phone CTA, 3–4 related services.

### FAQs (/general-faqs)
8 electrical FAQs covering: licensing, permits, panel capacity, EV chargers, same-day availability, commercial work, costs, and cleanup. Generated from trade knowledge — flagged in Copy Generation Log.

### Contact Us (/contact-us)
4 service area cards: Palo Alto core, Menlo Park/Atherton, Mountain View/Los Altos/Sunnyvale, Surrounding Peninsula.
Form includes 10-item service dropdown.
Google Maps embed pointed to 849 Clara Drive (TODO: confirm embed URL).

### Gallery (/gallery)
4 placeholder job cards: Panel Upgrade, Track Lighting, Weatherproof Outlet, EV Charger Circuit.
All images are TODOs — no photos were extractable from the prospect site.

### Service Areas (/service-areas)
4 area sections: Palo Alto, Menlo Park/Atherton, Mountain View/Los Altos/Sunnyvale, Surrounding Peninsula.
Copy localized to each area's housing stock and electrical context.

### Blog (/blog)
6 placeholder posts. All flagged TODO — client should populate with real content or approve generated stubs.
Titles: Panel Upgrade Guide, EV Charger Install, Eichler Wiring, Powerwall Install, Permit Process, Flickering Lights.

### Privacy Policy (/privacy-policy)
Template text updated: "Pipe Monkeys" → "O'Connor & Sons Electric", phone and address swapped.

---

## Navigation

Simplified from template mega-nav to 4 flat items:
- Home → /
- Our Services → /craft-catalog
- About Us → /explore/oconnor-sons
- Contact → /contact-us

---

## Copy Generation Log

The following copy was generated (not extracted from the prospect's site):

| Item | File | Notes |
|------|------|-------|
| learnMore body | data/channel/oconnor-sons.tsx | European training background, 30-yr history, care philosophy — drawn from review themes, not direct quote |
| All 9 service page bodies | data/craft-catalog/service-pages.tsx | Generated from trade knowledge + review job-type mentions |
| All 9 programs card descriptions | data/programs.tsx | Tightened from service page copy |
| All 4 accordion step sequences | lib/constants/AccordionItems.tsx | Process steps drawn from review descriptions of how Tom's team works |
| All 8 FAQs | app/general-faqs/page.tsx | Trade-standard questions with O'Connor-specific answers |
| Service area descriptions | app/service-areas/page.tsx | Localized by area housing stock and geography |
| Blog post titles + excerpts | app/blog/page.tsx | Placeholder only — all flagged TODO |
| Gallery job card titles | app/gallery/page.tsx | Placeholder only — all flagged TODO |

All Testimonial quotes are real reviews sourced from Yelp (Marta R., Willie L.) and Nextdoor (S.Q., R.O.).

---

## TODOs for Client Before Launch

| Item | File | Notes |
|------|------|-------|
| Hero image or video | components/custom/Hero.tsx | Replace placeholder with O'Connor & Sons job site or team photo |
| Difference section photo | components/custom/Difference.tsx | Replace /images/IMG_9750 with O'Connor & Sons panel or team photo |
| Announcements section photo | components/custom/Announcements.tsx | Replace /images/IMG_9688 with relevant job site photo |
| Accordion item images (×4) | lib/constants/AccordionItems.tsx | All 4 use /images/IMG_9688 placeholder — replace with trade-specific photos |
| About Us page photo | data/channel/oconnor-sons.tsx | flexFeature.image slot — needs client photo |
| Gallery photos (×4) | app/gallery/page.tsx | All 4 gallery cards are placeholders — replace with real job photos |
| Social media URLs | components/custom/Footer.tsx | Yelp link present; Facebook/Instagram/YouTube slots need real URLs or removal |
| Google Maps embed | app/contact-us/page.tsx | Confirm iframe src points to correct 849 Clara Drive embed URL |
| Blog content | app/blog/page.tsx | 6 placeholder posts — replace with real articles or approve generated stubs |
| Yelp review link | components/custom/Difference.tsx | Yelp URL hard-coded to /biz/oconnor-and-sons-electric-palo-alto — confirm this is correct slug |
| Form backend | app/contact-us/page.tsx | Contact form needs real submission endpoint wired up |

