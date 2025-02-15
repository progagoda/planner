import { test, expect } from '@playwright/test';

test('create board', async ({ page, context }) => {
    await page.goto('/sign-in');
    context.clearCookies();
    await page.getByLabel('Email address').click();
    await page.getByLabel('Email address').fill('your_email+clerk_test@example.com');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByLabel('Enter verification code. Digit').click();
    await page.getByLabel('Enter verification code. Digit').fill('4');
    await page.getByLabel('Digit 2').fill('2');
    await page.getByLabel('Digit 3').fill('4');
    await page.getByLabel('Digit 4').fill('2');
    await page.getByLabel('Digit 5').fill('4');
    await page.getByLabel('Digit 6').fill('2');
    await page.goto('/');
    await page.getByTestId('create-board-button').click()
    await page.getByLabel('Board Title').fill('test');
    await page.getByLabel('Background photo link').fill('https://i.pinimg.com/736x/4f/d6/22/4fd622433a21e15d7c12d7e2390f87ad.jpg')
    await page.getByText('Create board').click()
    expect(page.getByText('test')).toHaveValue('test');
});