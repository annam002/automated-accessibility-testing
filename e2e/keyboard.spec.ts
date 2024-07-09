import { expect, Locator, Page, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

// Examples for automated testing of keyboard accessibility:
// - focus/tab order
// - user flow with a keyboard
// - focus style

test.describe("Keyboard navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/keyboard");
  });

  // Assert baseline accessibility of the page
  test("should not have automatically detectable accessibility issues", async ({
    page,
  }) => {
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  // Tests for tab order
  test("should focus back link first", async ({ page }) => {
    await page.keyboard.press("Tab");
    await expect(page.locator("*:focus-visible")).toHaveText("Back to main");
  });

  test("should have correct tab order", async ({ page }) => {
    await expect(await nextElementInTabOrder(page)).toHaveText("Back to main");
    await expect(await nextElementInTabOrder(page)).toHaveAccessibleName(
      "More information",
    );
    await expect(await previousElementInTabOrder(page)).toHaveText(
      "Back to main",
    );
  });

  // this fails, because Button 3 is before Button 2 in the focus order
  test("should have focus order following visible order", async ({ page }) => {
    await page.getByRole("button").filter({ hasText: "Button 1" }).focus();
    const button2 = await nextElementInTabOrder(page);
    await expect(button2).toHaveAccessibleName("Button 2");
    const button3 = await nextElementInTabOrder(page);
    await expect(button3).toHaveAccessibleName("Button 3");
  });

  // Example for testing user flow with the keyboard
  test("should be able to use the info dialog with the keyboard", async ({
    page,
  }) => {
    await page.getByRole("link").focus();
    const dialogButton = await nextElementInTabOrder(page);
    await expect(dialogButton).toHaveAccessibleName("More information");
    await page.keyboard.press("Enter");
    await expect(page.getByText("OK")).toBeVisible();
    const closeButton = page.locator("*:focus-visible");
    await expect(closeButton).toHaveAccessibleName("Close Dialog");
    await nextElementInTabOrder(page);
    const okButton = page.locator("*:focus-visible");
    await expect(okButton).toHaveAccessibleName("OK");
    await page.keyboard.press("Enter");
    await expect(page.getByText("OK")).toHaveCount(0);
  });

  // Example for testing that a focus style is applied
  test("should have focus style", async ({ page }) => {
    await page.keyboard.press("Tab");
    const focusedElement = page.locator("*:focus-visible");
    const hasFocusStyle = await focusedElement.evaluate((element) => {
      const computedStyle = window.getComputedStyle(element);
      return (
        computedStyle.getPropertyValue("outline") ===
          "rgb(128, 128, 128) solid 2px" &&
        computedStyle.getPropertyValue("outline-offset") === "4px" &&
        computedStyle.getPropertyValue("border-radius") === "2px"
      );
    });
    expect(hasFocusStyle).toBeTruthy();
  });

  const nextElementInTabOrder = async (page: Page): Promise<Locator> => {
    await page.keyboard.press("Tab");
    return page.locator("*:focus-visible");
  };

  const previousElementInTabOrder = async (page: Page): Promise<Locator> => {
    await page.keyboard.press("Shift+Tab");
    return page.locator("*:focus-visible");
  };
});
