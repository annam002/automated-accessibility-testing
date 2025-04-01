import { KeyboardAccessibleDialog } from "@/components/keyboard/KeyboardAccessibleDialog";

export default function KeyboardExamplePage() {
  return (
    <main className="flex flex-col items-center gap-8 p-24">
      <h1 className="text-2xl">Keyboard navigation test cases</h1>
      <a href="/">Back to main</a>
      <section className="w-full" aria-labelledby="what-to-test">
        <h2 id="what-to-test">What to test here</h2>
        <ul>
          <li>
            Can everything in the page be reached and used with the keyboard?
            See{" "}
            <a href="https://www.w3.org/WAI/WCAG22/quickref/#keyboard">
              WCAG 2.1.1
            </a>
          </li>
          <li>
            Is the focus order logical? See{" "}
            <a href="https://www.w3.org/WAI/WCAG22/quickref/#focus-order">
              WCAG 2.4.3
            </a>
          </li>
          <li>
            Can the keyboard user be trapped? See{" "}
            <a href="https://www.w3.org/WAI/WCAG22/quickref/#no-keyboard-trap">
              WCAG 2.1.2
            </a>
          </li>
        </ul>
      </section>
      <section className="w-full" aria-labelledby="accessible-dialog">
        <h2 id="accessible-dialog" className="text-xl">
          Keyboard Accessible Dialog
        </h2>
        <KeyboardAccessibleDialog />
      </section>
      <section className="w-full" aria-labelledby="tab-order">
        <h2 id="tab-order" className="text-xl">
          Tab Order is off here
        </h2>
        <div className="relative w-full">
          <button className="relative left-0">Button 1</button>
          <button className="relative left-1/2">Button 3</button>
          <button className="relative left-1/4">Button 2</button>
        </div>
      </section>
    </main>
  );
}
