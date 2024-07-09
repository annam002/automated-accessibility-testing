export default async function TextSize() {
  return (
    <main className="flex flex-col items-center gap-8">
      <h1 className="text-2xl">Fontsize test cases</h1>
      <a href="/">Back to main</a>
      <div className="w-full">
        <h2>Overlapping text at 200% text size</h2>
        <div className="h-[60px] w-[100px] border-solid p-2 text-2xl">
          CSS is awesome
        </div>
      </div>
      <div className="w-full">
        <h2>Clipped text at 200% text size</h2>
        <div className="h-[100px] w-[100px] overflow-hidden border-solid p-2 text-2xl">
          CSS is still awesome
        </div>
      </div>
    </main>
  );
}
