import { Given, Then, When} from "@cucumber/cucumber";
import ProductPage from "../../../pages/products.po";
import LoginPage from "../../../pages/login.po";

const productPage = new ProductPage()
const loginPage = new LoginPage();


Given('I am have successfully logged in', async () => {
    await loginPage.assert_inventoryPage()
})

Then('I should see all the products displayed', async () => {
   await productPage.assert_inventoryList()
})

Then('I should see {string} products displayed', async (prodNum) => {
    await productPage.assert_numberOfProductsDisplayed(prodNum)
})


