import { fixture } from "../hooks/fixture";
import { test, expect } from '@playwright/test';

export default class ProductPage {

    async assert_inventoryList(){
       await expect(fixture.page.locator('[data-test="inventory-list"]')).toBeVisible();
    }

    async assert_numberOfProductsDisplayed(num:number){
       const numItem = await fixture.page.locator('.inventory_item').all();
       expect(numItem.length).toEqual(Number(num))

    }
    
}
