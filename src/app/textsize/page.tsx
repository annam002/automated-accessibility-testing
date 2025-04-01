export default async function TextSize() {
  return (
    <main className="flex flex-col items-center gap-8">
      <h1 className="text-2xl">Fontsize test cases</h1>
      <a href="/">Back to main</a>
      <section className="w-full" aria-labelledby="what-to-test">
        <h2 id="what-to-test">What to test here</h2>
        <p>
          When setting the text size to 200% (32px), does the text size
          increase, and can everything in the page still be seen, reached and
          operated?
        </p>
        <p>
          See{" "}
          <a href="https://www.w3.org/WAI/WCAG22/quickref/#resize-text">
            WCAG 1.4.4
          </a>
        </p>
      </section>
      <section className="w-full" aria-labelledby="overlapping">
        <h2 id="overlapping">Overlapping text at 200% text size</h2>
        <div className="h-[60px] w-[100px] border-solid p-2 text-2xl">
          CSS is awesome
        </div>
      </section>
      <section className="w-full" aria-labelledby="clipped">
        <h2 id="clipped">Clipped text at 200% text size</h2>
        <div className="h-[100px] w-[100px] overflow-hidden border-solid p-2 text-2xl">
          CSS is still awesome
        </div>
      </section>
    </main>
  );
}
