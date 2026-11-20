# vyntrava-technologies-web

> **Ficha de proyecto — Vyntrava | 2026-11-20**
> Revisión documental del repositorio. Esta ficha no certifica un despliegue ni un estado de producción.

## Para qué sirve

**Sitio corporativo de Vyntrava Technologies.** Aplicación Next.js/TypeScript con React Three Fiber, UI y contratos ADEL; incorpora documentación de dirección visual y procesos de QA.

## Estado y límites

El README documenta un estado de prototipo; no certifica publicación de producción. No mezclar desarrollo del sitio con datos de recuperación o material comercial sensible.

## Lugar en el portfolio

Punto de entrada corporativo y vitrina de productos; futura integración de estimador comercial solo previa SPEC, test RED y aprobación.

[Consultar repositorio](https://github.com/johanseb15/vyntrava-technologies-web)

---

> **README técnico original:** se conserva íntegro a continuación.

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

## Conocimiento de diseño Vyntrava

La biblioteca de referencias de interfaces, patrones de conversión y efectos visuales se mantiene en [VYNTRAVA-DESIGN-INTELLIGENCE-001](docs/VYNTRAVA-DESIGN-INTELLIGENCE-001.md). Es investigación para diseño y futuros productos; no incorpora dependencias, pagos ni recursos de terceros sin licencia verificada.
