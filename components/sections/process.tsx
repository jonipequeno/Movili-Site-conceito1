const steps = [
  {
    number: "01",
    title: "Estratégia e Análise",
    description: "Entendemos seu negócio, público-alvo e objetivos. Analisamos concorrentes e identificamos oportunidades para posicionar sua marca.",
  },
  {
    number: "02",
    title: "Planejamento UX/UI",
    description: "Criamos wireframes e definimos a jornada do usuário. Cada tela é pensada para guiar o visitante até a conversão.",
  },
  {
    number: "03",
    title: "Design Profissional",
    description: "Desenvolvemos um visual único que reflete sua marca. Design moderno, clean e alinhado com as melhores práticas do mercado.",
  },
  {
    number: "04",
    title: "Desenvolvimento",
    description: "Código limpo, otimizado e seguro. Utilizamos as tecnologias mais modernas para garantir performance e escalabilidade.",
  },
  {
    number: "05",
    title: "Otimização SEO",
    description: "Implementamos todas as otimizações técnicas para que seu site seja encontrado no Google pelos seus clientes potenciais.",
  },
  {
    number: "06",
    title: "Lançamento e Suporte",
    description: "Publicamos seu site e oferecemos suporte contínuo. Você nunca fica sozinho após a entrega do projeto.",
  },
]

export function Process() {
  return (
    <section id="processo" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-6">
            <span className="text-sm text-muted-foreground">Nosso Processo</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Do briefing ao lançamento em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
              6 etapas claras
            </span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Processo estruturado e transparente. Você acompanha cada fase
            e participa das decisões importantes do seu projeto.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="p-6 rounded-2xl border border-border bg-card hover:border-accent/30 transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Visual - Desktop */}
        <div className="hidden lg:block mt-16 max-w-4xl mx-auto">
          <div className="relative">
            {/* Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            
            {/* Dots */}
            <div className="flex justify-between relative">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full bg-accent border-4 border-background"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
