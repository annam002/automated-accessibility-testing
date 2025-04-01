export default function Home() {
  return (
    <main className="flex flex-col items-center gap-4 p-24">
      <h1 className="text-3xl">Test pages</h1>
      <ul className="text-xl">
        <li>
          <a href="/keyboard">Keyboard Navigation</a>
        </li>
        <li>
          <a href="/reflow">Reflow</a>
        </li>
        <li>
          <a href="/textsize">Textsize</a>
        </li>
        <li>
          <a href="/spacing">Spacing</a>
        </li>
        <li>
          <a href="/bugpit">Page with bugs</a>
        </li>
      </ul>
    </main>
  );
}
