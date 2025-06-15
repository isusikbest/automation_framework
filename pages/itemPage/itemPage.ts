import { Locator, Page } from "@playwright/test";
import { BasePage } from "../basePage/basePage";
import { CatalogPage } from "../catalogPage/catalogPage";


export class ItemPage extends BasePage  {
    private itemNameLocator: Locator
    private itemDescriptionLocator: Locator
    private itemPriceLocator: Locator
    private addToCartBtn: Locator
    private backToCatalodLocator: Locator


    constructor(page: Page) {
        super(page)
      this.itemNameLocator = page.locator('[data-test="inventory-item-name"]')
      this.itemDescriptionLocator = page.locator('data-test="inventory-item-desc"')
      this.itemPriceLocator = page.locator('data-test="inventory-item-price"')
      this.addToCartBtn = page.locator('data-test="add-to-cart"')
      this.backToCatalodLocator = page.locator('[data-test="back-to-products"]')
    }

    async checkItemPageIsVisible(): Promise<void> {
        await this.itemNameLocator.waitFor({state: 'visible'})
        await this.itemDescriptionLocator.waitFor({state: 'visible'})
        await this.itemPriceLocator.waitFor({state: 'visible'})
        await this.addToCartBtn.waitFor({state: 'visible'})
    }

    async backToCatalog(): Promise<CatalogPage> {
        await this.backToCatalodLocator.click()
        return new CatalogPage(this.page)
    }


}