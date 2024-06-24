import { test, expect } from "@playwright/test";

test("browser information", async ({ page }) => {
    await page.goto("https://practice.expandtesting.com/my-browser");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(
        /Browser Information demo page for Automation Testing Practice/
    );

    const toggleBrowserButton = page.locator("#browser-toggle");
    expect(await toggleBrowserButton.innerText()).toContain("Show");
    await toggleBrowserButton.click();
    expect(await toggleBrowserButton.innerText()).toContain("Hide");

    const table = page.locator(".table");
    await expect(table).toBeVisible();

    const tableRows = table.locator("tr");

    for (let i = 0; i < (await tableRows.count()); i++) {
        expect(
            await tableRows.nth(i).locator("td").first().innerText()
        ).toBeTruthy();
    }

    await toggleBrowserButton.click();
    expect(await toggleBrowserButton.innerText()).toContain("Show");
    await expect(table).not.toBeVisible();

    await page.close();
});
