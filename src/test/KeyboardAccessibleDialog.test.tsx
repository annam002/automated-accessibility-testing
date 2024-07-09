import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { expect, test } from "vitest";
import { KeyboardAccessibleDialog } from "@/components/keyboard/KeyboardAccessibleDialog";

//Examples for keyboard testing with vitest & testing library
//Prerequisite is the library "@testing-library/user-event"
//It should be noted that keyboard navigation tests on unit test level are possible,
//but since they run on a headless browser, there might be bugs or unimplemented
//features that prevent a successful test. See also line 25.

test("should be able to focus the menu button", async () => {
  const user = userEvent.setup();
  render(<KeyboardAccessibleDialog />);
  await user.tab();

  //We need to first select the element we expect to have focussed,
  //and then assert that it is focussed.
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
