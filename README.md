# Vyntrava Technologies Web

Landing corporativa independiente, desarrollada desde cero con Next.js, React Three Fiber, Tailwind CSS y contratos ADEL.

## Inicio
```bash
npm install
npm run dev
```
Abrir http://localhost:3000.

## Verificación
```bash
npm run typecheck
npm test
npm run build
npx playwright install chromium
npm run test:e2e
```

## Despliegue
`next.config.ts` exporta archivos estáticos en `out/`. Compatible con hosting estático; GitHub Pages requiere configurar basePath si se publica bajo subruta del repositorio. No hay despliegue automático habilitado.

## Estado
Prototipo de laboratorio. No se ha verificado aún el build ni Playwright en este entorno. Las imágenes de Unsplash/Pexels se incorporarán tras revisar licencia, origen, peso y relevancia. shadcn/ui está configurado para añadir componentes, pero no se han instalado componentes generados. No se ha ejecutado Superpowers todavía.

## Metodología
Ver `docs/ADEL-WEB-001.md`. Cambios mediante rama y PR, nunca publicación directa sin gates aprobados.
