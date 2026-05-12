export type AboutValueKey = "Zap" | "TrendingUp" | "Shield";

export type AboutStat = {
  value: string;
  label: string;
};

export type AboutValue = {
  icon: AboutValueKey;
  title: string;
  description: string;
};

export const aboutMission = {
  label: "Notre mission",
  headline: "Chaque invendu mérite",
  highlight: "une seconde vie.",
  description:
    "Récoltéo connecte commerçants et associations pour transformer le gaspillage alimentaire en solidarité concrète — simplement, légalement, durablement.",
};

export const aboutStats: AboutStat[] = [
  { value: "500+", label: "tonnes valorisées" },
  { value: "150+", label: "commerçants engagés" },
  { value: "80+", label: "associations partenaires" },
];

export const aboutValues: AboutValue[] = [
  {
    icon: "Zap",
    title: "Simplicité avant tout",
    description:
      "De la déclaration d'invendu à la remise du CERFA, tout se passe en quelques clics. Zéro paperasse, zéro friction.",
  },
  {
    icon: "TrendingUp",
    title: "Un impact mesurable",
    description:
      "Chaque don est traçable. Vous savez exactement à qui ça profite, combien ça représente, et ce que ça vous rapporte fiscalement.",
  },
  {
    icon: "Shield",
    title: "Conformité garantie",
    description:
      "Récoltéo génère automatiquement les documents légaux requis — CERFA, reçus fiscaux — sans erreur ni délai.",
  },
];
