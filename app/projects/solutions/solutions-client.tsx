"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SolutionsClient() {
  const contentRef = useRef<HTMLDivElement | null>(null);

  /* Desktop Scroll Logic (Overflowing Left Content Column can be scrolled from anywhere the cursor is) */
  useEffect(() => {
    // Get passed div to route all scrolling to or bail
    const el = contentRef.current;    
    if (!el) return;

    // Decide if scrolling should happen based on overflow (if the total height exceeds the visible height to the client)
    function shouldForward() {
      return el!.scrollHeight > el!.clientHeight;
    }

    // Scroll by mouse wheel delta
    function onWheel(e: WheelEvent) {
      if (!shouldForward()) return;
      e.preventDefault();
      el!.scrollBy({ top: e.deltaY });
    }

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  function InfoContent() {
    return (
      <>
        <p className="text-base md:text-lg leading-7 md:leading-8 text-zinc-400">
          We design and build custom software solutions that solve real problems — from automating internal workflows to delivering polished customer-facing applications.
        </p>

        <div className="pt-6">
          <h3 className="text-zinc-50 font-semibold mb-2">Our tech stack</h3>
          <ul className="list-disc list-inside space-y-1 text-zinc-400">
            <li>Python</li>
            <li>Flutter Dart</li>
            <li>Next.js</li>
            <li>SQL</li>
            <li>OpenAI API</li>
          </ul>
        </div>

        <div className="pt-6">
          <h3 className="text-zinc-50 font-semibold mb-2">Our platforms</h3>
          <ul className="list-disc list-inside space-y-1 text-zinc-400">
            <li>Desktop</li>
            <li>Mobile</li>
            <li>Web</li>
          </ul>
        </div>

        <p className="text-base md:text-lg leading-7 md:leading-8 text-zinc-400 pt-8 pb-8">
          Whether you’re improving an existing process or building something new from the ground up, we focus on clarity, reliability, and long-term maintainability.
        </p>

        <div className="flex flex-row gap-8 pt-8">
          <Link href="/contact">
            <div className="flex items-center gap-2 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              <Image
                src="/call_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                alt="Contact"
                width={28}
                height={28}
              />
              <span className="text-zinc-50">Contact Us</span>
            </div>
          </Link>

          <Link href="/projects" target="_blank">
            <div className="flex items-center gap-2 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              <Image
                src="/open_in_new_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                alt="Projects"
                width={28}
                height={28}
              />
              <span className="text-zinc-50">View Projects</span>
            </div>
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Mobile */}
      <div className="flex flex-col min-h-screen pt-28 md:hidden">

        {/* Top Picture and Title */}
        <div className="sticky top-28 z-10 px-6 pb-7">
          <div className="flex flex-col items-center gap-4">
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <Image
                src="/programming-coding---study-online-banner.png"
                alt="IT Solutions"
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 max-h-64 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
          <InfoContent />
        </div>
      </div>

      {/* Desktop */}
      <div
        ref={contentRef}
        className="hidden md:flex flex-1 w-full max-h-92 flex-col items-start overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent px-6 md:scroll-smooth"
      >
        <InfoContent />
      </div>
    </>
  );
}
