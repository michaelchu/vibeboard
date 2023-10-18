import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Button from "./Button";

function FaqSection(props) {
  const faqItems = [
    {
      question: "What features are included?",
      answer:
        "Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque.",
    },
    {
      question: "Can I use PayPal to pay you?",
      answer:
        "Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque.",
    },
    {
      question: "Do I get access to the community?",
      answer:
        "Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque.",
    },
    {
      question: "Can I get a refund just in case?",
      answer:
        "Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque.",
    },
    {
      question: "Do you offer email support?",
      answer:
        "Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque.",
    },
    {
      question: "Are the updates free for life?",
      answer:
        "Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque.",
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
      <div className="space-y-12 container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          strapline={props.strapline}
          className="text-center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {faqItems.map((item, index) => (
            <div className="prose prose-indigo" key={index}>
              <h4>{item.question}</h4>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>

        {props.showSupportButton && (
          <div className="text-center">
            <Button
              href={props.supportUrl}
              target="_blank"
              size="lg"
              variant="simple"
              startIcon={
                <ArrowTopRightOnSquareIcon className="opacity-50 inline-block w-5 h-5" />
              }
            >
              Go to support center
            </Button>
          </div>
        )}
      </div>
    </Section>
  );
}

export default FaqSection;
