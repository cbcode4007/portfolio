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

        {/* Left Background */}        
        <div className="flex flex-col justify-center items-center gap-6 h-full w-full pb-26">
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
          
          <div className="flex flex-col">
            <a
              className="flex h-12 w-full items-center justify-start gap-4"
            >
              <Image
                src="/call_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                alt="Phone icon"
                width={32}
                height={32}
              />
              +1 (289) 943-1007
            </a>
            <a
              className="flex h-12 w-full items-center justify-start gap-4"
            >
              <Image
                src="/mail_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                alt="Email icon"
                width={32}
                height={32}
              />
              colin.bond@dcmail.ca
            </a>
          </div>

        </div>

        {/* Right Form */}
        <ContactClient />

      </main>
    </div>
  );
}
