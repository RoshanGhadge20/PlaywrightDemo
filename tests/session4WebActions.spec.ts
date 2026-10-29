import { test, expect } from '@playwright/test'
import { email } from 'zod/v4';

test('Learning web actions ', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/', { waitUntil: 'networkidle' });

    const nameField = page.getByPlaceholder('Enter Name');

    // Mouse Operations
    await nameField.click();
    await nameField.dblclick()
    await nameField.click({ button: 'left' });
    await nameField.hover()

    const emailField = page.getByPlaceholder('Enter EMail');
    //  Text Input based operations

    await emailField.fill('ABCDD');
    await emailField.clear();
    await emailField.pressSequentially('Playwright', { delay: 100 });

    // Keyboard related Operation 
    // await emailField.press('Enter');
    await emailField.press('Control+A');
    await emailField.press('Backspace');

    const sundayCheckBox = page.getByLabel('Sunday');
    await sundayCheckBox.check();
    await expect(sundayCheckBox).toBeChecked();

    // Dropdown operations
    const dropdown = page.locator('select#country');
    await dropdown.selectOption({ value: 'india' });
    // await dropdown.selectOption({ label: 'India' });
    // await dropdown.selectOption({ index: 4 });

    // Drag and Drop Operations
    const source = page.locator('div#draggable');
    const destination = page.locator('div#droppable');
    await source.dragTo(destination);



});