import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { expect, test } from "vitest";
import { axe, toHaveNoViolations } from "jest-axe";
import KeyboardExamplePage from "../app/keyboard/page";
expect.extend(toHaveNoViolations);

//Demonstrate the usage of the automated testing tool axe

test("should not have a11y violations", async () => {
  const { container } = render(<KeyboardExamplePage />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
