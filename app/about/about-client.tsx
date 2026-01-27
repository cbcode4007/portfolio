"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function AboutClient() {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const touchStartY = useRef<number | null>(null);

  /* ===========================
     DESKTOP SCROLL LOGIC ONLY
     =========================== */
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    function shouldForward() {
      return el!.scrollHeight > el!.clientHeight;
    }

    function onWheel(e: WheelEvent) {
      if (!shouldForward()) return;
      e.preventDefault();
      el!.scrollBy({ top: e.deltaY });
    }

    function onTouchStart(e: TouchEvent) {
      touchStartY.current = e.touches?.[0]?.clientY ?? null;
    }

    function onTouchMove(e: TouchEvent) {
      if (touchStartY.current === null || !shouldForward()) return;
      const currentY = e.touches[0].clientY;
      el!.scrollBy({ top: touchStartY.current - currentY });
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
    <>
      {/* ===========================
          MOBILE VERSION
          =========================== */}
      <div className="flex flex-col min-h-screen pt-28 md:hidden">
        {/* Sticky header: profile image + ABOUT ME */}
        <div className="sticky top-28 z-10 bg-black px-6 pb-4">
          <div className="flex flex-col items-center gap-4">
            <div className="w-32 h-32 rounded-full overflow-hidden glowing-border">
              <Image
                src="/profile.png"
                alt="Profile"
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold tracking-wide text-zinc-50">
              ABOUT ME
            </h2>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-6 pb-16 max-h-64 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
          <p className="mt-6 text-base leading-7 text-zinc-400">
            Welcome to my portfolio website! I'm Colin, a professional IT solutions developer dedicated to crafting a variety of engaging, cutting-edge, and reliable applications. Whether you're an individual or a business, and whether it's a desktop, web or mobile app, I'm here to make it come to life. With an ever-burning passion for technology and innovation, I am always learning, mastering, and doing something new, so you can bet that I'll deliver a tailored solution to meet and exceed your unique needs. Explore my work and give me a call or email to see how I could help you!
          </p>

          <h2 className="text-lg font-semibold tracking-wide text-zinc-50 mt-10">
            EDUCATION
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-400">
            I have an extensive, practical background in Computer Programming and Analysis, with a 3.95 GPA from Durham College on their 3-year advanced diploma program. I built a strong foundation in programming as well as system analysis, having learned several different programming languages and development methodologies/life cycles. The program would emphasize solving technical real-world problems all the way from initial requirement gathering, while promoting the utmost efficiency, and I've only improved my abilities since then.
          </p>

          <h2 className="text-lg font-semibold tracking-wide text-zinc-50 mt-10">
            EXPERIENCE
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-400">
            Over the past year from graduation, I have had the opportunity and pleasure to continue working toward pushing IT solutions. Most notably, during a one-month internship for IxIxI Creator Lab, I was able to deliver a Flutter Dart mobile application for their flight service which earned such praise and approval that it was favoured over those of the other Durham College candidates. Here, I was able to take the opportunity practicing and honing my agile development skills, going in sprints before receiving more feature requests. Since then, I've been consistently creating new applications on a regular basis leveraging different technologies, including Python, Flutter Dart, SQL, Next.js framework (with TypeScript and Tailwind), and AI agents in code.
          </p>
        </div>
      </div>

      {/* ===========================
          DESKTOP VERSION
          =========================== */}
      <div
        ref={contentRef}
        className="hidden md:flex flex-1 w-full max-h-[45vh] flex-col items-center overflow-y-auto
                   scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent
                   px-2 md:scroll-smooth"
      >
        <p className="mt-6 max-w-md text-lg leading-8 text-zinc-400 pb-8">
          Welcome to my portfolio website! I'm Colin, a professional IT solutions developer dedicated to crafting a variety of engaging, cutting-edge, and reliable applications. Whether you're an individual or a business, and whether it's a desktop, web or mobile app, I'm here to make it come to life. With an ever-burning passion for technology and innovation, I am always learning, mastering, and doing something new, so you can bet that I'll deliver a tailored solution to meet and exceed your unique needs. Explore my work and give me a call or email to see how I could help you!
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
        <p className="mt-6 max-w-md text-lg leading-8 text-zinc-400">
          Over the past year from graduation, I have had the opportunity and pleasure to continue working toward pushing IT solutions. Most notably, during a one-month internship for IxIxI Creator Lab, I was able to deliver a Flutter Dart mobile application for their flight service which earned such praise and approval that it was favoured over those of the other Durham College candidates. Here, I was able to take the opportunity practicing and honing my agile development skills, going in sprints before receiving more feature requests. Since then, I've been consistently creating new applications on a regular basis leveraging different technologies, including Python, Flutter Dart, SQL, Next.js framework (with TypeScript and Tailwind), and AI agents in code.
        </p>
      </div>
    </>
  );
}
