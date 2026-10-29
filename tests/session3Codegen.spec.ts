import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
  await page.getByRole('textbox', { name: 'Username:' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).fill('Test');
  await page.locator('#Wikipedia1_wikipedia-search-input').click();
  await page.locator('#Wikipedia1_wikipedia-search-input').fill('Test');
  await page.getByRole('button', { name: 'START' }).click();
  await page.getByRole('button', { name: 'STOP' }).click();
  await page.getByText('List item 1').click();
  await page.getByRole('textbox', { name: 'Email Address:' }).click();
  await page.getByRole('textbox', { name: 'Email Address:' }).fill('abcd@gmail.com');
  await page.getByRole('textbox', { name: 'Email Address:' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password:' }).fill('Test');
  await page.getByRole('spinbutton', { name: 'Your Age:' }).click();
  await page.getByRole('spinbutton', { name: 'Your Age:' }).fill('33');
  await page.getByRole('radio', { name: 'Express' }).check();
  await expect(page.getByRole('textbox', { name: 'Email Address:' })).toHaveValue('abcd@gmail.com');
});