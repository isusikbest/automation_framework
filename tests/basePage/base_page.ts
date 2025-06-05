import { Page , expect } from '@playwright/test'

export class BasePage {
    protected page: Page

    constructor(page: Page) {
        this.page = page
    }

    async  goto(url:string): Promise<void> {
        await this.page.goto(url)
    }

    async waitForLoad(): Promise<void> {
        await this.page.waitForLoadState('load')
    }

    async getUrl(): Promise<void> {
       await this.page.url()
    }
}