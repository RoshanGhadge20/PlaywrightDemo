import { test, expect } from '@playwright/test'
import path from 'path';

test('File Upload Handling', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/", { waitUntil: 'networkidle' });

    const filePath = path.resolve('test-data/sample.pdf');

    // Single File Upload
    const singleFileUpload = page.locator('input#singleFileInput');
    await singleFileUpload.setInputFiles(filePath);

    // Multiple File Upload
    const multifileUpload = page.locator('input#multipleFilesInput');
    await multifileUpload.setInputFiles([filePath, filePath, filePath]);
    await multifileUpload.setInputFiles([]);
    await page.waitForTimeout(5000);


});

test('Handling File Download', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/download', { waitUntil: 'networkidle' });

    const downloadFile = page.getByText('sample.pdf');

    const downloadPromise = page.waitForEvent('download');
    await downloadFile.click();
    const download = await downloadPromise;
    console.log(download.suggestedFilename());
    await download.saveAs(path.resolve('downloads', download.suggestedFilename()));


});