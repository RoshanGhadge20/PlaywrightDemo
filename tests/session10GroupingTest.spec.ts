import { test, expect } from '@playwright/test'


test.describe('Login Flow', { tag: ['@Login', '@Regression', '@Sanity'] }, () => {
    //  Single functionality => Login Feature 
    test('Test 1 Login with valid credentials', { tag: '@smoke' }, async ({ page }) => {
        console.log("Calling from Test 1 With valid credentials for login");
    });
    test('Test 2 Login with in-valid credentials', async ({ page }) => {
        console.log("Calling from Test 2 With in-valid credentials for login");
    });
});
