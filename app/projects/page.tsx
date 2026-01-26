import { Metadata } from "next";
import ProjectsClient from "./projects-client";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Projects() {

  return (
    <div className="flex h-[calc(100vh-56px)] flex-col items-center justify-center px-6 pb-8">
      <main className="flex w-full max-w-8xl flex-col items-center gap-10">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-50 pb-2">
          My Work
        </h1>

        <ProjectsClient />

      </main>
    </div>
  );
}
