"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function About() {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    function shouldForward() {
      const el = contentRef.current;
      return !!el && el.scrollHeight > el.clientHeight;
    }

    function onWheel(e: WheelEvent) {
      const el = contentRef.current;
      if (!el || !shouldForward()) return;
      // Prevent page from scrolling and forward the wheel delta
      e.preventDefault();
      el.scrollBy({ top: e.deltaY, behavior: "auto" });
    }

    function onTouchStart(e: TouchEvent) {
      touchStartY.current = e.touches?.[0]?.clientY ?? null;
    }

    function onTouchMove(e: TouchEvent) {
      const el = contentRef.current;
      if (!el || touchStartY.current === null || !shouldForward()) return;
      const currentY = e.touches?.[0]?.clientY ?? 0;
      const delta = touchStartY.current - currentY;
      // forward touch movement
      el.scrollBy({ top: delta, behavior: "auto" });
      touchStartY.current = currentY;
      e.preventDefault();
    }

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: false });
    window.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <div className="flex h-[calc(100vh-56px)] font-sans items-center justify-center">
      <main className="flex w-full max-w-6xl flex-row items-center justify-between gap-12 px-16">

        {/* Left side - About Me text */}
        <div className="flex flex-1 flex-col items-center h-full">
          {/* Fixed heading */}
          <div className="flex items-center justify-center sticky top-0 z-10 py-4 bg-transparent">
            <h1 className="text-3xl font-semibold leading-10 tracking-tight text-zinc-50">
              About Me
            </h1>
          </div>

          {/* Scrollable content (forward global scroll/touch events here) */}
          <div ref={contentRef} className="flex-1 overflow-y-auto w-full flex flex-col items-center max-h-[45vh] scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent px-2 scroll-smooth">
            <p className="mt-6 max-w-md text-lg leading-8 text-zinc-400 pb-8">
              Welcome to my portfolio website! I'm Colin, a professional IT solutions developer dedicated to crafting a variety of engaging and cutting-edge applications for my clients. Whether you're an individual or a business, and whether it's a desktop, web or mobile app, I'm here to make it come to life. With an ever-burning passion for technology and innovation, I am always learning, mastering, and doing something new, so you can bet that I'll deliver a tailored solution to meet and exceed your unique needs. Explore my work and give me a call or email to see how I could help you!
            </p>
            <h2 className="text-xl font-semibold leading-10 tracking-wide text-zinc-50 mt-8">
                EDUCATION
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-zinc-400 pb-8">
              I have an extensive, practical background in Computer Programming and Analysis, with a 3.95 GPA from Durham College on their 3-year advanced diploma program. I built a strong foundation in programming as well as system analysis, having learned several different programming languages and development methodologies/life cycles. The program would emphasize solving technical real-world problems all the way from initial requirement gathering, while promoting the utmost efficiency, and I've only improved my abilities since then.
            </p>
            <h2 className="text-xl font-semibold leading-10 tracking-wide text-zinc-50 mt-8">
                EXPERIENCE
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-zinc-400 pb-8">
              Over the past year from graduation, I have had the opportunity and pleasure to continue working toward pushing IT solutions. Most notably, during a one-month internship for IxIxI Creator Lab, I was able to deliver a Flutter Dart mobile application for their flight service which earned such praise and approval that it was favoured over those of the other Durham College candidates. Here, I was able to take the opportunity practicing and honing my agile development skills, going in sprints before receiving more feature requests. Since then, I've been consistently creating new applications on a regular basis leveraging different technologies, including Python, Flutter Dart, SQL, Next.js framework (with TypeScript and Tailwind), and AI agents in code.
            </p>
          </div>
        </div>

        {/* Right side - Profile photo */}
        <div className="flex flex-1 flex-col items-center justify-center gap-8 pt-25">
          <div className="w-64 h-64 overflow-hidden rounded-full glowing-border">
            <Image
              src="/profile.png"
              alt="Profile"
              width={512}
              height={340}
              className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-row gap-4 pt-6">
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-solid px-5 transition-colors hover:border-transparent border-white/[.145] hover:bg-gray-700 md:w-39.5"
              href="/contact"
            >
              <Image
                src="/call_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                alt="Phone icon"
                width={16}
                height={16}
              />
              Contact Me
            </a>
            
            <a              
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-solid px-5 transition-colors hover:border-transparent border-white/[.145] hover:bg-gray-700 md:w-39.5"
              href="/projects"
            >
              <Image
                src="/rocket_launch_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                alt="Rocket icon"
                width={16}
                height={16}
              />
              See Projects
            </a>
          </div>

        </div>
      </main>
    </div>
  );
}
