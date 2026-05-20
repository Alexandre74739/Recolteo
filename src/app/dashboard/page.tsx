import Hero from "@/src/components/sections/Hero";
import { createClient } from "@/src/lib/supabase/server";
import ProductGrid from "./_components/ProductGrid";
import type { lot } from "./_components/types";

export const PAGE_SIZE = 10;

export default function Dashboard() {
    searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const supabase = await createClient();
  const params = await searchParams;

  const page = Math.max(1, parseInt(params.page ?? "1", 10));
  const from = (page - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  const { data, count } = await supabase
    .from("lot")
    .select("*", { count: "exact" })
    .range(from, to)
    .order("created_at", { ascending: false });
    return (
        <main>
            <Hero
                    title=""
                    subtitle="Découvrez"
                    labelTitle="très vite"
                    spanTitle="nos lots"
                    endTitle="sur Récoltéo"
                    description="Parcourez les lots mis à disposition par nos partenaires et réservez ceux dont votre association a besoin."
                    primaryButton="Voir les lots"
                    primaryButtonHref="#products"
                    secondaryButton="Ajouter un élément"
                    secondaryButtonHref="#dons"
                    />
            <ProductGrid
                lots={(data as lot[] | null) ?? []}
                total={count ?? 0}
                page={page}
                pageSize={PAGE_SIZE}
            />
        </main>
    )
}
