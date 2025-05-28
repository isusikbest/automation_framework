import { test, expect } from '@playwright/test';
import { testData } from '../Data/test_data';
import { login } from '../helpers';


test.skip('should be able to add to cart', async ({ page }) => {
    login(page, testData.usernames.valid, testData.password)
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toContainText('Remove');
})