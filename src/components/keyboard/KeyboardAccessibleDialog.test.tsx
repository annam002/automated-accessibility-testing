import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { expect, test } from "vitest";
import { KeyboardAccessibleDialog } from "./KeyboardAccessibleDialog";
import { axe, toHaveNoViolations } from "jest-axe";
expect.extend(toHaveNoViolations);

test("should not have a11y violations", async () => {
  const { container } = render(<KeyboardAccessibleDialog />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test("should be able to focus the menu button", async () => {
  const user = userEvent.setup();
  render(<KeyboardAccessibleDialog />);
  await user.tab();

  const menuButton = await screen.findByRole("button", {
    name: "More information",
  });
  expect(menuButton).toHaveFocus();
  //Alternative, but unfortunately doesn't work with focus-visible due to: https://github.com/dperini/nwsapi/issues/115
  expect(menuButton.matches(":focus")).toBe(true);

  await user.keyboard("[Enter]");
});

test("should have proper focus handling for dialog", async () => {
  const user = userEvent.setup();
  render(<KeyboardAccessibleDialog />);

  const menuButton = await screen.findByRole("button", {
    name: "More information",
  });
  menuButton.focus();

  await user.keyboard("[Enter]");

  const closeButton = await screen.findByRole("button", {
    name: "Close Dialog",
  });
  const okButton = await screen.findByRole("button", { name: "OK" });
  const cancelButton = await screen.findByRole("button", { name: "Cancel" });

  expect(closeButton).toHaveFocus();

  await user.tab();
  expect(okButton).toHaveFocus();

  await user.tab();
  expect(cancelButton).toHaveFocus();

  await user.tab();
  expect(closeButton).toHaveFocus();

  await user.keyboard("{Shift>}{Tab}{/Shift}");
  expect(cancelButton).toHaveFocus();

  await user.keyboard("[Enter]");

  expect(menuButton).toHaveFocus();
});
