import { test, expect } from "@playwright/test";
import { stepWithScreenshot } from "../../utils/evdHelper";

test.describe("Flow Authencation", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://automationexercise.com/');
        await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    })

    test("User can register and delete account successfully", async ({ page }) => {
        await test.step("step 1: Launch browser", async () => {
            //Navigate to url 'http://automationexercise.com'
            await page.goto("http://automationexercise.com");
            //Verify that home page is visible successfully
            await expect(page.locator('text=Home')).toBeVisible();
        })

        await test.step("step 2: Click 'Signup / Login'", async () => {
            await page.getByRole('link', { name: 'Signup / Login' }).click();

        })

        await test.step("step 3: Verify 'New User Signup!'", async () => {
            await expect(page.locator('#form')).toContainText('New User Signup!');
        })
        await test.step("step 4: Enter name & email", async () => {
            await page.fill('input[name="name"]', 'newaccount2');
            await page.fill('input[data-qa="signup-email"]', 'testnewaccount2@gmail.com');
        })

        await test.step("step 5: Click 'Signup'", async () => {
            await page.getByRole('button', { name: 'Signup' }).click();
        })
        await test.step("step 6: Verify 'ENTER ACCOUNT INFORMATION'", async () => {
            await expect(page.locator('text=ENTER ACCOUNT INFORMATION')).toBeVisible();
        })
        await test.step("step 7: Fill account info", async () => {
            await page.check('#id_gender2');
            await page.fill('#password', '123456');
            await page.selectOption('#days', '1');
            await page.selectOption('#months', '1');
            await page.selectOption('#years', '2000');
        })
        await test.step("step 8: Newsletter checkbox", async () => {
            await page.check('#newsletter');
        })
        await test.step("step 9: Offers checkbox", async () => {
            await page.check('#optin');
        })
        await test.step("step 10: Fill address info", async () => {
            await page.fill('#first_name', "New");
            await page.fill('#last_name', "Account");
            await page.fill('input[id="company"]', 'ABC');

            await page.fill('#address1', 'ST1');
            await page.fill('#address2', 'ST2');

            await page.selectOption('#country', 'Canada');

            await page.fill('#state', 'State');
            await page.fill('#city', 'City');
            await page.fill('#zipcode', '123456');
            await page.fill('#mobile_number', '0123456789');

        })
        await test.step("step 11: Click Create Account",async()=>{
            await page.click('text=Create Account');
        })
        await test.step("step 12: Verify ACCOUNT CREATED",async()=>{
            await expect(page.locator('text=ACCOUNT CREATED!')).toBeVisible();
        })
        await test.step("step 13: Click Continue",async()=>{
            await page.click('text=Continue');
        })
        await test.step("step 14: Verify Logged in", async()=>{
            await expect(page.locator('text=Logged in as')).toBeVisible();
        })
        // await test.step("step 15: Click Delete Account", async()=>{
        //     await page.click('text=Delete Account');
        // })
        // await test.step("step 16: Verify ACCOUNT DELETED + Continue",async()=> {
        //     await expect(page.locator('text=ACCOUNT DELETED!')).toBeVisible();
        //     await page.click('text=Continue');
        // })
    })


    test("Login User with correct email and password",async({page})=>{
        await test.step("step 1: Click on 'Signup / Login' button",async()=> {
            await page.click('text=Signup / Login');
        })
        await test.step("step 2: Verify 'Login to your account' is visible",async()=>{
            await expect(page.locator('text=Login to your account')).toBeVisible();
        })
        await test.step("step 3: Enter correct email address and password",async()=> {
            await page.fill('input[data-qa="login-email"]','testnewaccount1@gmail.com');
            await page.fill('input[data-qa="login-password"]','123456');
        })
        await test.step("step 4: Click login",async()=>{
            await page.click('.btn.btn-default');
        })
        await test.step("step 5: Verify that 'Logged in as username' is visible",async()=>{
            await expect(page.locator('text=Logged in as newaccount1')).toBeVisible();
        })
        // await test.step("step 6: Click 'Delete Account' button",async()=>{
        //     await page.click('text=Delete Account');
        // })
        // await test.step("step 7: Verify that 'ACCOUNT DELETED!' is visible",async()=>{
        //     await expect(page.locator('text=ACCOUNT DELETED!')).toBeVisible();
        // })
    })
})




