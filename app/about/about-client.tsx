"use client";

import { useEffect, useRef } from "react";

export default function AboutClient() {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const touchStartY = useRef<number | null>(null);

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
    <div
      ref={contentRef}
      className="flex-1 overflow-y-auto w-full flex flex-col items-center max-h-[45vh]
                 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent
                 px-2 scroll-smooth"
    >
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
  );
}
