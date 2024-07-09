import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { expect, test } from "vitest";
import { axe, toHaveNoViolations } from "jest-axe";
import KeyboardExamplePage from "./page";
expect.extend(toHaveNoViolations);

test("should not have a11y violations", async () => {
  const { container } = render(<KeyboardExamplePage />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test("should have appropriate heading", async () => {
  render(<KeyboardExamplePage />);
  expect(await screen.findByRole("heading", { level: 1 })).toHaveTextContent(
    "Keyboard navigation test cases",
  );
});

test("should have a button for the more information popup", async () => {
  render(<KeyboardExamplePage />);
  await screen.findByRole("button", {
    name: "More information",
  });
});
