import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "HTL Saalfelden",
    company: "Höhere Technische Lehranstalt Saalfelden",
    region: "Salzburg, Österreich",
    description:
      "Höhere Technische Lehranstalt mit Schwerpunkt Informatik. Abschluss mit Matura und umfassender Ausbildung in Softwareentwicklung, Netzwerktechnik und Projektmanagement.",
    technologies: [
      "Java",
      "C#",
      "HTML/CSS",
      "JavaScript",
      "SQL",
      "Git",
      "Linux",
      "Netzwerktechnik",
    ],
  },
  {
    title: "Pflichtpraktikum",
    company: "CADStar GmbH",
    region: "Salzburg, Österreich",
    description:
      "Vierwöchiges Praktikum während der HTL. Mitarbeit am Projekt des Intraoral-Scanner, Unterstützung bei Entwicklung.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Git",
      "Jira",
    ],
  },
  {
    title: "Ferialpraktikum",
    company: "Digital Media Agency",
    region: "Linz, Österreich",
    description:
      "Vierwöchiges Praktikum mit Fokus auf Webdesign und Content Management. Erstellung von Landingpages, Optimierung bestehender Websites und erste Erfahrungen mit SEO.",
    technologies: [
      "WordPress",
      "HTML/CSS",
      "JavaScript",
      "Adobe Photoshop",
      "Figma",
    ],
  },
  {
    title: "Mittelschule",
    company: "MMS Radstadt",
    region: "Salzburg, Österreich",
    description:
      "Mittelschule mit erfolgreichem Abschluss. Erste Berührungspunkte mit Informatik und Technik.",
    technologies: [
      "Microsoft Office",
      "ECDL",
    ],
  },
  {
    title: "Volksschule",
    company: "VS Radstadt",
    region: "Salzburg, Österreich",
    description:
      "Grundschulausbildung",
    technologies: [
      "Computer-Grundlagen",
      "Internet-Basics",
    ],
  },
];

export type WorkItem = (typeof work)[number];

