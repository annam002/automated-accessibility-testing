import { test, expect, Page, Locator } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

// Example tests for correct layout when text size is increased to 200%
// according to WCAG 1.4.4 Resize text

test.describe("Text size", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/textsize");
  });

  test("should not have overflowing content on normal text size", async ({
    page,
  }) => {
    await assertNoViolations(page);

    const cssAppraisalText = page.getByText("CSS is awesome");
    expect(await contentFitsInsideContainer(cssAppraisalText)).toBeTruthy();

    const cssAppraisalText2 = page.getByText("CSS is still awesome");
    expect(await contentFitsInsideContainer(cssAppraisalText2)).toBeTruthy();
  });

  // this fails because content overflows
  test("should not have overflowing content on 200% text size", async ({
    page,
  }) => {
    await page.evaluate(() => {
      document.documentElement.style.fontSize = "200%";
    });

    await assertNoViolations(page);

    const cssAppraisalText = page.getByText("CSS is awesome");
    expect(await contentFitsInsideContainer(cssAppraisalText)).toBeTruthy();
  });

  // this fails because content is clipped
  test("should not have clipped content on 200% text size", async ({
    page,
  }) => {
    await page.evaluate(() => {
      document.documentElement.style.fontSize = "200%";
    });

    await assertNoViolations(page);

    const cssAppraisalText = page.getByText("CSS is still awesome");
    expect(await contentFitsInsideContainer(cssAppraisalText)).toBeTruthy();
  });

  const contentFitsInsideContainer = async (locator: Locator) =>
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
