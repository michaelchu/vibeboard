import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Avatar from "./Avatar";

function TestimonialsSection(props) {
  const testimonials = [
    {
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&fit=crop&h=160&&q=80&w=160",
      name: "Elsa King",
      body: "I’ve been using Divjoy templates for years. The code is consistently high-quality and pleasant to work with, so I highly recommended them.",
      role: "Web Developer",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?crop=entropy&fit=crop&h=160&&q=80&w=160",
      name: "Alex Saunders",
      body: "I’ve been using Divjoy templates for years. The code is consistently high-quality and pleasant to work with, so I highly recommended them.",
      role: "Graphic Designer",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1514846326710-096e4a8035e0?crop=entropy&fit=crop&h=160&&q=80&w=160",
      name: "Sue Keller",
      body: "I’ve been using Divjoy templates for years. The code is consistently high-quality and pleasant to work with, so I highly recommended them.",
      role: "CEO and Founder ",
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              className="border rounded-md bg-gray-50 shadow-sm relative"
              key={index}
            >
              <div className="absolute top-0 right-0 text-8xl mt-1 mr-2 text-blue-200 opacity-75 font-serif">
                “
              </div>
              <div className="px-4 pt-14 pb-6 sm:px-6 sm:pb-6 relative">
                <blockquote>
                  <p className="leading-7 mb-5">{testimonial.body}</p>
                  <footer className="flex items-center space-x-4">
                    <Avatar image={testimonial.avatar} size="sm" />
                    <div>
                      <span className="font-semibold text-blue-600">
                        {testimonial.name}
                      </span>
                      <p className="text-gray-500 font-medium text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default TestimonialsSection;
