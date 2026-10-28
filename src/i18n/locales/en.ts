import type { Dictionary } from "../types";

export default {
  meta: {
    home: {
      title: "Jorge Osvaldo Perez Mendoza | Portfolio & CV",
      description: "Licensed Software Development Engineer with {years}+ years of experience delivering high-performance backend systems, web APIs, and enterprise cloud solutions.",
    },
    projects: {
      title: "Projects | Jorge Osvaldo Perez Mendoza",
      description: "Explore my featured projects, from AI-powered mobile apps to community platforms.",
    },
    landing: {
      title: "GCatcode | Custom technology solutions",
      description: "We build custom websites, mobile apps and desktop systems for your business. Deliveries every {cycleWeeks} weeks, you pay for results, and the first meeting is free, online or in person in Zapopan and Guadalajara.",
    },
    terms: {
      title: "Terms and Conditions | GCatcode",
      description: "Terms and conditions for GCatcode services: VAT-inclusive pricing, cycle-based development, {warrantyDays}-day warranty and governing law.",
    },
    privacy: {
      title: "Privacy Notice | GCatcode",
      description: "GCatcode's comprehensive privacy notice: what personal data we collect, what we use it for and how to exercise your ARCO rights.",
    },
  },
  nav: {
    home: "Home",
    projects: "Projects",
    switchLanguage: "Change language",
    mainNav: "Main navigation",
    brandHome: "GCatcode, go to home page",
    services: "Services",
    method: "Method",
    caseStudy: "Case studies",
    about: "About me",
    faq: "FAQ",
    contactCta: "Free meeting",
  },
  hero: {
    avatarAlt: "GCatCode Logo - Jorge Osvaldo Perez Mendoza",
    greeting: "Hello, I'm",
    headline: "Software Development Engineer | Backend .NET Developer",
    summary: {
      lead: "Licensed Software Development Engineer with {years}+ years of experience delivering high-performance backend systems, web APIs, and enterprise cloud solutions. Proactive, self-directed learner adept at leveraging",
      highlight: "AI Engineering and LLM-assisted workflows",
      trail: "across the entire Software Development Life Cycle (SDLC).",
    },
    viewExperience: "View Experience",
    contact: "Contact Me",
  },
  sections: {
    experience: "Work Experience",
    featuredProjects: "Featured Projects & Leadership",
    education: "Education & Credentials",
    skills: "Technical Skills",
  },
  experience: {
    resser: {
      role: "Middle Backend Developer",
      bullets: [
        "Architected and delivered robust RESTful Web APIs using C# and .NET Core 8, supporting critical fleet management and telemetry services.",
        "Implemented automated background processing and reporting pipelines leveraging Azure Functions and Azure Cloud services, improving operational data delivery speed.",
        "Managed relational database structures in SQL Server, writing complex T-SQL queries and stored procedures to enhance backend query execution times.",
        "Led Sprint deliverables and continuous integration workflows via Azure DevOps and Git, establishing rigorous code review and QA testing standards that decreased production bug rates.",
      ],
    },
    jabil: {
      role: "Programmer Analyst I",
      bullets: [
        "Designed, developed, and maintained enterprise web applications and internal backend APIs utilizing .NET Framework (C#) and Microsoft SQL Server.",
        "Collaborated with manufacturing operations teams to support data flows, reporting, and interface integrations with Manufacturing Execution Systems (MES) and SAP.",
        "Authored comprehensive technical architecture documentation, API specifications, and end-user training guides to streamline cross-team onboarding and compliance.",
        "Conducted systematic functional and regression testing, identifying bottlenecks and preventing system anomalies across manufacturing execution systems.",
        "Collaborated with international cross-functional engineering teams in agile environments to deploy feature updates on IIS servers.",
      ],
    },
    talentNetwork: {
      role: "General Incident Leader",
      bullets: [
        "Directed incident response, crisis resolution, and customer service operations for Latin America's largest tech innovation convention with 40,000+ attendees.",
        "Coordinated multidisciplinary support teams under high-pressure scenarios, ensuring adherence to data privacy standards and rapid resolution protocols.",
      ],
    },
  },
  projects: {
    petMePhone: {
      description: "AI-Powered Mobile App. Built an Android task overlay application applying the full AI Engineering lifecycle (requirements synthesis, asset generation, code architecture, testing, and policy compliance).",
      tags: ["Android", "AI", "Mobile"],
    },
    jalapenoLab: {
      description: "Jalapeño Store. A collective designed to give Latin American board games the showcase they deserve, boosting the local industry by connecting authors, stores, and players. Acting as Event Manager and Coordinator.",
      tags: ["Event Management", "Community Building", "Board Games"],
    },
    juegalajara: {
      description: "Platform & Community. Lead developer and manager of the Juegalajara website. Organizing committee member in charge of community operations, as well as coordinating and managing social events.",
      tags: ["Frontend", "Community", "Event Management"],
    },
    creepyBoardDay: {
      description: "Event Site & Game Manual. Built the site for Juegalajara's Halloween event and the manual for the hidden-role game created for that night, with WhatsApp booking, a live schedule and a role finder.",
      tags: ["Astro", "Events", "Board Games"],
    },
    gcatcode: {
      description: "Web Platforms & Portfolio. Built responsive web platforms using Astro, Tailwind CSS, and TypeScript, achieving high-performance Lighthouse metrics.",
      tags: ["Astro", "Tailwind CSS", "TypeScript"],
    },
  },
  projectsPage: {
    heading: "Featured Projects",
    intro: "A collection of my recent work spanning AI engineering, web development, and community platforms.",
    moreProjects: "More projects",
  },
  education: {
    graduatedLabel: "Graduated",
    licenseLabel: "Mexican Federal Professional License",
    entries: {
      ceti: {
        degree: "Bachelor of Science in Software Development Engineering",
        degreeAlt: "Licenciatura en Ingeniería en Desarrollo de Software",
      },
      udg: {
        degree: "Professional Technician in Computer Science",
        degreeAlt: "Técnico Profesional en Informática",
      },
    },
  },
  skills: {
    categories: {
      backend: "Backend & Core",
      ai: "AI Engineering & Methodologies",
      databases: "Databases & Enterprise",
      cloud: "Cloud & DevOps",
      frontend: "Frontend & Modern Web",
      testing: "Testing & Quality",
    },
    terms: {
      dependencyInjection: "Dependency Injection",
      restfulApis: "RESTful APIs",
      oop: "OOP",
      designPatterns: "Design Patterns",
      aiSdlc: "AI-Augmented SDLC",
      promptEngineering: "Prompt & Harness Engineering",
      rapidPrototyping: "Rapid Prototyping",
      agile: "Scrum / Agile",
      selfLearning: "Continuous Self-Learning",
      storedProcedures: "Stored Procedures",
      queryOptimization: "Query Optimization",
      mesSap: "MES & SAP Basics",
      qaIncidentPrevention: "QA & Incident Prevention",
      technicalDocumentation: "Technical Documentation",
    },
  },
  landing: {
    whatsappMessages: {
      general: "Hi, GCatcode. I'm interested in optimizing my business with technology and would like to talk about my case.",
      freeCall: "Hi, GCatcode. I'd like to book the free {minutes}-minute meeting to talk about my business.",
      advisory: "Hi, GCatcode. I'm interested in the hourly technical advisory. Could you give me more information?",
    },
    newTabNote: "(opens WhatsApp in a new tab)",
    hero: {
      eyebrow: "Custom technology solutions",
      title: "Your business should grow, not get stuck on repetitive tasks.",
      subtitle: "We build the technology you need to make the most of your time. Forget complicated, expensive software: at GCatcode we design digital solutions tailored to you, step by step, with results from the very first delivery.",
      primaryCta: "I want to optimize my business",
      secondaryCta: "Book your free meeting",
      note: "First meeting free and with no commitment, up to {minutes} minutes, online or in person in Zapopan and Guadalajara.",
    },
    problem: {
      title: "Sound familiar?",
      intro: "Many small businesses lose hours every week for the same reasons:",
      items: [
        {
          title: "Repetitive manual tasks",
          text: "Data entry, reports and follow-ups you do by hand over and over, taking time away from what matters.",
        },
        {
          title: "Scattered information",
          text: "Data spread across spreadsheets, WhatsApp chats and notes, hard to find when you need it most.",
        },
        {
          title: "Software that is expensive or doesn't fit",
          text: "Tools you pay for every month that don't adapt to the way your business works.",
        },
      ],
    },
    services: {
      title: "What we do for your business",
      intro: "Digital solutions designed around the way you work, without unnecessary jargon.",
      items: {
        web: {
          title: "Websites and web platforms",
          text: "From a website that presents your business to platforms with an admin panel to manage your operations. Informational websites from ${staticFrom} MXN, VAT (IVA) included.",
        },
        mobile: {
          title: "Mobile apps",
          text: "Apps that put information and tools at your fingertips, and at those of your team or your customers.",
        },
        desktop: {
          title: "Custom desktop systems",
          text: "Programs for your computer that automate internal processes and fit the way you operate.",
        },
        advisory: {
          title: "Advisory and training",
          text: "We help you choose, set up and get the most out of existing technology, and we train your team to use it.",
        },
      },
    },
    method: {
      title: "A method designed for your peace of mind and your budget.",
      intro: "We don't sell you a huge, uncertain project. We work in short, clear cycles so you see results quickly and stay in control of your investment.",
      points: {
        cycles: {
          title: "Fast deliveries ({cycleWeeks}-week cycles)",
          text: "We work in fixed periods of {cycleDays} business days; you get steady progress without waiting months.",
        },
        results: {
          title: "You pay for results, not hours",
          text: "You pay per module, and each one is delivered working, ready to use in your business (web, mobile or desktop).",
        },
        flexibility: {
          title: "Full flexibility",
          text: "Got a new idea? If we haven't started a module yet, we change it: we only adjust its quote, with no fee for the change.",
        },
      },
    },
    trust: {
      title: "Your information and your business are safe.",
      intro: "We use Artificial Intelligence to develop faster and reduce costs, but quality and security are guaranteed by human expertise.",
      privacy: {
        title: "We take care of your data",
        text: "We work in secure environments and handle your information in accordance with our",
        linkLabel: "privacy notice",
      },
      review: {
        title: "Always human review",
        text: "Every detail of your project is reviewed and approved before it is delivered to you.",
      },
      warranty: {
        title: "{warrantyDays}-day warranty",
        text: "We fix any defect in what we delivered at no cost during the {warrantyDays} days after delivery.",
        linkLabel: "Read the terms",
      },
    },
    about: {
      title: "About me",
      avatarAlt: "GCatcode logo",
      intro: "I'm Jorge Osvaldo Perez Mendoza, a licensed Software Development Engineer. For more than {years} years I have been helping companies solve complex problems with technology.",
      missionLabel: "My mission",
      mission: "To turn your daily headaches into platforms, apps or systems that simply work.",
      cvLink: "View my CV",
    },
    freeCall: {
      title: "Not sure where to start? Let's talk.",
      text: "Sometimes the biggest obstacle is not knowing what technology your business needs. Book a free, no-commitment meeting of up to {minutes} minutes, online or in person in Zapopan and Guadalajara: we listen to your problem and point you toward the ideal technology solution, in plain language.",
      badge: "Free",
      details: [
        "Up to {minutes} minutes",
        "Video call or in person in Zapopan and Guadalajara",
        "No commitment",
      ],
      cta: "Book my free meeting",
      advisory: {
        title: "Advisory, training and technical support",
        pricePrefix: "From",
        price: "${rate} MXN",
        unit: "per hour",
        taxNote: "VAT (IVA) included",
        intro: "For when you need specific help without starting a project:",
        examples: [
          "Learning how to use a platform or tool that already exists on the market.",
          "Training your team of up to {attendees} people on your business's digital tools.",
          "Solving general technical problems with the software you already use.",
        ],
        scopeNote: "Rate for sessions of up to {attendees} people on widely used platforms. For larger groups or enterprise systems, we send you a written quote before we start.",
        cta: "Request advisory",
      },
    },
    faq: {
      title: "Frequently asked questions",
      items: {
        freeCall: {
          question: "Does the first meeting cost anything?",
          answer: "No. The first meeting is free and with no commitment, and it lasts up to {minutes} minutes.",
        },
        inPerson: {
          question: "Do you meet in person?",
          answer: "Yes, in Zapopan and Guadalajara, with no travel charge. In other locations, we quote the session with travel expenses included. We also meet online by video call.",
        },
        websitePrice: {
          question: "How much does an informational website cost?",
          answer: "From ${staticFrom} MXN, VAT (IVA) included, with a landing page, an “About” section, terms and conditions and a catalog of products or services, built for mobile and desktop, with basic SEO. Each additional page costs ${rate} MXN. It starts with a {staticDeposit}% deposit, and the balance is paid before publishing.",
        },
        advisoryPrice: {
          question: "How much does the advisory cost?",
          answer: "Advisory, training and technical support start at ${rate} MXN per hour, VAT (IVA) included. That base rate applies to sessions of up to {attendees} people on widely used platforms. For larger groups or enterprise or specialized systems, we send you a written quote before we start.",
        },
        projectPayment: {
          question: "How is a project paid?",
          answer: "Per module, not per hour. The first module starts with a {deposit}% deposit and is paid off on delivery; the following ones are paid before they start. Each module is delivered working, in {cycleWeeks}-week cycles ({cycleDays} business days).",
        },
        warranty: {
          question: "What does the warranty cover?",
          answer: "During the {warrantyDays} days after each development module is delivered, we fix defects in what we delivered at no cost. It does not cover new features, scope changes, failures caused by third-party modifications or changes to third-party platforms.",
        },
        ai: {
          question: "Do you use AI with my data?",
          answer: "We use Artificial Intelligence to develop faster, but everything goes through human review before it is delivered to you. Your data is handled in accordance with our privacy notice.",
        },
      },
      termsLink: "Read the terms and conditions",
      privacyLink: "Read the privacy notice",
    },
    finalCta: {
      title: "Ready to leave repetitive tasks behind?",
      text: "Tell us what is eating up your business's time and we'll tell you how we can help.",
      cta: "Message us on WhatsApp",
      emailLabel: "Prefer email? Write to us at",
    },
    images: {
      hero: "Smiling shop owner giving a thumbs up behind the counter of his store",
      problem: "Desk covered in piles of paper and folders",
      services: "Smiling business owner checking out a customer at a point-of-sale terminal",
      method: "Two people plan a project with sticky notes on a glass wall",
    },
    photoCredits: { lead: "Photos by", on: "on" },
  },
  notFound: {
    title: "Page not found | GCatcode",
    description: "The page you are looking for does not exist or has moved.",
    heading: "This page does not exist",
    text: "The link may be mistyped, or the page may have moved. From here you can head back to the site.",
    homeCta: "Go to the home page",
    cvCta: "See the CV",
    otherLanguage: "Ver el sitio en español",
    brandHome: "GCatcode, go to the home page",
  },
  caseStudies: {
    juegalajara: {
      eyebrow: "Case study",
      title: "Juegalajara: Guadalajara's board game community, all in one place",
      intro: "We built Juegalajara's web platform from start to finish. We also know the community from the inside: we take part in coordinating it, with events, digital outreach and alliances with the state and other partners.",
      challengeLabel: "The challenge",
      challenge: "Community information (events, partner venues and game groups) was scattered across chats and social media, making it hard to know what was being played, when and where.",
      solutionLabel: "What we built",
      solution: "A bilingual web platform (Spanish and English) that brings everything together in one place:",
      features: [
        "Admin panel with login to manage events, partner venues and groups.",
        "Recurring events, without entering them over and over.",
        "Option to share a day's schedule as an image.",
        "Separate staging and production environments to publish changes safely.",
      ],
      resultLabel: "The result",
      result: "The community has a clear, up-to-date point of reference, and the organizing team manages the information from a single panel instead of relying on scattered messages.",
      stackLabel: "Technologies",
      linkLabel: "Visit juegalajara.mx",
      images: {
        desktop: "The juegalajara.mx home page on a computer",
        mobile: "The juegalajara.mx home page on a phone",
      },
    },
    creepyBoardDay: {
      eyebrow: "Case study",
      title: "Creepy BoardDay: a Halloween board game night, from the invitation to the game manual",
      intro: "We built the site for Juegalajara's Halloween event at Leyendas Music Club and the manual for the hidden-role game created for that night.",
      challengeLabel: "The challenge",
      challenge: "The event needed one place with the date, venue, price, schedule and how to book. It also needed an exclusive game whose rules and roles players could look up on their phones during the night.",
      solutionLabel: "What we built",
      solution: "A fast static site, with all its content in a single data file that is validated at build time:",
      features: [
        "Direct booking through WhatsApp and Instagram, with a countdown and a schedule that highlights what is happening in real time.",
        "A player manual with a role finder and FAQ, reached through the QR code on the envelope.",
        "Cards, icons and the QR code generated in code from the same data.",
        "Structured data for search engines, optimized images and accessible navigation that works without JavaScript.",
      ],
      resultLabel: "The result",
      result: "Attendees have all the event information and the game rules behind a single link, from the invitation to the final count.",
      stackLabel: "Technologies",
      linkLabel: "Visit creepyboardday.web.app",
      images: {
        desktop: "The creepyboardday.web.app home page on a computer",
        mobile: "The creepyboardday.web.app home page on a phone",
      },
    },
  },
  legal: {
    updatedLabel: "Last updated:",
    updatedDate: "October 28, 2026",
    prevailNote: "This is an English translation of the Spanish original. In case of any discrepancy between versions, the Spanish version prevails.",
    backHome: "Back to home",
    terms: {
      heading: "Terms and Conditions",
      intro: "These terms and conditions govern the hiring of the services offered under the {brand} brand. By requesting or hiring any of our services, you accept these terms.",
      sections: [
        {
          title: "Provider identification",
          blocks: [
            "{brand} services are provided by {name}, based in {location}.",
            "Email: {email}. Phone and WhatsApp: {phone}.",
          ],
        },
        {
          title: "Services",
          blocks: [
            "{brand} offers the following services:",
            [
              "Initial discovery meeting, free and with no commitment.",
              "Technical advisory, training and general technical support, including guidance on using existing platforms and tools on the market.",
              "Custom solution development: websites and web platforms, mobile apps and desktop systems.",
              "Static websites: informational sites with no backend or database.",
            ],
          ],
        },
        {
          title: "Prices",
          blocks: [
            "All prices are expressed in Mexican pesos (MXN) and include Value Added Tax (IVA).",
            [
              "Initial meeting: free, lasting up to {minutes} minutes, by video call or in person in Zapopan and Guadalajara, Jalisco.",
              "Advisory, training and technical support: from ${rate} MXN per hour, VAT (IVA) included, according to the scope described in the next section.",
              "Custom development: quoted per module, as described in the “Custom development” section.",
              "Static websites: from ${staticFrom} MXN, VAT (IVA) included; quoted per activity, as described in the “Static websites” section.",
            ],
          ],
        },
        {
          title: "Scope of advisory, training and technical support",
          blocks: [
            "The base rate of ${rate} MXN per hour, VAT (IVA) included, applies to sessions of up to {attendees} people on widely used platforms and tools on the market, such as office suites, design tools or online sales platforms.",
            "The following cases are not covered by the base rate and are quoted in writing before starting:",
            [
              "Sessions with more than {attendees} people.",
              "Enterprise or specialized systems, or systems custom-built by third parties, that require prior study on our part.",
            ],
            "The quote states the total price, VAT (IVA) included, and may include the time needed to study the system and prepare the material. The service starts only once you accept the quote.",
            "If you are unsure whether your case is covered by the base rate, we will confirm it before scheduling the session.",
          ],
        },
        {
          title: "Session payment, rescheduling and cancellation",
          blocks: [
            "To confirm an advisory, training or technical support session, you pay a deposit of {deposit}% of its total cost. The rest is paid when the session ends.",
            "Each session lasts at least 1 hour and is charged in full hours. For time beyond the last full hour:",
            [
              "Up to {graceMinutes} minutes are not charged.",
              "More than {graceMinutes} minutes are charged as an additional hour.",
            ],
            "That {graceMinutes}-minute margin is reserved between scheduled sessions to cover delays on the client's side or technical ones.",
            "Rescheduling {noticeHours} hours or more in advance: free of charge, up to {maxEarlyReschedules} times per session. If you need to reschedule more times, you may cancel with a full refund.",
            "Rescheduling less than {noticeHours} hours in advance:",
            [
              "The deposit paid is applied to the new date.",
              "To reschedule, the amount paid must reach {lateTopUp}% of the session's total cost. If it already does, you pay nothing additional. This payment is deducted from the session total.",
              "Allowed up to {maxLateReschedules} times per session. An additional request is treated as a cancellation less than {noticeHours} hours in advance.",
            ],
            "The new date cannot be more than one month after the session's original date. If we do not accept the new date, you may choose another one within that period or cancel: with no penalty if no previous rescheduling was made less than {noticeHours} hours in advance; otherwise, the deposit is retained.",
            "Cancellation:",
            [
              "{noticeHours} hours or more in advance: we refund everything paid.",
              "Less than {noticeHours} hours in advance: we retain the deposit of {deposit}% of the session's total cost and refund the rest of what was paid.",
            ],
            "If you do not show up for the session, you have {noShowDays} business days from its date to reschedule it, under the conditions of a rescheduling less than {noticeHours} hours in advance. If you do not reschedule within that period, the session is cancelled and the deposit is retained.",
            "If we cancel or reschedule a session for reasons attributable to us, including technical failures on our side, you may choose a new date at no cost or a full refund. That rescheduling does not count toward the limits above.",
          ],
        },
        {
          title: "In-person sessions",
          blocks: [
            "In-person sessions in Zapopan and Guadalajara, Jalisco, have the same rate as online sessions. Travel is not charged and does not count as session time.",
            "In-person sessions in other locations are quoted in writing before scheduling, with travel expenses included in the total price.",
          ],
        },
        {
          title: "Recordings and training material",
          blocks: [
            [
              "You may record a session if you tell us before it starts. The recording is for the personal use of the attendees only.",
              "The material we provide, such as guides and presentations, is for the internal use of the session's attendees.",
              "Recordings and material may not be distributed, published or resold, nor used to train other people. To train more people, request a quote.",
              "The material remains our work: by receiving it you get permission to use it, not ownership of it.",
            ],
          ],
        },
        {
          title: "Custom development",
          blocks: [
            [
              "Custom projects are organized in modules and developed in {cycleWeeks}-week cycles ({cycleDays} business days). A module may take one or more cycles.",
              "At the close of each module we deliver a working release: its source code and, if you request it, its deployment to a server.",
              "Payment is per quoted module, not per hour worked.",
            ],
            "Payments:",
            [
              "First module: starts with a {deposit}% deposit, and the rest is paid no later than its delivery. The module is handed over once it is paid in full, and the deposit is non-refundable if the rest is not paid.",
              "Following modules: paid in full before their development starts.",
            ],
            "The plan for future modules is an estimate and may change until each module is paid. A module's price is fixed when it is paid.",
            "Any module that has not been started can be changed, regardless of the cycle it is planned for:",
            [
              "A change is handled by re-quoting the module. Once the first module is paid, re-quoting changes has no cost.",
              "If a change technically affects other modules not yet started, those modules are re-quoted as well.",
              "If a re-quoted module was already paid, the difference becomes a credit, applied to the following modules, or a balance due, paid before that module starts.",
              "A module in development is not modified. Changes you request to it are quoted as a new module after its delivery.",
            ],
          ],
        },
        {
          title: "Static websites",
          blocks: [
            "A static website is an informational site with no backend or database, such as a landing page, an “About” section, terms and conditions or a catalog of products or services. This section applies only to static websites; systems with a frontend, backend and database are governed by the “Custom development” section.",
            "Prices:",
            [
              "They are quoted per activity (analysis, design, development and testing) at the rate of ${rate} MXN per hour, VAT (IVA) included. Development includes basic SEO and the optimization of graphic assets.",
              "Each additional informational page costs ${rate} MXN, VAT (IVA) included.",
              "Current promotions are governed by the “Promotions” section.",
            ],
            "Payments:",
            [
              "The project starts with a deposit of {staticDeposit}% of the total. For projects over ${staticMinDepositFrom} MXN, the minimum deposit is ${staticMinDeposit} MXN, and you may pay more if you wish.",
              "The balance is paid before the site is published on your server.",
              "By paying the deposit, you accept the development and the prices in the quote.",
            ],
            "Delivery:",
            [
              "You provide the graphic material and business information the site requires.",
              "Development takes at least 1 week. It may be extended with prior notice and depends on how long you take to send us the requested material.",
              "Progress is published on {brand} servers for your review.",
              "Once the project is paid in full, we publish the site on the server of your choice and deliver the compiled site.",
            ],
            "Source code:",
            [
              "{brand} keeps the source code and its ownership. This lets us support you with future changes, which cost ${rate} MXN per hour, VAT (IVA) included.",
              "If you prefer to work with another provider, releasing the source code is quoted separately.",
            ],
          ],
        },
        {
          title: "Promotions",
          blocks: [
            "Promotions are not permanent. Each promotion states in its quote or its announcement who it is for, its validity period and its conditions.",
            [
              "A promotion applies only to projects hired, by paying the deposit, during its validity period.",
              "The quote shows the project's real value and the promotion's discount.",
              "Once the validity period ends, new projects are quoted at the prices in these terms.",
              "These terms apply to everything the promotion does not state.",
            ],
          ],
        },
        {
          title: "Project pause and cancellation",
          blocks: [
            "You may pause or cancel a project at any time. In both cases we refund in full the paid modules that have not been started and any credit balance.",
            "If a module is in development:",
            [
              "The pause or cancellation takes effect when that module closes: we finish it and deliver it working.",
              "If you request in writing to stop it immediately, we deliver its code as it stands and refund the part proportional to that module's cycles that have not been worked. If it is the first module and only the deposit was paid, that deposit covers the work done and is not refunded.",
              "A module delivered this way is neither finished nor tested, and it does not carry the {warrantyDays}-day warranty. We do not recommend integrating it into your system without completing it; if you choose to, any failures it causes in it or in earlier modules are not covered.",
            ],
            "Since each module's code is delivered at its close, you keep everything delivered up to the last paid module.",
            [
              "Pause: we keep the project in our private repositories for {pauseMonths} months so you can resume it. If it is not resumed within that period, it is considered cancelled.",
              "Cancellation: we keep a copy of the source code for {retentionMonths} months from the cancellation and then delete it from our repositories.",
            ],
          ],
        },
        {
          title: "Code ownership",
          blocks: [
            [
              "The code developed specifically for your project is yours once the module that contains it is paid.",
              "For static websites, the source code is governed by the “Static websites” section.",
              "We retain ownership of our tools, templates, libraries and pre-existing or general-purpose components, including those we develop during your project. We may publish them under an open-source license or license them to third parties.",
              "General-purpose code does not include your data, your confidential information or your business's own logic.",
              "You receive a free, perpetual and non-exclusive permission to use that general-purpose code within your project. If you need exclusivity over it, it is quoted separately.",
              "Third-party open-source libraries are governed by their own licenses.",
              "We may mention the project in our portfolio, as described in the privacy notice. You may refuse at any time by writing to {email}.",
            ],
          ],
        },
        {
          title: "Third-party services",
          blocks: [
            "The hosting, domains and other third-party services your project requires, such as databases, email or APIs, are contracted in your name and paid by you directly to each provider. Their configuration and deployment are included in the quote of the corresponding module.",
          ],
        },
        {
          title: "Warranty",
          blocks: [
            "Each custom development module carries a warranty of {warrantyDays} calendar days from its delivery.",
            [
              "Covers: free correction of defects in what was delivered.",
              "Does not cover: new features, scope changes, failures caused by modifications made by third parties, changes to third-party platforms or services, or modules delivered unfinished at your request.",
            ],
            "Advisory, training and technical support do not guarantee specific results, since these depend on how you apply what you learned. If a session cannot be given because of a failure on our side, it is rescheduled at no cost, as stated in the “Session payment, rescheduling and cancellation” section.",
            "To claim the warranty, contact us within that period by WhatsApp at {phone} or by email at {email}, describing the defect you found.",
          ],
        },
        {
          title: "Changes to these terms",
          blocks: [
            "We may update these terms at any time. The current version is the one published on this site, with its last updated date. Services already hired are governed by the terms in effect at the time they were hired.",
          ],
        },
        {
          title: "Contact",
          blocks: [
            "For any questions about these terms, write to us at {email} or by WhatsApp at {phone}.",
          ],
        },
        {
          title: "Governing law and jurisdiction",
          blocks: [
            "These terms are governed by the laws of the United Mexican States.",
            "For consumer protection matters, you may contact the Federal Consumer Protection Agency (Profeco).",
            "For the interpretation and enforcement of these terms, the parties submit to the competent courts of Zapopan or Guadalajara, Jalisco.",
          ],
        },
      ],
    },
    privacy: {
      heading: "Privacy Notice",
      intro: "In compliance with Mexico's Federal Law on the Protection of Personal Data Held by Private Parties, published in the Official Gazette of the Federation (DOF) on March 20, 2025, we inform you how we handle your personal data.",
      sections: [
        {
          title: "Data controller",
          blocks: [
            "{name}, who offers services under the {brand} brand and is based in {location}, is responsible for the processing of your personal data.",
            "Email: {email}. Phone and WhatsApp: {phone}.",
          ],
        },
        {
          title: "Personal data we collect",
          blocks: [
            "We collect the following data when you contact us by WhatsApp or email, during a meeting or while providing our services:",
            [
              "Name.",
              "Phone number.",
              "Email address.",
              "Information about your business that you choose to share with us.",
              "The address where an in-person session will take place, when you request one.",
              "Tax information, only when you request an invoice.",
              "Bank details, only to make a refund.",
            ],
            "Your bank details are financial data: we ask for them only when a refund applies, with your express consent at that moment. We do not keep them in our records; if another refund is needed, we ask for them again. They are kept only in the transaction receipts that tax law requires.",
            "We do not collect sensitive personal data.",
          ],
        },
        {
          title: "Purposes of processing",
          blocks: [
            "We use your personal data for the following purposes, which are necessary for your relationship with us:",
            [
              "Handling your requests and replying to your messages.",
              "Scheduling, rescheduling and cancelling meetings and sessions.",
              "Preparing quotes and providing the services you hire.",
              "Managing deposits, payments and refunds.",
              "Issuing invoices.",
            ],
            "We also have one secondary purpose, which is not necessary to provide the service:",
            [
              "Mentioning the project we built for you in our portfolio: your business or project name, its description and screenshots. Screenshots never show third parties' personal data.",
            ],
            "You may refuse this purpose at any time by writing to {email}. Refusing does not affect the services we provide to you. We do not use your data for any other advertising or marketing purpose.",
          ],
        },
        {
          title: "Data we process on behalf of our clients",
          blocks: [
            "When we build a system or provide technical support, we may have access to personal data that you process, such as your customers' data, and to the accounts of services contracted in your name.",
            "We process that data only on your behalf and according to your instructions, to provide the service you hired. We do not use it for any other purpose and we keep it confidential.",
          ],
        },
        {
          title: "Transfers and service providers",
          blocks: [
            "We do not transfer your personal data to third parties, except when required by law or by a competent authority.",
            "We rely on technology service providers that process data on our behalf, such as email services, private code repositories and Artificial Intelligence tools. We share with them only the information needed to provide the service.",
            "If you contact us by WhatsApp, that platform is operated by Meta, and the information you send through it is also governed by its own privacy policies.",
          ],
        },
        {
          title: "Data retention",
          blocks: [
            [
              "Contact data of people who did not hire a service: deleted after {leadMonths} months without communication.",
              "Client and invoicing data: kept for {clientYears} years, the period required by tax law, and then deleted.",
              "Project source code is kept as stated in the terms and conditions.",
            ],
          ],
        },
        {
          title: "ARCO rights and withdrawal of consent",
          blocks: [
            "You have the right to access, rectify and cancel your personal data, or to object to its processing (ARCO rights), as well as to withdraw the consent you have given us.",
            "To exercise any of these rights, send your request to {email} with the following information:",
            [
              "Your name and a way to contact you.",
              "Documents proving your identity or, where applicable, that of your legal representative.",
              "A clear description of the personal data and the right you wish to exercise.",
              "Any other information that helps locate your data.",
            ],
            "We will respond to your request within the time limits established by law.",
          ],
        },
        {
          title: "Cookies and tracking technologies",
          blocks: [
            "This site does not use cookies, analytics tools or other tracking technologies.",
          ],
        },
        {
          title: "Changes to this privacy notice",
          blocks: [
            "We may modify this privacy notice. We will publish any change on this page, along with its last updated date.",
          ],
        },
        {
          title: "Authority",
          blocks: [
            "If you believe your right to the protection of personal data has been violated, you may file a complaint with the Ministry of Anti-Corruption and Good Governance (Secretaría Anticorrupción y Buen Gobierno).",
          ],
        },
      ],
    },
  },
  footer: {
    builtWith: "Built with 💚🎲 and Astro.",
    tagline: "Custom technology solutions.",
    legalNav: "Site links",
    home: "Home",
    cv: "CV",
    terms: "Terms and Conditions",
    privacy: "Privacy Notice",
    whatsapp: "WhatsApp",
    email: "Email",
    rights: "All rights reserved.",
  },
} satisfies Dictionary;
