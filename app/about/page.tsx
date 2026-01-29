import { Metadata } from "next";
import Image from "next/image";
import AboutClient from "./about-client";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className="flex min-h-screen font-sans">
      {/* The page is naturally one massive column on portrait phone screens, and two rows on desktop screens */}
      <main className="flex flex-col md:flex-row w-full max-w-6xl mx-auto px-6 md:px-16 gap-8 md:gap-12">

        {/* Left Content Column (Or Lower Central Content Column for mobile, most of the logic is found in about-client.tsx) */}
        <div className="flex flex-1 flex-col items-center md:items-start md:justify-center">
          {/* Desktop-Only Title */}
          <div className="hidden md:flex items-center justify-center sticky top-0 z-10 py-4 w-full">
            <h1 className="text-3xl font-semibold text-zinc-50">
              About Me
            </h1>
          </div>

          {/* Calls client-side function wrapper which also contains the bio text box for direct manipulation */}
          <AboutClient />
        </div>

        {/* Right Image Column */}
        <div className="flex flex-1 items-center justify-center md:justify-end pt-8 md:pt-16">
          <div className="md:w-92 md:h-92 overflow-hidden glowing-border rounded-2xl">
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
