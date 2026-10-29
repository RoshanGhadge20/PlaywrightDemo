import { test, expect } from "@playwright/test"

test('Handling Simple Alert', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/", { waitUntil: 'networkidle' });

    const simpleAlert = page.getByText('Simple Alert');

    // Registering the event to handle simple alert
    page.once('dialog', async (dialog) => {
        console.log(dialog.message());
        // await dialog.accept(); // accept the dialog 
        await dialog.dismiss();
    });
    await simpleAlert.click();

});

test('Handling Confirmation Alert', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/", { waitUntil: 'networkidle' });

    const confirmationAlert = page.getByText('Confirmation Alert');

    //  Register an event
    page.once('dialog', async (dialog) => {
        console.log(dialog.message());
        expect(dialog.type()).toBe('confirm');
        // await dialog.accept();

        await dialog.dismiss() //dismiss the dialog / alert window

    });

    await confirmationAlert.click();

});


test('Handling Prompt Alert', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/", { waitUntil: 'networkidle' });

    const promptAlert = page.getByText('Prompt Alert');

    //  Register an event
    page.once('dialog', async (dialog) => {
        console.log(dialog.message());
        expect(dialog.type()).toBe('prompt');
        await dialog.accept("Roshan ");
    });

    await promptAlert.click();
    await page.waitForTimeout(5000);

});