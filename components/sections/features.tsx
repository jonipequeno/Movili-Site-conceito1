import { 
  Search, 
  Zap, 
  Smartphone, 
  Palette, 
  Target, 
  TrendingUp 
} from "lucide-react"

const features = [
  {
    icon: Search,
    title: "SEO Otimizado",
    description: "Estrutura técnica perfeita para ranquear no Google. Seu site será encontrado por quem procura seus serviços.",
  },
  {
    icon: Zap,
    title: "Carregamento Ultra-Rápido",
    description: "Sites que carregam em menos de 3 segundos. Visitantes não esperam e o Google valoriza velocidade.",
  },
  {
    icon: Smartphone,
    title: "100% Responsivo",
    description: "Design que se adapta perfeitamente a celulares, tablets e desktops. Experiência impecável em qualquer dispositivo.",
  },
  {
    icon: Palette,
    title: "Design UX/UI Premium",
    description: "Interface moderna e intuitiva que transmite profissionalismo e guia o visitante até a conversão.",
  },
  {
    icon: Target,
    title: "Focado em Conversão",
    description: "Cada elemento estrategicamente posicionado para transformar visitantes em leads qualificados.",
  },
  {
    icon: TrendingUp,
    title: "Estrutura Escalável",
    description: "Arquitetura preparada para crescer com seu negócio. Fácil de atualizar e expandir.",
  },
]

export function Features() {
  return (
    <section id="servicos" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-6">
            <span className="text-sm text-muted-foreground">Desenvolvimento de Sites</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Sites profissionais construídos para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
              gerar resultados
            </span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Não criamos apenas sites bonitos. Desenvolvemos máquinas de geração de leads
            com tecnologia de ponta e estratégia de conversão.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-border bg-card hover:border-accent/30 hover:bg-card/80 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: "200+", label: "Sites Entregues" },
            { value: "98%", label: "Clientes Satisfeitos" },
            { value: "5 anos", label: "de Experiência" },
            { value: "24h", label: "Suporte Rápido" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
