import { test, expect } from '@playwright/test';
import { testData } from '../../Data/test_data';
import { login } from '../../sources/helpers';
import { locators } from './login_locators';

let erroMessage = 'Epic sadface: Username and password do not match any user in this service'
let productsTitle = 'Products'

test.skip('positive test for valid data', async ({ page }) => {
    await login(page, testData.usernames.valid, testData.password)
    await expect(page.locator(locators.title)).toContainText(productsTitle);
});

test.skip('negative test for invalid username', async ({ page }) => {
    await login(page, testData.usernames.invalid, testData.password)
    await expect(page.locator(locators.error)).toContainText(erroMessage);
})

test.skip('negative test for invalid password', async ({ page }) => {
    await login(page, testData.usernames.valid, testData.invalidPassword)
    await expect(page.locator(locators.error)).toContainText(erroMessage);
})


