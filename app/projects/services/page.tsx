import { Metadata } from "next";
import ProjectTemplate from "@/components/project-template";

export const metadata: Metadata = {
  title: "Project: Web IT Services",
};

export default function WebServices() {
  return (
    <ProjectTemplate
      title="Web IT Services Landing Page"
      description="This landing page is a high-quality site made using the Next.js framework which showcases various IT services and capabilities, as well as providing users the ability to contact without revealing sensitive client information. It has several, diverse pages, displaying various areas of expertise with Next.js as well as web design."
      media={[
        {
          type: "image",
          src: "/services-1.png",
          alt: "Home page",
        },
        {
          type: "image",
          src: "/services-2.png",
          alt: "About page",
        },
        {
          type: "image",
          src: "/services-3.png",
          alt: "Support page",
        },
        {
          type: "image",
          src: "/services-4.png",
          alt: "Download page",
        },
        {
          type: "image",
          src: "/services-5.png",
          alt: "Solutions page",
        },
        {
          type: "image",
          src: "/services-6.png",
          alt: "Projects page",
        },
        {
          type: "image",
          src: "/services-7.png",
          alt: "Contact page",
        },
      ]}
      tech={"TypeScript, Tailwind CSS, SendGrid, Vercel"}
      outcomes={
        <>
          Public and receiving regular traffic from career-seeking sites where it is linked. Currently hosted at{' '}
          <a
            href="https://services-colin-bond.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-blue-400 underline hover:text-blue-300"
          >
            https://services-colin-bond.vercel.app/
          </a>
        </>
      }    />
  );
}