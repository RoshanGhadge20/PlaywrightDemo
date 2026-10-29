import { test, expect } from '@playwright/test'

test('Login functionality', async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/", { waitUntil: 'networkidle' });
    await page.locator('input#username').fill('student');
    await page.locator('input#password').fill('Password123');
    await page.locator('button#submit').click();
    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
});