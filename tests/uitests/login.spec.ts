import { test, expect } from "@playwright/test";

test.describe("Login Tests", () => {
  test("Login with valid credentials", async ({ page }) => {
    // Marks a test as "slow". Slow test will be given triple the default timeout.
    test.slow();
    await page.goto(`${process.env.APP_URL}`);
    await page.getByPlaceholder("UserName").fill(`${process.env.USERNAME}`);
    await page.getByPlaceholder("Password").fill(`${process.env.PASSWORD}`);
    await page.getByRole("button", { name: "Log in" }).click();
    await page.waitForURL("https://fr10692vmx.fr.ge.conti.de/home");
    await page.getByRole("button", { name: "Create & Collaborate" }).click();
    await page.locator("#loggedUserId").click();
    await page.locator('[data-cy="fLogout"]').click();
    expect(page.url()).toBe("https://fr10692vmx.fr.ge.conti.de/logout");
    await page.getByRole("button", { name: "Log back in" }).click();
    await expect(page.getByPlaceholder("UserName")).toBeVisible();
    await expect(page.getByPlaceholder("Password")).toBeVisible();
  });
});
