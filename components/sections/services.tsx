import { 
  BarChart3, 
  Share2, 
  Database, 
  Lightbulb, 
  GraduationCap, 
  Bot,
  ArrowRight
} from "lucide-react"

const services = [
  {
    icon: BarChart3,
    title: "Tráfego Pago",
    description: "Campanhas de Google Ads e Meta Ads otimizadas para trazer clientes qualificados ao seu site.",
    highlight: "Atraia clientes",
  },
  {
    icon: Share2,
    title: "Gestão de Redes Sociais",
    description: "Criação de conteúdo, gestão de perfis e estratégia de engajamento para fortalecer sua marca.",
    highlight: "Engaje seu público",
  },
  {
    icon: Database,
    title: "Implementação de CRM",
    description: "Organize sua base de clientes, automatize follow-ups e nunca perca uma oportunidade de venda.",
    highlight: "Organize suas vendas",
  },
  {
    icon: Lightbulb,
    title: "Consultoria de Marketing",
    description: "Análise estratégica do seu negócio e criação de plano de ação personalizado para crescer.",
    highlight: "Planeje seu crescimento",
  },
  {
    icon: GraduationCap,
    title: "Treinamento Comercial",
    description: "Capacite sua equipe com técnicas modernas de vendas e atendimento ao cliente.",
    highlight: "Venda mais",
  },
  {
    icon: Bot,
    title: "Automação e Chatbots",
    description: "Automatize atendimento no WhatsApp e Instagram. Responda clientes 24/7 sem aumentar custos.",
    highlight: "Automatize processos",
  },
]

export function Services() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-6">
            <span className="text-sm text-muted-foreground">Serviços Complementares</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Potencialize os resultados do seu site com{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
              soluções integradas
            </span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Seu site é o centro da sua presença digital. Combine-o com nossas 
            soluções complementares para maximizar resultados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-border bg-card hover:border-accent/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-6 flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <service.icon className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <span className="text-xs text-accent font-medium px-3 py-1 rounded-full bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity">
                  {service.highlight}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Link */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-accent transition-colors cursor-pointer">
                <span>Saiba mais</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Integration Note */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="relative p-8 rounded-2xl border border-border bg-card text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Resultados amplificados quando integrados
              </h3>
              <p className="text-muted-foreground max-w-xl">
                Cada serviço funciona de forma independente, mas quando combinados com um site profissional, 
                os resultados se multiplicam. Consulte nossos especialistas para criar a estratégia ideal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
