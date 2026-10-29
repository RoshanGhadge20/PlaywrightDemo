
import * as XLSX from 'xlsx'
import { test, expect } from '@playwright/test'

test('Reading Test Data from Excel', async ({ page }) => {

    const workbook = XLSX.readFile('test-data/users.xlsx');

    const sheet = workbook.Sheets[workbook.SheetNames[0]];

    const rows: any[] = XLSX.utils.sheet_to_json(sheet);

    for (const row of rows) {
        // console.log(row.Username, row.Password, row.Expected_Result);
        await page.goto("https://practicetestautomation.com/practice-test-login/", { waitUntil: 'networkidle' });
        await page.locator('input#username').fill(row.Username);
        await page.locator('input#password').fill(row.Password);
        await page.locator('button#submit').click();
        await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
    }

});
