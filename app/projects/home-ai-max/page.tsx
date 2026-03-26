import { Metadata } from "next";
import ProjectTemplate from "@/components/project-template";

export const metadata: Metadata = {
  title: "Home AI Max",
};

export default function HomeAIMax() {
  return (
    <ProjectTemplate
      title="Home AI Max"
      description="Home AI Max is a Flutter Dart app that sends text queries to a configured webhook and reads server replies out loud. It also accepts incoming POST notifications from a local server and can request/receive TTS audio from a companion Flask service. The central orb visually animates while the app is speaking. It was made before Alexa Plus to essentially allow home users to interact with their smart assistant as an AI model, but is still being updated and used alongside Plus to cover certain things the service does not do as well. Like its counterpart, it has a screen-saving mode but with only one thing as the background, a weather interface."
      media={[
        {
          type: "image",
          src: "/home-ai-max-1.png",
          alt: "Home screen",
        },
        {
          type: "image",
          src: "/home-ai-max-2.png",
          alt: "Home screen listening",
        },
        {
          type: "image",
          src: "/home-ai-max-3.png",
          alt: "Weather screensaver",
        },
      ]} tech={"Flutter, Dart, ChatGPT API, Flask"} outcomes={"Deployed and in everday use at one family's home. Users report high satisfaction with its features, performance and ease of use, even in the wake of Alexa Plus."}    />
  );
}