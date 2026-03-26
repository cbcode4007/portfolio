import { type ReactNode } from "react";
import ProjectCarousel from "@/components/project-carousel";

interface ProjectTemplateProps {
  title: string;
  description: string;
  media?: Array<{
    type: "image" | "video";
    src: string;
    alt?: string;
  }>;
  tech: string;
  outcomes: ReactNode;
}

export default function ProjectTemplate({
  title,
  description,
  media,
  tech,
  outcomes,
}: ProjectTemplateProps) {
  return (
    <div className="flex flex-col h-[calc(100vh-58px)]">
      {/* Fixed Title Section */}
      <section className="shrink-0 flex flex-col items-center justify-center pt-8 pb-12">
        <h1 className="text-4xl md:text-5xl tracking-tight text-center pt-20">
          {title}
        </h1>
      </section>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto max-h-72 md:max-h-[calc(100vh-78px-16rem)] scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        <main className="flex flex-col items-center w-auto md:w-full max-w-6xl mx-auto gap-12">          

          {/* Media Showcase */}
          {media && media.length > 0 && (
            <section className="w-full rounded-2xl overflow-hidden">
              <ProjectCarousel media={media} />
            </section>
          )}

          {/* Description */}
          <section className="flex flex-col items-center justify-center space-y-6 md:px-0 px-12">
            <p className="text-lg text-zinc-400 max-w-5xl leading-relaxed text-center">
              {description}
            </p>
          </section>

          {/* Structured Columns */}
          <section className="w-full max-w-5xl flex flex-col md:flex-row gap-8 md:gap-24 items-start justify-center px-12 md:px-0">
            <div className="flex-1 flex flex-col md:items-center items-start">
              <h2 className="text-2xl mb-4">Technologies</h2>
              <div className="text-zinc-400 leading-relaxed">
                {tech}
              </div>
            </div>

            <div className="flex-1 flex flex-col md:items-center items-start">
              <h2 className="text-2xl mb-4">Outcomes</h2>
              <div className="text-zinc-400 leading-relaxed">
                {outcomes}
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}