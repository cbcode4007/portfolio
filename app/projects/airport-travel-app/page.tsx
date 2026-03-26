import { Metadata } from "next";
import ProjectTemplate from "@/components/project-template";

export const metadata: Metadata = {
  title: "Airport Travel App",
};

export default function AirportTravelApp() {
  return (
    <ProjectTemplate
      title="Airport Travel App"
      description="Developed for IxIxI Creator Lab, this mobile application was designed with Flutter Dart to streamline airport travel by
            centralizing flight details, navigation, and real-time updates
            in a single, intuitive interface.
            Additionally features potential integration with airports to
            file passengers of certain flights by priority 
            using simple colour-coded backgrounds."
      media={[
        {
          type: "image",
          src: "/airport-travel-app-1.png",
          alt: "Flight passport setup screen",
        },
        {
          type: "image",
          src: "/airport-travel-app-2.png",
          alt: "Flight number input screen",
        },
        {
          type: "image",
          src: "/airport-travel-app-3.png",
          alt: "Flight ticket setup screen",
        },
        {
          type: "image",
          src: "/airport-travel-app-4.png",
          alt: "Flight overview screen",
        },                
      ]}
      tech="Flutter, Dart, Firebase, AviationStack Flight API"
      outcomes="Considered both the best out of all 'Airport Travel App' student project submissions by the client, and for usage. Praised mainly because of its seamless adherence and adaptation to shifting requirements, integrating all planned features with modern UI into a cohesive experience."
    />
  );
}