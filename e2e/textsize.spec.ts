import { test, expect, Page, Locator } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Text size", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/textsize");
  });

  test("should not have overflowing content on normal text size", async ({
    page,
  }) => {
    await assertNoViolations(page);

    const cssAppraisalBox = page.getByText("CSS is awesome");
    expect(await contentFitsInsideElement(cssAppraisalBox)).toBeTruthy();

    const cssAppraisalBox2 = page.getByText("CSS is still awesome");
    expect(await contentFitsInsideElement(cssAppraisalBox2)).toBeTruthy();
  });

  // this fails because content overflows
  test("should not have overflowing content on 200% text size", async ({
    page,
  }) => {
    await page.evaluate(() => {
      document.documentElement.style.fontSize = "32px";
    });

    await assertNoViolations(page);

    const cssAppraisalBox = page.getByText("CSS is awesome");
    expect(await contentFitsInsideElement(cssAppraisalBox)).toBeTruthy();
  });

  // this fails because content is clipped
  test("should not have clipped content on 200% text size", async ({
    page,
  }) => {
    await page.evaluate(() => {
      document.documentElement.style.fontSize = "32px";
    });

    await assertNoViolations(page);

    const cssAppraisalBox2 = page.getByText("CSS is still awesome");
    expect(await contentFitsInsideElement(cssAppraisalBox2)).toBeTruthy();
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
