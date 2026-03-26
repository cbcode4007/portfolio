import { Metadata } from "next";
import ProjectTemplate from "@/components/project-template";

export const metadata: Metadata = {
  title: "AI Operator",
};

export default function AIOperator() {
  return (
    <ProjectTemplate
      title="AI Operator"
      description="A command-line program which can take message input, and then decide using AI which 'plugin', similarly AI-based programs who have more specialized information, should be used to provide the best answer."
      media={[
        {
          type: "image",
          src: "/ai-operator-1.png",
          alt: "No plugin chat response",
        },
        {
          type: "image",
          src: "/ai-operator-2.png",
          alt: "Weather plugin",
        },
        {
          type: "image",
          src: "/ai-operator-3.png",
          alt: "News plugin",
        },
        {
          type: "image",
          src: "/ai-operator-4.png",
          alt: "HAGPT plugin",
        },
      ]} tech={"Python, ChatGPT API"} outcomes={"Being added to Home AI Max for scalability. More features can be implemented with this agent, as it provides a simple way of adding new agents or plugins and managing their interactions."}    />
  );
}