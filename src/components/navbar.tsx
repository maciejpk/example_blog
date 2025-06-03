import Link from "next/link";

export default function NavBar() {
  const links = [
    ["Über uns / Der Verein", "conference"],
    ["Veranstaltungen / Archiv", "#"],
    ["Impressum", "#"],
    ["Datenschutzerklärung", "#"],
  ]

  return (
    <aside className="w-64 bg-gray-100 border-r p-6 sticky top-16 self-start h-fit">
      <nav>
        <ul className="flex flex-col divide-y divide-black">
          {links.map(([text, href]) => (
            <li key={text} className="py-2 text-lg font-bold">
              <Link href={href}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}