import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Silva",
    role: "CEO",
    company: "TechSolutions",
    content: "O novo site transformou nossa presença digital. Em 3 meses, triplicamos os leads qualificados. A equipe da Movili entendeu exatamente o que precisávamos.",
    rating: 5,
  },
  {
    name: "Ana Rodrigues",
    role: "Diretora",
    company: "Clínica Odonto Premium",
    content: "Antes, nosso site era apenas um cartão de visitas online. Agora é uma máquina de agendamentos. Os pacientes elogiam a facilidade de uso.",
    rating: 5,
  },
  {
    name: "Roberto Costa",
    role: "Sócio",
    company: "Costa & Advogados",
    content: "A credibilidade que o novo site trouxe para nosso escritório é imensurável. Clientes corporativos começaram a nos encontrar organicamente.",
    rating: 5,
  },
  {
    name: "Mariana Santos",
    role: "Fundadora",
    company: "Consultoria MS",
    content: "Investimento que se pagou em menos de 2 meses. O site profissional me posicionou como autoridade no mercado de consultoria.",
    rating: 5,
  },
  {
    name: "Fernando Lima",
    role: "Diretor Comercial",
    company: "Construtora Lima",
    content: "Os empreendimentos vendem muito mais rápido agora. O site com tour virtual foi um diferencial decisivo para nossos clientes.",
    rating: 5,
  },
  {
    name: "Juliana Mendes",
    role: "Proprietária",
    company: "Academia FitLife",
    content: "Dobrei o número de matrículas após o novo site. A integração com WhatsApp facilita muito a conversão de interessados.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-6">
            <span className="text-sm text-muted-foreground">Depoimentos</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            O que nossos clientes dizem sobre os{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
              resultados
            </span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Empresas reais que transformaram sua presença digital
            e alcançaram resultados expressivos.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl border border-border bg-card hover:border-accent/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-accent/20" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-lg font-semibold text-foreground">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-medium"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <span className="text-sm ml-2">+200 clientes satisfeitos</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm">4.9/5 de avaliação média</span>
          </div>
        </div>
      </div>
    </section>
  )
}
