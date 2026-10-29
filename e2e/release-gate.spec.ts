import { test, expect } from '@playwright/test';

test('ADEL-WEB-006: menú móvil accesible y navegación funcional', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const menu = page.getByRole('button', { name: 'Abrir menú' });
  await expect(menu).toBeVisible();
  await menu.click();
  const close = page.getByRole('button', { name: 'Cerrar menú' });
  await expect(close).toHaveAttribute('aria-expanded', 'true');
  const mobileNav = page.getByRole('navigation', { name: 'Navegación móvil' });
  await expect(mobileNav.getByRole('link', { name: 'Productos' })).toBeVisible();
  await mobileNav.getByRole('link', { name: 'Productos' }).click();
  await expect(page).toHaveURL(/#productos$/);
  await expect(page.getByRole('button', { name: 'Abrir menú' })).toBeVisible();
  await menu.click();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: 'Abrir menú' })).toBeFocused();
});

test('ADEL-WEB-006: ruta de privacidad responde directamente', async ({ page }) => {
  const response = await page.goto('/politica-de-privacidad/');
  expect(response?.status(), 'La ruta de privacidad debe existir y devolver HTTP 200').toBe(200);
  await expect(page.getByRole('heading', { level: 1, name: 'Política de privacidad' })).toBeVisible();
});

test('ADEL-WEB-006: política de privacidad accesible desde el pie', async ({ page }, testInfo) => {
  const failedRequests: string[] = [];
  page.on('requestfailed', request => failedRequests.push(`${request.method()} ${request.url()}: ${request.failure()?.errorText}`));
  await page.goto('/');
  const link = page.getByRole('link', { name: 'Privacidad' });
  await expect(link).toHaveAttribute('href', '/politica-de-privacidad/');
  await link.click();
  await testInfo.attach('diagnostico-navegacion-privacidad.json', {
    body: Buffer.from(JSON.stringify({ url: page.url(), failedRequests }, null, 2)),
    contentType: 'application/json',
  });
  await expect(page).toHaveURL(/\/politica-de-privacidad\/?$/);
  await expect(page.getByRole('heading', { level: 1, name: 'Política de privacidad' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Volver al inicio' }).first()).toBeVisible();
});

test('ADEL-WEB-006: el sitio en modo previo a publicación no se indexa', async ({ page }) => {
  await page.goto('/');
  const robots = await page.locator('meta[name="robots"]').getAttribute('content');
  expect(robots).toMatch(/noindex/i);
});
