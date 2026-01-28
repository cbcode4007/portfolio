import Image from "next/image";
import ContactClient from "./contact-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {

  return (
    <div className="flex h-[calc(100vh)] font-sans">
      <main className="flex h-full w-full flex-row">

        {/* Left Background - Desktop Only */}        
        <div className="hidden w-full md:flex flex-col justify-center items-center gap-6 h-full md:w-1/2 pb-32">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-zinc-50 pb-2">
            Contact Me
          </h1>
          <div className="w-64 h-64 overflow-hidden rounded-full glowing-border">
            <Image
              src="/profile.png"
              alt="Profile"
              width={512}
              height={340}
              className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Form - Full width on mobile, right side on desktop */}
        <div className="w-full md:w-1/2 h-full">
          <ContactClient />
        </div>

      </main>
    </div>
  );
}
