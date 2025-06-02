import { Page } from "@playwright/test";
import { expect } from "@playwright/test";



 export async function login(page: Page, username: string, password: string) {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill(username);
    await page.locator('#password').fill(password);
    await page.locator('#login-button').click();
}

 export async function addToCart(page: Page, index: number) {
    const item = page.locator('.inventory_item').nth(index)
    await item.getByRole('button', {name: 'Add to cart'}).click
 }
 export async function moveToCartAndCheckout(page:Page, firstName: string, lastName: string, postcode: string) {
   await page.locator('[data-test="shopping-cart-link"]').click();
   await expect(page.locator('#checkout')).toBeVisible()
   await page.getByRole('button', { name: 'Checkout'}).click();
   await expect(page.locator('#first-name')).toBeVisible()
   await page.getByPlaceholder('First Name').fill(firstName);
   await page.getByPlaceholder('Last Name').fill(lastName);
   await page.getByPlaceholder('Zip/Postal Code').fill(postcode);
   await page.locator('#continue').click();
   await page.getByRole('button', {name: 'Finish'}).click();
 }