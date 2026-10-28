import type { EducationId } from "../data/education";
import type { ExperienceId } from "../data/experience";
import type { ProjectId } from "../data/projects";
import type { SkillCategoryId, SkillTermId } from "../data/skills";

// A legal document section: each block is a paragraph (string) or a bullet
// list (string[]). Strings may use the business `{placeholders}`.
export interface LegalSection {
  title: string;
  blocks: (string | string[])[];
}

export interface LegalDocument {
  heading: string;
  intro: string;
  sections: LegalSection[];
}

interface TitledText {
  title: string;
  text: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

// Copy of a case study section, shared by every page that shows it.
export interface CaseStudyCopy {
  eyebrow: string;
  title: string;
  intro: string;
  challengeLabel: string;
  challenge: string;
  solutionLabel: string;
  solution: string;
  features: string[];
  resultLabel: string;
  result: string;
  stackLabel: string;
  linkLabel: string;
  // Alt text for the desktop and mobile screenshots.
  images: { desktop: string; mobile: string };
}

// Shape every locale dictionary must satisfy. `{years}` placeholders are
// replaced at render time with the computed years of experience.
export interface Dictionary {
  meta: {
    home: { title: string; description: string };
    projects: { title: string; description: string };
    landing: { title: string; description: string };
    terms: { title: string; description: string };
    privacy: { title: string; description: string };
  };
  nav: {
    home: string;
    projects: string;
    switchLanguage: string;
    // Landing navigation (also used on the legal pages).
    mainNav: string;
    brandHome: string;
    services: string;
    method: string;
    caseStudy: string;
    websites: string;
    faq: string;
    contactCta: string;
  };
  // GCatcode sales landing. Strings may use the business `{placeholders}`
  // from src/data/business.ts and `{years}`.
  landing: {
    whatsappMessages: { general: string; freeCall: string; advisory: string; website: string };
    newTabNote: string;
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
      primaryCta: string;
      secondaryCta: string;
      note: string;
    };
    problem: { title: string; intro: string; items: TitledText[] };
    services: {
      title: string;
      intro: string;
      items: { web: TitledText; mobile: TitledText; desktop: TitledText; advisory: TitledText };
    };
    method: {
      title: string;
      intro: string;
      points: { cycles: TitledText; results: TitledText; flexibility: TitledText };
    };
    trust: {
      title: string;
      intro: string;
      // Rendered as `text <a>linkLabel</a>`.
      privacy: TitledText & { linkLabel: string };
      review: TitledText;
      warranty: TitledText & { linkLabel: string };
    };
    websites: {
      title: string;
      intro: string;
      card: {
        title: string;
        pricePrefix: string;
        price: string;
        taxNote: string;
        includesLabel: string;
        includes: string[];
        notes: string[];
        termsLink: string;
        cta: string;
      };
    };
    freeCall: {
      title: string;
      text: string;
      badge: string;
      details: string[];
      cta: string;
      advisory: {
        title: string;
        pricePrefix: string;
        price: string;
        unit: string;
        taxNote: string;
        intro: string;
        examples: string[];
        scopeNote: string;
        cta: string;
      };
    };
    faq: {
      title: string;
      items: {
        freeCall: FaqItem;
        inPerson: FaqItem;
        advisoryPrice: FaqItem;
        websitePrice: FaqItem;
        projectPayment: FaqItem;
        warranty: FaqItem;
        ai: FaqItem;
      };
      termsLink: string;
      privacyLink: string;
    };
    finalCta: { title: string; text: string; cta: string; emailLabel: string };
    // Alt text for the landing imagery; photo sources and authors live in
    // src/data/landingPhotos.ts.
    images: {
      hero: string;
      problem: string;
      services: string;
      method: string;
    };
    // Rendered as `lead <author links> on <a>Unsplash</a>.`
    photoCredits: { lead: string; on: string };
  };
  // 404 page. One build serves every locale: the page picks the variant that
  // matches the requested path.
  notFound: {
    title: string;
    description: string;
    heading: string;
    text: string;
    homeCta: string;
    cvCta: string;
    // Link to the other language's home page, labelled in that language.
    otherLanguage: string;
    brandHome: string;
  };
  // Case studies, keyed by id; data and screenshots live in
  // src/data/caseStudies.ts.
  caseStudies: {
    juegalajara: CaseStudyCopy;
    creepyBoardDay: CaseStudyCopy;
  };
  legal: {
    updatedLabel: string;
    updatedDate: string;
    prevailNote: string;
    backHome: string;
    terms: LegalDocument;
    privacy: LegalDocument;
  };
  hero: {
    avatarAlt: string;
    greeting: string;
    headline: string;
    // Rendered as `lead <strong>highlight</strong> trail`.
    summary: { lead: string; highlight: string; trail: string };
    viewExperience: string;
    contact: string;
  };
  sections: {
    experience: string;
    featuredProjects: string;
    education: string;
    skills: string;
  };
  experience: Record<ExperienceId, { role: string; bullets: string[] }>;
  projects: Record<ProjectId, { description: string; tags: string[] }>;
  projectsPage: {
    heading: string;
    intro: string;
    // Heading of the cards shown after the case studies.
    moreProjects: string;
  };
  education: {
    graduatedLabel: string;
    licenseLabel: string;
    entries: Record<EducationId, { degree: string; degreeAlt: string }>;
  };
  skills: {
    categories: Record<SkillCategoryId, string>;
    terms: Record<SkillTermId, string>;
  };
  footer: {
    builtWith: string;
    tagline: string;
    legalNav: string;
    home: string;
    cv: string;
    terms: string;
    privacy: string;
    whatsapp: string;
    email: string;
    rights: string;
  };
}
