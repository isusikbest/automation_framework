import { Locator, Page } from "@playwright/test";
import { BasePage } from "../basePage/basePage";
import { CatalogPage } from "../catalogPage/catalogPage";


export class FinishedPurchasePage extends BasePage {
    private thanksForOrderText: Locator
    private backToHomeBtn: Locator

    constructor(page: Page) {
        super(page)

       this.backToHomeBtn = page.locator('[data-test="back-to-products"]')
       this.thanksForOrderText = page.locator('[data-test="complete-text"]') 
    }

    async backToCatalog(): Promise<CatalogPage> {
        await this.backToHomeBtn.click()
        return new CatalogPage(this.page)
    }

    async checkFinishedPurchaseText(): Promise<void> {
        await this.thanksForOrderText.waitFor({state: 'visible'})
    }
}