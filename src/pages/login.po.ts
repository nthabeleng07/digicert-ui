import { fixture } from "../hooks/fixture";
import { test, expect } from '@playwright/test';

export default class LoginPage {

    async assert_login_container(){
        await expect(fixture.page.locator('[data-test="login-container"]')).toBeVisible();
    }

    async enter_username(username:string){
        await fixture.page.locator('[data-test="username"]').fill(username);
    }

    async enter_password(password:string){
       await fixture.page.locator('[data-test="password"]').fill(password);
    }
  
    async click_login(){
       await fixture.page.locator('[data-test="login-button"]').click();
    }

    async assert_inventoryPage(){
       await expect(fixture.page.locator('[data-test="inventory-container"]')).toBeVisible()
    }

    async assert_error_message_incorrect_login(){
       await expect(fixture.page.locator('[data-test="error"]')).toBeVisible();
    }

}