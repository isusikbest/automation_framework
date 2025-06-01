import { test, expect } from '@playwright/test';
import { testData } from '../Data/test_data';
import { login } from '../helpers';


test.only('should be able to checkout', async ({ page }) => {
    login(page, testData.usernames.valid, testData.password)
    await expect(page.locator('[data-test="title"]')).toBeVisible()
    await page.getByRole('button', { name: 'add-to-cart-sauce-labs-backpack'}).click();
    await page.getByRole('link', {name: 'shopping-cart-link'}).click();
    await expect(page.locator('#checkout')).toBeVisible()
    await page.getByRole('button', { name: 'checkout'}).click();
    await page.getByRole('textbox', { name:'firstName'}).fill('Volodya');
    await page.getByRole('textbox', { name:'lastName'}).fill('Lanister');
    await page.getByRole('textbox', { name:'postalCode'}).fill('12345');
    await page.getByRole('button', {name: 'continue'}).click();
    await page.getByRole('button', {name: 'finish'}).click();
    await expect(page.locator('[data-test="title"]')).toContainText('Checkout: Complete!');
})