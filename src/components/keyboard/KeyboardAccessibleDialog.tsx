"use client";

import { useEffect, useState } from "react";

// Attention: This is not a general example of an accessible dialog!
// It is fit for demonstration purposes only.
// Refer to https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/ for a proper implementation
export const KeyboardAccessibleDialog = () => {
  const [firstMount, setFirstMount] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    if (firstMount) {
      setFirstMount(false);
      return;
    }
    if (dialogOpen) {
      document.getElementById("btn-close")?.focus();
    } else {
      document.getElementById("btn-dialog")?.focus();
    }
  }, [dialogOpen]);

  const openDialog = () => {
    setDialogOpen(true);
    return false;
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      //make it possible to close the modal with the escape key
      setDialogOpen(false);
      event.stopPropagation();
      event.preventDefault();
    } else if (event.key === "Tab") {
      //make sure the focus stays in the menu on pressing tab
      //implementation works with the assumption that there are the three buttons close, ok, cancel in the dialog

      const targetId = (event.target as HTMLButtonElement).id;
      const movingBackwards = event.shiftKey;
      if (targetId === "btn-cancel" && !movingBackwards) {
        document.getElementById("btn-close")?.focus();
        event.stopPropagation();
        event.preventDefault();
      } else if (targetId === "btn-close" && movingBackwards) {
        document.getElementById("btn-cancel")?.focus();
        event.stopPropagation();
        event.preventDefault();
      }
    }
  };

  return (
    <div>
      <button
        id="btn-dialog"
        className="border-none bg-white"
        onClick={() => openDialog()}
      >
        <img src="/icons/exclamation.png" alt="More information"></img>
      </button>
      {dialogOpen && (
        <div className="fixed left-0 top-0 z-10 h-full w-full bg-gray-200/50">
          <div className="mt-96 flex justify-center">
            <div
              className="flex max-w-[400px] flex-col gap-4 rounded border-solid border-gray-500 bg-white p-2"
              role="dialog"
              aria-modal="true"
              aria-labelledby="dialog-title"
              onKeyDown={(e) => handleKeyDown(e as unknown as KeyboardEvent)}
            >
              <div className="my-2 flex items-start justify-between">
                <h2 className="m-0" id="dialog-title">
                  Information
                </h2>
                <button
                  id="btn-close"
                  className="border-none bg-white"
                  onClick={() => setDialogOpen(false)}
                >
                  <img src="/icons/cross.png" alt="Close Dialog"></img>
                </button>
              </div>
              <div>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </div>
              <div className="flex justify-end gap-2">
                <button
                  id="btn-ok"
                  className="px-4 py-2"
                  onClick={() => setDialogOpen(false)}
                >
                  OK
                </button>
                <button
                  id="btn-cancel"
                  className="px-4 py-2"
                  onClick={() => setDialogOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
