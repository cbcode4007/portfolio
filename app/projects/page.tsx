"use client";

import Image from "next/image";
import Link from "next/link";

interface ProjectCard {
  id: number;
  name: string;
  imagePath: string;
  description: string;
  link: string;
  icons: string[];
}

const projects: ProjectCard[] = [
  { id: 1, name: "IXIXI'S AIRPORT APP", imagePath: "/Computer-screen-code-glitch-animation-gif-background-free.gif", description: "A high quality proof of concept application for IxIxI Creator Lab, which would help file travelers into gates depending on how much time remains until their flight.", link: "#", icons:["/phone invert.png", "/flutter_logo_icon_214732.png"] },
  { id: 2, name: "AI ENGLISH QUERY", imagePath: "/Computer-screen-code-glitch-animation-gif-background-free.gif", description: "An interface that allows users to query a specified database in English. It uses AI to generate an SQL statement which will then execute by itself, and the results are returned for display.", link: "#", icons:["/computer invert.png", "/python-logo-monochrome.png", "/openai.png", "/sql2.png"] },
  { id: 3, name: "HOME AI MAX", imagePath: "/Computer-screen-code-glitch-animation-gif-background-free.gif", description: "A robust mobile interface that can be typed to or spoken to via its STT, and either speech activated by tap or a wake word, which will then send the input to a configured webhook of the user's choice, and reads server replies out loud, as well as accepting incoming POSTs in much the same way.", link: "#", icons:["/phone invert.png", "/flutter_logo_icon_214732.png"] },
  { id: 4, name: "CHAT MAX", imagePath: "/Computer-screen-code-glitch-animation-gif-background-free.gif", description: "Standalone desktop application that dabbles into prompt engineering based on settings in the program to simulate a highly customizable AI chat bot personality.", link: "#", icons:["/computer invert.png", "/python-logo-monochrome.png", "/openai.png"] },
  { id: 5, name: "AI OPERATOR", imagePath: "/Computer-screen-code-glitch-animation-gif-background-free.gif", description: "The underlying logic behind one of Home AI Max' endpoints, this program can use AI to call other compatible programs based on whichever input users give it.", link: "#", icons:["/computer invert.png", "/python-logo-monochrome.png", "/openai.png"] },
  { id: 6, name: "AI BACKUP ANALYZER", imagePath: "/Computer-screen-code-glitch-animation-gif-background-free.gif", description: "Built to run automatically on a schedule via CRON, the program takes a snippet of the backup log file it is given and uses AI to analyze it, returning a one word result which decides whether or not to send specific devices warning notifications through existing Home Assistant integrations.", link: "#", icons:["/computer invert.png", "/python-logo-monochrome.png", "/openai.png"] },
];

export default function Projects() {

  return (
    <div className="flex h-[calc(100vh-56px)] flex-col items-center justify-center font-sans px-6">
      <main className="flex w-full max-w-8xl flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-50">
            My Work            
          </h1>
        </div>

        <hr className="w-1/1 h-px bg-zinc-400 border-0" />

        {/* Grid of 9 cards (3x3) */}
        <div className="grid grid-cols-3 gap-8 w-full max-h-[calc(100vh-300px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent px-2 scroll-smooth">
          {projects.map((project) => ( 

            <Link href={project.link} key={project.id}>
              <div                
                className="relative bg-zinc-900 rounded-lg flex flex-col hover:bg-zinc-800 transition-colors h-75"
              >
                {/* Image = top half */}
                <div className="relative max-h-1/2 w-full flex-1">
                  <div className="absolute top-3 right-3 z-10 flex gap-2">
                    {project.icons.map((icon, idx) => (
                      <div
                        key={idx}                        
                        className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md 
                                  flex items-center justify-center
                                  ring-1 ring-white/20 shadow-lg"
                      >
                        <Image
                          src={icon}
                          alt=""
                          width={18}
                          height={18}
                          className="object-contain invert"
                        />
                      </div>
                    ))}
                  </div>

                  <Image
                    src={project.imagePath}
                    alt={project.name}                  
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="h-px bg-zinc-800" />

                {/* Content = bottom half */}
                <div className="flex flex-col items-center p-6 max-h-1/2">
                  <h2 className="text-lg font-semibold leading-tight text-zinc-50 mb-3">
                    {project.name}
                  </h2>

                  <div className="flex flex-col space-y-4 w-full">
                    <hr className="w-1/1 h-px bg-zinc-800 border-0" />                  
                    <div className="text-xs text-zinc-300 flex flex-col items-start w-full max-h-7/10 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent px-2 scroll-smooth">
                      {project.description.length > 0 ? (
                        project.description
                      ) : (
                        <p className="text-zinc-400 italic">Projects coming soon...</p>
                      )}
                    </div>
                  </div>

                </div>

              </div>
            </Link>
          ))}
        </div>

      </main>
    </div>
  );
}
