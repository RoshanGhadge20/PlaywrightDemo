import { test, expect } from '@playwright/test'

test.beforeAll('Handling Before All Hooks', async () => {
    console.log('Inside Before All Block');

});

test.afterAll('Handling After all Hooks', async () => {
    console.log('Inside After All Block')

});

test('Test 1', async ({ page }) => {
    console.log(' Calling from Test 1 ')
});

test.beforeEach('Handling Before Each Hooks', async ({ page }) => {

    console.log('Inside Before Each Block');
});

test.afterEach('Handling After Each Hooks', async ({ page }) => {

    console.log('Inside After Each Block');
});



//  BeforeAll -  BeforeEach - Test - AfterEach-  AfterAll