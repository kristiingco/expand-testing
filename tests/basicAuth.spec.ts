import { test, expect } from "@playwright/test";
import { launchSite } from "../utilities/launch";

test("successful login", async ({ page }) => {
    const USERNAME = "admin";
    const PASSWORD = "admin";

    await page.goto(
        `https://${USERNAME}:${PASSWORD}@practice.expandtesting.com/basic-auth`
    );

    const successMessage = page.getByRole("alert");

    await expect(successMessage).toContainText("Congratulations");
});
