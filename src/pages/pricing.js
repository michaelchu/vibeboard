import React from "react";
import Meta from "./../components/Meta";
import PricingSection from "./../components/PricingSection";

function PricingPage(props) {
  return (
    <>
      <Meta title="Pricing" />
      <PricingSection
        title="Choose the best plan"
        subtitle="Get to know our premium solutions and get your start up off the ground in no time. Inspiring results from the first days."
        strapline="Pricing"
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
    </>
  );
}

export default PricingPage;
