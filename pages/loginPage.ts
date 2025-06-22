import { BasePage } from "./basePage";
import { Locator, Page, expect }from '@playwright/test'
import { CatalogPage } from "./catalogPage";


export class LoginPage extends BasePage {
    private userNameId: Locator
    private passwordId: Locator
    private loginBtnId: Locator
    private error: Locator
    private errorText: string = 'Epic sadface: Username and password do not match any user in this service' 

    constructor(page: Page) {
        super(page)
        this.userNameId = page.locator('#user-name')
        this.passwordId = page.locator('#password')
        this.loginBtnId = page.locator('#login-button')
        this.error = page.locator('[data-test="error"]')
       
    }

    async waitForLoad(): Promise<void> {
        await this.userNameId.waitFor({state: 'visible'})
        await this.passwordId.waitFor({state: 'visible'})
    }

    async clearForm(): Promise<void> {
        await this.userNameId.fill('')
        await this.passwordId.fill('')
    }

    async checkError(): Promise<void> {
        await this.error.waitFor({state: 'visible'})
        await expect(this.error).toContainText(this.errorText)
    }

    async login(username: string, password: string): Promise<CatalogPage> {
        await this.goto(this.baseUrl)
        await this.waitForLoad()
        await this.userNameId.fill(username)
        await this.passwordId.fill(password)
        await this.loginBtnId.click()
        return new CatalogPage(this.page)
    }
}