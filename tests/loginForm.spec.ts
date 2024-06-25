import { test, expect } from "@playwright/test";
import { launchSite } from "../utilities/launch";

test.describe("login", () => {
    test("login form page loads", async ({ page }) => {
        await launchSite(
            page,
            "https://practice.expandtesting.com/login",
            "Login form page for Automation Testing Practice"
        );

        await page.close();
    });

    test("login and logout", async ({ page }) => {
        await page.goto("https://practice.expandtesting.com/login");

        const usernameField = page.getByLabel("Username");
        const passwordField = page.getByLabel("Password");

        await usernameField.fill("practice");
        await passwordField.fill("SuperSecretPassword!");

        await page.getByRole("button", { name: "Login" }).click();

        const successMessage = page.locator("#flash");

        await expect(successMessage).toBeVisible();
        await expect(successMessage).toContainText("secure area!");

        const logoutButton = page.locator(".button");

        await expect(logoutButton).toBeVisible();

        await logoutButton.click();

        const logoutMessage = page.locator("#flash");

        await expect(logoutMessage).toBeVisible();
        await expect(logoutMessage).toContainText("logged out");

        await page.close();
    });

    test("invalid username", async ({ page }) => {
        await page.goto("https://practice.expandtesting.com/login");

        const usernameField = page.getByLabel("Username");
        const passwordField = page.getByLabel("Password");

        await usernameField.fill("invalid");
        await passwordField.fill("SuperSecretPassword!");

        await page.getByRole("button", { name: "Login" }).click();

        const errorMessage = page.locator("#flash");

        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toContainText("username is invalid");

        await page.close();
    });

    test("invalid password", async ({ page }) => {
        await page.goto("https://practice.expandtesting.com/login");

        const usernameField = page.getByLabel("Username");
        const passwordField = page.getByLabel("Password");

        await usernameField.fill("practice");
        await passwordField.fill("invalid password");

        await page.getByRole("button", { name: "Login" }).click();

        const errorMessage = page.locator("#flash");

        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toContainText("password is invalid");

        await page.close();
    });
});
