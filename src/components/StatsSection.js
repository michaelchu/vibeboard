import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

function StatsSection(props) {
  const stats = [
    {
      title: "Projects",
      count: "3,500+",
    },
    {
      title: "Clients",
      count: "260+",
    },
    {
      title: "Earnings",
      count: "175k+",
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
      <div className="space-y-16 container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          strapline={props.strapline}
          className="text-center"
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 text-center divide-y sm:divide-y-0 sm:divide-x">
          {stats.map((stat, index) => (
            <dl className="space-y-1 p-5" key={index}>
              <dt className="text-4xl font-extrabold">{stat.count}</dt>
              <dd className="text-sm uppercase tracking-wide font-semibold text-gray-600">
                {stat.title}
              </dd>
            </dl>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default StatsSection;
