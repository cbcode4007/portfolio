import { Metadata } from "next";
import ProjectsClient from "./projects-client";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Projects() {

  return (
    <div className="flex h-[calc(100vh-56px)] flex-col items-center justify-center px-6 md:pb-12 pb-24">
      <main className="flex md:w-full w-auto max-w-8xl flex-col items-center gap-10">

        <div className="p-6"></div>
        {/* Project Tags and Entries */}
        <ProjectsClient />

      </main>
    </div>
  );
}
