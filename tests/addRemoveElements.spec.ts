import { test, expect } from "@playwright/test";
import { launchSite } from "../utilities/launch";

test("add or remove elements", async ({ page }) => {
    await launchSite(
        page,
        "https://practice.expandtesting.com/add-remove-elements",
        "Web Elements (Add and Remove) page for Automation Testing Practice"
    );

    const numClicks = Math.ceil(Math.random() * (5 - 1) + 1);

    for (let i = 0; i < numClicks; i++) {
        await page.getByRole("button", { name: "Add Element" }).click();
    }

    const deleteButtons = page.getByRole("button", { name: "Delete" }).all();

    await expect((await deleteButtons).length).toBe(numClicks);

    for (let i = 0; i < (await deleteButtons).length; i++) {
        await page.getByRole("button", { name: "Delete" }).first().click();
    }

    await expect(
        page.getByRole("button", { name: "Delete" })
    ).not.toBeVisible();

    await page.close();
});
