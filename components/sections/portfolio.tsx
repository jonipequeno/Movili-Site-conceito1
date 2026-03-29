import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const projects = [
  {
    title: "Clínica Odontológica Premium",
    category: "Saúde",
    description: "Site institucional com agendamento online e integração com WhatsApp.",
    tags: ["Site Institucional", "Agendamento", "SEO"],
  },
  {
    title: "Escritório de Advocacia",
    category: "Jurídico",
    description: "Presença digital profissional com blog jurídico e formulário de consulta.",
    tags: ["Landing Page", "Blog", "Lead Capture"],
  },
  {
    title: "Construtora & Incorporadora",
    category: "Construção",
    description: "Catálogo de empreendimentos com tour virtual e simulador de financiamento.",
    tags: ["Catálogo", "Integração", "Conversão"],
  },
  {
    title: "Consultoria Empresarial",
    category: "Business",
    description: "Site focado em autoridade com cases de sucesso e captação de leads.",
    tags: ["Autoridade", "Cases", "B2B"],
  },
  {
    title: "Academia & Fitness",
    category: "Saúde",
    description: "Landing page de alta conversão com planos e área do aluno.",
    tags: ["Landing Page", "Área do Cliente", "Conversão"],
  },
  {
    title: "Escritório de Contabilidade",
    category: "Serviços",
    description: "Portal com área do cliente e integração com sistema contábil.",
    tags: ["Portal", "Integração", "Dashboard"],
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-6">
            <span className="text-sm text-muted-foreground">Portfólio</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Sites que{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
              entregam resultados
            </span>{" "}
            reais
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Conheça alguns dos projetos que desenvolvemos para empresas
            de diferentes segmentos do mercado.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-accent/30 transition-all duration-300"
            >
              {/* Project Preview */}
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary via-secondary/50 to-secondary p-6 flex items-center justify-center relative overflow-hidden">
                {/* Mockup */}
                <div className="w-full h-full rounded-lg bg-background/50 border border-border/50 flex flex-col p-3">
                  <div className="flex gap-1.5 mb-3">
                    <div className="w-2 h-2 rounded-full bg-border" />
                    <div className="w-2 h-2 rounded-full bg-border" />
                    <div className="w-2 h-2 rounded-full bg-border" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="h-3 w-1/3 bg-border/50 rounded" />
                    <div className="h-6 w-3/4 bg-border/30 rounded" />
                    <div className="h-2 w-full bg-border/20 rounded" />
                    <div className="h-2 w-5/6 bg-border/20 rounded" />
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 text-accent-foreground" />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-accent font-medium px-2 py-1 rounded-full bg-accent/10">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs text-muted-foreground px-2 py-1 rounded-md bg-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="h-12 px-8 border-border hover:bg-secondary gap-2"
            asChild
          >
            <Link href="#orcamento">
              Quero um site assim
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
