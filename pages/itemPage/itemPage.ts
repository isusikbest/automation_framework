import { Locator, Page } from "@playwright/test";
import { BasePage } from "../basePage/basePage";
import { CatalogPage } from "../catalogPage/catalogPage";


export class ItemPage extends BasePage  {
    private itemName: Locator
    private itemDescription: Locator
    private itemPrice: Locator
    private addToCartBtn: Locator
    private backToCatalod: Locator


    constructor(page: Page) {
        super(page)
      this.itemName = page.locator('[data-test="inventory-item-name"]')
      this.itemDescription = page.locator('data-test="inventory-item-desc"')
      this.itemPrice = page.locator('data-test="inventory-item-price"')
      this.addToCartBtn = page.locator('data-test="add-to-cart"')
      this.backToCatalod = page.locator('[data-test="back-to-products"]')
    }

    async waitForLoad(): Promise<void> {
        await this.itemName.waitFor({state: 'visible'})
        await this.itemDescription.waitFor({state: 'visible'})
        await this.itemPrice.waitFor({state: 'visible'})
        await this.addToCartBtn.waitFor({state: 'visible'})
    }

    async backToCatalog(): Promise<CatalogPage> {
        await this.backToCatalod.click()
        return new CatalogPage(this.page)
    }


}