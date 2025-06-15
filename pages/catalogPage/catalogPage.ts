import { Page, Locator } from "@playwright/test";
import { BasePage } from "../basePage/basePage";
import { ItemPage } from "../itemPage/itemPage";


export class CatalogPage extends BasePage {
    private titleLocator: Locator
    private cartBtnLocator: Locator
    private removeBtnText: string = 'Remove'
    private addToCartText: string = 'Add to Cart'
    private itemLocator: Locator
    private sortByLocator: Locator

    constructor(page: Page) {
        super(page)
        this.titleLocator = page.locator('[data-test="title"]')
        this.cartBtnLocator = page.locator('[data-test="shopping-cart-link"]')
        this.itemLocator = page.locator('.inventory_item')
        this.sortByLocator = page.locator('[data-test="product_sort_container"]')
    }

    async addToCart(index: number): Promise<void> {
        const item = this.itemLocator.nth(index)
        await item.getByRole('button', {name: this.addToCartText}).click
    }

    async removeItemFromCart(index: number): Promise<void> {
        const item = this.itemLocator.nth(index)
        await item.getByRole('button', {name: this.removeBtnText}).click
    }

    async selectItemByName(name: string): Promise<ItemPage> {
        await this.page.getByRole('button', {name: '${name}'}).click()
        return new ItemPage(this.page)
    }

    async waitingForCatalog(): Promise<void> {
        await this.titleLocator.waitFor({state: 'visible'})
    }

    async sortBy(sortedText: string): Promise<void> {
        await this.sortByLocator.selectOption({label: sortedText})
    }

    async openCart(): Promise<void> {
        await this.cartBtnLocator.click()
    }
}