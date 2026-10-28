# ADEL-WEB-001 — Primer contrato de calidad

## Objetivo
Una landing comercial útil incluso sin soporte WebGL, JavaScript de animaciones o permisos de seguimiento.

## RED
La prueba `tests/landing.test.tsx` define los contratos de propuesta de valor, servicios y contacto sin renderizar WebGL. Para observar RED, ejecutar la prueba contra una implementación que no tenga los elementos requeridos, antes de construirlos.

## GREEN
Implementar el contenido semántico, los enlaces y la alternativa estática de la escena 3D.

## REFACTOR
Aislar el canvas en un componente cliente cargado dinámicamente; limitar DPR y deshabilitar 3D con reduced-motion o puntero grueso.

## Gates pendientes
- npm ci, typecheck, Vitest, Next build y Playwright en entorno con acceso a npm
- auditoría visual responsive, Lighthouse móvil y accesibilidad
- validación de identidad, textos comerciales, correo de contacto y licencias de imágenes
- revisión de Superpowers y seguridad de dependencias
- autorización expresa antes de publicar

## Alcance
No usar datos personales en analítica, ni credenciales, ni APIs facturables. No usar imágenes remotas sin comprobar procedencia y derechos. La landing inicial emplea visuales CSS y geometría 3D propia.
