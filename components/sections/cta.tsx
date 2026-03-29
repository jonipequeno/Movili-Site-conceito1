"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section id="orcamento" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-background to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 lg:p-16 rounded-3xl border border-border bg-card/50 backdrop-blur-sm">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-accent/30 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-accent/30 rounded-br-3xl" />

            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 mb-8">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm text-accent font-medium">
                  Vagas limitadas por mês
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Pronto para transformar seu site em uma{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
                  máquina de clientes?
                </span>
              </h2>

              {/* Subheadline */}
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
                Solicite um orçamento sem compromisso e descubra como podemos 
                elevar a presença digital da sua empresa ao próximo nível.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-10 text-lg gap-2 group"
                  asChild
                >
                  <Link href="#contato">
                    Solicitar Orçamento
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="h-14 px-10 text-lg gap-2 border-border hover:bg-secondary"
                  asChild
                >
                  <Link href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Falar no WhatsApp
                  </Link>
                </Button>
              </div>

              {/* Trust Elements */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span>Orçamento gratuito</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span>Resposta em 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span>Sem compromisso</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
