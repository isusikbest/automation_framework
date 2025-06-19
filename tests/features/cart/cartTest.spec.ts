import { test, expect } from '@playwright/test';
import { testData } from '../../Data/test_data';
import { CartPage } from '../../../pages/cartPage/cartPage';
import { LoginPage } from '../../../pages/loginPage/loginPage';
import { CatalogPage } from '../../../pages/catalogPage/catalogPage';


test.skip('should be able to add to cart', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const cartPage = new CartPage(page)
    const catalogPage = new CatalogPage(page)
    
   await loginPage.login(testData.usernames.valid, testData.password)
   await catalogPage.addToCart(3)
   await catalogPage.openCart()
   await cartPage.waitForLoad()
})