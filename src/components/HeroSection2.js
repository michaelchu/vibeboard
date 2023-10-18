import React from "react";
import {
  CubeTransparentIcon,
  HeartIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/solid";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

function HeroSection2(props) {
  const items = [
    {
      title: "Passion",
      description:
        "We are passionate with what we do and love crafting products that can make your life easier and help you succeed. We pay attention to small details and always aiming for the best.",
      icon: HeartIcon,
      iconColor: "text-red-500",
    },
    {
      title: "Commitment",
      description:
        "We are committed to our work and stand by our projects. Our aim is to improve them in every update and offer the most full-featured packages with the smallest possible footprint.",
      icon: ArrowDownIcon,
      iconColor: "text-blue-500",
    },
    {
      title: "Less is more",
      description:
        "We believe that design should be invisible and enhance the user experience, not get in the way. This gives room for your content to breath and attracts your users’ attention.",
      icon: CubeTransparentIcon,
      iconColor: "text-pink-500",
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
        <div>
          <CubeTransparentIcon className="text-blue-600 mb-5 inline-block w-16 h-16" />
          <SectionHeader
            title={props.title}
            subtitle={props.subtitle}
            strapline={props.strapline}
            className="lg:w-1/2"
          />
        </div>
        <div className="flex space-x-2">
          <div>
            <img src={props.leftImage} alt="" className="rounded-lg" />
          </div>
          <div>
            <img src={props.rightImage} alt="" className="rounded-lg" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {items.map((item, index) => (
            <div key={index}>
              <h3 className="flex items-center space-x-2 text-lg font-bold uppercase tracking-wide mb-2">
                <item.icon
                  className={
                    "inline-block w-5 h-5" +
                    (item.iconColor ? ` ${item.iconColor}` : "")
                  }
                />
                <span>{item.title}</span>
              </h3>
              <p className="leading-relaxed text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default HeroSection2;
