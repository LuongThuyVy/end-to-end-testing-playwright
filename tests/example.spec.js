//Execute Auto Test on https://the-internet.herokuapp.com/login
//Flow Login Success and Failure
import { test, expect } from "@playwright/test";
import { stepWithScreenshot } from "../utils/evdHelper";

test.describe("Flow test 1", () => {
  test("Test Login", async ({ page }) => {
    await test.step("Login Success", async () => {
      await stepWithScreenshot(page, "Open login page", async () => {
        await page.goto("https://the-internet.herokuapp.com/login");
      });

      await stepWithScreenshot(page, "Fill username", async () => {
        await page.fill("#username", "tomsmith");
      });

      await stepWithScreenshot(page, "Fill password", async () => {
        await page.fill("#password", "SuperSecretPassword!");
      });

      await stepWithScreenshot(page, "Click login", async () => {
        await page.click('button[type="submit"]');
      });

      await stepWithScreenshot(page, "Verify login success", async () => {
        await expect(
          page.getByText("You logged into a secure area"),
        ).toBeVisible();
      });
    });

    await test.step("Login Fail", async () => {
      await page.goto("https://the-internet.herokuapp.com/login");

      await expect(
        page.getByRole("heading", { name: "Login Page" }),
      ).toBeVisible();

      await page.getByRole("textbox", { name: "Username" }).fill("tomsmith");
      await page
        .getByRole("textbox", { name: "Password" })
        .fill("SuperWrongPassword!");

      await page.getByRole("button", { name: "Login" }).click();

      await expect(page.getByText("Your password is invalid!")).toBeVisible();

      // Screenshot evidence
      await test.info().attach("Login Fail Screenshot", {
        body: await page.screenshot({ fullPage: true }),
        contentType: "image/png",
      });
    });
  });
});
