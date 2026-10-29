import type { Metadata } from 'next';
import { IBM_Plex_Sans, Manrope } from 'next/font/google';
import './globals.css';

const displayFont = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

const bodyFont = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-plex',
});

export const metadata: Metadata = {
  title: 'Vyntrava Technologies | Ingeniería de software, datos y automatización',
  description: 'Desarrollamos software a medida, automatizaciones y soluciones de datos para empresas. Ingeniería verificable orientada a problemas reales.',
  applicationName: 'Vyntrava Technologies',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    siteName: 'Vyntrava Technologies',
    title: 'Vyntrava Technologies | Software, datos y automatización',
    description: 'Soluciones empresariales de software, datos, automatización e inteligencia artificial aplicada.',
  },
  robots: { index: process.env.NEXT_PUBLIC_ENABLE_INDEXING === 'true', follow: process.env.NEXT_PUBLIC_ENABLE_INDEXING === 'true' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className={`${displayFont.variable} ${bodyFont.variable}`}>
    <head>
      <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
      <link rel="preload" as="image" href="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=75" media="(max-width: 620px)" fetchPriority="high" />
      <link rel="preload" as="image" href="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=80" media="(min-width: 621px)" fetchPriority="high" />
    </head>
    <body>{children}</body>
  </html>;
}
