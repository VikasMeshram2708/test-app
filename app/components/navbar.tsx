import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full p-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif">
          <Link href="/">Test</Link>
        </h2>
      </div>
    </nav>
  );
}
