import { test, expect } from "@playwright/test";

//Demonstrate the usage of snapshots for aria attributes

test.describe("Aria Snapshots", () => {
  test("should have proper semantics in keyboard navigation page", async ({
    page,
  }) => {
    await page.goto("/keyboard");
    await expect(page.locator("ul")).toMatchAriaSnapshot(`
    - list:
      - listitem:
        - text: Can everything in the page be reached and used with the keyboard? See
        - link "WCAG 2.1.1"
      - listitem:
        - text: Is the focus order logical? See
        - link "WCAG 2.4.3"
      - listitem:
        - text: Can the keyboard user be trapped? See
        - link "WCAG 2.1.2"`);
  });

  test("should have certain text in h1 heading", async ({ page }) => {
    await page.goto("/keyboard");
    // partial matching, we do not need to specify everything
    await expect(page.getByText("Keyboard navigation test cases"))
      .toMatchAriaSnapshot(`
      - heading [level=1]
    `);
  });
});
