import { Metadata } from "next";
import ProjectTemplate from "@/components/project-template";

export const metadata: Metadata = {
  title: "AI Weather Report",
};

export default function AIWeatherReport() {
  return (
    <ProjectTemplate
      title="AI Weather Report"
      description="A small command-line program that delivers accurate weather information from Environment Canada upon request, tailored to the exact contents of the question. It is mainly meant to be used as part of the AI Operator framework, which will call it to defer any weather-related queries."
      media={[
        {
          type: "image",
          src: "/weather-1.png",
          alt: "Weather question and answer example 1",
        },
        {
          type: "image",
          src: "/weather-2.png",
          alt: "Weather question and answer example 2",
        },
        {
          type: "image",
          src: "/weather-3.png",
          alt: "Weather question and answer example 3",
        },
        {
          type: "image",
          src: "/weather-4.png",
          alt: "Environment Canada data",
        },
      ]} tech={"Python, ChatGPT API, Environment Canada API"} outcomes={"Integrated into the AI Operator framework for when it is asked about weather."}    />
  );
}