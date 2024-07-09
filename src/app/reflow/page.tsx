export default async function Reflow() {
  return (
    <main className="flex flex-col items-center gap-4">
      <h1 className="text-3xl">Reflow test cases</h1>
      <a href="/">Back to main</a>
      <h2 className="text-2xl">A long searchbox</h2>
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
      <h2 className="text-2xl">
        Menu should be accessible without horizontal scrolling
      </h2>
      <nav className="flex gap-10">
        <a href="/">Home</a>
        <a href="/">Details</a>
        <a href="/">Categories</a>
        <a href="/">Some Infos</a>
        <a href="/">About us</a>
      </nav>
    </main>
  );
}
