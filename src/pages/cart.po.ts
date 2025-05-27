import { fixture } from "../hooks/fixture";
import { expect } from '@playwright/test';

export default class CartPage {

    async addToCart_backpack() {
        await fixture.page.locator('#add-to-cart-sauce-labs-backpack').click()
    }

    async click_shoppingCart(){
        await fixture.page.locator('.shopping_cart_link').click();
    }

    async assert_item_in_cart(){
        await expect(fixture.page.locator('#item_4_title_link')).toBeVisible()
    }

    async removeFromCart_backpack(){
       await fixture.page.locator('#remove-sauce-labs-backpack').click()
    }

    async assert_no_item_in_cart(){
       const numItem = await fixture.page.locator('.cart_item').all()
       expect(numItem.length).toEqual(Number(0))
    }
}
