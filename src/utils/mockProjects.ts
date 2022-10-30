type AbilitiesType = {
  title: string;
};
type TechnologiesType = {
  title: string;
};

type ProjectType = {
  companyName: string;
  companyUrl: string | null;
  companyLogo: string;
  timeStart: string;
  timeEnd: string | null;
  abilities: AbilitiesType[];
  technologies: TechnologiesType[];
  position: string | null;
};

export const mockProjects: ProjectType[] = [
  {
    companyName: "Blaze",
    companyUrl: "blaze.su",
    companyLogo: "https://blaze.su/logo.svg",
    timeStart: "01.05.2018",
    timeEnd: "01.10.2019",
    abilities: [],
    technologies: [],
    position: "",
  },
];
