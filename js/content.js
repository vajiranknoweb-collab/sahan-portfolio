/**
 * Central content model for the Sahan Chathuranga Ranasinghe portfolio.
 * Update copy, metrics, links and image paths here — sections render from this object.
 */
window.SAHAN = {
  profile: {
    name: "Sahan Chathuranga Ranasinghe",
    shortName: "Sahan Ranasinghe",
    monogram: "SCR",
    roles: ["Engineer", "Inventor", "Entrepreneur"],
    location: "Galle, Sri Lanka",
    title: "Sahan Chathuranga Ranasinghe | Engineer, Inventor & Entrepreneur",
    description:
      "Sahan Chathuranga Ranasinghe is a Sri Lankan engineer, inventor and entrepreneur working across industrial automation, IoT, robotics, software and technology-driven ventures.",
    canonical: "./",
    portrait: {
      src: "assets/images/portrait/sahan.webp",
      alt: "Professional portrait of Sahan Chathuranga Ranasinghe in a black blazer and white shirt",
      placeholder: false
    }
  },

  seo: {
    ogImage: "assets/images/og-share.webp",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Sahan Chathuranga Ranasinghe",
      jobTitle: "Engineer, Inventor and Entrepreneur",
      description:
        "Sri Lankan engineer, inventor and entrepreneur working across industrial automation, IoT, robotics, software and technology-driven ventures.",
      url: "./",
      image: "assets/images/portrait/sahan.webp",
      email: "info@sanotaglobal.com",
      telephone: "+94-71-683-4335",
      address: {
        "@type": "PostalAddress",
        streetAddress: "441/2c Wakwella Road",
        addressLocality: "Galle",
        addressCountry: "LK"
      },
      alumniOf: [
        { "@type": "EducationalOrganization", name: "Richmond College, Galle" },
        { "@type": "CollegeOrUniversity", name: "University of Moratuwa" }
      ],
      worksFor: [
        { "@type": "Organization", name: "Sanota (Pvt) Ltd", url: "https://www.linkedin.com/company/sanotalk" },
        { "@type": "Organization", name: "Knoweb", url: "https://www.linkedin.com/company/knowebsolutions/" },
        { "@type": "Organization", name: "Crafted Leaves", url: "https://www.linkedin.com/company/crafted-leaves/" }
      ],
      sameAs: [
        "https://www.linkedin.com/in/sahanranasinghe",
        "https://smartdrain.network/meet-the-team"
      ]
    }
  },

  nav: [
    { id: "about", label: "About" },
    { id: "journey", label: "Journey" },
    { id: "ventures", label: "Ventures" },
    { id: "innovation", label: "Innovation" },
    { id: "recognition", label: "Recognition" },
    { id: "global", label: "Global" },
    { id: "contact", label: "Contact" }
  ],

  hero: {
    eyebrow: "Galle, Sri Lanka · Engineering & Ventures",
    name: "Sahan Chathuranga Ranasinghe",
    headline: "Engineer. Inventor. Entrepreneur.",
    supporting:
      "Building intelligent engineering solutions and ventures at the intersection of technology, automation, innovation and business.",
    /* Short supporting lines drawn from existing positioning / about / footer copy — not new claims */
    taglines: [
      "From Galle to a wider engineering stage.",
      "Find a real problem. Build a smarter solution. Make it useful at scale.",
      "Industrial automation, IoT, robotics, software and technology-driven ventures."
    ],
    affiliations: [
      { role: "Managing Director", org: "Sanota" },
      { role: "Technology Entrepreneur", org: "Knoweb" },
      { role: "Co-Founder", org: "Crafted Leaves" }
    ],
    ctas: [
      { href: "#journey", label: "Explore My Journey", variant: "primary" },
      { href: "#contact", label: "Let’s Connect", variant: "ghost" }
    ]
  },

  metrics: [
    { value: 15, suffix: "+", label: "Years Engineering" },
    { value: 250, suffix: "+", label: "Organizations" },
    { value: 10, suffix: "+", label: "Countries" },
    { value: null, suffix: "", label: "WIPO Global Award Team", text: "2025" }
  ],

  about: {
    kicker: "From Galle to Global",
    heading: "Engineering ideas into impact",
    paragraphs: [
      "Is a Sri Lankan engineer, inventor and entrepreneur whose work spans industrial automation, robotics, embedded systems, IoT, software and technology-driven businesses.",
      "Engineering journey began with a fascination for building things. As a student, represented Sri Lanka at international robotics competitions and won the Best Design Prize at the 2007 Micro Mouse competition at IIT Bombay. Later graduated in Electronic & Telecommunication Engineering from the University of Moratuwa and built a career around solving practical engineering problems.",
      "Leads and contributes to ventures across engineering, technology and international trade. Through Sanota, work covers industrial automation, custom machinery, IoT and smart manufacturing. Through Knoweb, digital and software solutions. Through Crafted Leaves, taking Sri Lankan products to international markets."
    ],
    close: "Find a real problem. Build a smarter solution. Make it useful at scale."
  },

  timeline: [
    {
      year: "2003",
      title: "Richmond College, Galle",
      body: "Darrel Medal, awarded as recognition for the best all-round A/L student, along with quiz achievements."
    },
    {
      year: "2004–09",
      title: "University of Moratuwa",
      body: "B.Sc. Engineering (Hons.) in Electronic & Telecommunication Engineering, followed by work across electronics, embedded systems, automation and industrial engineering."
    },
    {
      year: "2007",
      title: "IIT Bombay Techfest",
      body: "Micro Mouse robotics project; Best Design Prize."
    },
    {
      year: "2008",
      title: "International Robotics",
      body: "Represented Sri Lanka at Techfest events including Micro Mouse and Pixel."
    },
    {
      year: "2012",
      title: "Sanota development",
      body: "Sanota was selected for an Electronic and Electrical Technology Incubator Programme associated with the Ministry of Industry and Commerce, Central Bank and University of Moratuwa."
    },
    {
      year: "2013–",
      title: "Sanota engineering practice",
      body: "Engineering and technology business spanning automation, robotics, embedded systems, IoT and custom machinery, with an international manufacturing footprint."
    },
    {
      year: "2018–",
      title: "Knoweb",
      body: "Expansion into software, SaaS, web platforms and digital business systems for growing organisations."
    },
    {
      year: "2020",
      title: "Healthcare inventions",
      body: "Healthcare-oriented engineering inventions from the COVID-19 period, including inspection, telepresence, ICU-bed and ventilator concepts registered with the Sri Lanka Inventors Commission."
    },
    {
      year: "2021–",
      title: "Crafted Leaves",
      body: "Co-founded expansion into international trade around Ceylon tea, cinnamon, spices and other Sri Lankan products."
    },
    {
      year: "2025",
      title: "WIPO Global Award",
      body: "Was part of the Smart Drain team as IoT and Technology Partner; Smart Drain received a 2025 WIPO Global Award."
    },
    {
      year: "Today",
      title: "Multi-venture leadership",
      body: "Multi-venture engineering and technology leadership with an international footprint."
    }
  ],

  sanota: {
    id: "sanota",
    kicker: "Flagship venture",
    name: "Sanota",
    role: "Managing Director",
    headline: "Building machines that make industries smarter.",
    body: "Sanota is an engineering and technology business spanning industrial automation, robotics, embedded systems, IoT and machinery, with a manufacturing and engineering practice across more than ten countries, including the USA, Denmark, Japan, the UK and Singapore.",
    capabilities: [
      "Industrial Automation",
      "Robotics",
      "IoT Systems",
      "Embedded Engineering",
      "Custom Machinery",
      "Smart Manufacturing",
      "Agritech",
      "Waste Management"
    ],
    image: {
      src: "assets/images/sanota/workshop.webp",
      alt: "Custom industrial machinery on a Sanota workshop floor — steel frames, control cabinets and agritech line equipment",
      placeholder: false
    },
    links: [
      { label: "Sanota on LinkedIn", href: "https://www.linkedin.com/company/sanotalk" },
      { label: "IDB BizConnect listing", href: "https://bizconnect.idb.gov.lk/author/sahancr/" }
    ],
    process: {
      heading: "How an industrial problem becomes a working system",
      steps: [
        { icon: "understand", title: "Understand", body: "Sit with the plant, the operators and the constraint until the real industrial problem is clear." },
        { icon: "engineer", title: "Engineer", body: "Design the mechanical, electrical and control system around that constraint." },
        { icon: "build", title: "Build", body: "Prototype, iterate and manufacture the machine in working hardware." },
        { icon: "integrate", title: "Integrate", body: "Connect hardware, software, sensors and data so the system can run as one." },
        { icon: "scale", title: "Scale", body: "Commission it on the factory floor and support it in real operations." }
      ]
    }
  },

  agriculture: {
    kicker: "Featured project",
    headline: "From field to export.",
    title: "Smart Agriculture — food processing plant, Jaffna",
    summary:
      "A Sanota-built food-processing plant connected to a World Bank-backed agricultural initiative in Jaffna involving 500+ farmers and 500 acres across bananas and mangoes. The plant handles checking, grading, washing, drying and export-ready packaging.",
    metrics: [
      { value: 500, suffix: "+", label: "Farmers" },
      { value: 500, suffix: "", label: "Acres" },
      { value: null, text: "Process", label: "Food processing & grading" },
      { value: null, text: "World Bank", label: "Backed initiative" }
    ],
    detail: {
      heading: "A processing line built for export-ready produce",
      paragraphs: [
        "The plant is where fruit is checked, graded, washed, dried and packaged to export-ready standards — connecting field production with a consistent processing line.",
        "The work is in Jaffna, across bananas and mangoes, with World Bank backing and more than 500 farmers on 500 acres.",
        "The line is a practical bridge between smallholder production and export logistics — the same instinct that runs through Sanota’s wider manufacturing work: take a messy field problem and turn it into a repeatable industrial process."
      ],
      stages: ["Check", "Grade", "Wash", "Dry", "Pack"]
    },
    image: {
      src: "assets/images/agriculture/processing-line.webp",
      alt: "Food processing line in Jaffna — bananas and mangoes checked, graded, washed and packed for export",
      placeholder: false
    },
    cta: "View Project"
  },

  smartDrain: {
    id: "innovation",
    kicker: "Featured innovation",
    headline: "Technology for climate-resilient cities.",
    role: "IoT and Technology Partner",
    org: "Smart Drain / Urban Inventors",
    summary:
      "Is Smart Drain’s IoT and Technology Partner. Smart Drain is an urban-flood-management solution developed by Urban Inventors. Was part of the Smart Drain team recognized with a 2025 WIPO Global Award.",
    recognition: "WIPO Global Awards 2025 — team recognition",
    points: [
      "Urban flood-management solution developed by Urban Inventors.",
      "Designed to keep water moving even when drains are clogged with debris.",
      "Integrating real-time monitoring and data-driven intelligence."
    ],
    image: {
      src: "assets/images/smart-drain/channel.webp",
      alt: "Urban flood channel with a debris screen and an IoT sensing node on the channel wall",
      placeholder: false
    },
    links: [
      { label: "Meet the Smart Drain team", href: "https://smartdrain.network/meet-the-team" },
      {
        label: "WIPO Global Awards reporting",
        href: "https://asianmirror.lk/news/sri-lankas-smart-drain-by-urban-inventors-among-ten-winners-at-prestigious-wipo-global-awards-2025/"
      }
    ]
  },

  covid: {
    kicker: "COVID-19 period",
    heading: "Engineering under pressure.",
    intro:
      "Healthcare-oriented engineering inventions from the COVID-19 period, including work registered with the Sri Lanka Inventors Commission.",
    projects: [
      {
        title: "Patient Inspection Chamber",
        year: "2020",
        body: "A chamber designed for remote communication, monitoring, sample handling and disinfection so clinicians could inspect patients with less direct exposure.",
        credit: "Developed by Sahan C. Ranasinghe.",
        image: {
          src: "assets/images/covid/inspection-chamber.webp",
          alt: "Patient Inspection Chamber prototype — acrylic booth with glove ports for remote monitoring and sample handling",
          placeholder: false
        }
      },
      {
        title: "Semi-Automated Telepresence Robot",
        year: "2020",
        body: "A semi-automated robot for transporting supplies and supporting remote patient interaction when wards needed distance.",
        credit: "Developed with a small engineering team including Sahan C. Ranasinghe.",
        image: {
          src: "assets/images/covid/telepresence.webp",
          alt: "Semi-automated telepresence robot prototype on a workshop floor — wheeled chassis with a screen mount and supply tray",
          placeholder: false
        }
      },
      {
        title: "Smart ICU Bed",
        year: "2020",
        body: "A rapid-deployment ICU bed concept with electrical and manual operation plus remote patient monitoring for emergency fabrication.",
        credit: "Built for emergency fabrication of ICU beds.",
        image: {
          src: "assets/images/covid/icu-bed.webp",
          alt: "Rapid-deployment ICU bed prototype with a welded frame, actuator and hanging control box",
          placeholder: false
        }
      },
      {
        title: "Open-Source Ventilator",
        year: "2020",
        body: "Low-cost ventilator developed with an engineering team during the shortage period.",
        credit: "Collaborative work with an engineering team.",
        image: {
          src: "assets/images/covid/ventilator.webp",
          alt: "Low-cost open-source ventilator prototype on a workbench — bag compressor, tubing and control board",
          placeholder: false
        }
      }
    ]
  },

  ventures: [
    {
      name: "Sanota",
      role: "Managing Director",
      headline: "Building machines that make industries smarter.",
      body: "Industrial automation, robotics, IoT, embedded engineering and custom machinery for factories that need to work smarter.",
      capabilities: [
        "Industrial Automation",
        "Robotics",
        "IoT Systems",
        "Embedded Engineering",
        "Custom Machinery",
        "Smart Manufacturing",
        "Agritech",
        "Waste Management"
      ],
      href: "https://www.linkedin.com/company/sanotalk",
      image: {
        src: "assets/images/ventures/sanota.webp",
        alt: "Sanota factory floor — custom industrial machines being commissioned among control cabinets and cable trays",
        placeholder: false
      }
    },
    {
      name: "Knoweb",
      role: "Technology Entrepreneur",
      headline: "Digital solutions for growing businesses.",
      body: "Software, SaaS, web platforms and business systems for organisations that need digital tools to grow — the software counterpart to Sanota’s machines.",
      capabilities: ["Software", "SaaS", "Web", "Business Systems"],
      href: "https://www.linkedin.com/company/knowebsolutions/",
      image: {
        src: "assets/images/ventures/knoweb.webp",
        alt: "Knoweb software studio — desks, monitors and tropical window light in a small Sri Lankan office",
        placeholder: false
      }
    },
    {
      name: "Crafted Leaves",
      role: "Co-Founder",
      headline: "Taking Sri Lankan heritage to global markets.",
      body: "Ceylon tea, cinnamon and spices taken from Sri Lankan producers into international markets.",
      capabilities: ["Ceylon Tea", "Cinnamon", "Spices", "Sri Lankan Products"],
      href: "https://www.linkedin.com/company/crafted-leaves/",
      image: {
        src: "assets/images/ventures/crafted-leaves.webp",
        alt: "Crafted Leaves packing table — Ceylon tea leaves, cinnamon quills and spices ready for export",
        placeholder: false
      }
    }
  ],

  recognition: {
    heading: "Selected recognition.",
    intro:
      "From Richmond College and IIT Bombay through to the Smart Drain team’s 2025 WIPO Global Award.",
    image: {
      src: "assets/images/awards/recognition.webp",
      alt: "Awards-hall atmosphere — a simple metal trophy on a lit stage",
      placeholder: false
    }
  },

  awards: [
    {
      year: "2025",
      title: "WIPO Global Award",
      org: "Smart Drain / Urban Inventors",
      detail: "IoT & Technology Partner. Was part of the Smart Drain team recognized with the award — not a personal solo win."
    },
    {
      year: "2007",
      title: "Best Design Award",
      org: "Techfest 2007",
      detail: "International Micro Mouse Competition, IIT Bombay."
    },
    {
      year: "2008",
      title: "Sri Lanka Representative",
      org: "Techfest 2008",
      detail: "Micro Mouse and Pixel events."
    },
    {
      year: "2003",
      title: "Darrel Medal",
      org: "Richmond College",
      detail: "Recognition for the best all-round A/L student."
    }
  ],

  education: [
    {
      school: "Richmond College, Galle",
      year: "2003",
      program: "A/L — Mathematics, Chemistry and Physics",
      detail:
        "3 A passes, Island Rank 52, District Rank 3 and the Darrel Medal in 2003."
    },
    {
      school: "University of Moratuwa",
      year: "2004–09",
      program: "B.Sc. Engineering (Hons.) — Electronic & Telecommunication Engineering",
      detail: "Degree programme that underpins later work in electronics, embedded systems, automation and industrial engineering."
    }
  ],

  globalFootprint: {
    heading: "Built in Sri Lanka. Designed for the world.",
    intro:
      "Sanota’s work reaches 10+ countries, including the USA, Denmark, Japan, the UK and Singapore. That footprint sits alongside Crafted Leaves’ international trade activity and Smart Drain’s international recognition.",
    origin: {
      id: "lk",
      name: "Sri Lanka",
      city: "Galle",
      lat: 6.0,
      lng: 80.2,
      labelDx: 18,
      labelDy: -10,
      note: "Home base for engineering, invention and ventures."
    },
    places: [
      { id: "us", name: "USA", lat: 39.8, lng: -98.6, labelDx: 16, labelDy: -10, note: "Part of Sanota’s international work." },
      { id: "dk", name: "Denmark", lat: 56.0, lng: 10.0, labelDx: 16, labelDy: -16, note: "Part of Sanota’s international work." },
      { id: "uk", name: "United Kingdom", lat: 52.5, lng: -1.5, labelDx: -132, labelDy: 22, note: "Part of Sanota’s international work." },
      { id: "sg", name: "Singapore", lat: 1.3, lng: 103.8, labelDx: 16, labelDy: 18, note: "Part of Sanota’s international work." },
      { id: "jp", name: "Japan", lat: 36.2, lng: 138.3, labelDx: -58, labelDy: -12, note: "Part of Sanota’s international work." }
    ]
  },

  mindset: {
    heading: "The question is simple: Can this be smarter?",
    subjects: ["A machine.", "A factory.", "A city.", "A business.", "A supply chain."],
    body: "A practical approach to innovation: identify a real problem, engineer a useful solution and build it for real-world deployment."
  },

  community: {
    heading: "Building more than companies.",
    body: "Connected with the Southern Innovation Hub and with strengthening innovation and entrepreneurship in Southern Sri Lanka.",
    beyond: {
      heading: "Curiosity, competitions, community",
      items: [
        "Student leadership, including Buddhist Society activity at Richmond College.",
        "Rural educational seminars and charity work supporting communities in Southern Sri Lanka.",
        "Quiz competition achievements alongside the Darrel Medal years at Richmond College."
      ]
    },
    link: { label: "Southern Innovation Hub", href: "https://www.southerninnovationhub.lk/" }
  },

  contact: {
    kicker: "Next",
    heading: "Let’s build what’s next.",
    body: "Whether it’s an engineering challenge, a technology idea, a business opportunity or a partnership with potential for impact — always interested in exploring what can be built.",
    cta: "Start a conversation",
    email: "info@sanotaglobal.com",
    phone: "+94-71-683-4335",
    address: "441/2c Wakwella Road, Galle, Sri Lanka",
    linkedin: "https://www.linkedin.com/in/sahanranasinghe",
    linkedinLabel: "linkedin.com/in/sahanranasinghe",
    formNote: "Messages are sent as an email to Sanota’s contact address.",
    form: {
      name: { label: "Name", placeholder: "Your name" },
      email: { label: "Email", placeholder: "you@yourcompany.com" },
      subject: { label: "Subject", placeholder: "What are you exploring?" },
      message: {
        label: "Message",
        placeholder: "Tell Sahan about the engineering problem, idea or partnership."
      },
      subjects: [
        "Engineering challenge",
        "Technology idea",
        "Business opportunity",
        "Partnership"
      ]
    }
  },

  footer: {
    note: "Engineer. Inventor. Entrepreneur. — From Galle to a wider engineering stage.",
    copyright: "© 2026 Sahan Chathuranga Ranasinghe"
  }
};
