"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/* Tags metadata */
type Tag =
  | "python"
  | "flutter"
  | "sql"
  | "typescript"
  | "tailwind"
  | "ai"
  | "desktop"
  | "mobile";

const TAG_ICONS: Record<Tag, string> = {
  python: "/python-logo-monochrome.png",
  flutter: "/flutter_logo_icon_214732.png",
  sql: "/sql2.png",
  typescript: "/free-typescript-logo-icon-svg-download-png-1982828.png",
  tailwind: "/css_tailwind_logo_icon_214735.png",
  ai: "/openai.png",
  desktop: "/computer invert.png",
  mobile: "/phone invert.png",
};

/* Project interface models */
interface ProjectCard {
  id: number;
  name: string;
  imagePath: string;
  description: string;
  link: string;
  tags: Tag[];
}

/* Project entries */
const projects: ProjectCard[] = [
  {
    id: 1,
    name: "IXIXI'S AIRPORT APP",
    imagePath: "/Computer-screen-code-glitch-animation-gif-background-free.gif",
    description:
      "A high quality proof of concept application for IxIxI Creator Lab, helping travelers route to gates based on remaining time.",
    link: "https://github.com/cbcode4007/airport-travel-app",
    tags: ["flutter", "mobile"],
  },
  {
    id: 2,
    name: "AI ENGLISH QUERY",
    imagePath: "/Computer-screen-code-glitch-animation-gif-background-free.gif",
    description:
      "Interface to query a database in English, and obtain formatted results. AI generates SQL and executes it programmatically, while results are handled by the application.",
    link: "https://github.com/cbcode4007/ai-english-query",
    tags: ["python", "sql", "ai", "desktop"],
  },
  {
    id: 3,
    name: "HOME AI MAX",
    imagePath: "/Computer-screen-code-glitch-animation-gif-background-free.gif",
    description:
      "Front-end application with STT, wake word support, and webhook-based automation.",
    link: "https://github.com/cbcode4007/home-ai-max",
    tags: ["flutter", "ai", "mobile"],
  },
  {
    id: 4,
    name: "CHAT MAX",
    imagePath: "/Computer-screen-code-glitch-animation-gif-background-free.gif",
    description:
      "Standalone application with AI chat and more importantly heavy customization for the agent's personality.",
    link: "https://github.com/cbcode4007/chat-max",
    tags: ["python", "ai", "desktop"],
  },
  {
    id: 5,
    name: "WEB PORTFOLIO",
    imagePath: "/Computer-screen-code-glitch-animation-gif-background-free.gif",
    description:
      "Modern landing site with sleek visual design, animations and some back-end features, most notably the contact page.",
    link: "https://github.com/cbcode4007/portfolio",
    tags: ["typescript", "tailwind", "desktop", "mobile"],
  },
  {
    id: 6,
    name: "AI OPERATOR",
    imagePath: "/Computer-screen-code-glitch-animation-gif-background-free.gif",
    description:
      "AI-driven command router capable of invoking other programs dynamically based on request contents.",
    link: "https://github.com/cbcode4007/ai-operator",
    tags: ["python", "ai", "desktop"],
  },
  {
    id: 7,
    name: "AI WEATHER REPORT",
    imagePath: "/Computer-screen-code-glitch-animation-gif-background-free.gif",
    description:
      "Small-scale AI agent with Environment Canada API data to answer weather-related queries, and is compatible for use as a part of AI Operator.",
    link: "https://github.com/cbcode4007/ai-weather-report",
    tags: ["python", "ai", "desktop"],
  },
  {
    id: 8,
    name: "AI NEWS REPORT",
    imagePath: "/Computer-screen-code-glitch-animation-gif-background-free.gif",
    description:
      "Small-scale AI agent with Home Assistant news API data to answer news-related queries, and is compatible for use as a part of AI Operator.",
    link: "https://github.com/cbcode4007/ai-news-report",
    tags: ["python", "ai", "desktop"],
  },
  {
    id: 9,
    name: "AI HAGPT",
    imagePath: "/Computer-screen-code-glitch-animation-gif-background-free.gif",
    description:
      "Small-scale AI agent with Home Assistant integration to chat with the user or interact with smart devices on its network if it believes it was called for, and is compatible for use as a part of AI Operator.",
    link: "https://github.com/cbcode4007/ai-hagpt",
    tags: ["python", "ai", "desktop"],
  },
  {
    id: 10,
    name: "AI BACKUP ANALYZER",
    imagePath: "/Computer-screen-code-glitch-animation-gif-background-free.gif",
    description:
      "CRON-driven backup analyzer using AI to classify the day's log, and sends necessary alerts via Home Assistant.",
    link: "https://github.com/cbcode4007/ai-backup-analyzer",
    tags: ["python", "ai", "desktop"],
  },
];

/* React component */
export default function Projects() {
  const [activeTags, setActiveTags] = useState<Tag[]>([]);

  const filteredProjects = projects.filter(
    (project) =>
      activeTags.length === 0 ||
      activeTags.every((tag) => project.tags.includes(tag))
  );

  return (
    <div className="flex flex-col gap-4 px-4 md:px-0">
      {/* Tag interface */}
      <div className="flex flex-wrap gap-3 justify-center">
        {(Object.keys(TAG_ICONS) as Tag[]).map((tag) => {
          const active = activeTags.includes(tag);
          return (
            <button
              key={tag}
              onClick={() =>
                setActiveTags((prev) =>
                  active ? prev.filter((t) => t !== tag) : [...prev, tag]
                )
              }
              className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm transition-all ${
                active
                  ? "bg-gray-700 text-zinc-300 scale-110 md:hover:bg-zinc-400"
                  : "bg-zinc-800 text-zinc-300 scale-100 md:hover:bg-zinc-400"
              }`}
            >
              <Image
                src={TAG_ICONS[tag]}
                alt=""
                width={14}
                height={14}
                className="invert"
              />
              {tag}
            </button>
          );
        })}
      </div>

      {/* Desktop grid */}
      <div className="hidden md:grid grid-cols-3 gap-8 w-full h-152 overflow-y-auto px-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent md:scroll-smooth pt-12">
        {filteredProjects.length === 0 ? (
          <p className="text-zinc-400 col-span-3 text-center">
            No projects match the selected tags.
          </p>
        ) : (
          filteredProjects.map((project) => (
            <Link target="_blank" href={`${project.link}`} key={project.id}>
              <div className="group relative bg-zinc-900 rounded-lg flex flex-col transition-all duration-300 hover:bg-gray-700 hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] h-68">
                {/* Project image */}
                <div className="relative w-full flex-1 overflow-hidden rounded-t-lg">
                  {/* Tag icons */}
                  <div className="absolute top-3 right-3 z-20 flex gap-2">
                    {project.tags.map((tag) => (
                      <div
                        key={`${project.id}-${tag}`}
                        className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center ring-1 ring-white/20 shadow-lg"
                      >
                        <Image
                          src={TAG_ICONS[tag]}
                          alt={tag}
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
                    sizes="128px"
                    className="object-cover"
                    loading="eager"
                  />
                </div>
                <div className="h-px bg-zinc-800 group-hover:bg-zinc-400 transition-all duration-300" />

                {/* Content */}
                <div className="flex flex-col p-6 h-1/2">
                  <h2 className="text-lg font-semibold text-zinc-50 mb-3">
                    {project.name}
                  </h2>
                  <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent px-2 md:scroll-smooth">
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>

      {/* Mobile scrollable column */}
      <div className="space-y-8"></div>

      <div className="flex flex-col md:hidden gap-4 w-full max-h-64 overflow-y-auto pb-8 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        {filteredProjects.length === 0 ? (
          <p className="text-zinc-400 text-center">
            No projects match the selected tags.
          </p>
        ) : (
          filteredProjects.map((project) => (
            <Link target="_blank" href={`${project.link}`} key={project.id}>
              <div className="group relative bg-zinc-900 rounded-lg h-64 flex flex-col transition-all duration-300">
                {/* Project image */}
                <div className="relative w-full overflow-hidden rounded-t-lg h-1/2">
                  {/* Tag icons */}
                  <div className="absolute top-3 right-3 z-20 flex gap-2">
                    {project.tags.map((tag) => (
                      <div
                        key={`${project.id}-${tag}`}
                        className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center ring-1 ring-white/20 shadow-lg"
                      >
                        <Image
                          src={TAG_ICONS[tag]}
                          alt={tag}
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
                    sizes="128px"
                    className="object-cover"
                    loading="eager"
                  />
                </div>

                <div className="h-1 bg-zinc-800 transition-all duration-300" />

                {/* Content */}
                <div className="flex flex-col p-4 h-1/2 overflow-y-auto">
                  <h2 className="text-lg font-semibold text-zinc-50 mb-2">
                    {project.name}
                  </h2>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
