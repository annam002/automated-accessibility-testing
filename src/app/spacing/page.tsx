export default async function Spacing() {
  return (
    <main className="flex flex-col items-center gap-4">
      <h1 className="text-2xl">Text spacing test cases</h1>
      <a href="/">Back to main</a>
      <div className="w-full">
        <h2>Overlapping text at bigger text spacing</h2>
        <div className="h-[24px] w-[200px] border-solid p-1 text-[120%]">
          CSS is very awesome
        </div>
      </div>
    </main>
  );
}
