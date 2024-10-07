import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { expect, test } from "vitest";
import KeyboardExamplePage from "../app/keyboard/page";

//Demonstrate asserting semantics with testing library selectors

test("should have appropriate heading", async () => {
  render(<KeyboardExamplePage />);
  expect(await screen.findByRole("heading", { level: 1 })).toHaveTextContent(
    "Keyboard navigation test cases",
  );
});

test("should have a button for the more information popup", async () => {
  render(<KeyboardExamplePage />);
  const button = (await screen.findAllByRole("button"))[0];
  expect(button).toHaveAccessibleName("More information");
});

test("alternative: should have a button for the more information popup", async () => {
  render(<KeyboardExamplePage />);
  await screen.findByRole("button", {
    name: "More information",
  });
});
