import { Suspense } from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/src/lib/supabase/server";
import { createAdminClient } from "@/src/lib/supabase/admin";
import AdminDecorations from "./_components/AdminDecorations";
import AdminLanding from "./_components/AdminLanding";

async function AdminContent() {
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

  const admin = createAdminClient();

  const [
    { count: pendingCommercants },
    { count: pendingAssociations },
    { count: totalCommercants },
    { count: totalAssociations },
    { count: pendingCollects },
  ] = await Promise.all([
    supabase
      .from("commercant")
      .select("id_commercant", { count: "exact", head: true })
      .eq("is_validated", false),
    supabase
      .from("association")
      .select("id_association", { count: "exact", head: true })
      .eq("is_validated", false),
    supabase
      .from("commercant")
      .select("id_commercant", { count: "exact", head: true }),
    supabase
      .from("association")
      .select("id_association", { count: "exact", head: true }),
    admin
      .from("collect")
      .select("id_collect", { count: "exact", head: true })
      .eq("statut", false),
  ]);

  return (
    <AdminLanding
      adminPrenom={adminRow.prenom}
      adminNom={adminRow.nom}
      pendingTotal={(pendingCommercants ?? 0) + (pendingAssociations ?? 0)}
      totalStructures={(totalCommercants ?? 0) + (totalAssociations ?? 0)}
      pendingCollects={pendingCollects ?? 0}
    />
  );
}

export default function AdminPage() {
  return (
    <main className="relative w-full min-h-[calc(100vh-80px)] overflow-hidden">
      <AdminDecorations />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <Suspense>
          <AdminContent />
        </Suspense>
      </div>
    </main>
  );
}
