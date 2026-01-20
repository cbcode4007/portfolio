import Link from "next/dist/client/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-[calc(100vh-56px)] items-center justify-center font-sans overflow-y-auto">
      {/* <main className="flex w-full max-w-3xl flex-col items-center gap-12 px-16 text-center bg-zinc-150 dark:bg-neutral-950"> */}
      <main className="flex w-full max-w-3xl flex-col items-center gap-8 px-16 text-center">

        <div className="flex flex-col items-center pt-24">
          {/* <p className="max-w-md text-sm leading-8 text-zinc-400">
            The name's Bond
          </p> */}
          {/* <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50"> */}
          <h1 className=" text-3xl font-semibold leading-10 tracking-tight text-zinc-50">
            Colin Bond
          </h1>

          {/* <Image
            className="dark:invert"
            src="/profile.png"
            alt="Personal logo"
            width={256}
            height={256}
            priority
          /> */}

          {/* <Image
            src="/source.gif"
            alt="background"
            fill
            className="object-cover absolute inset-0 -z-10 opacity-10"
            unoptimized={true}
            priority
          /> */}
          
          <div className="pt-4">
            <div className="w-48 h-48 overflow-hidden rounded-full glowing-border">
              <Image            
                src="/profile.png"
                alt="Profile"
                width={256}
                height={170}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p> */}
          {/* <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400"> */}
          <p className="max-w-md text-lg leading-8 text-zinc-400 pt-4">
            IT Solutions
          </p>
        </div>

        <div className="mx-auto flex max-w-7xl flex-row items-start justify-center flex-nowrap pb-8">

          <div className="flex flex-col justify-center items-center gap-1 flex-1 min-w-0">
            <h2 className="text-xl font-semibold leading-10 tracking-wide text-zinc-50">
              ABOUT ME
            </h2>

            <p className="max-w-md text-m leading-8 text-zinc-400">
              Welcome to my portfolio website! I'm Colin, a professional IT solutions developer dedicated to crafting a variety of engaging and cutting-edge applications for my clients.
            </p>
            <h2 className="text-m font-semibold leading-10 tracking-wide text-zinc-50 pt-2 transition-all duration-300 ease-out hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              <Link href="/about">
                LEARN MORE
              </Link>              
            </h2>           
            <hr className="block clear-both w-1/2 h-px bg-white border-0" />
          </div>

          <div className="flex flex-col justify-center items-center gap-1 flex-1 min-w-0">
            <h2 className="text-xl font-semibold leading-10 tracking-wide text-zinc-50">
              MY SPECIALTIES
            </h2>
             
            <div className="flex flex-col justify-start items-start gap-1 flex-1 min-w-0">
              <div className="flex flex-row gap-2">
                <Image
                  src="/python-logo-monochrome.png"
                  alt="Python Logo"
                  width={32}
                  height={16}
                  className="invert"
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
                  height={16}
                  className="invert"
                />
                <p className="max-w-md text-m leading-8 text-zinc-400">
                  Flutter Dart
                </p>
              </div>     
              <div className="flex flex-row gap-2">
                <Image
                  src="/sql.png"
                  alt="SQL Logo"
                  width={32}
                  height={16}
                  className="invert"
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
                  height={16}
                  className="invert"
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
                  height={16}
                  className="invert"
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
                  height={16}
                  className="invert"
                />
                <p className="max-w-md text-m leading-8 text-zinc-400">
                  Agentic AI
                </p>                                
              </div>
            </div>

            <h2 className="text-m font-semibold leading-10 tracking-wide text-zinc-50 pt-2 transition-all duration-300 ease-out hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              <Link href="/skills">
                LEARN MORE
              </Link>              
            </h2>           
            <hr className="block clear-both w-2/4 h-px bg-white border-0" />
          </div>

          <div className="flex flex-col justify-center items-center gap-1 flex-1 min-w-0">
            <h2 className="text-xl font-semibold leading-10 tracking-wide text-zinc-50">
              MY WORK
            </h2>

            <div className="flex flex-col justify-start items-start gap-1 flex-1 min-w-0">
              <div className="flex flex-row gap-2">
                <Image
                  src="/mobile_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                  alt="Phone Icon"
                  width={32}
                  height={16}                  
                />
                <p className="max-w-md text-m leading-8 text-zinc-400 hover:text-white">
                  IxIxI's Airport App
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <Image
                  src="/computer_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                  alt="PC Icon"
                  width={32}
                  height={16}
                />
                <p className="max-w-md text-m leading-8 text-zinc-400 hover:text-white">
                  AI English Query
                </p>
              </div>            
              <div className="flex flex-row gap-2">
                <Image
                  src="/mobile_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                  alt="Phone Icon"
                  width={32}
                  height={16}
                />
                <p className="max-w-md text-m leading-8 text-zinc-400 hover:text-white">
                  Home AI Max
                </p>
              </div>     
              <div className="flex flex-row gap-2">
                <Image
                  src="/computer_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                  alt="PC Icon"
                  width={32}
                  height={16}
                />
                <p className="max-w-md text-m leading-8 text-zinc-400 hover:text-white">
                  Chat Max
                </p>
              </div>
            </div>

            <h2 className="text-m font-semibold leading-10 tracking-wide text-zinc-50 pt-2 transition-all duration-300 ease-out hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              <Link href="/projects">
                LEARN MORE
              </Link>              
            </h2>           
            <hr className="block clear-both w-2/4 h-px bg-white border-0" />

          </div>

        </div>

        {/* <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            // className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-39.5"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#ccc] md:w-39.5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              // className="dark:invert"
              className="invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Contact Me
          </a>

          <a
            // className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-39.5"
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid px-5 transition-colors hover:border-transparent border-white/[.145] hover:bg-gray-700 md:w-39.5"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Projects
          </a>
        </div> */}
      </main>
    </div>
  );
}
