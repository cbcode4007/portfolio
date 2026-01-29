import { Metadata } from "next";
import SkillsClient from "./skills-client";

export const metadata: Metadata = {
  title: "Skills",
};

export default function Skills() {
  return (
    <div className="flex h-[calc(100vh-56px)] flex-col items-center justify-center font-sans px-6">
      <main className="flex w-full max-w-4xl flex-col items-center justify-center gap-12">
        {/* Title */}
        <div>          
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-zinc-50">
            My Specialties
          </h1>
        </div>

        {/* Skill Cards Carousel */}
        <SkillsClient />

      </main>
    </div>
  );
}
