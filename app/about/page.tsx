import { Metadata } from "next";
import Image from "next/image";
import AboutClient from "./about-client";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className="flex h-[calc(100vh-56px)] font-sans items-center justify-center">
      <main className="flex w-full max-w-6xl flex-row items-center justify-between gap-12 px-16">

        {/* Left side */}
        <div className="flex flex-1 flex-col items-center h-full">
          <div className="flex items-center justify-center sticky top-0 z-10 py-4">
            <h1 className="text-3xl font-semibold text-zinc-50">
              About Me
            </h1>
          </div>

          {/* Client owns scrolling */}
          <AboutClient />
          
        </div>

        {/* Right side */}
        <div className="flex flex-1 flex-col items-center justify-center gap-8 pt-16">
          <div className="w-92 h-92 overflow-hidden glowing-border rounded-2xl">
            <Image
              src="/profile.png"
              alt="Profile"
              width={512}
              height={340}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </main>
    </div>
  );
}
