"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Send, CheckCircle2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contato" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Info */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-6">
                <span className="text-sm text-muted-foreground">Contato</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Vamos conversar sobre seu{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
                  projeto?
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Preencha o formulário ou entre em contato diretamente. 
                Nossa equipe responde em até 24 horas úteis.
              </p>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">E-mail</p>
                    <a href="mailto:contato@movili.com.br" className="text-foreground hover:text-accent transition-colors">
                      contato@movili.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <a 
                      href="https://wa.me/5511999999999" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-accent transition-colors"
                    >
                      (11) 99999-9999
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Localização</p>
                    <p className="text-foreground">São Paulo, SP - Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="relative">
              <div className="p-8 rounded-2xl border border-border bg-card">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Mensagem enviada!
                    </h3>
                    <p className="text-muted-foreground">
                      Entraremos em contato em breve.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">
                          Nome
                        </label>
                        <Input
                          id="name"
                          placeholder="Seu nome"
                          required
                          className="bg-secondary border-border focus:border-accent"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                          E-mail
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                          required
                          className="bg-secondary border-border focus:border-accent"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-foreground">
                          WhatsApp
                        </label>
                        <Input
                          id="phone"
                          placeholder="(11) 99999-9999"
                          required
                          className="bg-secondary border-border focus:border-accent"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium text-foreground">
                          Empresa
                        </label>
                        <Input
                          id="company"
                          placeholder="Nome da empresa"
                          className="bg-secondary border-border focus:border-accent"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium text-foreground">
                        Interesse principal
                      </label>
                      <Select>
                        <SelectTrigger className="bg-secondary border-border focus:border-accent">
                          <SelectValue placeholder="Selecione um serviço" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="site">Criação de Site</SelectItem>
                          <SelectItem value="redesign">Redesign de Site</SelectItem>
                          <SelectItem value="ecommerce">E-commerce</SelectItem>
                          <SelectItem value="landing">Landing Page</SelectItem>
                          <SelectItem value="marketing">Marketing Digital</SelectItem>
                          <SelectItem value="outros">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Mensagem
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Conte um pouco sobre seu projeto..."
                        rows={4}
                        className="bg-secondary border-border focus:border-accent resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 gap-2"
                    >
                      Enviar Mensagem
                      <Send className="w-4 h-4" />
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Ao enviar, você concorda com nossa política de privacidade.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
