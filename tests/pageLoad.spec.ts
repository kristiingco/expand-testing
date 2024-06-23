import { test, expect } from "@playwright/test";

test("page load", async ({ page }) => {
    await page.goto("https://practice.expandtesting.com/");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Practice Test Automation/);
});
