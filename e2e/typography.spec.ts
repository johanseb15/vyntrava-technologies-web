import { test, expect } from '@playwright/test';

/** ADEL-WEB-005: evidence of bundled fonts actually loaded, not only CSS declarations. */
test('tipografía corporativa: fuentes locales cargadas y capturas comparables', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 1366, height: 768 });
  await page.goto('/', { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);

  const result = await page.evaluate(() => {
    const heading = document.querySelector('h1');
    const faceList = Array.from(document.fonts).map(face => ({
      family: face.family, status: face.status, weight: face.weight,
    }));
    return {
      headingFont: heading ? getComputedStyle(heading).fontFamily : '',
      bodyFont: getComputedStyle(document.body).fontFamily,
      manropeLoaded: faceList.some(face => /manrope/i.test(face.family) && face.status === 'loaded'),
      plexLoaded: faceList.some(face => /ibm.*plex/i.test(face.family) && face.status === 'loaded'),
      faceList,
      externalGoogleStylesheet: [...document.styleSheets].some(sheet => !!sheet.href && sheet.href.includes('fonts.googleapis.com')),
    };
  });
  await testInfo.attach('diagnostico-tipografico.json', {
    body: Buffer.from(JSON.stringify(result, null, 2)), contentType: 'application/json',
  });
  await testInfo.attach('portada-fuentes-desktop.png', {
    body: await page.screenshot({ fullPage: false, animations: 'disabled' }), contentType: 'image/png',
  });
  await page.setViewportSize({ width: 390, height: 844 });
  await testInfo.attach('portada-fuentes-mobile.png', {
    body: await page.screenshot({ fullPage: false, animations: 'disabled' }), contentType: 'image/png',
  });
  expect(result.headingFont.toLowerCase()).toContain('manrope');
  expect(result.bodyFont.toLowerCase()).toMatch(/ibm.*plex/);
  expect(result.manropeLoaded, 'Manrope no está realmente cargada').toBe(true);
  expect(result.plexLoaded, 'IBM Plex Sans no está realmente cargada').toBe(true);
  expect(result.externalGoogleStylesheet, 'La web todavía depende de Google Fonts CSS externo').toBe(false);
});
