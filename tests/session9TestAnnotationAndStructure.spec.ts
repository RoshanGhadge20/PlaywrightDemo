import { test, expect } from "@playwright/test"


/* test.describe('Verify Login Functionality with Valid And Invalid Details', () => {

    test('Login Functionality With Valid Details', async ({ page }) => {

        await test.step('Navigating to website', async () => {
            await page.goto("https://practicetestautomation.com/practice-test-login/", { waitUntil: 'networkidle' });
        })

        const usernameField = page.locator('input#username');
        const passwordField = page.locator('input#password');
        const submit = page.locator('button#submit');

        await usernameField.fill('student');
        await passwordField.fill('Password123 ');
        await submit.click();
    });

    test('Login Functionality With In-Valid Details', async ({ page }) => {

        await page.goto("https://practicetestautomation.com/practice-test-login/", { waitUntil: 'networkidle' });

        const usernameField = page.locator('input#username');
        const passwordField = page.locator('input#password');
        const submit = page.locator('button#submit');

        await usernameField.fill('student1');
        await passwordField.fill('Password123 ');
        await submit.click();
    });

}) */

test.describe('Test Annotations', () => {
    test.skip('Mark test as skip ', async () => {
        console.log(' Skip block to be executed');
    })
    test.fixme('Mark test as fixme ', async () => {
        console.log(' fixme block to be executed');
    })
    test.fail('Mark test as fail ', async () => {
        console.log(' fail block to be executed');
    })
    /*   test.only('Mark test as only ', async () => {
        console.log(' only block to be executed');
      }) */

    test('Mark test as slow', async () => {
        test.slow();
        console.log(' slow block to be executed');
    })
})