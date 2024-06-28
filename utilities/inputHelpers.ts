import { Page, expect } from "@playwright/test";

export async function slideAndValidateValue(
    page: Page,
    x: number,
    value: string
) {
    const slider = page.locator("input");
    let rangeValue = page.locator("#range");

    await slider.dragTo(slider, {
        sourcePosition: { x: 0, y: 0 },
        targetPosition: { x: x, y: 0 },
        force: true,
    });

    await expect(rangeValue).toContainText(value);
}
