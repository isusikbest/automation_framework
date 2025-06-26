import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./basePage";
import { CatalogPage } from "./catalogPage";
import { CheckoutPage } from "./checkoutPage";

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

    async verifyCartItem(name: string): Promise<void> {
        const cartItem = this.page.locator('[data-test="inventory-item"]').filter({
            hasText: name
        })
        await expect(cartItem).toBeVisible()
        await expect(cartItem).toContainText(name)
    }

    async verifyCartItems(items: string[]): Promise<void> {
        for(const item of items) {
            await this.verifyCartItem(item)
        }
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