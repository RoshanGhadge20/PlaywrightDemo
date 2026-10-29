import { test, expect } from '@playwright/test'

test('Practicing with Locators', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html', { waitUntil: 'networkidle' });

    // Get By Role 
    const primaryButton = page.getByRole('button', { name: 'Primary Action' });
    await primaryButton.click();

    // Get By Text 
    const listItemText = page.getByText('List item 1', { exact: true });
    await listItemText.click();


    // Get By Label 
    const ageField = page.getByLabel('Your Age:');
    await ageField.fill('30');


    // Get By Placeholder
    const fullName = page.getByPlaceholder('Enter your full name');
    await fullName.fill('ABDCD');

    // Get by alt text
    const img = page.getByAltText('logo image');
    await img.click();


    // Get by title 
    const home = page.getByTitle('Home page link');
    await home.click();

    // Get by test-id
    const editProfile = page.getByTestId('edit-profile-btn');
    await editProfile.click();


});