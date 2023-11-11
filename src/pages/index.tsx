import React from "react";
import Meta from "../components/Meta";
import Heading from "../components/Heading.tsx";

function IndexPage() {
  const title =
    " The internet’s source for RGB keyboard designs. Powered by creators everywhere.";

  return (
    <>
      <Heading title={title} />
      <div className="container xl:max-w-7xl mx-auto p-4 lg:p-8">
        <div>
          <Meta />
          <div className="flex items-center justify-center rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 text-gray-400 py-64 dark:bg-gray-800 dark:border-gray-700">
            Content (max width 1280px)
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexPage;
