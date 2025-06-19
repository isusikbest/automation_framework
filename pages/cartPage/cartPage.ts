import { Locator, Page } from "@playwright/test";
import { BasePage } from "../basePage/basePage";
import { CatalogPage } from "../catalogPage/catalogPage";
import { CheckoutPage } from "../checkoutPage/checkoutPage";

export  class CartPage extends BasePage {
    private cartTittle: Locator
    private checkoutBtn: Locator
    private backToCatalogBtn: Locator
    
    

    constructor(page: Page) {
        super(page)

        this.cartTittle = page.locator('[data-test="title"]')
        this.checkoutBtn = page.locator('[data-test="checkout"]')
        this.backToCatalogBtn = page.locator('[data-test="continue-shopping"]')
    }

    async waitForLoad(): Promise<void> {
        await this.cartTittle.waitFor({state: 'visible'})
    }

    async backToShopping(): Promise<CatalogPage> {
        await this.backToCatalogBtn.click()
        return new CatalogPage(this.page)
    }

    async goToCheckout(): Promise<CheckoutPage> {
       await this.checkoutBtn.click()
       return new CheckoutPage(this.page)
    }

}