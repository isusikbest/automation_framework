import { Locator, Page } from "@playwright/test";
import { BasePage } from "../basePage/basePage";
import { CatalogPage } from "../catalogPage/catalogPage";


export class FinishedPurchasePage extends BasePage {
    private thanksForOrderTextLocator: Locator
    private backToHomeBtnLocator: Locator

    constructor(page: Page) {
        super(page)

       this.backToHomeBtnLocator = page.locator('[data-test="back-to-products"]')
       this.thanksForOrderTextLocator = page.locator('[data-test="complete-text"]') 
    }

    async backToCatalog(): Promise<CatalogPage> {
        await this.backToHomeBtnLocator.click()
        return new CatalogPage(this.page)
    }

    async checkFinishedPurchaseText(): Promise<void> {
        await this.thanksForOrderTextLocator.waitFor({state: 'visible'})
    }
}