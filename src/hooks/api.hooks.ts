import {Before, After, Status} from '@cucumber/cucumber';
import {request} from '@playwright/test';
import { fixture } from './fixture';

Before(async() => {
  fixture.apiContext = await request.newContext({ 
      baseURL: 'https://reqres.in/',
      extraHTTPHeaders: {
      'x-api-key': 'reqres-free-v1',
    },
});
});

After(async() => {
    await fixture.apiContext.dispose();
})
