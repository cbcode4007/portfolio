import { Metadata } from "next";
import ProjectTemplate from "@/components/project-template";

export const metadata: Metadata = {
  title: "AI News Report",
};

export default function AINewsReport() {
  return (
    <ProjectTemplate
      title="AI News Report"
      description="A small command-line program that delivers accurate news information from Global News upon request, tailored to the exact contents of the question. It is mainly meant to be used as part of the AI Operator framework, which will call it to defer any news-related queries."
      media={[
        {
          type: "image",
          src: "/news-1.png",
          alt: "News question and answer example",
        },
      ]} tech={"Python, ChatGPT API, Global News API"} outcomes={"Integrated into the AI Operator framework for when it is asked about news."}    />
  );
}