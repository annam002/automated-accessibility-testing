import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

// Example tests for correct layout on small screens (320x256px)
// according to WCAG 1.4.10 Reflow

test.describe("Reflow", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/reflow");
    await page.setViewportSize({ width: 320, height: 256 });
  });

  // Ensure baseline accessibility of the page
  test("should not have automatically detectable accessibility issues", async ({
    page,
  }) => {
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  // this fails, because on the small resolution the search box is not completely in viewport
  test("should have searchbox completely in view on smallest resolution", async ({
    page,
  }) => {
    const searchbox = page.getByRole("searchbox");
    await expect(searchbox).toBeInViewport({ ratio: 1 });
  });

  // this fails, because on the small resolution home link cannot be scrolled into viewport at all
  test("should be able to scroll homelink into view on smallest resolution", async ({
    page,
  }) => {
    const homeLink = page.getByRole("link", { name: "Home" });
    await homeLink.scrollIntoViewIfNeeded();
    await expect(homeLink).toBeInViewport({ ratio: 1 });
  });

  // this fails, because on the small resolution there is a horizontal scrollbar
  test("should not have horizontal scrollbar on smallest resolution", async ({
    page,
  }) => {
    const hasHorizontalScrollbar = await page.evaluate(
      () =>
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth,
    );
    expect(hasHorizontalScrollbar).toBeFalsy();
  });
});
