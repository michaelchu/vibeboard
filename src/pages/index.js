import React from "react";
import Meta from "./../components/Meta";
import HeroSection from "./../components/HeroSection";
import FeaturesSection from "./../components/FeaturesSection";
import ClientsSection from "./../components/ClientsSection";
import TestimonialsSection from "./../components/TestimonialsSection";
import CtaSection from "./../components/CtaSection";
import NewsletterSection from "./../components/NewsletterSection";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <HeroSection
        title="Dividend tracking automated"
        subtitle="No more custom spreadsheets or manually entering trades. Kura handles the complexity of tracking, so you can easily stay on top of your trading."
        strapline=""
        size="lg"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
      <FeaturesSection
        title="What's your breakeven after taking into account dividends and DCA?"
        subtitle="Many try to answer these questions by tracking trades in a spreadsheet."
        strapline="MEET YOUR DIVIDEND TRACKING ASSISTANT"
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
      <ClientsSection
        title="You're in good company"
        subtitle=""
        strapline="Lots of happy customers"
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
      <TestimonialsSection
        title="Customer Testimonials"
        subtitle=""
        strapline="Real Feedback"
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
      <CtaSection
        title={
          <>
            Create an account <span className="text-blue-600">today</span>!
          </>
        }
        subtitle="Inspiring results from day one without the pain. Get your own custom dashboard and start building amazing services."
        strapline=""
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
      <NewsletterSection
        title="Subscribe to our newsletter"
        subtitle="Join us and receive the best curated news, freebies and resources directly to your inbox every week!"
        strapline=""
        size="lg"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
    </>
  );
}

export default IndexPage;
