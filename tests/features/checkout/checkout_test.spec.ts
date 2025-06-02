import { test, expect } from '@playwright/test';
import { testData } from '../../Data/test_data';
import { login } from '../../helpers';
import { addToCart } from '../../helpers';
import { moveToCartAndCheckout } from '../../helpers';
import { locators } from './checkout_locators';

 let completeMessage = 'Checkout: Complete!'

test.only('should be able to checkout', async ({ page }) => {
    await login(page, testData.usernames.valid, testData.password)
    await expect(page.locator(locators.title)).toBeVisible()
    await addToCart(page, 1)
    await moveToCartAndCheckout(page, "Volodya", "Lanister", "1234")
    await expect(page.locator(locators.title)).toContainText(completeMessage);
})