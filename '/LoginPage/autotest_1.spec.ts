import { test, expect } from '@playwright/test';

const testData  = {
    usernames: {
        valid: 'standard_user',
        problem: 'problem_user',
    }, 
    password: 'secret_sauce',
} 
    


test.skip('Test 1', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill(testData.usernames.valid);
    await page.locator('#password').fill(testData.password);
    await page.locator('#login-button').click();
    await expect(page.locator('[data-test="title"]')).toContainText('Products');
});

test.skip('Test 2', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill("invalid_user");
    await page.locator('#password').fill(testData.password);
    await page.locator('#login-button').click();
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
})

test.skip('Test 3', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill(testData.usernames.valid);
    await page.locator('#password').fill('invalid_password');
    await page.locator('#login-button').click();
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
})

test.skip('Test 4', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill(testData.usernames.valid);
    await page.locator('#password').fill(testData.password);
    await page.locator('#login-button').click();
    await page.waitForTimeout(2000);
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toContainText('Remove');
})

test.only('Test 5', async ({ page }) => {
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