import { BasePage } from "../basePage/basePage";
import { Locator, Page }from '@playwright/test'


export class LoginPage extends BasePage {
    private userNameId: Locator
    private passwordId: Locator
    private loginBtnId: Locator
    private errorLocator: Locator
   

    constructor(page: Page) {
        super(page)
        this.userNameId = page.locator('#user-name')
        this.passwordId = page.locator('#password')
        this.loginBtnId = page.locator('#login-button')
        this.errorLocator = page.locator('[data-test="error"]')
       
    }

    async waitingForLoginForm(): Promise<void> {
        await this.userNameId.waitFor({state: 'visible'})
        await this.passwordId.waitFor({state: 'visible'})
    }

    async clearForm(): Promise<void> {
        await this.userNameId.fill('')
        await this.passwordId.fill('')
    }

    async checkError(): Promise<void> {
        await this.errorLocator.waitFor({state: 'visible'})
    }

    async login(username: string, password: string): Promise<void> {
        await this.goto(this.baseUrl)
        await this.waitingForLoginForm()
        await this.userNameId.fill(username)
        await this.passwordId.fill(password)
        await this.loginBtnId.click()
    }
}