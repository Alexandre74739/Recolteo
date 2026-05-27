"use client";

import { useState, useEffect, useTransition } from "react";
import { CheckSquare } from "@deemlol/next-icons";
import EmptyState from "@/src/components/ui/primitives/EmptyState";
import LoadingSpinner from "@/src/components/ui/primitives/LoadingSpinner";
import AdminStatsBar from "../../_components/AdminStatsBar";
import CollecteAdminCard from "./CollecteAdminCard";
import { getPendingCollects, type CollectAdminItem } from "../../actions";

interface Props {
  commercantsCount: number;
  associationsCount: number;
}

export default function CollecteAdminList({
  commercantsCount,
  associationsCount,
}: Props) {
  const [collects, setCollects] = useState<CollectAdminItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [, startTransition] = useTransition();

  const reload = () => {
    startTransition(async () => {
      const data = await getPendingCollects();
      setCollects(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    reload();
  }, []);

  if (loading) return <LoadingSpinner />;

  if (!collects.length) {
    return (
      <EmptyState
        icon={<CheckSquare size={32} className="text-sapin/30" />}
        title="Aucune collecte en attente"
        description="Les collectes à valider apparaîtront ici."
      />
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <AdminStatsBar
        total={collects.length}
        commercantsCount={commercantsCount}
        associationsCount={associationsCount}
        activeFilter="all"
        onFilterChange={() => {}}
      />
      {collects.map((c) => (
        <CollecteAdminCard key={c.id_collect} item={c} onValidated={reload} />
      ))}
    </div>
  );
}
