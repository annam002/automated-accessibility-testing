import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

//Demonstrate the usage of the automated testing tool axe

test.describe("Axe tests", () => {
  test("should not have a11y violations", async ({ page }) => {
    await page.goto("/bugpit");
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
