import { test, expect } from "@playwright/test";

test("browser information", async ({ page }) => {
    await page.goto("https://practice.expandtesting.com/drag-and-drop-circles");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(
        /Drag and Drop Circles page for Automation Testing Practice/
    );

    const target = page.locator("#target");
    const red = page.locator(".red");
    const blue = page.locator(".blue");
    const green = page.locator(".green");
    const source = page.locator("#source");

    await red.dragTo(target);
    await green.dragTo(target);
    await blue.dragTo(target);

    await expect(target.locator(".red")).toBeVisible();
    await expect(target.locator(".green")).toBeVisible();
    await expect(target.locator(".blue")).toBeVisible();

    await expect(source.locator(".red")).toHaveCount(0);
    await expect(source.locator(".blue")).toHaveCount(0);
    await expect(source.locator(".green")).toHaveCount(0);

    await page.close();
});
