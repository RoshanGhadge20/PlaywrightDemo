import { test, expect } from '@playwright/test'

test(' Asserstions and Waiting Mechanism ', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/', { waitUntil: 'networkidle' });

    const nameField = page.getByPlaceholder('Enter Name');
    await expect(nameField).toBeVisible();
    await nameField.fill('ABCD');
    await expect(nameField).toHaveValue('ABCD');

    await expect(nameField).toBeVisible({ timeout: 10000 });

    // Negation assertions
    await expect(nameField).not.toBeVisible()

    // Soft Assertions
    await expect.soft(nameField).toBeVisible(); // fails

});