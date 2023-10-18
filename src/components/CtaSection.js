import React from "react";
import { FireIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Button from "./Button";
import { Link } from "./../util/router";

function CtaSection(props) {
  return (
    <Section
      size={props.size}
      bgColor={props.bgColor}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      textColor={props.textColor}
    >
      <div className="space-y-10 container">
        <div className="text-center">
          <div className="relative inline-flex w-20 h-20 items-center justify-center text-emerald-500 mb-10 mx-auto">
            <div className="absolute inset-0 bg-emerald-200 rounded-xl transform rotate-6 scale-105" />
            <div className="absolute inset-0 bg-emerald-100 rounded-xl transform -rotate-6 scale-105" />
            <div className="relative">
              <FireIcon className="inline-block w-10 h-10" />
            </div>
          </div>
          <SectionHeader
            title={props.title}
            subtitle={props.subtitle}
            strapline={props.strapline}
          />
          <div className="text-center">
            <Button
              component={Link}
              to="/pricing"
              size="xl"
              endIcon={
                <ArrowRightIcon className="opacity-70 inline-block w-5 h-5" />
              }
            >
              Let's get started
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default CtaSection;
