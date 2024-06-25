import { test, expect } from "@playwright/test";
import { launchSite } from "../utilities/launch";

test("browser information", async ({ page }) => {
    await launchSite(
        page,
        "https://practice.expandtesting.com/drag-and-drop-circles",
        "Drag and Drop Circles page for Automation Testing Practice"
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
