// @ts-check
const { test } = require('@playwright/test');

test('IMG to base64', async ({ page }) => {
  await page.goto('');

  const buffer = await page.screenshot();
  console.log(buffer.toString('base64'));
  await page.close()
});