'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-md text-m font-medium ${
        isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-zinc-400 hover:text-white hover:scale-110 transition-all duration-300 ease-out'
      }`}
    >
      {children}
    </Link>
  );
}
