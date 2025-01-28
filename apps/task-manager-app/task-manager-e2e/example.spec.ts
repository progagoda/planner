import { test, expect } from '@playwright/test';

test('render logo', async ({ page }) => {
  await page.goto('/');
  const header = page.locator('[data-testid="logo"]')
  await expect(header).toBeVisible();

  const actualText = await header.textContent()
  expect(actualText).toBe("PLANNER");
});

test('change language', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId('lang-switcher').click();
  await page.waitForSelector('[data-testid="lang-switcher"]:has-text("ru")', { timeout: 5000 });
  await page.getByTestId('lang-switcher').click();
  await expect(page.getByTestId('lang-switcher')).toContainText('en');
  });

