//Demonstrate the usage of the automated testing tool axe

describe("Axe tests", () => {
  it("should not have a11y violations", () => {
    cy.visit("http://localhost:3000/bugpit");
    cy.injectAxe();
    cy.checkA11y();
  });
});
