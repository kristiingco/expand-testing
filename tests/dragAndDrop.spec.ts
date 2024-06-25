import { test, expect } from "@playwright/test";
import { launchSite } from "../utilities/launch";

test("browser information", async ({ page }) => {
    await launchSite(
        page,
        "https://practice.expandtesting.com/drag-and-drop",
        "Drag and Drop page for Automation Testing Practice"
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
