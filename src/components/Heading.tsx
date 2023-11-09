import React from "react";

export default function Heading() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800/50">
      <div className="container xl:max-w-7xl mx-auto p-2 lg:px-8 lg:py-4">
        <div className="text-center sm:text-left sm:flex sm:items-center sm:justify-between py-2 lg:py-0 space-y-2 sm:space-y-0">
          <div className="grow">
            <h2 className="text-sm text-gray-500 font-medium dark:text-gray-400">
              The internet’s source for RGB keyboard designs. Powered by
              creators everywhere.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
