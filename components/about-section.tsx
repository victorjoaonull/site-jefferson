export function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[3/4]">
            <img
              src="/images/hero.png"
              alt="Jeff"
              className="absolute inset-0 w-full h-full object-cover object-top md:object-contain"
            />
          </div>

          {/* Content */}
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Quem tá por trás
            </p>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Jeff
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Fotógrafo e diretor criativo de São Paulo. Comecei na fotografia por acaso e virou minha profissão.
              </p>
              <p>
                Fora das câmeras, treino boxe e toco outros projetos. Essa mistura de experiências acaba aparecendo no meu trabalho - gosto de trazer verdade e personalidade pra tudo que faço.
              </p>
              <p>
                Se você tá procurando alguém pra criar algo com a sua cara, bora conversar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
