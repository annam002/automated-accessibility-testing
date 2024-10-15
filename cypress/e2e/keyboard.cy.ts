// Examples for automated testing of keyboard accessibility:
// - focus/tab order
// - user flow with a keyboard
// - focus style

describe("Keyboard navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/keyboard");
  });

  // Assert baseline accessibility of the page
  it("should not have automatically detectable accessibility issues", () => {
    cy.injectAxe();
    cy.checkA11y();
  });

  // Tests for tab order
  it("should have correct tab order", () => {
    // After page load, the focus *should* be on the body element, but Cypress somehow steals it.
    // Therefore I focus the second element in tab order and tab backwards to reach the first
    cy.get("button").first().focus();
    cy.realPress(["Shift", "Tab"]);
    cy.focused().should("contain.text", "Back to main");
    cy.realPress("Tab");
    cy.focused().within(() => {
      cy.get("img").should("have.attr", "alt", "More information");
    });
  });

  // Example for testing that a focus style is applied
  it("should have focus style", () => {
    cy.get("button")
      .first()
      .focus()
      .then((button) => {
        const computedStyle = window.getComputedStyle(button[0]);
        const hasFocusStyle =
          computedStyle.getPropertyValue("outline") ===
            "rgb(128, 128, 128) solid 2px" &&
          computedStyle.getPropertyValue("outline-offset") === "4px" &&
          computedStyle.getPropertyValue("border-radius") === "2px";
        expect(hasFocusStyle).to.be.true;
      });
  });
});
