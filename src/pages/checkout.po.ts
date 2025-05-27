import { fixture } from "../hooks/fixture";
import { test, expect } from '@playwright/test';

export default class CheckoutPage {

 async click_checkout(){
     await fixture.page.locator('[data-test="checkout"]').click();
 }

 async enter_firstName(name:string){
     await fixture.page.locator('[data-test="firstName"]').fill(name);
 }

 async enter_lastName(lastName:string){
     await fixture.page.locator('[data-test="lastName"]').fill(lastName);
 }

 async enter_postalCode(postalCode:string){
     await fixture.page.locator('[data-test="postalCode"]').fill(postalCode);
 }

 async click_continueButton(){
      await fixture.page.locator('[data-test="continue"]').click();
 }

 async assert_productInformation(){
     await expect(fixture.page.locator('[data-test="payment-info-label"]')).toContainText('Payment Information:');
 }

 async click_finishButton(){
    await fixture.page.locator('[data-test="finish"]').click();
 }

 async assert_successful_msg_on_checkout_header(){
      await expect(fixture.page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
 }

 async assert_successful_msg_on_checkout_txt(){
    await expect(fixture.page.locator('[data-test="complete-text"]')).toContainText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
 }

}