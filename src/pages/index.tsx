import React from "react";
import Meta from "../components/Meta";
import Heading from "../components/Heading.tsx";
import CardWithHeading from "../components/CardWithHeading.tsx";
import Pagination from "../components/Pagination.tsx";

function IndexPage() {
  const title =
    " The internet’s source for RGB keyboard designs. Powered by creators everywhere.";

  return (
    <>
      <Heading title={title} />
      <div className="container xl:max-w-7xl mx-auto py-10 px-4 lg:p-8">
        <div>
          <Meta />
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10">
            <CardWithHeading />
            <CardWithHeading />
            <CardWithHeading />
            <CardWithHeading />
            <CardWithHeading />
            <CardWithHeading />
          </div>
          <div className={"p-20"}>
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexPage;
