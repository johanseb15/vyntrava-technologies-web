# VYNTRAVA-WEB-PORTFOLIO-001 — Recuperación y validación de sitios

**Fecha de auditoría inicial:** 2026-10-30  
**Estado:** INVENTARIO INICIAL / BLOQUEADO PARA PROMOCIÓN COMERCIAL.  
**Alcance:** repositorios de `johanseb15` inspeccionados mediante GitHub, sin ejecutar builds ni auditoría visual de navegador.  
**Gobernanza:** fundador aprueba publicación/afirmaciones comerciales; CTO/Codex verifica técnicamente; ADEL obligatorio. Sin cambios directos a ramas productivas.

## 1. Objetivo de negocio

Convertir proyectos web existentes en una cartera demostrable de Vyntrava Technologies: **sitios y flujos realmente funcionales**, con dominio/URL accesible, experiencia móvil y evidencia reproducible. La prioridad no es añadir efectos: es mostrar capacidad para resolver un problema comercial. Evitar atribuir clientes, ventas, inmobiliarias, propiedad intelectual, datos reales o resultados no acreditados. Las demos deben estar identificadas como tales.

## 2. Inventario y preclasificación

Estado **NO VERIFICADO** en todos los casos hasta obtener pruebas de navegador, CI, seguridad y aprobación de publicación. Clasificación provisional basada en código y documentación, no en resultados de ejecución.

| Repo | Tipo / potencial | Hallazgo observable | Decisión inicial |
| --- | --- | --- | --- |
| [vyntrava-technologies-web](https://github.com/johanseb15/vyntrava-technologies-web) | Landing corporativa y entrada de ventas | Next.js 15, Vitest, Playwright, R3F; `next.config.ts` prevé export estático y `basePath` condicionado | **P0**, validar navegación, contacto REAL, despliegue, mobile, 3D con fallback y evidencia |
| [m2-web-agency](https://github.com/johanseb15/m2-web-agency) | Sitio de servicios + calculadora comercial / PDF | `src/app/api/contact/route.ts` responde 200 y «Mensaje recibido» pero no persiste ni envía mensaje; `ContactForm` lo muestra como enviado | **P0**, bloquear falsa confirmación y diseñar entrega real con prueba E2E |
| [andes-habitat](https://github.com/johanseb15/andes-habitat) | Vertical inmobiliario Astro | Hero contiene CTA `href="#"`; `src/lib/properties.ts` publica fichas y precios de muestra sin acreditar ofertas reales | **P1**, corregir CTA/rutas, diferenciar DEMO y validar fichas |
| [la-vida-en-rosa](https://github.com/johanseb15/la-vida-en-rosa) | Landing de salón de uñas | `package.json` usa `latest` en Next/React/TypeScript y solo script build; evidencia de tests insuficiente | **P1**, estabilizar dependencias, revisar permisos de marca y canal de reserva |
| [movie-app](https://github.com/johanseb15/movie-app) | Demostración API/UI | Vite/React/Vitest, despliegue Pages declarado; requiere `VITE_TMDB_API_KEY` incorporada en build; verificar políticas/alcance y fallback | **P2**, auditar credenciales expuestas, UX móvil, deep links, estados 401/429 y publicación |
| [apaleco-uiux](https://github.com/johanseb15/apaleco-uiux) | Demo de tecnología médica | Rama por defecto `gh-pages`; hallado HTML compilado Next.js; código fuente no verificado en esa rama | **RECUPERAR FUENTE** y verificar legitimidad de afirmaciones médicas |
| [Prueba](https://github.com/johanseb15/Prueba) | App de finanzas personales React/PWA | README afirma a11y, seguridad y PWA sin evidencias actuales; `package.json` sin script tests | **P2 / AUDITAR** persistencia, privacidad, dependencias y flujo real |
| [VENTO](https://github.com/johanseb15/VENTO) | E-commerce full-stack | Next/Prisma/Auth/Stripe/Resend; README incluye pasos manuales para completar integración de Fase 4 | **CUARENTENA COMERCIAL** hasta auditoría integral de auth, pagos, datos y despliegue |
| [client](https://github.com/johanseb15/client) | Dashboard React/Recharts | README es plantilla Vite genérica y no documenta el caso de uso; script Vitest sin evidencia de suite | **IDENTIFICAR PRODUCTO** antes de mostrar |
| [WhoLivesHere](https://github.com/johanseb15/WhoLivesHere) | Juego web, demostración técnica | Vitest/Playwright presentes; README describe 5 hogares, evolución local a 20 pendiente de validación en main | **P2**, no promocionar sin pruebas visuales, partida completa y validación del interés |

**Fuera de este lote web:** `scraper_enki`, `EnkiLabWorkspace`, `DB-Futbol`, `ADEL-Framework`, `Youth-Centric-Smart-Savings-App`, laboratorios y herramientas no orientadas a sitio público. Se consideran capacidades internas o propuestas separadas, no se fuerzan al catálogo de webs.

## 3. Metodología ADEL por repositorio

1. **DISCOVER / BROWNFIELD:** inventariar rutas, dependencias, scripts, remotos, permisos, pruebas, despliegues y contrato comercial. Fotografiar estado actual mediante Playwright antes de tocar código. No actualizar frameworks por rutina.
2. **SPEC:** especificar público, problema, oferta, CTA, evidencia de demo, recorridos positivos/negativos, accesibilidad y restricciones de datos/licencia.
3. **RED:** test que reproduzca un fallo real. Conservar comando, salida, timestamp y commit base; el fallo debe deberse al comportamiento requerido, no a un problema del entorno.
4. **GREEN:** corrección mínima, sin reescritura no justificada; verificar test específico más regresión.
5. **REFACTOR:** simplificar componentes, arquitectura visual/tokens y dependencias sin alterar contratos.
6. **GATES:** typecheck, lint, tests unitarios, integración, E2E, build, análisis de secretos/dependencias, screenshots y accesibilidad manual+automática; CI reproducible por PR.
7. **PROMOCIÓN:** staging y URL pública comprobados por HTTP/navegador, evidencia y consentimiento del titular para usar marca/casos; recién entonces etiqueta `PORTFOLIO_READY` y mención en Vyntrava.

## 4. Contrato transversal mínimo de PORTFOLIO_READY

- **Función:** 100% de recorridos críticos especificados pasan E2E (contacto con entrega y recibo comprobables; formularios y navegación, rutas directas, errores controlados). Ningún CTA ficticio ni confirmación de acción no realizada.
- **Evidencia:** informes de Vitest/Playwright/CI con SHA y fecha; todas las pruebas obligatorias en verde. La ausencia de test NO equivale a éxito.
- **Visual:** comparación con baseline en 320×568, 390×844, 768×1024 y 1366×768; sin cortes, scroll horizontal no esperado, solapes ni imágenes rotas. Capturas revisadas humanamente.
- **Accesibilidad:** objetivo WCAG 2.2 AA, axe y evaluación manual (teclado, foco, labels, contraste, reduced-motion, zoom 200%). No afirmar conformidad total sin auditoría completa.
- **Rendimiento:** Lighthouse CI mobile en páginas representativas, umbrales acordados con baseline; Core Web Vitals observados donde haya datos, no inventados. Presupuestar imágenes/fuentes/JS/3D.
- **Seguridad:** secretos fuera de bundle y Git; `VITE_*` es público en cliente. Audit de dependencias, manejo de PII, formularios con límites/rate limiting/anti-spam adecuado, sin analytics invasiva ni cobros simulados como reales.
- **Comercial y legal:** contenido veraz, datos ficticios rotulados, licencias de imágenes/fuentes/iconos confirmadas, derechos de uso de marca y propiedad intelectual; contacto operativo y aviso legal/política cuando corresponda.
- **Publicación:** URL final accesible con HTTPS, navegación real por móvil y escritorio, smoke test postdeploy y rollback definido.
- **Privacidad:** no introducir testimonios, clientes, métricas, listados inmobiliarios ni fotografías externas como prueba factual sin fuentes y permisos.

## 5. Herramientas evaluadas: adopción condicionada

- **Ingeniería:** Codex como CTO, PowerShell/Node/Python local para operaciones deterministas, Superpowers para diagnóstico/planeamiento; modelos Ollama/Qwen locales donde ahorren costo. No consumir modelos pagos innecesariamente.
- **Validación:** Vitest cuando corresponda, Playwright con Chromium y snapshots, axe-core, Lighthouse CI, GitHub Actions, auditoría de secretos/dependencias, SonarQube/SonarCloud si ya está configurado. No instalar todo automáticamente.
- **Diseño:** biblioteca [VYNTRAVA-DESIGN-INTELLIGENCE-001](VYNTRAVA-DESIGN-INTELLIGENCE-001.md): Refero Styles, Supahero, Navbar Gallery, CTA Gallery, Footer Design como referencias prioritarias; Scrolltide, 3dicons y glass solo tras verificar derechos, costo, utilidad y rendimiento.
- **Implementación visual:** reutilizar Tailwind/React/Next/Astro donde existan; shadcn/ui, R3F/Three.js, Motion, GSAP, 3D, efectos glass solo si mejoran interacción, no por moda. Priorizar lectura y conversión. Garantizar fallback sin WebGL y reduced-motion.
- **Diseño y revisión:** Figma/Canva/Mobbin pueden aportar referencias y especificaciones si hay conexión y licencia; no son gates por sí solos.

## 6. Primeros sprints de ejecución

### VWEB-001 — Entrada comercial Vyntrava
- Asegurar URL pública, CTA y contacto funcional/verificable; documentar si es mailto o entrega real.
- Revalidar CI actual y cambios fusionados; no confiar en README desactualizado.
- Evidencia: Playwright navegación y contacto + captura móvil/escritorio + prueba de publicación.
- Criterio: solo entonces publicar enlaces a demos aprobadas.

### VWEB-002 — M2 Agencia: evitar confirmación falsa
- **RED obligatorio:** petición válida a `POST /api/contact` no puede reportar éxito cuando no existe mecanismo comprobable de entrega. Probar también configuración ausente, errores upstream, datos inválidos, duplicados/abuso básico.
- **GREEN esperado:** integración operativa configurada con proveedor de email o backend autorizado; fallo explícito y reintento si entrega no confirmada. Pruebas con mocks y una prueba manual de recepción real al desplegar.
- Auditar calculadora: monedas/unidades, base de precios, validación, rutas y export PDF; no hacer pasar estimaciones ilustrativas como ofertas vinculantes.

### VWEB-003 — Andes Hábitat
- **RED obligatorio:** los CTA «Ver propiedades» y «Contactanos» deben llevar a destinos funcionales; tarjetas deben resolver a páginas existentes o acciones honestas.
- **GREEN:** anclas/rutas reales, formulario o canal operativo y señalización inequívoca de inmuebles y precios ficticios hasta autorización de datos.
- Validación de navegación, ficha y CTA en móviles y desktop.

### VWEB-004 — Belleza/servicios locales
- Auditar `la-vida-en-rosa`; hacer estable el lockfile y dependencias, formalizar horario/cita/contacto (si es demo, rotularlo), comprobar fuentes y autorizaciones de marca.
- E2E de la conversión principal y regresión visual.

### VWEB-005 — Portfolio técnico secundario
- `movie-app`, `Prueba`, `WhoLivesHere`, `apaleco-uiux`, `client` y `VENTO`: ejecutar diagnóstico específico; prioridad según funcionalidad + calidad + relevancia comercial. E-commerce/auth/finanzas/claims médicos requieren gates reforzados.

## 7. Bitácora de evidencia y límites de esta auditoría

**Verificado por inspección de archivos GitHub:** nombres/ramas por defecto, `package.json`, varios README, rutas de código específicas y documentación de diseño.  
**NO VERIFICADO:** compilación actual, tests ejecutados, performance, resultado de formularios reales, recepción de mensajes, disponibilidad pública por navegador, licencias de activos y permisos para uso de marcas.  
**Prohibido:** cerrar una tarea por existencia de código, por texto del README, por PR fusionada o por test no ejecutado.  
**Salida del CTO por incremento:** `repo / branch / commit / RED prueba y salida / GREEN / REFACTOR / CI / screenshots / riesgos / pendiente / decisión de promoción`.

## 8. Primera orden de ejecución recomendada

Auditoría read-only de `vyntrava-technologies-web`, `m2-web-agency`, `andes-habitat` y `la-vida-en-rosa` en la notebook. Ejecutar en este orden con presupuesto 0, sin actualizaciones globales, sin push ni deploy hasta revisión. Tomar baseline reproducible y escoger UN fallo crítico reproducido como primer RED. Luego PR por repositorio, CI obligatorio y validación independiente. Las demás quedan en inventario, no se prometen como terminadas.
