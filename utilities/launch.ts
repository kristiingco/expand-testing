import { Page, expect } from "@playwright/test";

export async function launchSite(page: Page, url: string, pattern: string) {
    await page.goto(url);

    await expect(page).toHaveTitle(pattern);
}
