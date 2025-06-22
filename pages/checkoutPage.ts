import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { ConfirmPage } from "./confirmPage";
import { CartPage } from "./cartPage";


export class CheckoutPage extends BasePage {
    private firstName: Locator
    private lastName: Locator
    private postalCode: Locator
    private continueBtn: Locator
    private cancelBtn: Locator


    constructor(page: Page) {
        super(page)

      this.firstName = page.locator('[data-test="firstName"]') 
      this.lastName = page.locator('[data-test="lastName"]')
      this.postalCode = page.locator('[data-test="postalCode"]')
      this.continueBtn = page.locator('[data-test="continue"]')
      this.cancelBtn = page.locator('[data-test="cancel"]')
    }

    async fillInfoForm(firstName: string, lastName: string, postalCode: string): Promise<void> {
        await this.firstName.fill(firstName)
        await this.lastName.fill(lastName)
        await this.postalCode.fill(postalCode)
    }

    async checkout(): Promise<ConfirmPage> {
        await this.continueBtn.click()
        return new ConfirmPage(this.page)
    }

    async waitForLoad(): Promise<void> {
        await this.firstName.waitFor({state: 'visible'})
        await this.lastName.waitFor({state: 'visible'})
        await this.postalCode.waitFor({state: 'visible'})
    }

    async cancelPurchase(): Promise<CartPage> {
        await this.cancelBtn.click()
        return new CartPage(this.page)
    }
}