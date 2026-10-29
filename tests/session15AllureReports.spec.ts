import { test, expect } from '@playwright/test'
import * as allure from 'allure-js-commons';


test('Login Functionality', async ({ page }) => {
    await allure.epic('Login Functionality');
    await allure.feature('Login');
    await allure.story('Valid details');
    await allure.severity('Critical');
    await allure.owner('RG')

    await page.goto("https://practicetestautomation.com/practice-test-login/", { waitUntil: 'networkidle' });
    await page.locator('input#username').fill('student');
    await page.locator('input#password').fill('Password123');
    await page.locator('button#submit').click();
    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();

});