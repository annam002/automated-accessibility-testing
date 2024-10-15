// Tests for demonstrating the assertion of proper semantics in a web page

describe("Asserting semantics", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/keyboard");
  });

  it("should have appropriate heading", () => {
    cy.findByRole("heading", { level: 1 }).should(
      "contain.text",
      "Keyboard navigation test cases",
    );
  });

  it("should have a button for the more information popup", () => {
    cy.findByRole("button", { name: "More information" }).should("be.visible");
  });
});
