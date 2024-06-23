import { test, expect } from "@playwright/test";

test("web inputs", async ({ page }) => {
    const NUMBER_INPUT = "4";
    const TEXT_INPUT = "text";
    const PASSWORD_INPUT = "password";
    const DATE_INPUT = "2024-02-29";

    await page.goto("https://practice.expandtesting.com/inputs");

    await expect(page).toHaveTitle(/Web inputs/);

    const numberInput = page.getByLabel("Input: Number");
    await numberInput.fill(NUMBER_INPUT);
    await expect(numberInput).toHaveValue(NUMBER_INPUT);

    const textInput = page.getByLabel("Input: Text");
    await textInput.fill(TEXT_INPUT);
    await expect(textInput).toHaveValue(TEXT_INPUT);

    const passwordInput = page.getByLabel("Input: Password");
    await passwordInput.fill(PASSWORD_INPUT);
    await expect(passwordInput).toHaveValue(PASSWORD_INPUT);

    const dateInput = page.getByLabel("Input: Date");
    await dateInput.fill(DATE_INPUT);
    await expect(dateInput).toHaveValue(DATE_INPUT);

    const displayInputs = page.getByRole("button", { name: "Display Inputs" });
    await displayInputs.click();

    const numberOutput = page.locator("#output-number");
    await expect(numberOutput).toHaveText(NUMBER_INPUT);

    const textOutput = page.locator("#output-text");
    await expect(textOutput).toHaveText(TEXT_INPUT);

    const passwordOutput = page.locator("#output-password");
    await expect(passwordOutput).toHaveText(PASSWORD_INPUT);

    const dateOutput = page.locator("#output-date");
    await expect(dateOutput).toHaveText(DATE_INPUT);

    const clearInputs = page.getByRole("button", { name: "Clear Inputs" });
    await clearInputs.click();

    await expect(numberInput).toHaveValue("");
    await expect(numberInput).toHaveValue("");
    await expect(textInput).toHaveValue("");
    await expect(passwordInput).toHaveValue("");

    await expect(numberOutput).not.toBeVisible();
    await expect(textOutput).not.toBeVisible();
    await expect(passwordOutput).not.toBeVisible();
    await expect(dateOutput).not.toBeVisible();
});
