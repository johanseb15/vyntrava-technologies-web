import { test, expect } from '@playwright/test';

/** ADEL-WEB-005: evidencia de fuentes realmente cargadas, no solo declaradas en CSS. */
test('tipografía corporativa: fuentes descargadas y capturas comparables', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 1366, height: 768 });
  await page.goto('/', { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);

  const result = await page.evaluate(() => {
    const heading = document.querySelector('h1');
    const getFont = (element: Element | null) => element ? getComputedStyle(element).fontFamily : '';
    const faces = Array.from(document.fonts).map(face => ({
      family: face.family,
      status: face.status,
      weight: face.weight,
    }));
    return {
      headingFont: getFont(heading),
      bodyFont: getFont(document.body),
      manropeLoaded: faces.some(face => face.family.replace(/["']/g, '') === 'Manrope' && face.status === 'loaded'),
      plexLoaded: faces.some(face => face.family.replace(/["']/g, '') === 'IBM Plex Sans' && face.status === 'loaded'),
      faces,
    };
  });

  await testInfo.attach('diagnostico-tipografico.json', {
    body: Buffer.from(JSON.stringify(result, null, 2)),
    contentType: 'application/json',
  });
  await testInfo.attach('portada-fuentes-desktop.png', {
    body: await page.screenshot({ fullPage: false, animations: 'disabled' }),
    contentType: 'image/png',
  });
  await page.setViewportSize({ width: 390, height: 844 });
  await testInfo.attach('portada-fuentes-mobile.png', {
    body: await page.screenshot({ fullPage: false, animations: 'disabled' }),
    contentType: 'image/png',
  });

  expect(result.headingFont).toContain('Manrope');
  expect(result.bodyFont).toContain('IBM Plex Sans');
  expect(result.manropeLoaded, 'Manrope no fue descargada por el navegador; revisar CSS o red').toBe(true);
  expect(result.plexLoaded, 'IBM Plex Sans no fue descargada por el navegador; revisar CSS o red').toBe(true);
});
