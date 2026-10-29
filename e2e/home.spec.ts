import { test, expect } from '@playwright/test';

test('la oferta y el contacto funcionan sin WebGL', async ({ page }) => {
  await page.addInitScript(() => { HTMLCanvasElement.prototype.getContext = () => null; });
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1, name: /soluciones reales para un trabajo más eficiente/i })).toBeVisible();
  await page.getByRole('link', { name: /contanos tu desafío/i }).click();
  await expect(page).toHaveURL(/#contacto$/);
  await expect(page.getByRole('link', { name: /contactar a vyntrava/i })).toBeVisible();
});

test('la portada y los servicios no desbordan horizontalmente', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Software a medida' })).toBeVisible();
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
  expect(overflow).toBe(false);
});
