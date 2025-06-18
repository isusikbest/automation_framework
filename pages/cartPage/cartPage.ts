import { Locator, Page } from "@playwright/test";
import { BasePage } from "../basePage/basePage";
import { CatalogPage } from "../catalogPage/catalogPage";
import { CheckoutPage } from "../checkoutPage/checkoutPage";

export  class CartPage extends BasePage {
    private cartTittleLocator: Locator
    private checkoutBtnLocator: Locator
    private backToShoppingBtn: Locator
    

    constructor(page: Page) {
        super(page)

        this.cartTittleLocator = page.locator('[data-test="title"]')
        this.checkoutBtnLocator = page.locator('[data-test="checkout"]')
        this.backToShoppingBtn = page.locator('[data-test="continue-shopping"]')
    }

    async waitingForCartPage(): Promise<void> {
        await this.cartTittleLocator.waitFor({state: 'visible'})
    }

    async backToShopping(): Promise<CatalogPage> {
        await this.backToShoppingBtn.click()
        return new CatalogPage(this.page)
    }

    async goToCheckout(): Promise<CheckoutPage> {
       await this.checkoutBtnLocator.click()
       return new CheckoutPage(this.page)
    }

}