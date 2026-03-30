import { test, expect } from '@playwright/test';

// registration 
test("Page Playwright test", async ({page})=>
{

   await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
   await page.locator(".login-wrapper-footer-text").click();
   await page.locator("[type = 'firstName']").fill("Abhishek");
   await page.locator("[type = 'lastName']").fill("Tyagi");
   await page.locator("[type = 'email']").fill("raghavvats00@gmail.com");
   await page.locator("#userMobile").fill("8860194696");
   await page.locator('select[formcontrolname="occupation"]').selectOption({ label: 'Doctor' });
   await page.locator("input[value='Male']").click();
   await page.locator("#userPassword").fill("Test@123");
   await page.locator("#confirmPassword").fill("Test@123");
   await page.locator("input[type='checkbox']").click();
   await page.locator("#login").click();
   
})

// login 
test("login functionality", async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("raghavvats00@gmail.com");
    await page.locator("#userPassword").fill("Test@123");
    await page.locator("#login").click();
    //await page.waitForLoadState("networkidle");
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    




})