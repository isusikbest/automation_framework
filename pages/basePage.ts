import { Page } from '@playwright/test'

export class BasePage {
    protected page: Page
    protected baseUrl: string =  "https://www.saucedemo.com/"

    constructor(page: Page) {
        this.page = page
    }

    async  goto(url: string): Promise<void> {
        await this.page.goto(url)
    }

    async waitForLoad(): Promise<void> {
        await this.page.waitForLoadState('load')
    }

    async getUrl(): Promise<string> {
      return await this.page.url()
    }
}