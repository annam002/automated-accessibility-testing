export default async function Spacing() {
  return (
    <main className="flex flex-col items-center gap-4">
      <h1 className="text-2xl">Text spacing test cases</h1>
      <a href="/">Back to main</a>
      <section className="w-full" aria-labelledby="what-to-test">
        <h2 id="what-to-test">What to test here</h2>
        <p>
          When changing the text spacing, does the spacing increase accordingly
          and can everything in the page still be seen, reached and operated?
        </p>
        <p>The spacing should be changed to the following:</p>
        <ul>
          <li>
            Line height (line spacing) to at least 1.5 times the font size;
          </li>
          <li>
            Spacing following paragraphs to at least 2 times the font size
          </li>
          <li>
            Letter spacing (tracking) to at least 0.12 times the font size;
          </li>
          <li>Word spacing to at least 0.16 times the font size.</li>
        </ul>
        <p>
          See{" "}
          <a href="https://www.w3.org/WAI/WCAG22/quickref/#text-spacing">
            WCAG 1.4.12
          </a>
        </p>
      </section>
      <section className="w-full" aria-labelledby="overlapping">
        <h2 id="overlapping">Overlapping text at bigger text spacing</h2>
        <div className="h-[24px] w-[200px] border-solid p-1 text-[120%]">
          CSS is very awesome
        </div>
      </section>
    </main>
  );
}
