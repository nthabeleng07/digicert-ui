import { Given, Then, When} from "@cucumber/cucumber";
import { fixture } from "../../../hooks/fixture";
import { APIResponse } from "@playwright/test";
import {expect} from "@playwright/test";

let response: APIResponse;
let responseBody: any;

let name: string; 
let job: string;

Given('I prepare a request with name {string} and job {string}', async (name:string, job:string) => {

});

Given("I send a POST request to {string}", async (url) => {
      response = await fixture.apiContext.post(url, {
        data: {
            name: "Sam",
            job: "Engineer"
        }
    });
});

Then("the post response status code should be {int}", async (responseCode) =>{
    expect(response.status()).toBe(Number(responseCode));
});

Then("the response should contain name {string}", async (name) => {
    responseBody = JSON.parse(await response.text())
    expect(responseBody.name).toBe(name)
});



