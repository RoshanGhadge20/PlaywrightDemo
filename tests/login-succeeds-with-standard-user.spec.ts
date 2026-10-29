// spec: specs/swag-labs-login-test-plan.md
// seed: tests/seed.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Login Authentication', () => {
    test('Login succeeds with standard_user', async ({ page }) => {
        // 1. Start from a fresh browser state and navigate to the Swag Labs login page.
        await page.goto('https://www.saucedemo.com/');
        await expect(page).toHaveTitle('Swag Labs');
        await expect(page.locator('[data-test="username"]')).toBeVisible();
        await expect(page.locator('[data-test="password"]')).toBeVisible();
        await expect(page.locator('[data-test="login-button"]')).toBeVisible();

        // 2. Enter standard_user as the username and secret_sauce as the password.
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await expect(page.locator('[data-test="username"]')).toHaveValue('standard_user');
        await expect(page.locator('[data-test="password"]')).toHaveValue('secret_sauce');

        // 3. Select Login and verify the inventory is displayed without a login error.
        await page.locator('[data-test="login-button"]').click();
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await expect(page.getByText('Products', { exact: true })).toBeVisible();
        await expect(page.getByText('Sauce Labs Backpack', { exact: true })).toBeVisible();
        await expect(page.locator('[data-test="error"]')).toHaveCount(0);
    });
});