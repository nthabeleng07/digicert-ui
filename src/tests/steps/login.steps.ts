import { Given, Then, When} from "@cucumber/cucumber";
//import AccountSetUpPage from "../pages/login.po";
import { fixture } from "../../hooks/fixture";

//const loginPage = new loginPage();

Given('I am on the {string} page', async function (url) {
    await fixture.page.goto(url)
});

When('I provide correct credentials', async () => {
 
});

Then('I should login successfully', async () => {
 
});

When('I provide incorrect credentials', async () => {
 
});

Then('I should get error message {string}', async (message:any) => {
 
});


 
  