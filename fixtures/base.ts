import { test as base, Page } from '@playwright/test'


type MyFixtures =
    {
        loggedInPage: Page;
    };

export const test
    = base.extend<MyFixtures>({
        loggedInPage: async ({ page }, use) => {
            // Setup 
            await page.goto("https://practicetestautomation.com/practice-test-login/", { waitUntil: 'networkidle' });
            await page.locator('input#username').fill('student');
            await page.locator('input#password').fill('Password123');
            await page.locator('button#submit').click();
            await use(page);
            // teardown 
            await page.close();

        }
    })

export { expect } from '@playwright/test';