// Example tests for correct layout when text size is increased to 200%
// according to WCAG 1.4.4 Resize text

import { expect } from "chai";

describe("Text size", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/textsize");
  });

  it("should not have overflowing content on normal text size", () => {
    assertNoViolations();

    cy.findByText("CSS is awesome").then((elem) => {
      expect(contentFitsInsideContainer(elem[0])).to.be.true;
    });
  });

  // this fails because content overflows
  it("should not have overflowing content on 200% text size", () => {
    cy.root().then((root) => (root[0].style.fontSize = "200%"));

    assertNoViolations();

    cy.findByText("CSS is awesome").then((elem) => {
      expect(contentFitsInsideContainer(elem[0])).to.be.true;
    });
  });

  const contentFitsInsideContainer = (element: HTMLElement) => {
    return (
      element.scrollHeight <= element.clientHeight &&
      element.scrollWidth <= element.clientWidth
    );
  };

  const assertNoViolations = () => {
    cy.injectAxe();
    cy.checkA11y();
  };
});
