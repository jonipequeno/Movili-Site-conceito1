import { 
  Eye, 
  Users, 
  Award, 
  Globe, 
  TrendingUp,
  CheckCircle2
} from "lucide-react"

const benefits = [
  {
    icon: Eye,
    title: "Mais Visibilidade",
    description: "Seu negócio aparece no Google quando clientes buscam seus serviços. Presença digital que trabalha 24/7.",
  },
  {
    icon: Users,
    title: "Mais Leads Qualificados",
    description: "Visitantes que chegam ao seu site já estão interessados. Estrutura de conversão que captura contatos.",
  },
  {
    icon: Award,
    title: "Marca Fortalecida",
    description: "Design profissional que transmite credibilidade. Sua empresa é vista como referência no mercado.",
  },
  {
    icon: Globe,
    title: "Presença Digital Completa",
    description: "Site como hub central conectado às suas redes sociais, WhatsApp e outras plataformas.",
  },
  {
    icon: TrendingUp,
    title: "Crescimento Escalável",
    description: "Infraestrutura preparada para crescer junto com seu negócio sem precisar recomeçar do zero.",
  },
]

const metrics = [
  { value: "+300%", label: "Aumento médio em leads" },
  { value: "+150%", label: "Crescimento em visibilidade" },
  { value: "3x", label: "Retorno sobre investimento" },
  { value: "95%", label: "Taxa de satisfação" },
]

export function Results() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-6">
            <span className="text-sm text-muted-foreground">Resultados</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            O que sua empresa ganha com um{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
              site profissional
            </span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Investir em presença digital não é custo, é investimento com retorno mensurável.
            Veja o que nossos clientes conquistaram.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-border bg-card text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-accent mb-2">
                {metric.value}
              </p>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-border bg-card hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="relative p-8 rounded-2xl border border-accent/30 bg-gradient-to-b from-accent/5 to-transparent">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Garantia de Satisfação
                </h3>
                <p className="text-muted-foreground">
                  Trabalhamos até você estar 100% satisfeito com o resultado. Nosso compromisso 
                  é entregar um site que realmente gere valor para seu negócio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
