import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Assering semantics", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/keyboard");
  });

  test("should not have automatically detectable accessibility issues", async ({
    page,
  }) => {
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("should have appropriate heading", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Keyboard navigation test cases",
    );
  });

  test("should have a button for for the more information popup", async ({
    page,
  }) => {
    await expect(
      page.getByRole("button", { name: "More information" }),
    ).toBeVisible();
  });

  test("alternative: should have a button for the more information popup", async ({
    page,
  }) => {
    // This is to demonstrate how to use toHaveAccessibleName
    // when it cannot be asserted through the selector for some reason
    await expect(page.getByRole("button").first()).toHaveAccessibleName(
      "More information",
    );
  });
});
