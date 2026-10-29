# ADEL-WEB-007 · Auditoría de salida institucional

Estado: **RELEASE CANDIDATE · publicación todavía pendiente**.

## Evidencia confirmada
- En el commit `ff1d5a7`, ADEL Quality Gates pasó en GitHub Actions.
- El build/export estático Pages pasó en Windows con `DEPLOY_TARGET=github-pages`.
- Anteriormente 28/28 pruebas browser y 3/3 Vitest pasaron localmente.
- Los cambios posteriores a `ff1d5a7` requieren otra ejecución CI verde.

## Mejoras ya incorporadas
- Página legal describe GitHub Pages y solicitudes a Unsplash.
- Favicon original SVG y metadatos Open Graph.
- Skip link para teclado.
- Smoke tests reproducibles para idioma, navegación, foco, metadatos, encabezados y controles etiquetados.

## Pendientes reales (NO-GO hasta cierre)
1. **Axe / WCAG 2.2 AA**: ejecutar auditoría automatizada exhaustiva + revisión manual, documentar violaciones, corregir severidades critical/serious. Los smoke tests no la reemplazan.
2. **Lighthouse sobre export estático**: desktop + mobile; registrar LCP, CLS, INP/TBT, SEO, accesibilidad y buenas prácticas; no inventar puntajes ni declarar PASS sin medición.
3. **Fotos**: los URL actuales usan images.unsplash.com; licencia general permite uso comercial pero no cubre marcas, personas identificables ni otros derechos de terceros. Identificar/inspeccionar cada foto y registrar evidencias de procedencia y derechos.
4. **Contacto real**: el CTA abre mailto a un correo provisional; enviar correo desde otro proveedor y confirmar recepción/respuesta. Idealmente sustituirlo por canal corporativo verificado.
5. **Política y hosting**: confirmar implementación real antes de publicación, incluyendo URLs de terceros, registros de hosting y obligaciones aplicables.
6. **Revisión visual final**: comparar capturas en múltiples viewports y validar recursos de WebGL/reduced motion.
7. **CI del commit final y deploy HTTPS**: status PASS de ambos workflows, GitHub Pages Settings → Source = GitHub Actions, revisión de / y /politica-de-privacidad/, rollback probado.

## Regla de publicación
- `main` no se modifica de manera automática.
- El workflow manual con parámetro `PUBLICAR` se encuentra inicialmente en la rama de desarrollo y requerirá integración aprobada en `main`.
- `NEXT_PUBLIC_ENABLE_INDEXING=false` mientras el sitio sea un candidato público de validación.
