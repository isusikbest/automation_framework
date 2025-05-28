import { test, expect } from '@playwright/test';
import { testData } from '../Data/test_data';


test.skip('should be able to add to cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill(testData.usernames.valid);
    await page.locator('#password').fill(testData.password);
    await page.locator('#login-button').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toContainText('Remove');
})