import Hero from "@/src/components/sections/Hero";

export default function Dashboard() {
    return (
        <main>
            <Hero
                    title="Découvrez les"
                    subtitle=" "
                    labelTitle="produits"
                    spanTitle="disponilbles"
                    endTitle="Récoltéo"
                    description="Parcourez les produits mis à disposition par nos partenaires et réservez ceux dont votre association a besoin."
                    primaryButton="Voir les produits"
                    primaryButtonHref="#products"
                    secondaryButton="Ajouter un élément"
                    secondaryButtonHref="#dons"
                  />
        </main>
    )
}