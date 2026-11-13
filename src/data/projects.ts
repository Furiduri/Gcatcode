// Locale-independent project data. Descriptions and tags live in the
// dictionaries, keyed by `id`.
export const projects = [
  { id: "petMePhone", title: "PetMePhone", link: "https://github.com/Furiduri/PetMePhone" },
  { id: "jalapenoLab", title: "Jalapeño Lab", link: "https://jalapenolab.mx/" },
  { id: "juegalajara", title: "Juegalajara", link: "https://juegalajara.mx/" },
  { id: "creepyBoardDay", title: "Creepy BoardDay", link: "https://creepyboardday.web.app/" },
  { id: "crotona", title: "Crotona Pizza & Café", link: "https://crotona.mx/" },
  { id: "gcatcode", title: "GCatCode", link: "https://gcatcode.com/" },
] as const;

export type ProjectId = (typeof projects)[number]["id"];
