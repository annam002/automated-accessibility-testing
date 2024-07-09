export default function Home() {
  return (
    <main className="flex flex-col items-center gap-4 p-24">
      <h1 className="text-3xl">Test pages</h1>
      <ul className="text-xl">
        <li>
          <a href="/keyboard">Keyboard Navigation (2.1.1, 2.1.2)</a>
        </li>
        <li>
          <a href="/reflow">Reflow (1.4.10)</a>
        </li>
        <li>
          <a href="/textsize">Textsize (1.4.4)</a>
        </li>
        <li>
          <a href="/spacing">Spacing (1.4.12)</a>
        </li>
      </ul>
    </main>
  );
}
