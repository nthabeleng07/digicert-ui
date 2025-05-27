import { Given, Then, When} from "@cucumber/cucumber";
import CartPage from "../../pages/cart.po";

const cartPage = new CartPage()

 When('I add an item to cart', async () => {
     await cartPage.addToCart_backpack()
  });

 Then('I click on shopping cart', async () => {
    await cartPage.click_shoppingCart()
 })
       
 Then('I should see the item in the cart', async () => {
    await cartPage.assert_item_in_cart()      
 });

 Then('I remove an item in cart', async () => {
    await cartPage.removeFromCart_backpack();
})

Then('I should see it removed from the cart', async () => {
    await cartPage.assert_no_item_in_cart()
})

 
       