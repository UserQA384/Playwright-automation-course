import { test, expect } from '@playwright/test';

test.only("login functionality", async({page})=>

{  
    const productName = "ZARA COAT 3";
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("raghavvats00@gmail.com");
    await page.locator("#userPassword").fill("Test@123");
    await page.locator("#login").click();
    await page.waitForLoadState("networkidle");
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    // till yet code we already discussed in lect 15    
    const count = await products.count();
    for(let i =0; i < count; ++i)
    {
        if(await products.nth(i).locator("b").textContent() === productName)
        {

            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }

await page.pause();


})
