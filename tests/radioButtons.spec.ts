import { test, expect } from "@playwright/test";

test("browser information", async ({ page }) => {
    await page.goto("https://practice.expandtesting.com/radio-buttons");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(
        /Radio Buttons page for Automation Testing Practice/
    );

    const radioButtons = page.getByRole("radio", { disabled: false });

    for (let i = 0; i < (await radioButtons.count()); i++) {
        if (await radioButtons.nth(i).isChecked()) continue;
        else {
            await radioButtons.nth(i).check();
            await expect(radioButtons.nth(i)).toBeChecked();
        }
    }
});
