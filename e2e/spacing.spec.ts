import { test, expect, Page, Locator } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Spacing", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/spacing");
  });

  test("should not have overflowing content", async ({ page }) => {
    await assertNoViolations(page);

    const cssAppraisalBox = page.getByText("CSS is very awesome");
    expect(await contentFitsInsideElement(cssAppraisalBox)).toBeTruthy();
  });

  test("should not have overflowing content when spacing is increased", async ({
    page,
  }) => {
    await page.evaluate(() => {
      document.documentElement.style.lineHeight = "1.5rem";
      document.documentElement.style.letterSpacing = "0.12em";
      document.documentElement.style.wordSpacing = "0.16em";
    });

    await assertNoViolations(page);

    const cssAppraisalBox = page.getByText("CSS is very awesome");
    expect(await contentFitsInsideElement(cssAppraisalBox)).toBeTruthy();
  });

  const contentFitsInsideElement = async (locator: Locator) =>
    await locator.evaluate(
      (element) =>
        element.scrollHeight <= element.clientHeight &&
        element.scrollWidth <= element.clientWidth,
    );

  const assertNoViolations = async (page: Page) => {
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  };
});
