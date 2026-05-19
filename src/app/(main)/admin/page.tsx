import { redirect } from "next/navigation";
import { createClient } from "@/src/lib/supabase/server";
import AdminDecorations from "./_components/AdminDecorations";
import AdminFiltre from "./_components/AdminFiltre";

export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: adminRow } = await supabase
    .from("administrateur")
    .select("id_admin, nom, prenom")
    .maybeSingle();

  if (!adminRow) redirect("/");

  const [{ data: pendingCommercants }, { data: pendingAssociations }] =
    await Promise.all([
      supabase
        .from("commercant")
        .select(
          "id_commercant, name_entreprise, email, tel, type_activity, forme_juridique, adresse, siret, created_at",
        )
        .eq("is_validated", false)
        .order("created_at", { ascending: true }),
      supabase
        .from("association")
        .select(
          "id_association, name_entreprise, email, tel, type_asso, rayon_action, adresse, rna, created_at",
        )
        .eq("is_validated", false)
        .order("created_at", { ascending: true }),
    ]);

  return (
    <main className="relative w-full min-h-[calc(100vh-80px)] overflow-hidden">
      <AdminDecorations />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <AdminFiltre
          commercants={pendingCommercants ?? []}
          associations={pendingAssociations ?? []}
          adminPrenom={adminRow.prenom}
          adminNom={adminRow.nom}
        />
      </div>
    </main>
  );
}
