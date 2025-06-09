import { BasePage } from "../basePage/base_page";
import { Locator, Page }from '@playwright/test'
import { locators } from "../../tests/sources/helpers_locators";

export class LoginPage extends BasePage {
    protected userNameLocator: Locator
    protected passwordLocator: Locator
    protected loginBtnLocator: Locator

    constructor(page: Page) {
        super(page)
        this.userNameLocator = page.locator(locators.userNameId)
        this.passwordLocator = page.locator(locators.passwordId)
        this.loginBtnLocator = page.locator(locators.loginBtnId)
    }


    async login(username: string, password: string): Promise<void> {
        await this.goto(this.baseUrl)
        await this.waitForLoad()
        await this.userNameLocator.fill(username)
        await this.passwordLocator.fill(password)
        await this.loginBtnLocator.click()
    }
}