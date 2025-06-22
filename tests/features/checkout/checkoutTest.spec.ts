import { test } from '@playwright/test';
import { testData } from '../../Data/test_data';
import { CartPage } from '../../../pages/cartPage/cartPage';
import { LoginPage } from '../../../pages/loginPage/loginPage';
import { CatalogPage } from '../../../pages/catalogPage/catalogPage';
import { CheckoutPage } from '../../../pages/checkoutPage/checkoutPage';
import { ConfirmPage } from '../../../pages/confirmPage/confirmPage';
import { FinishedPurchasePage } from '../../../pages/finishedPurhcasePage/finishedPurchasePage';




 

test.only('should be able to checkout', async ({ page }) => {
   const loginPage = new LoginPage(page)
   const cartPage = new CartPage(page)
   const catalogPage = new CatalogPage(page)
   const checkoutPage = new CheckoutPage(page)
   const confirmPage = new ConfirmPage(page)
   const finishedPage = new FinishedPurchasePage(page)

   await loginPage.login(testData.usernames.valid, testData.password)
   await catalogPage.waitForLoad()
   await catalogPage.addToCartByNames(['Sauce Labs Backpack', 'Sauce Labs Bike Light'])
   await catalogPage.openCart()
   await cartPage.waitForLoad()
   await cartPage.goToCheckout()
   await checkoutPage.waitForLoad()
   await checkoutPage.fillInfoForm('Volodka', 'Gates', '13333')
   await checkoutPage.checkout()
   await confirmPage.finishPurchase()
   await finishedPage.checkFinishedPurchaseText()
})