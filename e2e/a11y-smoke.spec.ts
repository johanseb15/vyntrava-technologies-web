import { test, expect } from '@playwright/test';

test('ADEL-WEB-007: landmarks, idioma, metadatos y navegación por teclado', async ({ page }, testInfo) => {
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  await expect(page.locator('main')).toHaveCount(1);
  await expect(page.locator('h1')).toHaveCount(1);
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /Vyntrava/);
  await expect(page.locator('link[rel="icon"]')).toHaveCount(1);
  const skip = page.getByRole('link', { name: 'Saltar al contenido' });
  // iPhone WebKit does not Tab through links by default; focus and activate
  // the link there, while retaining the keyboard traversal check on desktop.
  if (testInfo.project.name === 'mobile') await skip.focus();
  else await page.keyboard.press('Tab');
  await expect(skip).toBeFocused();
  await skip.press('Enter');
  await expect(page).toHaveURL(/#hero-title$/);
  const problems = await page.evaluate(() => {
    const all = [...document.querySelectorAll('a[href],button')];
    return all.filter(el => {
      const name = el.getAttribute('aria-label') || el.textContent?.trim() || '';
      return !name && !el.querySelector('img[alt]');
    }).map(el => el.outerHTML.slice(0, 200));
  });
  expect(problems, 'Controles sin nombre accesible').toEqual([]);
});

test('ADEL-WEB-007: privacidad mantiene navegación y título', async ({ page }) => {
  await page.goto('/politica-de-privacidad/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  await expect(page.getByRole('heading', { level: 1, name: 'Política de privacidad' })).toBeVisible();
  await expect(page.getByRole('link', { name: /Volver al inicio/ }).first()).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
});
