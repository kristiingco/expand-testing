import { test, expect } from "@playwright/test";
import MailosaurClient from "mailosaur";

test.describe("forgot password", () => {
    test("forgot password page loads", async ({ page }) => {
        await page.goto("https://practice.expandtesting.com/forgot-password");

        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(
            /Forgot Password form page for Automation Testing Practice/
        );

        await page.close();
    });

    test("retrieve password", async ({ page }) => {
        const mailosaur = new MailosaurClient(process.env.API_KEY);
        const TEST_EMAIL = "whether-giving@yvbfhwnw.mailosaur.net";
        const SERVER_ID = process.env.SERVER_ID;

        await page.goto("https://practice.expandtesting.com/forgot-password");

        const emailField = page.getByLabel("E-mail");

        await emailField.fill(TEST_EMAIL);

        await expect(emailField).toHaveValue(TEST_EMAIL);

        await page.getByRole("button", { name: "Retrieve password" }).click();

        const emailNotification = page.locator("#confirmation-alert");

        await expect(emailNotification).toBeVisible();
        await expect(emailNotification).toContainText(
            "An e-mail has been sent to you"
        );

        const email = await mailosaur.messages.get(SERVER_ID, {
            sentTo: TEST_EMAIL,
        });

        expect(email.subject).toContain("Forgot Password");

        await page.close();
    });
});
