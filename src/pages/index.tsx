import React from "react";
import Meta from "../components/Meta";
import Heading from "../components/Heading.tsx";
import Card from "../components/Card.tsx";

function IndexPage() {
  const title =
    " The internet’s source for RGB keyboard designs. Powered by creators everywhere.";

  return (
    <>
      <Heading title={title} />
      <div className="container xl:max-w-7xl mx-auto p-4 lg:p-8">
        <div>
          <Meta />
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexPage;
