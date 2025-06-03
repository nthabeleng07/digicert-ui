import { APIRequestContext, Page } from "@playwright/test";

export const fixture = {
    //@ts-ignore
    page: undefined as Page, // Page fixture for UI 
    //@ts-ignore
    apiContext: undefined as APIRequestContext
};