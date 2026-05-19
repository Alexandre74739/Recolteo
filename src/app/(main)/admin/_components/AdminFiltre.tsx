"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "@/src/components/animations/Reveal";
import AdminStatsBar from "./AdminStatsBar";
import AdminProfileCard from "./AdminProfileCard";
import AdminEmptyState from "./AdminEmptyState";
import type { AdminFilter } from "./types";

interface Commercant {
  id_commercant: number;
  name_entreprise: string;
  email: string;
  tel: string;
  type_activity: string;
  forme_juridique: string;
  adresse: string;
  siret: string;
  created_at: string;
}

interface Association {
  id_association: number;
  name_entreprise: string;
  email: string;
  tel: string;
  type_asso: string;
  rayon_action: number;
  adresse: string;
  rna: string;
  created_at: string;
}

interface AdminDashboardProps {
  commercants: Commercant[];
  associations: Association[];
  adminPrenom: string;
  adminNom: string;
}

export default function AdminFiltre({
  commercants,
  associations,
  adminPrenom,
  adminNom,
}: AdminDashboardProps) {
  const [filter, setFilter] = useState<AdminFilter>("all");

  const total = commercants.length + associations.length;
  const showCommercants =
    (filter === "all" || filter === "commercant") && commercants.length > 0;
  const showAssociations =
    (filter === "all" || filter === "association") && associations.length > 0;

  return (
    <div className="flex flex-col gap-10">
      <Reveal delay={0}>
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <p className="text-xs font-bold text-sapin/40 uppercase tracking-widest mb-2">
              Tableau de bord
            </p>
            <h1 className="text-sapin font-black">
              Bonjour,{" "}
              <span className="relative italic whitespace-nowrap">
                <span
                  className="absolute inset-0 bg-lime rounded-xl -rotate-1 scale-x-110"
                  aria-hidden="true"
                />
                <span className="relative">
                  {adminPrenom} {adminNom}
                </span>
              </span>
            </h1>
            <p className="text-sapin mt-8">
              {total > 0
                ? `${total} profil${total > 1 ? "s" : ""} en attente de validation.`
                : "Tout est validé, rien à faire pour l'instant."}
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <AdminStatsBar
          total={total}
          commercantsCount={commercants.length}
          associationsCount={associations.length}
          activeFilter={filter}
          onFilterChange={setFilter}
        />
      </Reveal>

      {total === 0 && (
        <Reveal delay={0.2}>
          <AdminEmptyState />
        </Reveal>
      )}

      <AnimatePresence>
        {showCommercants && (
          <motion.section
            key="commercants"
            className="flex flex-col gap-5"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3">
              <h2 className="text-sapin font-black">Commerçants</h2>
              <span className="px-2.5 py-0.5 bg-peach/10 border border-peach/20 text-peach text-sm font-bold rounded-full">
                {commercants.length}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {commercants.map((c) => (
                <AdminProfileCard
                  key={c.id_commercant}
                  type="commercant"
                  id={c.id_commercant}
                  name={c.name_entreprise}
                  email={c.email}
                  tel={c.tel}
                  details={[
                    { label: "SIRET", value: c.siret },
                    { label: "Activité", value: c.type_activity },
                    { label: "Forme juridique", value: c.forme_juridique },
                    { label: "Adresse", value: c.adresse },
                  ]}
                  createdAt={c.created_at}
                />
              ))}
            </div>
          </motion.section>
        )}

        {showAssociations && (
          <motion.section
            key="associations"
            className="flex flex-col gap-5"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3">
              <h2 className="text-sapin font-black">Associations</h2>
              <span className="px-2.5 py-0.5 bg-lime/30 border border-lime/50 text-sapin text-sm font-bold rounded-full">
                {associations.length}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {associations.map((a) => (
                <AdminProfileCard
                  key={a.id_association}
                  type="association"
                  id={a.id_association}
                  name={a.name_entreprise}
                  email={a.email}
                  tel={a.tel}
                  details={[
                    { label: "RNA", value: a.rna },
                    { label: "Type", value: a.type_asso },
                    { label: "Rayon d'action", value: `${a.rayon_action} km` },
                    { label: "Adresse", value: a.adresse },
                  ]}
                  createdAt={a.created_at}
                />
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
