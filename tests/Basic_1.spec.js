import { test } from "@playwright/test";
import { expect } from "@playwright/test";


test("Browser Context Playwright test", async ({browser})=>
{

   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   console.log(await page.title())
   await page.locator("#username").fill("Abhishek");
   await page.locator("[type='password']").fill("learning");
   await page.locator('#signInBtn').click();
 console.log(await page.locator("[style*='block']").textContent());
   await expect(page.locator("[style*='block']")).toContainText('Incorrect');
   await page.locator("#username").fill("");
   await page.locator("#username").fill("rahulshettyacademy");
   await page.locator("[type='password']").fill("");
   await page.locator("[type='password']").fill("Learning@830$3mK2");
   await page.locator('#signInBtn').click();   
//  console.log(await page.locator('.card-body a').first().textContent());
//  console.log(await page.locator('.card-body a').nth(1).textContent());
 console.log(await page.locator('.card-body a').allTextContents());
});

test("Page Playwright test", async ({page})=>
{

   //const context = await browser.newContext();
   //const page = await context.newPage();
   await page.goto("https://google.com");
   //to get page title
   console.log(await page.title())
   await expect(page).toHaveTitle("Google");

});