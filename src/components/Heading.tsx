import React from "react";

export default function Heading({ title }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800/50">
      <div className="container xl:max-w-7xl mx-auto px-4 py-2 lg:px-8 lg:py-4">
        <div className="text-center sm:text-left sm:flex sm:items-center sm:justify-between py-2 lg:py-0 space-y-2 sm:space-y-0">
          <div className="grow">
            <h2 className="text-sm text-gray-500 font-medium dark:text-gray-400">
              {title}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
