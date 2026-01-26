"use client";

import Image from "next/image";
import { useState } from "react";


interface SkillCard {
  id: number;
  name: string;
  logoPath: string;
  projects: string[];
}

const skills: SkillCard[] = [
  { id: 1, name: "PYTHON", logoPath: "/python-logo-monochrome.png", projects: ["AI English Query", "Chat Max", "AI Operator", "AI Weather Report", "AI News Report", "AI Backup Analyzer"] },
  { id: 2, name: "FLUTTER DART", logoPath: "/flutter_logo_icon_214732.png", projects: ["IxIxI's Airport App", "Home AI Max"] },
  { id: 3, name: "SQL", logoPath: "/sql2.png", projects: ["AI English Query"] },
  { id: 4, name: "TYPESCRIPT", logoPath: "/free-typescript-logo-icon-svg-download-png-1982828.png", projects: ["Web Portfolio"] },
  { id: 5, name: "TAILWIND CSS", logoPath: "/css_tailwind_logo_icon_214735.png", projects: ["Web Portfolio"] },
  { id: 6, name: "AGENTIC AI", logoPath: "/openai.png", projects: ["AI English Query", "Chat Max", "Home AI Max", "AI Operator", "AI Weather Report", "AI News Report", "AI Backup Analyzer"] }
];

function FlipCard({ skill, isFlipped, onFlip }: { skill: SkillCard; isFlipped: boolean; onFlip: () => void }) {
  return (
    <div
      className="relative w-64 h-80 cursor-pointer perspective"
      onClick={onFlip}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-gpu`}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front side */}
        <div
          className="absolute w-full h-full bg-zinc-900 rounded-lg flex flex-col items-center justify-between p-6 text-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <h2 className="text-xl font-semibold leading-tight text-zinc-50 pt-8">{skill.name}</h2>
          <div className="relative w-20 h-20 -my-2">
            <Image
              src={skill.logoPath}
              alt={skill.name}
              fill
              sizes="80px"
              className="object-contain invert"
            />
          </div>
          <div className="text-sm text-zinc-300 h-12 flex items-center justify-center pb-2">
            {skill.projects.length > 0 ? (
              <div>
                <p className="font-semibold mb-1">Projects:</p>
                <div className="space-y-1 items-start max-h-16 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent px-2 scroll-smooth">
                  {skill.projects.map((project, idx) => (
                    <p key={idx}>{project}</p>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-zinc-400 italic">Projects coming soon...</p>
            )}
          </div>
        </div>

        {/* Back side */}
        <div
          className="absolute w-full h-full bg-zinc-800 rounded-lg flex items-center justify-center p-6 hover:bg-gray-700 transition-colors duration:300 ease-out"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="relative w-32 h-32">
            <Image
              src={skill.logoPath}
              alt={skill.name}
              fill
              sizes="128px"
              loading="eager"
              className="object-contain invert"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SkillsClient() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [flipped, setFlipped] = useState<{ [key: number]: boolean }>(
        Object.fromEntries(skills.map(skill => [skill.id, true]))
    );

    const toggleFlip = (skillId: number) => {
        setFlipped((prev) => ({
        ...prev,
        [skillId]: !prev[skillId],
        }));
    };

    const nextSlide = () => {
        const nextSkill = skills[(currentIndex + 1) % skills.length];
        setFlipped((prev) => ({
        ...prev,
        [nextSkill.id]: false,
        }));
        setCurrentIndex((prev) => (prev + 1) % skills.length);
    };

    const prevSlide = () => {
        const prevSkill = skills[(currentIndex - 1 + skills.length) % skills.length];
        setFlipped((prev) => ({
        ...prev,
        [prevSkill.id]: false,
        }));
        setCurrentIndex((prev) => (prev - 1 + skills.length) % skills.length);
    };

    const handleCardClick = (skillId: number, index: number) => {
        if (index === 1) {
        // Center card: toggle flip
        toggleFlip(skillId);
        } else if (index === 0) {
        // Left card: go to previous
        prevSlide();
        } else if (index === 2) {
        // Right card: go to next
        nextSlide();
        }
    };

    // Get 3 visible cards (current and neighbors for carousel effect)
    const getVisibleSkills = () => {
        const visible = [];
        for (let i = -1; i <= 1; i++) {
        visible.push(skills[(currentIndex + i + skills.length) % skills.length]);
        }
        return visible;
    };

    return (
        // Carousel container
        <div className="flex flex-col items-center gap-8 w-full">
          {/* Cards display */}
          <div className="flex items-center justify-center gap-4 h-80">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="p-2 hover:bg-gray-900 hover:scale-110 rounded-lg transition-all"
              aria-label="Previous skill"
            >
              <svg
                className="w-6 h-6 text-zinc-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Cards Carousel */}
            <div className="flex items-center justify-center gap-6 overflow-hidden">
              {getVisibleSkills().map((skill, index) => {
                const isCenter = index === 1;
                return (
                  <div
                    key={skill.id}
                    className={`transition-all duration-500 transform ${
                      isCenter
                        ? "scale-100 opacity-100"
                        : "scale-75 opacity-50"
                    }`}
                  >
                    <FlipCard
                      skill={skill}
                      isFlipped={flipped[skill.id] || false}
                      onFlip={() => handleCardClick(skill.id, index)}
                    />
                  </div>
                );
              })}
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="p-2 hover:bg-gray-900 hover:scale-110 rounded-lg transition-all"
              aria-label="Next skill"
            >
              <svg
                className="w-6 h-6 text-zinc-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Indicators */}
          <div className="flex gap-2 justify-center">
            {skills.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-zinc-50" : "bg-zinc-600"
                }`}
                aria-label={`Go to skill ${index + 1}`}
              />
            ))}
          </div>
        </div>
    )
}