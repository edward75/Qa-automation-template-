import { test, expect } from '@playwright/test';
import { BasePage } from '../../pages/BasePage';


test('Homepage loads', async ({page})=>{

const basePage = new BasePage(page);

await basePage.navigate(
'https://playwright.dev'
);


await expect(page)
.toHaveTitle(/Playwright/);

});
