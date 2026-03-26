import { Metadata } from "next";
import ProjectTemplate from "@/components/project-template";

export const metadata: Metadata = {
  title: "Project: Web Portfolio",
};

export default function WebPortFolio() {
  return (
    <ProjectTemplate
      title="Web Portfolio"
      description="This web portfolio is a high-quality site made using the Next.js framework which describes and highlights various skills and projects, as well as providing users the ability to contact without revealing sensitive client information. It has several, diverse pages, displaying various areas of expertise with Next.js as well as web design."
      media={[
        {
          type: "image",
          src: "/portfolio-1.png",
          alt: "Home page",
        },
        {
          type: "image",
          src: "/portfolio-2.png",
          alt: "About me page",
        },
        {
          type: "image",
          src: "/portfolio-3.png",
          alt: "Skills page",
        },
        {
          type: "image",
          src: "/portfolio-4.png",
          alt: "Projects page",
        },
        {
          type: "image",
          src: "/portfolio-5.png",
          alt: "Contact page",
        },
      ]}
      tech="TypeScript, Tailwind CSS, SendGrid, Vercel"
      outcomes={
        <>
          Public and receiving regular traffic from career-seeking sites where it is linked. Currently hosted at{' '}
          <a
            href="https://portfolio-colin-bond.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-blue-400 underline hover:text-blue-300"
          >
            https://portfolio-colin-bond.vercel.app/
          </a>
        </>
      }
    />
  );
}