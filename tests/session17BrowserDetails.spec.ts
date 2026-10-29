import { test, expect, Browser } from '@playwright/test'

test('Test A', async ({ browser }) => {

    const contextA = await browser.newContext();
    const contextB = await browser.newContext();

    const pageA = await contextA.newPage();
    const pageB = await contextB.newPage();

    await pageA.goto("https://practicetestautomation.com/practice-test-login/", { waitUntil: 'load' });
    await pageB.goto("https://practicetestautomation.com/practice-test-login/", { waitUntil: 'load' });

})