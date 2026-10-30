# Imágenes de la web — ADEL-OPERATIONS-002

Revisión local: 30 de octubre de 2026. Se inspeccionaron visualmente las seis áreas con fondo fotográfico y las cinco fotografías fuente distintas que figuraban en `globals.css`.

La [licencia de Unsplash](https://unsplash.com/license) permite descargar, copiar y usar sus imágenes en un sitio comercial sin pago ni atribución obligatoria; prohíbe venderlas sin modificación significativa o compilar un servicio competidor. Su [guía sobre terceros](https://help.unsplash.com/en/articles/2646379-what-if-there-s-a-brand-or-identifiable-person-depicted-in-an-image-that-i-download) advierte que marcas, obras y personas identificables pueden requerir permiso adicional. Este registro acredita la fuente y la revisión visual, no una autorización de marcas o modelos externos.

| Uso | Fuente CDN original | Recurso incorporado | SHA-256 | Decisión |
|---|---|---|---|---|
| Hero escritorio | [photo-1497366811353-6870744d04b2](https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=80) | `src/app/images/hero-desktop.jpg` | `9abe8aedc4266ef2ed9625b3d611ef2605e54cb291254700aa4f3f22dd18aecd` | Sala vacía; sin marcas o rostros visibles. |
| Hero móvil | [misma foto, variante móvil](https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=75) | `src/app/images/hero-mobile.jpg` | `3621a87f7759377a05a7231b0c733ea921a3f95a7820b7a3a5aa32257347dc1b` | Mismo criterio. |
| Trabajo | [photo-1516321318423-f06f85e504b3](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80) | `src/app/images/work.jpg` | `6dbf1add8df7a70c004ce521d950645db6f6301783c2e0b645555e677cd02530` | Manos sobre portátil; sin rostro ni marca legible. |
| Oficina pequeña | [photo-1497366754035-f200968a6e72](https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80) | `src/app/images/office.jpg` | `70fc81c83a8a83cc351037eed903fc0eb4ddab35f53a475135203970f7b1a4d6` | Oficina vacía. |
| Contacto | [misma foto, variante amplia](https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80) | `src/app/images/contact.jpg` | `a8c95a4638c8c042fadf043ec3d95b8c3515bcbcfa2663e7c64c24974b7bae22` | Mismo criterio. |
| Industrial | [photo-1581092160562-40aa08e78837](https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80) | `src/app/images/industrial.svg` original | — | La foto mostraba una marca en una caja de herramientas; se excluyó. |
| Datos | [photo-1551288049-bebda4e38f71](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80) | `src/app/images/data.svg` original | — | La foto mostraba una marca en pantalla; se excluyó. |

Los SVG se dibujaron para este repositorio. Las dos fotos excluidas se conservan solo en la evidencia operativa local y no forman parte del build. Next empaqueta las imágenes incluidas en `_next/static/media/`; la variante Pages incorpora el `basePath`. La política de privacidad se actualizó para describir el alojamiento local. Antes de promover, revisar el diff y el reporte visual; esto no modifica la política de `noindex` ni valida un canal comercial real.
