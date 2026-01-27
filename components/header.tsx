import Image from "next/image";
import Link from "next/link";
import NavLink from "./navlink";

export default function Header() {
  return (
    <header className="w-full p-8 fixed">
      <div className="mx-auto flex h-14 items-center justify-between w-full select-none">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={108}
            height={108}
            className="object-contain transition-all duration-300 ease-out hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] hover:scale-110"            
          />
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/skills">Skills</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
