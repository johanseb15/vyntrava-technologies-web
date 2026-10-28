import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vyntrava Technologies | Ingeniería de software, datos y automatización',
  description: 'Desarrollamos software a medida, automatizaciones y soluciones de datos para empresas. Ingeniería verificable orientada a problemas reales.',
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
