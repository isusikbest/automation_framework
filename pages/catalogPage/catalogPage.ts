import { Page, Locator } from "@playwright/test";
import { BasePage } from "../basePage/basePage";
import { ItemPage } from "../itemPage/itemPage";


export class CatalogPage extends BasePage {
    private title: Locator
    private cartBtn: Locator
    private removeBtnText: string = 'Remove'
    private addToCartText: string = 'Add to Cart'
    private item: Locator
    private sortBy: Locator
    private productCard: Locator

    constructor(page: Page) {
        super(page)
        this.title = page.locator('[data-test="title"]')
        this.cartBtn = page.locator('[data-test="shopping-cart-link"]')
        this.item = page.locator('.inventory_item')
        this.sortBy = page.locator('[data-test="product_sort_container"]')
        this.productCard = page.locator('.inventory_item')
    }

    async addToCartByNames(names: string[]): Promise<void> {
        for(const name of names) {
            const item  = this.item.filter({
               has: this.page.getByText(name) 
            })
        await item.getByRole('button', {name: this.addToCartText}).click()
        }
    }

    async removeItemFromCart(names: string[]): Promise<void> {
        for(const name of names) {
            const item  = this.item.filter({
               has: this.page.getByText(name) 
            })
        await item.getByRole('button', {name: this.removeBtnText}).click()
        }
    }

    async selectItemByName(name: string): Promise<ItemPage> {
        await this.page.getByRole('button', {name: '${name}'}).click()
        return new ItemPage(this.page)
    }

    async waitForLoad(): Promise<void> {
        await this.title.waitFor({state: 'visible'})
    }

    async sortByItem(itemText: string): Promise<void> {
        await this.sortBy.selectOption({label: itemText})
    }

    async openCart(): Promise<void> {
        await this.cartBtn.click()
    }
}