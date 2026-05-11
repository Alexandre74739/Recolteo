export default function Hero() {
  return (
    <section className="bg-sapin overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-14 md:py-20 flex flex-col md:flex-row items-center gap-12 md:gap-16">

        <div className="flex-1 text-center md:text-left">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-5">
            Votre solution,{" "}
            <span className="text-lime">en un instant !</span>
          </h1>

          <p className="text-cream/70 text-lg md:text-xl mb-9 max-w-lg mx-auto md:mx-0">
            Connectez commerçants et associations pour des échanges simples,
            rapides et ancrés localement.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-10">
            <button className="bg-lime text-sapin font-bold px-7 py-3.5 rounded-xl hover:brightness-105 active:scale-95 transition-all">
              Découvrir
            </button>
            <button className="border-2 border-cream/25 text-cream px-7 py-3.5 rounded-xl hover:bg-cream/8 active:scale-95 transition-all">
              En savoir plus
            </button>
          </div>

          <div className="flex items-center gap-6 justify-center md:justify-start">
            <div>
              <p className="text-cream font-bold text-2xl">500+</p>
              <p className="text-cream/50 text-sm">Commerçants</p>
            </div>
            <div className="w-px h-10 bg-cream/15" />
            <div>
              <p className="text-cream font-bold text-2xl">200+</p>
              <p className="text-cream/50 text-sm">Associations</p>
            </div>
            <div className="w-px h-10 bg-cream/15" />
            <div>
              <p className="text-cream font-bold text-2xl">1k+</p>
              <p className="text-cream/50 text-sm">Échanges</p>
            </div>
          </div>
        </div>

        

      </div>
    </section>
  );
}
