import { test, expect } from "@playwright/test";

test("browser information", async ({ page }) => {
    await page.goto("https://practice.expandtesting.com/drag-and-drop");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(
        /Drag and Drop page for Automation Testing Practice/
    );

    let columns = page.locator("#dnd-columns").locator("div");

    await expect(columns.first()).toHaveText("A");
    await expect(columns.last()).toHaveText("B");

    const columnA = page.locator("#column-a");
    const columnB = page.locator("#column-b");

    await columnA.dragTo(columnB);

    columns = page.locator("#dnd-columns").locator("div");

    await expect(columns.first()).not.toHaveText("A");
    await expect(columns.last()).not.toHaveText("B");

    await page.close();
});
