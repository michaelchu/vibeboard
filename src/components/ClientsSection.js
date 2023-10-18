import React from "react";
import {
  CubeIcon,
  CodeBracketIcon,
  CursorArrowRaysIcon,
  VariableIcon,
  TruckIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

function ClientsSection(props) {
  const clientsRowOne = [
    {
      name: "boxspot",
      logo: CubeIcon,
    },
    {
      name: "TechCode",
      logo: CodeBracketIcon,
    },
    {
      name: "cCLICK",
      logo: CursorArrowRaysIcon,
    },
  ];

  const clientsRowTwo = [
    {
      name: "sBoard",
      logo: VariableIcon,
    },
    {
      name: "uptruck",
      logo: TruckIcon,
    },
    {
      name: "freshloc",
      logo: MapPinIcon,
    },
  ];

  return (
    <Section
      size={props.size}
      bgColor={props.bgColor}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      textColor={props.textColor}
    >
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          strapline={props.strapline}
          className="text-center"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 divide-gray-100 divide-y md:divide-y-0 md:divide-x text-center text-gray-400 border-b border-gray-100">
          {clientsRowOne.map((client, index) => (
            <div
              className="px-2 h-28 flex items-center justify-center"
              key={index}
            >
              <div className="inline-flex items-center space-x-2 text-3xl font-semibold">
                <client.logo className="inline-block w-10 h-10" />
                <span>{client.name}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-gray-100 divide-y md:divide-y-0 md:divide-x text-center text-gray-400">
          {clientsRowTwo.map((client, index) => (
            <div
              className="px-2 h-28 flex items-center justify-center"
              key={index}
            >
              <div className="inline-flex items-center space-x-2 text-3xl font-semibold">
                <client.logo className="inline-block w-10 h-10" />
                <span>{client.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default ClientsSection;
