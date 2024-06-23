import { test, expect } from "@playwright/test";

test("notification", async ({ page }) => {
    await page.goto(
        "https://practice.expandtesting.com/notification-message-rendered"
    );

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(
        /Notification Message page for Automation Testing Practice/
    );

    await page.getByRole("link", { name: "Click here" }).click();

    await page.waitForTimeout(5000);

    const alert = page.locator("#flash");
    await expect(alert).toBeVisible();

    await page.getByLabel("Close").click();

    await expect(alert).not.toBeVisible();
});
