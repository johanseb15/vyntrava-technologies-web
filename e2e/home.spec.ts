import { test, expect } from '@playwright/test';
test('CTA principal y contenido funcionan con WebGL deshabilitado', async ({ page }) => {
  await page.addInitScript(() => { HTMLCanvasElement.prototype.getContext = () => null; });
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await page.getByRole('link', { name: /contanos tu desafío/i }).click();
  await expect(page).toHaveURL(/#contacto$/);
  await expect(page.getByRole('link', { name: /contactar a vyntrava/i })).toBeVisible();
});
