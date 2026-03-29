"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const trustIndicators = [
  "Sites otimizados para SEO",
  "Design responsivo",
  "Suporte dedicado",
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-background to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_var(--border)_1px,_transparent_1px),linear-gradient(to_bottom,_var(--border)_1px,_transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Especialistas em Desenvolvimento Web
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance">
            Sites Profissionais que{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
              Transformam Visitantes
            </span>{" "}
            em Clientes
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty leading-relaxed">
            Desenvolvemos sites de alta performance com design moderno, otimização para SEO
            e foco total em conversão. Sua presença digital profissional começa aqui.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 h-12 px-8 text-base gap-2 group"
              asChild
            >
              <Link href="#orcamento">
                Solicitar Site
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-12 px-8 text-base gap-2 border-border hover:bg-secondary"
              asChild
            >
              <Link href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                Falar no WhatsApp
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {trustIndicators.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Visual */}
        <div className="mt-16 lg:mt-24 relative">
          <div className="relative mx-auto max-w-5xl">
            {/* Browser Mockup */}
            <div className="relative rounded-xl overflow-hidden border border-border bg-card shadow-2xl shadow-accent/5">
              {/* Browser Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-md bg-background/50 text-sm text-muted-foreground">
                    <div className="w-3 h-3 rounded-full bg-accent/50" />
                    seusite.com.br
                  </div>
                </div>
              </div>
              
              {/* Website Preview */}
              <div className="aspect-[16/9] bg-gradient-to-br from-secondary via-background to-secondary p-8 flex items-center justify-center">
                <div className="w-full max-w-2xl space-y-6">
                  <div className="h-8 w-32 bg-border/50 rounded-lg" />
                  <div className="h-12 w-3/4 bg-border/30 rounded-lg" />
                  <div className="h-4 w-full bg-border/20 rounded" />
                  <div className="h-4 w-5/6 bg-border/20 rounded" />
                  <div className="flex gap-4 pt-4">
                    <div className="h-10 w-32 bg-accent/50 rounded-lg" />
                    <div className="h-10 w-32 bg-border/30 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 lg:-right-12 p-4 rounded-xl bg-card border border-border shadow-xl hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent text-lg">📈</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">+300%</p>
                  <p className="text-xs text-muted-foreground">em leads</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 lg:-left-8 p-4 rounded-xl bg-card border border-border shadow-xl hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent text-lg">⚡</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">100/100</p>
                  <p className="text-xs text-muted-foreground">PageSpeed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
