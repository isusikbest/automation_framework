import { Locator, Page } from "@playwright/test";
import { BasePage } from "../basePage/basePage";
import { ConfrirmPage } from "../confirmPage/confirmPage";
import { CartPage } from "../cartPage/cartPage";


export class CheckoutPage extends BasePage {
    private firstNameLocator: Locator
    private lastNameLocator: Locator
    private postalCodeLocator: Locator
    private continueBtnLocator: Locator
    private cancelBtnLocator: Locator


    constructor(page: Page) {
        super(page)

      this.firstNameLocator = page.locator('[data-test="firstName"]') 
      this.lastNameLocator = page.locator('[data-test="lastName"]')
      this.postalCodeLocator = page.locator('[data-test="postalCode"]')
      this.continueBtnLocator = page.locator('[data-test="continue"]')
      this.cancelBtnLocator = page.locator('[data-test="cancel"]')
    }

    async fillInfoForm(firstName: string, lastName: string, postalCode: string): Promise<void> {
        await this.firstNameLocator.fill(firstName)
        await this.lastNameLocator.fill(lastName)
        await this.postalCodeLocator.fill(postalCode)
    }

    async checkout(): Promise<ConfrirmPage> {
        await this.continueBtnLocator.click()
        return new ConfrirmPage(this.page)
    }

    async cancelPurchase(): Promise<CartPage> {
        await this.cancelBtnLocator.click()
        return new CartPage(this.page)
    }
}