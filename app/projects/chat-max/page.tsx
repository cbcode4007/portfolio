import { Metadata } from "next";
import ProjectTemplate from "@/components/project-template";

export const metadata: Metadata = {
  title: "Chat Max",
};

export default function ChatMax() {
  return (
    <ProjectTemplate
      title="Chat Max"
      description="Created as a first foray into prompt engineering, Chat Max offers a basic Python Tkinter desktop interface through which users can assign and customize various personality traits of their conversation partner at any time. Each minute option is capable of changing the prompt such that it acts entirely differently, but the synthesis of different options is left up to the AI model. The program will only work if provided with either an API Key or Server Endpoint and will allow the user to select which they would like to use at any time. It will also be able to save and load existing conversations, and is capable of automatically remembering user preferences beyond that."
      media={[
        {
          type: "image",
          src: "/chat-max-1.png",
          alt: "Conversation screen default",
        },
        {
          type: "image",
          src: "/chat-max-2.png",
          alt: "Personality screen default",
        },
        {
          type: "image",
          src: "/chat-max-3.png",
          alt: "Personality screen with selection",
        },
        {
          type: "image",
          src: "/chat-max-4.png",
          alt: "Conversation screen with selection",
        }
      ]} tech={"Python, ChatGPT API"} outcomes={"App is used casually on occasion for its variety of personalities, and simplicity. Its memory features are being adapted and expanded upon in future projects."}    />
  );
}