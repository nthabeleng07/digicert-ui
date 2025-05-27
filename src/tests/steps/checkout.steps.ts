import { Given, Then, When} from "@cucumber/cucumber";
import CheckoutPage from "../../pages/checkout.po";

const checkoutPage = new CheckoutPage()

    When('I click the Checkout button', async () => {
       await checkoutPage.click_checkout();
    });

    Then('I should provide Checkout information', async () => {
      await checkoutPage.enter_firstName('John')
      await checkoutPage.enter_lastName('Doe')
      await checkoutPage.enter_postalCode('1234')
    });


    When('I click continue button', async () => {
       await checkoutPage.click_continueButton()
    });


    Then('I should see Order information', async () =>{
      await checkoutPage.assert_productInformation();
    });

    When('I click the finish button', async () =>{
     await checkoutPage.click_finishButton()
    });

    Then('I should see completion message', async () => {
      await checkoutPage.assert_successful_msg_on_checkout_header()
      await checkoutPage.assert_successful_msg_on_checkout_txt()
    });
       

