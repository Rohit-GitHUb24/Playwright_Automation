import { test } from "@playwright/test";
test.describe("ContiSource Application", () => {
  test.skip("Open CS Test", async ({ page }) => {
    await page.goto("/");
    await page.waitForTimeout(5000);
  });
});
