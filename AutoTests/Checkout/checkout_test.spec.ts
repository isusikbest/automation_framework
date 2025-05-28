import { test, expect } from '@playwright/test';
import { testData } from '../Data/test_data';


test.only('should be able to checkout', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill(testData.usernames.valid);
    await page.locator('#password').fill(testData.password);
    await page.locator('#login-button').click();
    await page.waitForTimeout(2000);
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.waitForTimeout(2000);
    await page.locator('#checkout').click();
    await page.locator('#first-name').fill('Volodya');
    await page.locator('#last-name').fill('Lanister');
    await page.locator('#postal-code').fill('12345');
    await page.locator('#continue').click();
    await page.locator('#finish').click();
    await expect(page.locator('[data-test="title"]')).toContainText('Checkout: Complete!');
})