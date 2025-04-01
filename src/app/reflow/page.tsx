export default async function Reflow() {
  return (
    <main className="flex flex-col items-center gap-4">
      <h1 className="text-3xl">Reflow test cases</h1>
      <a href="/">Back to main</a>
      <section className="w-full" aria-labelledby="what-to-test">
        <h2 id="what-to-test">What to test here</h2>
        <p>
          When setting the viewport to the size of 320x256 px, can everything in
          the page still be reached and operated without the need for horizontal
          scrolling?
        </p>
        <p>
          See{" "}
          <a href="https://www.w3.org/WAI/WCAG22/quickref/#reflow">
            WCAG 1.4.10
          </a>
        </p>
      </section>
      <section aria-labelledby="long-searchbox">
        <h2 id="long-searchbox" className="text-2xl">
          A long searchbox
        </h2>
        <div className="flex gap-2">
          <input
            type="search"
            placeholder="Search page"
            aria-label="Search page"
            className="grow-1 w-[300px] placeholder:italic placeholder:text-gray-500"
          />
          <button>
            <img src="/icons/search.png" alt="Search" />
          </button>
        </div>
      </section>

      <section aria-labelledby="scrolling">
        <h2 id="scrolling" className="text-2xl">
          Menu should be accessible without horizontal scrolling
        </h2>
        <nav className="flex gap-10">
          <a href="/">Home</a>
          <a href="/">Details</a>
          <a href="/">Categories</a>
          <a href="/">Some Infos</a>
          <a href="/">About us</a>
        </nav>
      </section>
    </main>
  );
}
