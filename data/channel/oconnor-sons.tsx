import type { ChannelPageData } from "@/components/custom/channel/types";

const oconnorSons: ChannelPageData = {
  slug: "oconnor-sons",

  navItems: [
    { href: "#channel",           label: "About Us"          },
    { href: "#helpful_resources", label: "Quick Links"       },
    { href: "#crafts",            label: "Our Services"      },
    { href: "#testimonials",      label: "Testimonials"      },
    { href: "#flex_feature",      label: "Need Help Now?"    },
    { href: "#get_in_touch",      label: "Get in Touch"      },
  ],

  hero: {
    title:           "Licensed Electrical Contractors",
    breadcrumbLabel: "About Us",
    imageBg:
      "url(/images/IMG_9688-1024x682.jpg) no-repeat center center / cover",
    // TODO: Replace hero background with an O'Connor & Sons job site photo
    description: (
      <p>
        O&rsquo;Connor &amp; Sons Electric is a family-owned electrical
        contractor serving Palo Alto and the greater Silicon Valley area for
        over 30 years. European-trained, licensed, bonded, and insured — we
        handle commercial, residential, and remodeling work with the same
        standard of care on every job.
      </p>
    ),
  },

  learnMore: {
    title: "Electrical Work Done Right — Every Time",
    content: (
      <>
        <p>
          When you need electrical work done, you need someone who knows what
          they&rsquo;re looking at before they pick up a tool. O&rsquo;Connor
          &amp; Sons Electric has spent over 30 years building a reputation in
          the Palo Alto area on exactly that — deep expertise, honest
          communication, and work that passes inspection the first time.
        </p>

        <h5>Family-Owned for 30+ Years</h5>
        <p>
          Tom O&rsquo;Connor and his sons have been operating out of midtown
          Palo Alto since the early 1990s. We&rsquo;re not a franchise or a
          dispatch service — when you call us, you get us. We know this area,
          its homes, its commercial buildings, and the electrical challenges
          that come with both.
        </p>

        <h5>European-Trained Electricians</h5>
        <p>
          Tom completed 4+ years of formal European electrical trade school —
          a rigorous apprenticeship-based training program that goes well
          beyond the minimum required for licensure in California. That
          foundation shows in our diagnostic ability. We find root causes, not
          just symptoms.
        </p>

        <h5>Licensed, Bonded &amp; Insured</h5>
        <p>
          O&rsquo;Connor &amp; Sons holds California State License #513626,
          Class C10 (Electrical). All work is performed by licensed
          electricians. We pull permits when required and take full
          responsibility for the work we complete.
        </p>

        <h5>We Treat Your Home Like Our Own</h5>
        <p>
          We pay attention to every job, big or small. Whether it&rsquo;s a
          tripped outlet on a Friday evening or a full remodel rewire, we
          resolve your problems as quickly and cleanly as possible — and we
          don&rsquo;t leave until it&rsquo;s right.
        </p>
      </>
    ),
  },

  resources: {
    title: "Quick Links",
    resources: [
      { title: "Call Us — (650) 740-1121",        href: "tel:6507401121",   icon: "icon-message" },
      { title: "Email Us",                         href: "mailto:oconnorelectric@comcast.net", icon: "icon-mail" },
      { title: "Our Services",                     href: "/craft-catalog",   icon: "icon-link"    },
      { title: "Service Areas",                    href: "/service-areas",   icon: "icon-info"    },
      { title: "Frequently Asked Questions",       href: "/general-faqs",    icon: "icon-link"    },
    ],
  },

  crafts: {
    description: (
      <p>
        We handle the full range of residential, commercial, and remodeling
        electrical work throughout Palo Alto and the surrounding Peninsula
        communities. From troubleshooting a single tripped circuit to wiring a
        complete remodel — our licensed team gets it done right.
      </p>
    ),
    craftLinks: [
      { label: "Electrical Troubleshooting",       href: "/craft-catalog/electrical-troubleshooting"    },
      { label: "Panel & Subpanel Upgrades",        href: "/craft-catalog/panel-subpanel-upgrades"       },
      { label: "Residential Electrical",           href: "/craft-catalog/residential-electrical"        },
      { label: "Commercial Electrical",            href: "/craft-catalog/commercial-electrical"         },
      { label: "Remodeling & New Construction",    href: "/craft-catalog/remodeling-new-construction"   },
      { label: "Lighting Installation",            href: "/craft-catalog/lighting-installation"         },
      { label: "Outlet & Switch Repair",           href: "/craft-catalog/outlet-switch-repair"          },
      { label: "Smart Home Wiring",                href: "/craft-catalog/smart-home-wiring"             },
      { label: "EV Charger & Battery Systems",     href: "/craft-catalog/ev-charger-battery-systems"    },
    ],
  },

  testimonials: {
    videos: [],
    quote: {
      text:
        "I highly recommend O'Connor & Sons Electric. Tom O'Connor is deeply knowledgeable, efficient, and extremely good at troubleshooting. During my whole-house remodel, he identified dangerous wiring issues that other contractors had missed. He's the real deal.",
      name:     "Marta R.",
      position: "Palo Alto Homeowner",
    },
  },

  flexFeature: {
    imageSrc:    "/images/iStock-1220765707-443x559-1.jpg",
    // TODO: Replace with an O'Connor & Sons job site photo
    title:       "Electrical Problem Right Now?",
    body: (
      <p>
        Tom and the team respond fast — often the same day. Whether it&rsquo;s
        a tripped breaker, a dead outlet, or something more serious, call{" "}
        <strong>(650) 740-1121</strong> and we&rsquo;ll discuss your situation
        and get you on the schedule.
      </p>
    ),
    buttonLabel: "Call Now",
    buttonHref:  "tel:6507401121",
  },

  getInTouch: {
    body: (
      <p>
        Ready to schedule or have a question about your electrical project?
        Call us at <strong>(650) 740-1121</strong>, email us at{" "}
        <strong>oconnorelectric@comcast.net</strong>, or use our online contact
        form and we&rsquo;ll get back to you promptly.
      </p>
    ),
    buttonLabel: "Contact Us",
    buttonHref:  "/contact-us",
  },
};

export default oconnorSons;
