import { Given, Then, When} from "@cucumber/cucumber";
import LoginPage from "../../pages/login.po";
import { fixture } from "../../hooks/fixture";

const loginPage = new LoginPage();

Given('I am on the {string} page', async function (url) {
    await fixture.page.goto(url);
    await loginPage.assert_login_container();
});

When('I provide correct username {string}', async (username) => {
   await loginPage.enter_username(username)
});

When('I provide correct password {string}', async (password) => {
   await loginPage.enter_password(password)
});

When('I provide incorrect username {string}', async (username) => { 
   await loginPage.enter_username(username)
});

When('I provide incorrect password {string}', async (password) => {
   await loginPage.enter_password(password)
});

When('I click login button', async () => {
   await loginPage.click_login()
});


Then('I should login successfully', async ()=> {
   await loginPage.assert_inventoryPage()
})

Then('I should get error message', async () => {
   await loginPage.assert_error_message_incorrect_login()
});


 
  