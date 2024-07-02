import { test, expect } from '@playwright/test';

test('render logo', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId('lang-switcher').click();
  await expect(page).toHaveTitle(/PLANNER/);
});

test('change language', async ({ page }) => {
    await page.goto('');
    await page.getByTestId('lang-switcher').click();
    await page.getByTestId('lang-switcher').click();
    await expect(page.getByTestId('header')).toContainText('Войти');
  });

test('sign in', async ({ page }) => {
    await page.goto('');
    await page.getByRole('button', { name: 'Войти' }).click();
    await page.getByRole('button', { name: 'Sign in with GitHub' }).click();
    await expect(page.getByText('Sign in to GitHub to continue to planner Username or email address Password')).toBeVisible();
  });
