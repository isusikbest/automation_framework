import { test } from '@playwright/test';
import { testData } from '../../Data/test_data';
import { LoginPage } from '../../../pages/loginPage/loginPage';
import { CatalogPage } from '../../../pages/catalogPage/catalogPage';


test.describe.only('Login Flow', () => {

test('positive test for valid data', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const catalogPage = new CatalogPage(page)
    await loginPage.login(testData.usernames.valid, testData.password)
    await catalogPage.waitForLoad()
    await catalogPage.verifyCatalogPage()
});

test('negative test for invalid username', async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.login(testData.usernames.invalid, testData.password)
    await loginPage.checkError()
})

test('negative test for invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.login(testData.usernames.valid, testData.invalidPassword)
    await loginPage.checkError()
})

})


