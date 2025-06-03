import Link from "next/link";
// import { useState } from "react";

export default function NavBar() {
  const links = [
    ["Über uns / Der Verein", "conference"],
    ["Veranstaltungen / Archiv", "#"],
    ["Impressum", "#"],
    ["Datenschutzerklärung", "#"],
    ["Fotogalerie", "gallery"],
  ]

  return (
    <nav className="lg:block inset-y-0 right-0 z-10 w-[300px] max-w-xs overflow-y-auto sticky top-4 text-lg">
      <ul className="flex flex-col divide-y divide-black">
        {links.map(([text, href]) => (
          <li key={text} className="py-2 text-2xl font-bold">
            <Link href={href}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}