import Image from "next/image";

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
              priority
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
        <div className="flex flex-col justify-center items-center gap-4 bg-gray-900 h-full w-full outline-1 outline-gray-700">
          
          <div className="flex flex-row gap-12">
            <div className="flex flex-col gap-2">
              <p>First name</p>
              <input 
                type="text"
                className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>            
            <div className="flex flex-col gap-2">
              <p>Last name</p>
              <input 
                type="text"
                className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>            
          </div>

          <div className="flex flex-row">
            <div className="flex flex-col gap-2 w-xl">
              <p>Email</p>
              <input 
                type="text"
                className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex flex-row">
            <div className="flex flex-col gap-2 w-xl">
              <p>Phone</p>
              <input 
                type="text"
                className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex flex-row">
            <div className="flex flex-col gap-2 w-xl">
              <p>Message</p>
              <textarea
                className="w-full h-20 py-3 px-4 text-gray-700 bg-white border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex flex-row gap-4 pt-4">
            <p className="flex h-12 w-24 items-center justify-center gap-2 rounded-lg border border-solid px-5 transition-colors hover:border-transparent border-white/[.145] hover:bg-gray-700 md:w-39.5">Send Message</p>
          </div>

        </div>      

      </main>
    </div>
  );
}
