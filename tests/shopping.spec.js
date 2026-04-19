import { test, expect } from "@playwright/test";
import { stepWithScreenshot } from "../utils/evdHelper";
test.setTimeout(60000);
test.describe("Shopping Flow" , () =>{
    //Bug: Flow chay lai tu dau nen khong the code dang tuan tu


    test("Product Detail", async({page}) => {
            await test.step("Login",async() =>{
            await page.goto('https://practicesoftwaretesting.com/');
            await expect(page.locator('[data-test="nav-home"]')).toBeVisible();
            await page.locator('[data-test="nav-sign-in"]').click();
            await page.locator('[data-test="login-form"]').click();
            await expect(page.locator('[data-test="login-form"]')).toBeVisible();
            await page.locator('[data-test="email"]').click();
            await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
            await page.locator('[data-test="password"]').click();
            await page.locator('[data-test="password"]').fill('welcome01');
            await page.locator('[data-test="login-submit"]').click();
            await expect(page.locator('[data-test="page-title"]')).toBeVisible();
    })
            await test.step("Go to Home",async() =>{
                await stepWithScreenshot(page, "Home Page",async() =>{
                    await page.locator('[data-test="nav-home"]').click();
                    await expect(page.locator('[data-test="product-01KP9BNVJXQ99ET9PPVQV81WQ0"]')).toBeVisible();

                })
            })

            await test.step("Product Detail",async()=>{
                await stepWithScreenshot(page,"Product Detail",async() => {
                    await page.goto("https://practicesoftwaretesting.com/product/01KP9BNVJXQ99ET9PPVQV81WQ0");
                    await expect(page.locator('div').filter({ hasText: 'Photo by Helinton Fantin on' }).nth(2)).toBeVisible();
                    await expect(page.getByText(/Combination Pliers/)).toBeVisible();
                })
            })
    })

    test("Add to cart",async({page}) =>{
        // await test.step("Increase Quantity",async() => {
        //     await stepWithScreenshot(page,"Increase Quantity", async() =>{
        //         await page.locator('[data-test="increase-quantity"]').click({delay : 1000});
        //     })
        // })

        await test.step("Add to cart" , async() => {
            await stepWithScreenshot(page, "Add to cart" , async() => {
                await page.locator('[data-test="add-to-cart"]').click();
                await expect(page.getByTestId('cart-item')).toBeVisible();
                await page.locator('[data-test="nav-cart"]').click();
                await expect(page.locator('app-cart div').filter({ hasText: 'ItemQuantityPriceTotalCombination Pliers Quantity for Combination Pliers$14.15$' })).toBeVisible();
                await page.locator('[data-test="proceed-1"]').click();
                await page.locator('[data-test="proceed-2"]').click();
            })
        })
   
       
 })

    test("Place Order",async({page}) => {
        await test.step("Fill Billing Information",async() => {
        await stepWithScreenshot(page,"Fill Billing Information", async() => {
            await expect(page.locator('div').filter({ hasText: 'Billing' }).nth(4)).toBeVisible();
            await page.locator('[data-test="postal_code"]').click();
            await page.locator('[data-test="postal_code"]').fill('123456');
            await page.locator('[data-test="state"]').click();
            await page.locator('[data-test="state"]').fill('new york');
        })
    })

    await test.step("Choose Payment Method",async() => {
        await stepWithScreenshot(page,"Choose Payment Method",async() =>{
            await page.locator('[data-test="proceed-3"]').click();
            await expect(page.locator('div').filter({ hasText: 'PaymentPayment MethodChoose' }).nth(3)).toBeVisible();
            await page.locator('[data-test="payment-method"]').selectOption('cash-on-delivery');
            await page.locator('[data-test="finish"]').click();
        })
    })
    
    await test.step("Order success", async() => {
        await stepWithScreenshot(page,"Order success",async() => {
            await expect(page.locator('[data-test="payment-success-message"]')).toBeVisible();
            await page.locator('[data-test="finish"]').click();
            await expect(page.getByText('Thanks for your order!')).toBeVisible();
        })
    })
    })


//end 
});




  

  
  
  
  

  

  

  

