import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { Problems } from "@/components/sections/problems"
import { Features } from "@/components/sections/features"
import { Process } from "@/components/sections/process"
import { Portfolio } from "@/components/sections/portfolio"
import { Services } from "@/components/sections/services"
import { Results } from "@/components/sections/results"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import { CTA } from "@/components/sections/cta"
import { ContactForm } from "@/components/sections/contact-form"
import { Footer } from "@/components/sections/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Problems />
      <Features />
      <Process />
      <Portfolio />
      <Services />
      <Results />
      <Testimonials />
      <FAQ />
      <CTA />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
