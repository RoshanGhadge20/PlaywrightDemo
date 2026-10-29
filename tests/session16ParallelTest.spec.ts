import { test, expect } from '@playwright/test'
import { Page } from '@playwright/test';

test.describe('Parallel Execution', async () => {
    test.describe.configure({ mode: 'parallel' })

    test('Test A', async ({ page }) => {
        await page.goto('https://practicetestautomation.com/practice-test-login/', { waitUntil: 'load' });
    });

    test('Test B', async ({ page }) => {
        await page.goto('https://practicetestautomation.com/practice-test-login/', { waitUntil: 'load' });
    });

    test('Test C', async ({ page }) => {
        await page.goto('https://practicetestautomation.com/practice-test-login/', { waitUntil: 'load' });
    });

});