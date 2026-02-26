const services = [
  {
    title: "Fotografia Autoral",
    description:
      "Retratos, ensaios e fotos com personalidade. Nada genérico, nada posado demais. Eu busco mostrar quem a pessoa realmente é.",
  },
  {
    title: "Direção Criativa",
    description:
      "Do conceito à execução. Ajudo a pensar a ideia, montar o cenário e garantir que o resultado final tenha a cara do projeto.",
  },
  {
    title: "Conteúdo Visual",
    description:
      "Produção de imagem pra redes, marcas pessoais e projetos que precisam de identidade visual forte e autêntica.",
  },
]

export function StorySection() {
  return (
    <section className="py-16 md:py-24 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-xl mb-12">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            O que eu faço
          </h2>
          <p className="text-muted-foreground mt-3 leading-relaxed">
            Trabalho com imagem de um jeito bem pessoal. Cada projeto é diferente porque cada pessoa é diferente.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="space-y-3">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        {/* Work samples */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="relative aspect-[4/5]">
            <img
              src="/images/photographer.png"
              alt="Fotografando"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="relative aspect-[4/5]">
            <img
              src="/images/editorial1.png"
              alt="Ensaio editorial"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
