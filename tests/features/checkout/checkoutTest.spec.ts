import { test } from '@playwright/test';
import { testData } from '../../Data/test_data';
import { CartPage } from '../../../pages/cartPage';
import { LoginPage } from '../../../pages/loginPage';
import { CatalogPage } from '../../../pages/catalogPage';
import { CheckoutPage } from '../../../pages/checkoutPage';
import { ConfirmPage } from '../../../pages/confirmPage';
import { FinishedPurchasePage } from '../../../pages/finishedPurchasePage';




 

test.skip('should be able to checkout', async ({ page }) => {

   const loginPage = new LoginPage(page)
   const catalogPage = await loginPage.login(testData.usernames.valid, testData.password)
   await catalogPage.waitForLoad()
   await catalogPage.addToCartByNames(['Sauce Labs Backpack', 'Sauce Labs Bike Light'])
   const cartPage = await catalogPage.openCart()
   await cartPage.waitForLoad()
   const checkoutPage =  await cartPage.goToCheckout()
   await checkoutPage.waitForLoad()
   await checkoutPage.fillInfoForm('Volodka', 'Gates', '13333')
   const confirmPage = await checkoutPage.checkout()
   const finishedPage = await confirmPage.finishPurchase()
   await finishedPage.checkFinishedPurchaseText()
   
})