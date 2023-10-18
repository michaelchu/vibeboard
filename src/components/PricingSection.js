import React from "react";
import { BookmarkIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Button from "./Button";
import { Link } from "./../util/router";
import { useAuth } from "./../util/auth";

function PricingSection(props) {
  const auth = useAuth();

  const plans = [
    {
      id: "starter",
      name: "Starter",
      price: "10",
      subtitle: "For solo developers",
      perks: [
        <>
          <strong>100</strong> Custom Projects
        </>,
        <>
          <strong>50</strong> Paying Clients
        </>,
        <>
          <strong>10GB</strong> SSD Storage
        </>,
        <>
          <strong>1TB</strong> Bandwidth
        </>,
        <>
          <strong>24/7</strong> Email Support
        </>,
      ],
    },
    {
      id: "pro",
      name: "Pro",
      price: "20",
      subtitle: "For large teams",
      featured: true,
      perks: [
        <>
          <strong>1000</strong> Custom Projects
        </>,
        <>
          <strong>200</strong> Paying Clients
        </>,
        <>
          <strong>100GB</strong> SSD Storage
        </>,
        <>
          <strong>10TB</strong> Bandwidth
        </>,
        <>
          <strong>24/7</strong> Email Support
        </>,
      ],
    },
    {
      id: "business",
      name: "Business",
      price: "50",
      subtitle: "Custom solutions",
      perks: [
        <>
          <strong>Unlimited</strong> Custom Projects
        </>,
        <>
          <strong>Unlimited</strong> Paying Clients
        </>,
        <>
          <strong>Unlimited</strong> SSD Storage
        </>,
        <>
          <strong>Unlimited</strong> Bandwidth
        </>,
        <>
          <strong>24/7</strong> Priority Email Support
        </>,
      ],
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
      <div className="space-y-10 container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          strapline={props.strapline}
          className="text-center"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-0 lg:py-6">
          {plans.map((plan, index) => (
            <div
              className={
                "rounded-lg shadow-sm flex flex-col border-2" +
                (plan.featured
                  ? " bg-blue-50 lg:border-4 border-blue-300 hover:border-blue-400 relative lg:-mx-2 lg:-my-6"
                  : "") +
                (!plan.featured
                  ? " bg-gray-100 border-gray-200 hover:border-gray-300"
                  : "")
              }
              key={index}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 h-10 w-10 flex items-center justify-center">
                  <BookmarkIcon className="inline-block w-6 h-6 text-orange-400" />
                </div>
              )}

              <div className="p-5 lg:p-6 text-center bg-white rounded-t-lg">
                <span className="inline-block text-sm uppercase tracking-wider font-semibold px-3 py-1 bg-blue-200 bg-opacity-50 text-blue-600 rounded-full mb-4">
                  {plan.name}
                </span>
                <div className="mb-1">
                  <span className="text-3xl lg:text-4xl font-extrabold">
                    ${plan.price}
                  </span>
                  <span className="text-gray-700 font-semibold">/mon</span>
                  <p className="text-gray-600 text-sm font-medium">
                    {plan.subtitle}
                  </p>
                </div>
              </div>

              {plan.perks && (
                <div
                  className={
                    "p-5 lg:p-6 space-y-5 lg:space-y-6 text-gray-700 grow" +
                    (plan.featured ? " text-blue-900" : "")
                  }
                >
                  <ul className="space-y-4 text-sm lg:text-base">
                    {plan.perks.map((perk, index) => (
                      <li className="flex items-center space-x-2" key={index}>
                        <CheckCircleIcon className="text-emerald-500 inline-block w-5 h-5" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="px-5 pb-5 lg:px-6 lg:pb-6">
                <Button
                  component={Link}
                  to={
                    auth.user
                      ? `/purchase/${plan.id}`
                      : `/auth/signup?next=/purchase/${plan.id}`
                  }
                  size="lg"
                  variant={plan.featured ? "primary" : "dark"}
                  isBlock={true}
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default PricingSection;
