import { test } from '@playwright/test';
import { testData } from '../../Data/test_data';
import { LoginPage } from '../../../pages/loginPage';
import { CatalogPage } from '../../../pages/catalogPage';


test.describe.only('Login Flow', () => {

test('should be able to login with  valid data', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const catalogPage = await loginPage.login(testData.usernames.valid, testData.password)
    await catalogPage.waitForLoad()
    await catalogPage.verifyCatalogPage()
});

test('should not be able to login with  invalid username', async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.login(testData.usernames.invalid, testData.password)
    await loginPage.checkError()
})

test('should be able to login with  invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.login(testData.usernames.valid, testData.invalidPassword)
    await loginPage.checkError()
})

})


