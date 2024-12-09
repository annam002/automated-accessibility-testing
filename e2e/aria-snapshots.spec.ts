import { test, expect } from "@playwright/test";

//Demonstrate the usage of snapshots for aria attributes

test.describe("Aria Snapshots", () => {
  test("should have proper semantics in keyboard navigation page", async ({
    page,
  }) => {
    await page.goto("/keyboard");
    await expect(page.locator("body")).toMatchAriaSnapshot(`
      - main:
        - heading "Keyboard navigation test cases" [level=1]
        - link "Back to main"
        - heading "Keyboard Accessible Dialog" [level=2]
        - button "More information":
          - img "More information"
        - heading "Tab Order" [level=2]
        - button "Button 1"
        - button "Button 3"
        - button "Button 2"
      - alert
    `);
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
