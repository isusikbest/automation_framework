import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "../basePage/basePage";
import { CheckoutPage } from "../checkoutPage/checkoutPage";
import { FinishedPurchasePage } from "../finishedPurhcasePage/finishedPurchasePage";


export class ConfrirmPage extends BasePage {
    private cancelPurchaseBtn: Locator
    private totalPrice: Locator
    private shippingInfo: Locator
    private paymentInfo: Locator
    private finishBtn: Locator

    constructor(page: Page) {
        super(page)

     this.cancelPurchaseBtn = page.locator('[data-test="cancel"]')
     this.totalPrice = page.locator('[data-test="total-info-label"]') 
     this.shippingInfo = page.locator('[data-test="shipping-info-label"]')
     this.paymentInfo = page.locator('[data-test="payment-info-label"]') 
     this.finishBtn = page.locator('[data-test="finish"]') 
    }

    async waitForLoad(): Promise<void> {
        await this.paymentInfo.waitFor({state: 'visible'})
        await this.shippingInfo.waitFor({state: 'visible'})
        await this.totalPrice.waitFor({state: 'visible'})
    }

    async backToCheckoutPage(): Promise<CheckoutPage> {
        await this.cancelPurchaseBtn.click()
        return new CheckoutPage(this.page)
    }

    async finishPurchase(): Promise<FinishedPurchasePage> {
        await this.finishBtn.click()
        return new FinishedPurchasePage(this.page)
    }
} 