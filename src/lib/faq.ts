export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Comment fonctionne Récoltéo ?",
    answer:
      "Récoltéo est une plateforme qui met en relation commerçants et associations. Le commerçant dépose une annonce pour ses invendus ; l'association intéressée prend contact et organise la collecte. La plateforme génère ensuite automatiquement les documents légaux (CERFA, reçus fiscaux).",
  },
  {
    question: "Est-ce vraiment gratuit pour les associations ?",
    answer:
      "Oui, l'accès à Récoltéo est entièrement gratuit pour les associations. Vous pouvez consulter les annonces, contacter les commerçants et recevoir vos CERFA sans débourser un centime.",
  },
  {
    question: "Quelle est la réduction fiscale pour les commerçants ?",
    answer:
      "En faisant un don via Récoltéo, les commerçants bénéficient d'une réduction d'impôt équivalente à 60 % de la valeur des produits donnés (dans la limite de 0,5 % du chiffre d'affaires). Récoltéo s'occupe de toute la documentation nécessaire.",
  },
  {
    question: "Comment est généré le CERFA ?",
    answer:
      "Dès que le don est confirmé entre les deux parties, Récoltéo génère automatiquement le formulaire CERFA 11580*03. Le document est disponible en téléchargement immédiat depuis le tableau de bord du commerçant et envoyé par email aux deux parties.",
  },
  {
    question: "Puis-je utiliser Récoltéo pour plusieurs établissements ?",
    answer:
      "Avec le plan Essentiel (gratuit), vous gérez un seul établissement. Le plan Pro vous permet d'ajouter autant d'établissements que vous le souhaitez, avec un tableau de bord centralisé pour tout piloter.",
  },
  {
    question: "Les dons sont-ils limités à l'alimentaire ?",
    answer:
      "Non ! Récoltéo accepte toutes les catégories : produits alimentaires, matériel de bureau, vêtements, mobilier, livres et jouets… Si un commerçant a des invendus, une association peut en bénéficier.",
  },
  {
    question: "Comment contacter le support ?",
    answer:
      "Pour toute question, vous pouvez nous écrire à support@recolteo.fr. Les utilisateurs du plan Pro bénéficient d'un support prioritaire avec une réponse garantie sous 4 heures en jours ouvrés.",
  },
];
