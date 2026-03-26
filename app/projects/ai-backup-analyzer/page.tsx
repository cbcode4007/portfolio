import { Metadata } from "next";
import ProjectTemplate from "@/components/project-template";

export const metadata: Metadata = {
  title: "AI Backup Analyzer",
};

export default function AIBackupAnalyzer() {
  return (
    <ProjectTemplate
      title="AI Backup Analyzer"
      description="A small command-line program that analyzes backup files and reports on their status and completeness. An AI will read the tail of a log file it receives, and judge whether or not it proceeded smoothly; if not, it will send a notification to a specified device warning the user."
      media={[
      ]} tech={"Python, ChatGPT API, Flask"} outcomes={"Runs daily on the development team's servers and notifies them of any potential issues with the backup."}    />
  );
}