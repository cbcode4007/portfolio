"use client";

import Image from "next/image";

export default function Contact() {
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
        <div className="flex flex-col justify-center items-center gap-4 bg-gray-900 h-full w-full outline-1 outline-gray-700 pt-10">

          <form className="flex flex-col w-2xl justify-center items-center gap-4" onSubmit={handleSubmit}>

            <div className="flex flex-row w-full justify-center items-center gap-26">
              <div className="flex flex-col gap-2 text-sm">
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
              <div className="flex flex-col gap-2 text-sm">
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

            <div className="flex flex-row">
              <div className="flex flex-col gap-2 text-sm w-xl">
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
            </div>

            <div className="flex flex-row">
              <div className="flex flex-col gap-2 text-sm w-xl">
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
            </div>

            <div className="flex flex-row">
              <div className="flex flex-col gap-2 text-sm w-xl">
                <p>Message</p>
                <textarea
                  id="frm-message"                  
                  name="message"
                  className="w-full h-20 py-3 px-4 text-gray-700 bg-white border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="flex flex-row gap-4 pt-6">              
              <button 
                type="submit" className="flex h-12 w-24 items-center justify-center gap-2 rounded-lg border border-solid px-5 transition-colors hover:border-transparent border-white/[.145] hover:bg-gray-700 md:w-39.5 text-sm">Send Message</button>
            </div>

          </form>
          
          

        </div>      

      </main>
    </div>
  );
}
