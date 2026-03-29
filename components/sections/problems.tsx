import { XCircle, ArrowRight } from "lucide-react"

const problems = [
  {
    title: "Sem site profissional",
    description: "Potenciais clientes procuram sua empresa online e não encontram nada. Você perde credibilidade antes mesmo de ser contatado.",
  },
  {
    title: "Site desatualizado",
    description: "Design ultrapassado, lento no celular e sem otimização. Sua empresa parece não acompanhar a evolução do mercado.",
  },
  {
    title: "Presença digital fraca",
    description: "Seus concorrentes aparecem no Google, nas redes sociais e conquistam os clientes que deveriam ser seus.",
  },
  {
    title: "Nenhum lead gerado",
    description: "Mesmo com site, ele não converte visitantes em contatos. É como ter uma loja com a porta fechada.",
  },
  {
    title: "Baixa credibilidade",
    description: "Clientes pesquisam antes de comprar. Sem presença digital profissional, eles escolhem quem transmite mais confiança.",
  },
]

export function Problems() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-6">
            <span className="text-sm text-muted-foreground">O Problema</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Sua empresa está perdendo clientes por não ter uma{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              presença digital forte
            </span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Reconhece algum desses problemas? Se sim, você não está sozinho. 
            A boa notícia é que existe solução.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl border border-border bg-card hover:border-red-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{problem.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Solution Teaser */}
        <div className="max-w-3xl mx-auto">
          <div className="relative p-8 rounded-2xl border border-accent/30 bg-gradient-to-b from-accent/5 to-transparent">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center">
                <span className="text-3xl">✨</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  A Movili é a solução para esses problemas
                </h3>
                <p className="text-muted-foreground">
                  Desenvolvemos sites profissionais que posicionam sua empresa como referência no mercado 
                  e transformam visitantes em clientes reais.
                </p>
              </div>
              <ArrowRight className="w-6 h-6 text-accent hidden md:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
