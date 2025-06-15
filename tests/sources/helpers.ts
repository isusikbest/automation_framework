import { Page } from "@playwright/test";
import { expect } from "@playwright/test";
import { locators } from "./helpersLocators";

let addToCartText = 'Add to cart'
let checkoutText = 'Checkout'
let finishText = 'Finish'


 export async function addToCart(page: Page, index: number) {
    const item = page.locator(locators.itemClass).nth(index)
    
 }
 export async function moveToCartAndCheckout(page:Page, firstName: string, lastName: string, postcode: string) {
   await page.locator(locators.cartBtn).click();
   await expect(page.locator(locators.checkoutId)).toBeVisible()
   await page.getByRole('button', { name: checkoutText}).click();
   await expect(page.locator(locators.firstNameId)).toBeVisible()
   await page.getByPlaceholder('First Name').fill(firstName);
   await page.getByPlaceholder('Last Name').fill(lastName);
   await page.getByPlaceholder('Zip/Postal Code').fill(postcode);
   await page.locator(locators.continueBtnId).click();
   await page.getByRole('button', {name: finishText}).click();
 }