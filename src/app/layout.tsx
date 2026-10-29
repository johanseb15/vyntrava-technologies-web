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
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className={`${displayFont.variable} ${bodyFont.variable}`}><body>{children}</body></html>;
}
