import { Metadata } from "next";
import ProjectTemplate from "@/components/project-template";

export const metadata: Metadata = {
  title: "AI English Query",
};

export default function AIEnglishQuery() {
  return (
    <ProjectTemplate
      title="AI English Query"
      description="A proof-of-concept desktop application which connects directly to a database so that users can make requests in plain English, typed or spoken, for an AI to translate to SQL and execute automatically, returning the results in-app. This could prove crucial for business workflows, greatly improving efficiency by reducing ad-hoc SQL query generation time, as well as easily and securely operating on databases without the need to copy-paste from the web or an account that has any permissions other than SELECT. In future, the AI itself will also be locally hosted, ensuring no sensitive information leaves the user's network."
      media={[
        {
          type: "image",
          src: "/ai-english-query-1.png",
          alt: "Login screen",
        },
        {
          type: "image",
          src: "/ai-english-query-2.png",
          alt: "Main screen empty",
        },
        {
          type: "image",
          src: "/ai-english-query-3.png",
          alt: "Main screen populated",
        },
      ]} tech={"Python, MariaDB, ChatGPT API"} outcomes={"Routinely used by the development team in its endeavours for rapid, vocal queries. Actively maintained and ready for production."}    />
  );
}