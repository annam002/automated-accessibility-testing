import { KeyboardAccessibleDialog } from "@/components/keyboard/KeyboardAccessibleDialog";

export default function KeyboardExamplePage() {
  return (
    <main className="flex flex-col items-center gap-8 p-24">
      <h1 className="text-2xl">Keyboard navigation test cases</h1>
      <a href="/">Back to main</a>
      <div className="w-full">
        <h2 className="text-xl">Keyboard Accessible Dialog</h2>
        <KeyboardAccessibleDialog />
      </div>
      <div className="w-full">
        <h2 className="text-xl">Tab Order</h2>
        <div className="relative w-full">
          <button className="relative left-0">Button 1</button>
          <button className="relative left-1/2">Button 3</button>
          <button className="relative left-1/4">Button 2</button>
        </div>
      </div>
    </main>
  );
}
