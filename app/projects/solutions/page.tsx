import { Metadata } from "next";
import Image from "next/image";
import SolutionsClient from "./solutions-client";

export const metadata: Metadata = {
  title: "IT Solutions",
};

export default function Solutions() {
  return (
    <div className="flex min-h-screen font-sans">
      {/* The page is naturally one massive column on portrait phone screens, and two rows on desktop screens */}
      <main className="flex flex-col md:flex-row w-full max-w-6xl mx-auto px-6 md:px-16 gap-8 md:gap-20 md:items-center md:justify-center">

        {/* Left Content Column (Or Lower Central Content Column for mobile, most of the logic is found in about-client.tsx) */}
        <div className="flex flex-col md:h-lg items-center md:items-start md:justify-center">
          {/* Desktop-Only Title */}
          <div className="hidden md:flex items-start justify-start sticky top-0 z-10 md:py-8 py-4 w-full">
            <h1 className="text-3xl text-zinc-50">
              IT Solutions
            </h1>
          </div>

          {/* Calls client-side function wrapper which also contains the bio text box for direct manipulation */}
          <SolutionsClient />
        </div>

        {/* Right Image Column */}
        <div className="flex flex-1 items-center justify-center md:justify-end pt-8 md:pt-16">
          <div className="md:w-lg md:h-92 overflow-hidden rounded-2xl">
            <Image
              src="/programming-coding---study-online-banner.png"
              alt="IT Solutions"
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
