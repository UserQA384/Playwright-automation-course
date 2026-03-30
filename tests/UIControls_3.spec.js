import { test, expect } from '@playwright/test';
import { text } from 'node:stream/consumers';

test("UI controls" , async({page})=>{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const userName = page.locator("#username");
const signIn = page.locator("#signInBtn");
const documentLink = page.locator("[href*='documents-request']");
const dropdown = page.locator("select.form-control");   // css = tagname.classname
await dropdown.selectOption("Consultant");
await page.locator(".radiotextsty").last().click();
await page.locator("#okayBtn").click();
console.log(await page.locator(".radiotextsty").last().isChecked());
await expect(page.locator(".radiotextsty").last()).toBeChecked();
await page.locator("#terms").click();
await expect(page.locator("#terms")).toBeChecked();
await page.locator("#terms").uncheck();
expect(await page.locator("#terms").isChecked()).toBeFalsy(); 
await expect(documentLink).toHaveAttribute("class", "blinkingText");
//await page.pause();


})



test("Child Windows Handling" , async({browser})=>{
const context = await browser.newContext();
const page = await context.newPage();
const userName = page.locator("#username");
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const documentLink = page.locator("[href*='documents-request']");
const [newPage] = await Promise.all([
context.waitForEvent("page"),
documentLink.click(),

])
const text = await newPage.locator(".red").textContent();
const arrayText = text.split("@");
const email = arrayText[1].split(" ")[0];
//console.log(email);
await userName.fill(email);
console.log (await userName.inputValue());


})