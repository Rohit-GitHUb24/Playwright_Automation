import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await test.step("Navigate to Playwright", async () => {
    await page.goto("https://playwright.dev/");
  });

  await page.getByRole("link", { name: "Get started" }).click();
  await page.getByRole("link", { name: "How to open the HTML test" }).click();
  await page
    .locator("div")
    .filter({
      hasText:
        /^npmyarnpnpmnpx playwright testyarn playwright testpnpm exec playwright test$/,
    })
    .getByRole("tab")
    .nth(2)
    .click();
  await page.getByRole("link", { name: "Community" }).click();
  await expect(page.getByLabel("Main", { exact: true })).toContainText(
    "Community"
  );
  await page
    .getByRole("heading", { name: "AmbassadorsDirect link to" })
    .click();
  await page.getByRole("heading", { name: "Welcome" }).click();
});
