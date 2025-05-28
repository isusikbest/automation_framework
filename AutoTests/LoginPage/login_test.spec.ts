import { test, expect } from '@playwright/test';
import { testData } from '../Data/test_data';
import { login } from '../helpers';

test.skip('positive test for valid data', async ({ page }) => {
    login(page, testData.usernames.valid, testData.password)
    await expect(page.locator('[data-test="title"]')).toContainText('Products');
});

test.skip('negative test for invalid username', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill("invalid_user");
    await page.locator('#password').fill(testData.password);
    await page.locator('#login-button').click();
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
})

test.skip('negative test for invalid password', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill(testData.usernames.valid);
    await page.locator('#password').fill('invalid_password');
    await page.locator('#login-button').click();
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
})


