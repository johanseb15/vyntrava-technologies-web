# ADEL-WEB-006 — Release gate institucional

Estado: **CANDIDATO EN VERIFICACIÓN. NO PUBLICAR SIN EJECUTAR EL GATE.**

## Cambios del sprint
- Menú móvil con botón etiquetado, estados ARIA, Escape y control de foco.
- Página `/politica-de-privacidad/` y enlace en el pie.
- Indexación bloqueada por defecto. Habilitar solo al publicar con `NEXT_PUBLIC_ENABLE_INDEXING=true` durante el **build**.
- Pruebas E2E en `e2e/release-gate.spec.ts`.

## Ejecución local
En la rama `develop/adel-web-001`, mantener `main` sin cambios.

```powershell
npm test
npm run typecheck
npm run build
npx playwright test --project=chromium
npx playwright test --project=mobile
npx playwright show-report
```

Si cualquiera falla, corregir con RED→GREEN→REFACTOR, repetir gates y conservar reporte.

## Gate de salida: obligatorios
- [ ] Confirmar contacto comercial y recepción real del correo `sebasmol2010@gmail.com`; reemplazarlo si se habilita canal corporativo.
- [ ] Auditoría manual WCAG 2.2 AA y axe; navegación teclado, foco, enlaces y menú móvil.
- [ ] Lighthouse en build **servido como export estático**, registrar performance, accessibility, SEO y best practices en escritorio y móvil.
- [ ] Licencias/atribuciones de imágenes y derechos de uso comercial verificadas; migrar URLs externas a activos controlados cuando corresponda.
- [ ] Revisar política de privacidad según proveedor de alojamiento definitivo y servicios realmente cargados.
- [ ] Verificar HTTPS, dominio/canonical, Open Graph, favicon, archivo robots/sitemap según hosting y ausencia de rutas rotas.
- [ ] Confirmar 3D/WebGL habilitado y fallback, reduced motion, dispositivos de gama baja.
- [ ] Evidencia visual desktop/mobile comparada con diseño aprobado; aprobación final del fundador.
- [ ] Prueba de extremo a extremo: visitante abre sitio público, navega, toca contacto, correo llega a bandeja elegida.
- [ ] Registrar versión y método de rollback; no publicar por actualizar `main` sin autorización.

## Regla SEO
El default de `NEXT_PUBLIC_ENABLE_INDEXING` es false: aun en `NODE_ENV=production` se genera `noindex`. Activar explícitamente únicamente cuando el dominio definitivo, metadatos y legales estén validados. Recompilar y examinar el HTML exportado.

## Criterio comercial
No inventar clientes, tasas de éxito ni proyectos entregados. Las visualizaciones y prototipos continúan claramente marcados como conceptuales.
