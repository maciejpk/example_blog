export default function NavBar() {
  return (
    <nav className="bg-gray-100 py-6 px-4">
      <div className="max-w-5xl mx-auto">
        <ul className="flex justify-center space-x-4">
          <li className="text-xl font-bold">
            <a href="#" className="hover:underline">About</a>
          </li>
          <li className="text-xl font-bold">
            <a href="#" className="hover:underline">Program</a>
          </li>
          <li className="text-xl font-bold">
            <a href="#" className="hover:underline">Speakers</a>
          </li>
          <li className="text-xl font-bold">
            <a href="#" className="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}