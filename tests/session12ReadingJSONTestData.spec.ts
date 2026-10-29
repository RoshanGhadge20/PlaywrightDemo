import { test, expect } from '@playwright/test'
import { readJson } from '@utils/readJson'

interface User {
    username: string;
    password: string;
}

const users = readJson<{ validUser: User; invalidUser: User }>('test-data/users.json');

test('Verify Login Functionality With Valid Credentials ', async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/", { waitUntil: 'networkidle' });
    await page.locator('input#username').fill(users.validUser.username);
    await page.locator('input#password').fill(users.validUser.password);
    await page.locator('button#submit').click();
    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
}); // Pass


test('Verify Login Functionality With In-Valid Credentials ', async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/", { waitUntil: 'networkidle' });
    await page.locator('input#username').fill(users.invalidUser.username);
    await page.locator('input#password').fill(users.invalidUser.password);
    await page.locator('button#submit').click();
    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
}); // Fail 
