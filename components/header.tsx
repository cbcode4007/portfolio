"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./navlink";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Header Area */}
      <header className="fixed top-0 z-50 w-full p-8">
        <div className="mx-auto flex h-14 w-full items-center justify-between select-none">
          {/* Logo */}
          <Link href="/" className="hidden md:flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={108}
              height={108}
              className="object-contain transition-all duration-300 ease-out hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] hover:scale-110"
            />
          </Link>

          {/* Desktop Navbar */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/skills">Skills</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>

          {/* Mobile Hamburger Menu Icon */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col gap-1.5"
            aria-label="Open menu"
          >
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* Mobile Drawer Menu */}
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-72 bg-black border-r border-zinc-800
          transform transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full p-6 gap-8">
          {/* Header Logo in Drawer */}
          <div className="flex items-center justify-between">
            <Image
              src="/logo.png"
              alt="Logo"
              width={96}
              height={96}
              className="object-contain"
            />
          </div>

          {/* Drawer Nav Column */}
          <nav className="flex flex-col gap-4 text-sm font-medium">
            <NavLink href="/" onClick={() => setOpen(false)}>
              Home
            </NavLink>
            <NavLink href="/about" onClick={() => setOpen(false)}>
              About
            </NavLink>
            <NavLink href="/skills" onClick={() => setOpen(false)}>
              Skills
            </NavLink>
            <NavLink href="/projects" onClick={() => setOpen(false)}>
              Projects
            </NavLink>
            <NavLink href="/contact" onClick={() => setOpen(false)}>
              Contact
            </NavLink>
          </nav>
        </div>
      </aside>
    </>
  );
}
