import { test, expect } from '@playwright/test';

test('render logo', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId('lang-switcher').click();
  await expect(page).toHaveTitle(/PLANNER/);
});

test('change language', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('lang-switcher').click();
    await page.getByTestId('lang-switcher').click();
    await expect(page.getByTestId('header')).toContainText('Войти');
  });

