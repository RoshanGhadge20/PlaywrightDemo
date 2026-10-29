// spec: specs/swag-labs-login-test-plan.md
// seed: tests/seed.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Login Authentication', () => {
    test('Login is rejected with locked_out_user', async ({ page }) => {
        // 1. Start from a fresh browser state and navigate to the Swag Labs login page.
        await page.goto('https://www.saucedemo.com/');
        await expect(page).toHaveTitle('Swag Labs');
        await expect(page.locator('[data-test="username"]')).toBeVisible();
        await expect(page.locator('[data-test="password"]')).toBeVisible();
        await expect(page.locator('[data-test="login-button"]')).toBeVisible();

        // 2. Enter locked_out_user as the username and secret_sauce as the password.
        await page.locator('[data-test="username"]').fill('locked_out_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await expect(page.locator('[data-test="username"]')).toHaveValue('locked_out_user');
        await expect(page.locator('[data-test="password"]')).toHaveValue('secret_sauce');

        await page.locator('[data-test="login-button"]').click();
        await expect(page).toHaveURL('https://www.saucedemo.com/');
        await expect(page.locator('[data-test="error"]')).toHaveText(
            'Epic sadface: Sorry, this user has been locked out.'
        );
        await expect(page).not.toHaveURL(/inventory\.html/);
    });
});