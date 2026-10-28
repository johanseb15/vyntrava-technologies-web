import { test, expect } from '@playwright/test';

/**
 * ADEL-WEB-003 — Capturas y controles de diseño, sin baselines artificiales.
 * Evidencia en test-results; las imágenes requieren aprobación visual humana.
 */
const sizes = [
  { name: 'mobile-320', width: 320, height: 568 },
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'notebook-1366', width: 1366, height: 768 },
  { name: 'desktop-1440', width: 1440, height: 900 },
] as const;

const sections = [
  { id: 'inicio', label: 'inicio' },
  { id: 'servicios', label: 'servicios' },
  { id: 'proyectos', label: 'proyectos' },
  { id: 'productos', label: 'productos' },
  { id: 'ingenieria', label: 'ingenieria' },
  { id: 'contacto', label: 'contacto' },
] as const;

for (const size of sizes) {
  test(`ADEL Visual Gate — ${size.name}: capturas y geometría`, async ({ page }, testInfo) => {
    await page.setViewportSize({ width: size.width, height: size.height });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/', { waitUntil: 'networkidle' });
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    // Conservar las capturas incluso si una verificación geométrica falla.
    await testInfo.attach(`pagina-completa-${size.name}`, {
      body: await page.screenshot({ fullPage: true, animations: 'disabled' }),
      contentType: 'image/png',
    });

    const issues: string[] = [];
    const documentWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    if (documentWidth > size.width + 2) {
      issues.push(`Desbordamiento horizontal: ${documentWidth}px en ${size.width}px`);
    }

    for (const section of sections) {
      const target = page.locator(`#${section.id}`);
      await expect(target).toHaveCount(1);
      await target.scrollIntoViewIfNeeded();
      await testInfo.attach(`${section.label}-${size.name}`, {
        body: await target.screenshot({ animations: 'disabled' }),
        contentType: 'image/png',
      });
      const geometry = await target.evaluate((element) => {
        const r = element.getBoundingClientRect();
        return { left: r.left, right: r.right, width: r.width, height: r.height };
      });
      if (geometry.width < 1 || geometry.height < 1) issues.push(`Sección sin dimensiones: ${section.id}`);
      if (geometry.left < -2 || geometry.right > size.width + 2) {
        issues.push(`Sección recortada: ${section.id} (${geometry.left}, ${geometry.right})`);
      }
    }
    expect(issues, issues.join('\n')).toEqual([]);
  });
}

test('ADEL Visual Gate — fallback 3D y movimiento reducido', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 1366, height: 768 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.addInitScript(() => {
    HTMLCanvasElement.prototype.getContext = () => null;
  });
  await page.goto('/');
  const scene = page.getByRole('img', { name: /diagrama de arquitectura: servicios conectados mediante flujos de datos/i });
  await expect(scene).toBeVisible();
  await expect(scene.locator('.architecture-fallback')).toBeVisible();
  await testInfo.attach('adel-fallback-3d', {
    body: await scene.screenshot({ animations: 'disabled' }),
    contentType: 'image/png',
  });
});

test('ADEL Visual Gate — recursos fotográficos visibles cargan correctamente', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  const resourceState = await page.evaluate(async () => {
    const selectors = ['.hero-photo','.work-photo','.stack-image-industrial','.stack-image-data','.stack-image-office','.contact-photo'];
    return await Promise.all(selectors.map(async (selector) => {
      const element = document.querySelector(selector);
      if (!element) return { selector, ok: false, reason: 'MISSING_ELEMENT' };
      const bg = getComputedStyle(element).backgroundImage;
      const urls = Array.from(bg.matchAll(/url\\(["']?([^"')]+)["']?\\)/g)).map(match => match[1]);
      if (urls.length === 0) return { selector, ok: false, reason: 'NO_PHOTO_URL' };
      const url = urls[0];
      const img = new Image();
      img.src = url;
      try {
        await Promise.race([
          img.decode(),
          new Promise((_, reject) => setTimeout(() => reject(new Error('TIMEOUT')), 12000)),
        ]);
        return { selector, ok: img.naturalWidth > 0, reason: 'IMAGE_DECODE' };
      } catch { return { selector, ok: false, reason: 'LOAD_ERROR' }; }
    }));
  });
  expect(resourceState.filter(item => !item.ok), JSON.stringify(resourceState, null, 2)).toEqual([]);
});
