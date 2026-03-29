"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Quanto tempo leva para desenvolver um site?",
    answer: "O prazo varia de acordo com a complexidade do projeto. Sites institucionais ficam prontos em 2-4 semanas. Projetos mais complexos com funcionalidades específicas podem levar 4-8 semanas. Sempre definimos um cronograma detalhado no início do projeto.",
  },
  {
    question: "Vocês oferecem hospedagem do site?",
    answer: "Sim! Oferecemos planos de hospedagem otimizados para performance, com certificado SSL gratuito, backups automáticos e suporte técnico. Também podemos hospedar em servidores de sua preferência.",
  },
  {
    question: "Podem redesenhar meu site atual?",
    answer: "Com certeza. Fazemos uma análise completa do seu site atual, identificamos pontos de melhoria e desenvolvemos um novo design mantendo o que funciona bem. Também migramos todo o conteúdo sem perder posicionamento no Google.",
  },
  {
    question: "Meu site vai aparecer no Google?",
    answer: "Todos os nossos sites são desenvolvidos com SEO técnico otimizado, o que facilita o ranqueamento. Também oferecemos serviços de SEO contínuo para melhorar ainda mais sua posição nos resultados de busca.",
  },
  {
    question: "Qual o investimento para criar um site?",
    answer: "O valor varia conforme o escopo do projeto. Sites institucionais começam a partir de R$ 3.000. Após entender suas necessidades, enviamos uma proposta detalhada com tudo que está incluso e opções de pagamento flexíveis.",
  },
  {
    question: "Vocês dão suporte após a entrega?",
    answer: "Sim, oferecemos 30 dias de suporte gratuito após o lançamento para ajustes e dúvidas. Depois, temos planos de manutenção mensal que incluem atualizações, backups e suporte contínuo.",
  },
  {
    question: "Posso atualizar o conteúdo do site sozinho?",
    answer: "Sim! Desenvolvemos sites com painel administrativo intuitivo. Você pode editar textos, adicionar imagens e criar novas páginas sem conhecimento técnico. Também fornecemos treinamento completo.",
  },
  {
    question: "Vocês trabalham com outras cidades além da minha?",
    answer: "Atendemos clientes de todo o Brasil. Todo o processo é feito de forma remota através de reuniões online, facilitando a comunicação independente da sua localização.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-6">
            <span className="text-sm text-muted-foreground">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Perguntas{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
              frequentes
            </span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Tire suas dúvidas sobre nosso processo de desenvolvimento
            e serviços oferecidos.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-2xl bg-card px-6 data-[state=open]:border-accent/30"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-accent hover:no-underline py-6 text-base md:text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 max-w-xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">
            Ainda tem dúvidas? Fale diretamente com nossa equipe.
          </p>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:underline"
          >
            Falar no WhatsApp
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
