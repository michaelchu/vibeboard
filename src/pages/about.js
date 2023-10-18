import React from "react";
import Meta from "./../components/Meta";
import HeroSection2 from "./../components/HeroSection2";
import StatsSection from "./../components/StatsSection";
import TeamBiosSection from "./../components/TeamBiosSection";
import CtaSection from "./../components/CtaSection";

function AboutPage(props) {
  return (
    <>
      <Meta title="About" description="Learn about our company and team" />
      <HeroSection2
        title={
          <>
            We are <span className="font-light">TechCode</span>
          </>
        }
        subtitle="A passionate team who are here to help you code and build your business using powerful tools."
        strapline=""
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
        leftImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&fit=crop&h=800&w=1280"
        rightImage="https://images.unsplash.com/photo-1554232456-8727aae0cfa4?crop=entropy&fit=crop&h=800&q=80&w=600"
      />
      <StatsSection
        title="Trusted by thousands of professionals"
        subtitle="Web developers from all over the world are using our products. Join them and build something amazing!"
        strapline="Inspiring Results"
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
      <TeamBiosSection
        title="Meet our amazing team"
        subtitle="They are working nonstop behind the scenes to help you build better products, web services and websites."
        strapline=""
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
    </>
  );
}

export default AboutPage;
