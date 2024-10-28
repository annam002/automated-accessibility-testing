// Example tests for correct layout on small screens (320x256px)
// according to WCAG 1.4.10 Reflow

describe("Reflow", () => {
  beforeEach(() => {
    cy.viewport(320, 256);
    cy.visit("http://localhost:3000/reflow");
  });

  it("should not have a11y violations", () => {
    cy.injectAxe();
    cy.checkA11y();
  });

  // This test is green, because the searchbox is 300px wide, smaller than the viewport
  it("should not have searchbox wider than viewport width", () => {
    cy.findByRole("searchbox").then((element) => {
      expect(element[0].scrollWidth).to.be.at.most(320);
    });
  });

  // This fails, because the left side of the searchbox is rendered outside the viewport (with no means to scroll there)
  it("should not have searchbox running horizontally out of viewport", () => {
    cy.findByRole("searchbox").then((element) => {
      const { left, right } = element[0].getBoundingClientRect();
      expect(right).to.be.at.most(320);
      expect(left).to.be.at.least(0);
    });
  });
});
