import { test } from '@playwright/test';

export async function stepWithScreenshot(page, name, action) {
  await test.step(name, async () => {

    await action();

    await test.info().attach(name, {
      body: await page.screenshot({ fullPage: true }),
      contentType: 'image/png'
    });

  });
}