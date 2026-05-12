export type PricingFeature = {
  text: string;
  included: boolean;
};

export type PricingPlan = {
  id: string;
  name: string;
  target: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  cta: string;
  ctaHref: string;
  highlighted: boolean;
  badge?: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "association",
    name: "Association",
    target: "Pour les associations",
    price: "Gratuit",
    period: "pour toujours",
    description:
      "Tout le nécessaire pour trouver des dons près de chez vous.",
    features: [
      { text: "Accès aux annonces locales", included: true },
      { text: "Mise en relation directe", included: true },
      { text: "Reçus CERFA automatiques", included: true },
      { text: "Support par email", included: true },
      { text: "Tableau de bord d'impact", included: false },
      { text: "API partenaires", included: false },
    ],
    cta: "Rejoindre gratuitement",
    ctaHref: "/inscription",
    highlighted: false,
  },
  {
    id: "essentiel",
    name: "Essentiel",
    target: "Pour les commerçants",
    price: "Gratuit",
    period: "sans engagement",
    description:
      "Déposez vos invendus et recevez vos CERFA en quelques clics.",
    features: [
      { text: "Annonces d'invendus illimitées", included: true },
      { text: "Mise en relation automatique", included: true },
      { text: "Génération CERFA", included: true },
      { text: "Support par email", included: true },
      { text: "Tableau de bord d'impact", included: false },
      { text: "Multi-établissements", included: false },
    ],
    cta: "Commencer",
    ctaHref: "/inscription",
    highlighted: false,
  },
  {
    id: "pro",
    name: "Pro",
    target: "Pour les commerçants",
    price: "29 €",
    period: "par mois",
    description:
      "Pour les enseignes qui veulent piloter leur impact à grande échelle.",
    features: [
      { text: "Tout du plan Essentiel", included: true },
      { text: "Tableau de bord d'impact", included: true },
      { text: "Multi-établissements", included: true },
      { text: "Export comptable", included: true },
      { text: "Support prioritaire", included: true },
      { text: "API partenaires", included: true },
    ],
    cta: "Essayer 30 jours",
    ctaHref: "/inscription",
    highlighted: true,
    badge: "Recommandé",
  },
];
