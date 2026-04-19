//Execute Auto Test on https://practicesoftwaretesting.com/
//Flow Login Success and Failure

import { test, expect } from "@playwright/test";
import { stepWithScreenshot } from "../utils/evdHelper";

test.describe("Flow Login" , ()=>{
    test("Login Success" , async({page}) =>{
       await test.step("Open home page" , async() => {
            await stepWithScreenshot(page, "Open Home Page" , async() => {
                await page.goto("https://practicesoftwaretesting.com/");
                await expect(page.getByText('Home Categories Hand ToolsPower ToolsOtherSpecial ToolsRentalsContactSign in EN')).toBeVisible();
                 await expect(page.locator('[data-test="product-01KP9882WPMZMHVNHHN1GNYF0Z"]')).toBeVisible();
            })
       })

       await test.step("Click Sign in" , async() => {
            await stepWithScreenshot(page,"Click Sign in" , async() => {    
                await page.locator('[data-test="nav-sign-in"]').click();
                await expect(page.locator('[data-test="login-form"]')).toBeVisible();
            })
       })

       await test.step("Fill user account",async()=>{
            await stepWithScreenshot(page,"Fill data" , async() => {
                await page.fill("#email","customer@practicesoftwaretesting.com");
                await page.fill("#password","welcome01");
            })
       })
       
       await test.step("Click sign in" , async() => {
            await stepWithScreenshot(page,"Sign in Success", async() => {
                await page.locator('[data-test="login-submit"]').click();
                await expect(page.locator('[data-test="page-title"]')).toBeVisible();
            })
       })

    })
      test("Login Fail",async({page}) => {
        await test.step("Fill data",async()=>{
            await stepWithScreenshot(page,"Fill data",async() => {
                await page.goto('https://practicesoftwaretesting.com/');
                await expect(page.locator('div').filter({ hasText: 'Filters Sort Name (A - Z)Name' }).first()).toBeVisible();
                await page.locator('[data-test="nav-sign-in"]').click();
                await expect(page.locator('[data-test="login-form"]')).toBeVisible();
                await page.locator('[data-test="email"]').click();
                await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
                await page.locator('[data-test="password"]').click();
                await page.locator('[data-test="password"]').fill('123123123');
            })
              
        })

        await test.step("Login Fail" , async() => {
            await stepWithScreenshot(page,"Login Fail",async() => {
                await page.locator('[data-test="login-submit"]').click();
                await expect(page.getByText('Invalid email or password')).toBeVisible();
               
            })
        })

    })
})




  
  

  
