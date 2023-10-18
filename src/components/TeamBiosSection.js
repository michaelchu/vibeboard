import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { Link } from "./../util/router";

function TeamBiosSection(props) {
  const teamBios = [
    {
      avatar:
        "https://images.unsplash.com/photo-1492814580460-1f9a2a463cfe?crop=entropy&fit=crop&h=800&q=80&w=640",
      name: "Irma Norton",
      role: "Founder & CEO",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?crop=entropy&fit=crop&h=800&q=80&w=640",
      name: "Alejandro Lee",
      role: "Product Design",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&fit=crop&h=800&q=80&w=640",
      name: "Elsa King",
      role: "Web Developer",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?crop=entropy&fit=crop&h=800&q=80&w=640",
      name: "Alex Saunders",
      role: "Marketing",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1567186937675-a5131c8a89ea?crop=entropy&fit=crop&h=800&q=80&w=640",
      name: "Herman Reese",
      role: "Support Specialist",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1514846326710-096e4a8035e0?crop=entropy&fit=crop&h=800&q=80&w=640",
      name: "Sue Keller",
      role: "Web Developer",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?crop=entropy&fit=crop&h=800&q=80&w=640",
      name: "Julio Rivera",
      role: "Marketing",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1514222709107-a180c68d72b4?crop=entropy&fit=crop&h=800&q=80&w=640",
      name: "Shawn Bates",
      role: "SEO Expert",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16">
          {teamBios.map((bio, index) => (
            <div className="text-center" key={index}>
              <span className="block relative group overflow-hidden active:opacity-75 mb-3">
                <div className="absolute top-0 right-0 w-16 h-16 -mt-8 -mr-8 transform transition ease-out duration-150 rotate-45 scale-0 group-hover:scale-125 bg-white z-10" />
                <div className="absolute bottom-0 left-0 w-16 h-16 -mb-8 -ml-8 transform transition ease-out duration-150 rotate-45 scale-0 group-hover:scale-125 bg-white z-10" />
                <img
                  className="transform transition ease-out duration-150 group-hover:scale-110"
                  src={bio.avatar}
                  alt="User avatar"
                />
              </span>
              <h4 className="text-xl font-semibold mb-1">{bio.name}</h4>
              <p className="text-gray-600 font-medium mb-3">{bio.role}</p>
              <div className="space-x-1 mb-3">
                {bio.twitter && (
                  <Link
                    to={bio.twitter}
                    className="text-gray-400 hover:text-gray-600 active:text-gray-400"
                    target="_blank"
                  >
                    <svg
                      className="icon-twitter inline-block w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z" />
                    </svg>
                  </Link>
                )}

                {bio.linkedin && (
                  <Link
                    to={bio.linkedin}
                    className="text-gray-400 hover:text-gray-600 active:text-gray-400"
                    target="_blank"
                  >
                    <svg
                      className="icon-twitter inline-block w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default TeamBiosSection;
