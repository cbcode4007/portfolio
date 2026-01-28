import Link from "next/dist/client/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-[calc(100vh-56px)] items-center justify-center font-sans overflow-y-auto">
      <main className="flex w-full max-w-3xl flex-col items-center gap-8 px-16 text-center">

        <div className="flex flex-col items-center pt-0 md:pt-24">
          <h1 className=" text-3xl font-semibold leading-10 tracking-tight text-zinc-50">
            Colin Bond
          </h1>          
          <div className="pt-4">
            <div className="w-48 h-48 overflow-hidden rounded-full glowing-border">
              <Image            
                src="/profile.png"
                alt="Profile"
                width={256}
                height={170}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="max-w-md text-lg leading-8 text-zinc-400 pt-4">
            IT Solutions
          </p>
        </div>

        <div className="hidden md:flex mx-auto max-w-7xl flex-row items-start justify-center flex-nowrap">

          <div className="flex flex-col justify-center items-center gap-1 flex-1 min-w-0">
            <h2 className="text-xl font-semibold leading-10 tracking-wide text-zinc-50">
              ABOUT ME
            </h2>

            <p className="max-w-md text-m leading-8 text-zinc-400">
              Welcome to my portfolio website! I'm Colin, a professional IT solutions developer dedicated to crafting a variety of engaging, cutting-edge, and reliable applications.
            </p>

          </div>

          <div className="flex flex-col justify-center items-center gap-1 flex-1 min-w-0">
            <h2 className="text-xl font-semibold leading-10 tracking-wide text-zinc-50">
              MY SPECIALTIES
            </h2>
             <div className="flex space-y-2"/>
            <div className="flex flex-col justify-start items-start gap-1 flex-1 min-w-0">
              <div className="flex flex-row gap-2">
                <Image
                  src="/python-logo-monochrome.png"
                  alt="Python Logo"
                  width={32}
                  height={32}
                  className="invert object-contain"
                />
                <p className="max-w-md text-m leading-8 text-zinc-400">
                  Python
                </p>
              </div>            
              <div className="flex flex-row gap-2">
                <Image
                  src="/flutter_logo_icon_214732.png"
                  alt="Flutter Dart Logo"
                  width={32}
                  height={32}
                  className="invert object-contain"
                />
                <p className="max-w-md text-m leading-8 text-zinc-400">
                  Flutter Dart
                </p>
              </div>     
              <div className="flex flex-row gap-2">
                <Image
                  src="/sql2.png"
                  alt="SQL Logo"
                  width={32}
                  height={32}
                  className="invert object-contain"
                />
                <p className="max-w-md text-m leading-8 text-zinc-400">
                  SQL
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <Image
                  src="/free-typescript-logo-icon-svg-download-png-1982828.png"
                  alt="TypeScript Logo"
                  width={32}
                  height={32}
                  className="invert object-contain"
                />
                <p className="max-w-md text-m leading-8 text-zinc-400">
                  TypeScript
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <Image
                  src="/css_tailwind_logo_icon_214735.png"
                  alt="Tailwind Logo"
                  width={32}
                  height={32}
                  className="invert object-contain"
                />
                <p className="max-w-md text-m leading-8 text-zinc-400">
                  Tailwind
                </p>                                
              </div>
              <div className="flex flex-row gap-2">
                <Image
                  src="/openai.png"
                  alt="OpenAI Logo"
                  width={32}
                  height={32}
                  className="invert object-contain"
                />
                <p className="max-w-md text-m leading-8 text-zinc-400">
                  Agentic AI
                </p>                                
              </div>
            </div>
        
          </div>

          <div className="flex flex-col justify-center items-center gap-1 flex-1 min-w-0">
            <h2 className="text-xl font-semibold leading-10 tracking-wide text-zinc-50">
              MY WORK
            </h2>
            <div className="flex space-y-2"/>
            <div className="flex flex-col justify-start items-start gap-1 flex-1 min-w-0">
              <Link href="https://github.com/cbcode4007/airport-travel-app" target="_blank">
                <div className="flex flex-row gap-2 transition-all duration-300 ease-out hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                  <Image
                    src="/phone invert.png"
                    alt="Phone Icon"
                    width={32}
                    height={32}
                    className="invert object-contain"                  
                  />
                  <p className="max-w-md text-m leading-8 text-zinc-400 hover:text-white">
                    IxIxI's Airport App
                  </p>
                </div>
              </Link>

              <Link href="https://github.com/cbcode4007/ai-english-query" target="_blank">
                <div className="flex flex-row gap-2 transition-all duration-300 ease-out hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                  <Image
                    src="/computer invert.png"
                    alt="PC Icon"
                    width={32}
                    height={32}
                    className="invert object-contain"
                  />
                  <p className="max-w-md text-m leading-8 text-zinc-400 hover:text-white">
                    AI English Query
                  </p>
                </div>
              </Link>

              <Link href="https://github.com/cbcode4007/home-ai-max" target="_blank">
                <div className="flex flex-row gap-2 transition-all duration-300 ease-out hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                  <Image
                    src="/phone invert.png"
                    alt="Phone Icon"
                    width={32}
                    height={32}
                    className="invert object-contain"
                  />
                  <p className="max-w-md text-m leading-8 text-zinc-400 hover:text-white">
                    Home AI Max
                  </p>
                </div>
              </Link>

              <Link href="https://github.com/cbcode4007/chat-max" target="_blank">
                <div className="flex flex-row gap-2 transition-all duration-300 ease-out hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                  <Image
                    src="/computer invert.png"
                    alt="PC Icon"
                    width={32}
                    height={32}
                    className="invert object-contain"
                  />
                  <p className="max-w-md text-m leading-8 text-zinc-400 hover:text-white">
                    Chat Max
                  </p>
                </div>
              </Link>

              <Link href="https://github.com/cbcode4007/ai-operator" target="_blank">
                <div className="flex flex-row gap-2 transition-all duration-300 ease-out hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                  <Image
                    src="/computer invert.png"
                    alt="PC Icon"
                    width={32}
                    height={32}
                    className="invert object-contain"
                  />
                  <p className="max-w-md text-m leading-8 text-zinc-400 hover:text-white">
                    AI Operator
                  </p>
                </div>
              </Link>

              <Link href="https://github.com/cbcode4007/ai-backup-analyzer" target="_blank">
                <div className="flex flex-row gap-2 transition-all duration-300 ease-out hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                  <Image
                    src="/computer invert.png"
                    alt="PC Icon"
                    width={32}
                    height={32}
                    className="invert object-contain"
                  />
                  <p className="max-w-md text-m leading-8 text-zinc-400 hover:text-white">
                    AI Backup Analyzer
                  </p>
                </div>
              </Link>
            </div>

          </div>          

        </div>

        <div className="hidden md:flex mx-auto -my-6 max-w-7xl flex-row items-start justify-center flex-nowrap pb-8 gap-26">
          <div className="group">
            <h2 className="text-m font-semibold leading-10 tracking-wide text-zinc-50 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] group-hover:scale-110 transition-all duration-300 ease-out">
              <Link href="/about">
                LEARN MORE
              </Link>              
            </h2>           
            <hr className="mx-auto opacity-0 w-1/2 text-zinc-400 group-hover:scale-220 group-hover:opacity-100 transition-all ease-out "/>
          </div>
          <div className="group">
            <h2 className="text-m font-semibold leading-10 tracking-wide text-zinc-50 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] group-hover:scale-110 transition-all duration-300 ease-out">
              <Link href="/about">
                LEARN MORE
              </Link>              
            </h2>           
            <hr className="mx-auto opacity-0 w-1/2 text-zinc-400 group-hover:scale-220 group-hover:opacity-100 transition-all ease-out "/>
          </div>
          <div className="group">
            <h2 className="text-m font-semibold leading-10 tracking-wide text-zinc-50 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] group-hover:scale-110 transition-all duration-300 ease-out">
              <Link href="/about">
                LEARN MORE
              </Link>              
            </h2>           
            <hr className="mx-auto opacity-0 w-1/2 text-zinc-400 group-hover:scale-220 group-hover:opacity-100 transition-all ease-out "/>
          </div>
        </div>

      </main>
    </div>
  );
}
