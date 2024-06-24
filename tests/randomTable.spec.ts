import { test, expect } from "@playwright/test";

test("random table", async ({ page }) => {
    await page.goto("https://practice.expandtesting.com/dynamic-table");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(
        /Dynamic Tables page for Automation Testing Practice/
    );

    const chromeCPU = page.locator("#chrome-cpu");
    await expect(chromeCPU).toBeVisible();
    let cpuPercentageSummary = await chromeCPU.innerText();
    cpuPercentageSummary = cpuPercentageSummary.replace("Chrome CPU: ", "");

    const headers = page.locator("thead").locator("tr").locator("th");

    let cpuIndex: number;
    for (let i = 0; i < (await headers.count()); i++) {
        if ((await headers.nth(i).innerText()) === "CPU") {
            cpuIndex = i;
            break;
        }
    }

    const rows = page.locator("tbody").locator("tr");

    let cpuPercentageInTable: string;
    for (let j = 0; j < (await rows.count()); j++) {
        if (
            (await rows.nth(j).locator("td").first().innerText()) === "Chrome"
        ) {
            cpuPercentageInTable = await rows
                .nth(j)
                .locator("td")
                .nth(cpuIndex)
                .innerText();
            break;
        }
    }

    expect(cpuPercentageSummary).toEqual(cpuPercentageInTable);

    await page.close();
});
