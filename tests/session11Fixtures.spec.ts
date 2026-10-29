import { test, expect } from '../fixtures/base'


test('Verify logOut Functionality', async ({ loggedInPage }) => {
    await expect(loggedInPage.getByRole('link', { name: 'Log out' })).toBeVisible();
});

