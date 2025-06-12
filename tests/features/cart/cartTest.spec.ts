import { test, expect } from '@playwright/test';
import { testData } from '../../Data/test_data';
import { login } from '../../sources/helpers';
import { locators } from './cartLocators';

 
 let expectedBtnText = 'Remove'

test.skip('should be able to add to cart', async ({ page }) => {
    login(page, testData.usernames.valid, testData.password)
    await page.locator(locators.addtoCartBtn).click();
    await expect(page.locator(locators.addtoCartBtn)).toContainText(expectedBtnText);
})