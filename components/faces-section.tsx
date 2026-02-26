function GalleryItem({ image, label }: { image: string; label: string }) {
  return (
    <div className="group relative overflow-hidden bg-secondary w-full h-full">
      <img
        src={image}
        alt={label}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="absolute bottom-3 left-3 text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {label}
      </span>
    </div>
  )
}

export function FacesSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">
            Alguns trabalhos
          </h2>
          <p className="text-muted-foreground mt-2 max-w-md">
            Um pouco do que já rolou. Cada projeto tem sua história.
          </p>
        </div>

        {/* Row 1: grande horizontal + vertical */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          <div className="col-span-2 aspect-[16/9]">
            <GalleryItem image="/images/work-beach.jpg" label="Ensaio externo" />
          </div>
          <div className="row-span-2 aspect-[3/4] lg:aspect-auto">
            <GalleryItem image="/images/work-fashion.jpg" label="Ensaio editorial" />
          </div>

          {/* Row 2: dois quadrados */}
          <div className="aspect-square">
            <GalleryItem image="/images/work-sax.jpg" label="Cobertura de evento" />
          </div>
          <div className="aspect-square">
            <GalleryItem image="/images/work-sunset.jpg" label="Retrato urbano" />
          </div>

          {/* Row 3: vertical + horizontal grande */}
          <div className="row-span-2 aspect-[3/4] lg:aspect-auto">
            <GalleryItem image="/images/work-studio.jpg" label="Retrato em estúdio" />
          </div>
          <div className="col-span-2 aspect-[16/9]">
            <GalleryItem image="/images/work-djs.jpg" label="Evento / DJ set" />
          </div>

          {/* Row 4: três quadrados */}
          <div className="aspect-square">
            <GalleryItem image="/images/work-party.jpg" label="Nightlife" />
          </div>
          <div className="aspect-square">
            <GalleryItem image="/images/work-djsolo.jpg" label="Cobertura de evento" />
          </div>
          <div className="aspect-square">
            <GalleryItem image="/images/editorial1.png" label="Direção criativa" />
          </div>

          {/* Extras: Halloween e retrato */}
          <div className="aspect-square">
            <GalleryItem image="/images/work-halloween-1.jpeg" label="Halloween / personagem" />
          </div>
          <div className="aspect-square">
            <GalleryItem image="/images/work-halloween-2.jpeg" label="Halloween / atmosfera" />
          </div>
          <div className="aspect-square">
            <GalleryItem image="/images/work-halloween-3.jpeg" label="Halloween / close" />
          </div>
          <div className="aspect-square">
            <GalleryItem image="/images/work-portrait-curly.jpeg" label="Retrato em estúdio" />
          </div>
          <div className="aspect-square">
            <GalleryItem image="/images/work-halloween-4.jpeg" label="Halloween / dupla" />
          </div>
        </div>
      </div>
    </section>
  )
}
