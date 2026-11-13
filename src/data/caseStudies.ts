// Locale-independent case study data. Copy lives in the dictionaries under
// `caseStudies.<id>`. The order is the showcase order (newest first): the
// landing gallery and the projects mosaic follow it.
import type { ImageMetadata } from "astro";
import juegalajaraDesktop from "../assets/case-study/juegalajara-desktop.png";
import juegalajaraMobile from "../assets/case-study/juegalajara-mobile.jpg";
import creepyBoardDayDesktop from "../assets/case-study/creepy-boardday-desktop.jpg";
import creepyBoardDayMobile from "../assets/case-study/creepy-boardday-mobile.jpg";
import crotonaDesktop from "../assets/case-study/crotona-desktop.jpg";
import crotonaMobile from "../assets/case-study/crotona-mobile.jpg";

export interface CaseStudyData {
  name: string;
  url: string;
  stack: readonly string[];
  screenshots: { desktop: ImageMetadata; mobile: ImageMetadata };
}

export const caseStudies = {
  crotona: {
    name: "Crotona Pizza & Café",
    url: "https://crotona.mx/",
    stack: ["Astro", "Tailwind CSS", "Firebase"],
    screenshots: { desktop: crotonaDesktop, mobile: crotonaMobile },
  },
  juegalajara: {
    name: "Juegalajara",
    url: "https://juegalajara.mx/",
    stack: ["Astro", "Firebase", "Tailwind CSS"],
    screenshots: { desktop: juegalajaraDesktop, mobile: juegalajaraMobile },
  },
  creepyBoardDay: {
    name: "Creepy BoardDay",
    url: "https://creepyboardday.web.app/",
    stack: ["Astro", "TypeScript", "Firebase"],
    screenshots: { desktop: creepyBoardDayDesktop, mobile: creepyBoardDayMobile },
  },
} satisfies Record<string, CaseStudyData>;

export type CaseStudyId = keyof typeof caseStudies;

export const caseStudyIds = Object.keys(caseStudies) as CaseStudyId[];

export const hasCaseStudy = (id: string): id is CaseStudyId => id in caseStudies;
