"use client";

import Image from "next/image";
import { useRef } from "react";

export default function ContactClient() {
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    try {
      const response = await fetch('/api/contact', {
        method: 'post',
        body: data,
      });
      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      alert('Message sent successfully. Thank you! Expect a response within a business day.');
    } catch (err) {
      console.error(err);
      alert("Message failed to send. Please try again later.");
    }
  }
  
  return (
    <>
      {/* Mobile Version */}
      <div className="md:hidden flex flex-col min-h-screen w-full overflow-y-auto pb-32">
        {/* Title */}
        <div className="flex justify-center pt-11 pb-4">
          <h1 className="text-2xl font-semibold text-zinc-50">Contact Me</h1>
        </div>

        {/* Profile Picture */}
        <div className="flex items-center justify-center">
          <div className="w-32 h-32 rounded-full overflow-hidden glowing-border">
            <Image
              src="/profile.png"
              alt="Profile"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center gap-3 px-4 pt-4 pb-6">
          <a className="flex items-center justify-start gap-2 text-sm text-zinc-400">
            <Image
              src="/call_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
              alt="Phone icon"
              width={20}
              height={20}
            />
            +1 (289) 943-1007
          </a>
          <a className="flex items-center justify-center gap-2 text-sm text-zinc-400">
            <Image
              src="/mail_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
              alt="Email icon"
              width={20}
              height={20}
            />
            colin.bond@dcmail.ca
          </a>
        </div>

        {/* Form - Bottom Half */}
        <form className="flex flex-col gap-3 px-6 max-w-full" onSubmit={handleSubmit} ref={formRef}>
          {/* Names */}
          <div className="flex gap-2 w-full">
            <div className="flex flex-col gap-1 text-xs flex-1 min-w-0">
              <p className="text-zinc-300">First name</p>
              <input 
                id="frm-first"                  
                type="text"
                name="first"
                autoComplete="given-name"
                className="w-full px-2 py-1 text-gray-700 bg-white border border-gray-300 rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>            
            <div className="flex flex-col gap-1 text-xs flex-1 min-w-0">
              <p className="text-zinc-300">Last name</p>
              <input 
                id="frm-last"
                type="text"
                name="last"
                autoComplete="family-name"
                className="w-full px-2 py-1 text-gray-700 bg-white border border-gray-300 rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>            
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1 text-xs w-full">
            <p className="text-zinc-300">Email</p>
            <input 
              id="email"
              type="email"
              name="email"
              autoComplete="email"                  
              className="w-full px-2 py-1 text-gray-700 bg-white border border-gray-300 rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1 text-xs w-full">
            <p className="text-zinc-300">Phone</p>
            <input 
              id="frm-phone"
              type="text"
              name="phone"
              autoComplete="tel"
              className="w-full px-2 py-1 text-gray-700 bg-white border border-gray-300 rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1 text-xs">
            <p className="text-zinc-300">Message</p>
            <textarea
              id="frm-message"                  
              name="message"
              className="h-24 py-1 px-2 text-gray-700 bg-white border border-gray-300 rounded text-xs resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-end pt-2 relative z-20 pointer-events-auto">
            <button
              type="button"
              aria-label="Send message"
              onClick={() => formRef.current?.requestSubmit()}
              className="
                flex items-center justify-center
                w-10 h-10
                rounded-full
                bg-zinc-400
                active:scale-95
                active:bg-white
                transition
                pointer-events-auto
              "
            >
              <Image
                src="/send_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                alt=""
                width={18}
                height={18}
                className="invert"
              />
            </button>
          </div>

        </form>
      </div>

      {/* Desktop Version */}
      <div className="hidden md:flex flex-col justify-center items-center gap-4 bg-linear-to-b from-gray-900 to-gray-700 h-full w-full outline-1 outline-gray-700 pt-10">

        <form className="flex flex-col w-full max-w-xl mx-auto gap-6" onSubmit={handleSubmit}>
        
          {/* Names */}
          <div className="flex w-full gap-4">
              <div className="flex flex-col gap-2 text-sm flex-1">
                <p>First name</p>
                <input 
                    id="frm-first"                  
                    type="text"
                    name="first"
                    autoComplete="given-name"
                    className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                />
              </div>            
              <div className="flex flex-col gap-2 text-sm flex-1">
                <p>Last name</p>
                <input 
                    id="frm-last"
                    type="text"
                    name="last"
                    autoComplete="family-name"
                    className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                />
              </div>            
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2 text-sm w-full">
            <p>Email</p>
            <input 
                id="email"
                type="email"
                name="email"
                autoComplete="email"                  
                className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-2 text-sm w-full">
            <p>Phone</p>
            <input 
                id="frm-phone"
                type="text"
                name="phone"
                autoComplete="tel"
                className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2 text-sm w-full">
            <p>Message</p>
            <textarea
                id="frm-message"                  
                name="message"
                className="w-full h-20 py-3 px-4 text-gray-700 bg-white border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit */}
          <div className="flex flex-col gap-2 text-sm w-full pt-6">              
              <button type="submit" className=" self-end flex h-12 w-24 items-center justify-center gap-2 rounded-lg border border-solid px-5 transition-colors hover:border-transparent border-white/[.145] hover:bg-zinc-400 md:w-39.5 text-sm">Send Message</button>
          </div>

        </form>
                
      </div>
    </>
  );
}