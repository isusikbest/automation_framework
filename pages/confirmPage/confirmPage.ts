import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "../basePage/basePage";
import { CheckoutPage } from "../checkoutPage/checkoutPage";
import { FinishedPurchasePage } from "../finishedPurhcasePage/finishedPurchasePage";


export class ConfrirmPage extends BasePage {
    private cancelPurchaseBtnLocator: Locator
    private totalPriceLocator: Locator
    private shippingInfoLocator: Locator
    private paymentInfoLocator: Locator
    private finishBtnLocator: Locator

    constructor(page: Page) {
        super(page)

     this.cancelPurchaseBtnLocator = page.locator('[data-test="cancel"]')
     this.totalPriceLocator = page.locator('[data-test="total-info-label"]') 
     this.shippingInfoLocator = page.locator('[data-test="shipping-info-label"]')
     this.paymentInfoLocator = page.locator('[data-test="payment-info-label"]') 
     this.finishBtnLocator = page.locator('[data-test="finish"]') 
    }

    async waitingForConfirmPage(): Promise<void> {
        await this.paymentInfoLocator.waitFor({state: 'visible'})
        await this.shippingInfoLocator.waitFor({state: 'visible'})
        await this.totalPriceLocator.waitFor({state: 'visible'})
    }

    async backToCheckoutPage(): Promise<CheckoutPage> {
        await this.cancelPurchaseBtnLocator.click()
        return new CheckoutPage(this.page)
    }

    async finishPurchase(): Promise<FinishedPurchasePage> {
        await this.finishBtnLocator.click()
        return new FinishedPurchasePage(this.page)
    }
} 