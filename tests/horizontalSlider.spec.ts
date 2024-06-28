import { test, expect } from "@playwright/test";
import { launchSite } from "../utilities/launch";
import { slideAndValidateValue } from "../utilities/inputHelpers";

test.describe("horizontal slider", () => {
    test("horizontal page loads", async ({ page }) => {
        await launchSite(
            page,
            "https://practice.expandtesting.com/horizontal-slider",
            "Horizontal slider page for Automation Testing Practice"
        );

        await page.close();
    });

    test("horizontal slider functionality", async ({ page }) => {
        await launchSite(
            page,
            "https://practice.expandtesting.com/horizontal-slider",
            "Horizontal slider page for Automation Testing Practice"
        );

        await slideAndValidateValue(page, 14, "0.5");
        await slideAndValidateValue(page, 28, "1");
        await slideAndValidateValue(page, 42, "1.5");
        await slideAndValidateValue(page, 56, "2");
        await slideAndValidateValue(page, 70, "2.5");
        await slideAndValidateValue(page, 84, "3");
        await slideAndValidateValue(page, 92, "3.5");
        await slideAndValidateValue(page, 106, "4");
        await slideAndValidateValue(page, 115, "4.5");
        await slideAndValidateValue(page, 129, "5");

        await page.close();
    });
});
