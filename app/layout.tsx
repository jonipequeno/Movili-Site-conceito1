import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'Movili Tecnologia | Sites Profissionais que Geram Resultados',
  description: 'Desenvolvemos sites de alta performance que transformam visitantes em clientes. Presença digital profissional, SEO otimizado e design moderno para o seu negócio crescer.',
  keywords: 'sites profissionais, desenvolvimento web, marketing digital, criação de sites, SEO, geração de leads, presença digital',
  authors: [{ name: 'Movili Tecnologia' }],
  openGraph: {
    title: 'Movili Tecnologia | Sites Profissionais que Geram Resultados',
    description: 'Desenvolvemos sites de alta performance que transformam visitantes em clientes.',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: 'index, follow',
}

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
