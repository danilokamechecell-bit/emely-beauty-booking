import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-blackSoft text-white">
      <Logo />
      <div className="space-x-6">
        <Link href="/">Início</Link>
        <Link href="/booking">Agendar</Link>
        <Link href="/admin">Admin</Link>
      </div>
    </nav>
  );
}
