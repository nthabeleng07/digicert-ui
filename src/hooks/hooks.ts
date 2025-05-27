import {Before, After, Status} from '@cucumber/cucumber';
import {chromium, Browser, BrowserContext} from '@playwright/test';
import { fixture } from './fixture';

let browser : Browser;
let context:  BrowserContext;

Before(async function () {
    browser = await chromium.launch({ headless: false});

    context = await browser.newContext({})

    await context.clearCookies();

    fixture.page = await browser.newPage(); // Create a new page inside context.
    await fixture.page.setViewportSize({width: 1920, height: 1080}); 

    fixture.page.pause()

});

After(async function({pickle, result}){
    //creates screenshot when a test fails 
    if(result?.status == Status.FAILED){
        const img = await fixture.page.screenshot({path: "./test-results/screenshots/" + pickle.name + ".png", type:"png"});
        this.attach(img, "image/png");
    }

    await context.close();
    await browser.close();
});

