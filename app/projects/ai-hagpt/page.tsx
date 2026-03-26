import { Metadata } from "next";
import ProjectTemplate from "@/components/project-template";

export const metadata: Metadata = {
  title: "AI HAGPT",
};

export default function AIHAGPT() {
  return (
    <ProjectTemplate
      title="AI HAGPT"
      description="A small command-line program that uses AI to determine if an incoming message is a command or chat and responds in kind. It will attempt to carry out the commands according to the entities (devices/services) it is aware of, which requires some existing infrastructure, or carry the conversation for chat messages."
      media={[
        {
          type: "image",
          src: "/hagpt-1.png",
          alt: "Home assistant question and answer example 1",
        },
      ]} tech={"Python, ChatGPT API, Home Assistant"} outcomes={"Integrated into the AI Operator framework for when it is given any apparent home automation command (plain English)."}    />
  );
}