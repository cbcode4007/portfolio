"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SupportClient() {
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
        
        {/* Intro */}
        <p className="text-base md:text-lg leading-7 md:leading-8 text-zinc-400">
          We provide reliable, no-nonsense IT support for home users and small
          businesses. Whether your computer is slow, broken, infected, or just
          not behaving the way it should — we help you get back up and running
          quickly and safely.
        </p>

        {/* Services */}
        <div>
          <h3 className="text-zinc-50 font-semibold mb-2 pt-8">
            What we help with
          </h3>
          <ul className="list-disc list-inside space-y-1 text-zinc-400">
            <li>Slow or unresponsive computers</li>
            <li>Software installation, updates, errors, advice</li>
            <li>Virus and malware removal</li>
            <li>PC setup, upgrades, repairs</li>
            <li>Email, printer, network issues</li>
          </ul>
        </div>

        {/* How it works */}
        <div>
          <h3 className="text-zinc-50 font-semibold mb-2 pt-6">
            How support works
          </h3>
          <ol className="list-decimal list-inside space-y-1 text-zinc-400 pb-8">
            <li>You contact us and describe the issue (or show it via RustDesk)</li>
            <li>We assess what kind of support is needed, how long it will take, how much it would cost</li>
            <li>We fix the problem while you watch</li>
            <li>You approve everything — no hidden changes or charges</li>
          </ol>
        </div>

        {/* Trust */}
        <p className="text-sm text-zinc-500 leading-relaxed pt-8">
          Remote sessions are conducted using RustDesk. You control access at
          all times, and connections can be ended instantly.
        </p>

        {/* CTAs */}
        <div className="flex flex-row gap-8 pt-6">

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

          <Link href="/download" target="_blank">
            <div className="flex items-center gap-2 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              <Image
                src="/open_in_new_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                alt="RustDesk"
                width={28}
                height={28}
              />
              <span className="text-zinc-50">Remote Support</span>
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
                src="/how-to-start-a-remote-it-support-business.png"
                alt="IT Support"
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
