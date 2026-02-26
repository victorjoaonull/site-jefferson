export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end pb-16 md:pb-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Mobile: apenas a foto principal preenchendo o fundo */}
        <img
          src="/images/hero.jpg"
          alt="Jeff"
          className="absolute inset-0 w-full h-full object-cover object-center md:hidden"
        />

        {/* Desktop: três fotos lado a lado preenchendo os lados */}
        <div className="hidden md:grid grid-cols-3 w-full h-full">
          <img
            src="/images/hero-side-left.jpeg"
            alt="Jeff ensaio 1"
            className="w-full h-full object-cover object-center"
          />
          <img
            src="/images/hero.jpg"
            alt="Jeff"
            className="w-full h-full object-cover object-center"
          />
          <img
            src="/images/hero-side-right.jpeg"
            alt="Jeff ensaio 2"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-xl space-y-5">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Fotografia / Direção Criativa / Conteúdo
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-balance">
            Trabalho com imagem, identidade e verdade.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
            Fotografia autoral, direção criativa e produção de conteúdo para quem quer se mostrar de verdade.
          </p>
          <a
            href="#contato"
            className="inline-block text-sm font-medium border border-foreground/30 px-6 py-3 text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Fala comigo
          </a>
        </div>
      </div>
    </section>
  )
}
