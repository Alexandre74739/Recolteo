import Btn from "@/src/components/ui/primitives/Button";

export default function Panier() {
  return (
    <div className="min-h-screen flex flex-col gap-3 px-4 text-sapin">
      <h2>Mon panier</h2>
      <p className="text-center">Votre panier est vide.</p>
      <div className="mt-2 justify-center flex">
        <Btn
          label="Continuer mes achats"
          href="/"
          variant="sapin"
          size="md"
          showArrow={true}
        />
      </div>
    </div>
  )
}