import { test } from '@playwright/test';
import { testData } from '../../Data/test_data';
import { CartPage } from '../../../pages/cartPage';
import { LoginPage } from '../../../pages/loginPage';
import { CatalogPage } from '../../../pages/catalogPage';




test.skip('should be able to add to cart', async ({ page }) => {

   const loginPage = new LoginPage(page)
   const catalogPage = await loginPage.login(testData.usernames.valid, testData.password)
   await catalogPage.waitForLoad()
   await catalogPage.addToCartByNames(['Sauce Labs Backpack', 'Sauce Labs Bike Light'])
   const cartPage = await catalogPage.openCart()
   await cartPage.waitForLoad()
   await cartPage.verifyCartItems(['Sauce Labs Backpack', 'Sauce Labs Bike Light'])
   
})


