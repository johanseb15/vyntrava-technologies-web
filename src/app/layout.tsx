import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Vyntrava Technologies | Software, automatización e inteligencia aplicada',
  description: 'Desarrollo de software, automatización, integraciones y soluciones de datos diseñadas para resolver problemas reales.',
  robots: { index: false, follow: false },
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="es"><body>{children}</body></html>;
}
