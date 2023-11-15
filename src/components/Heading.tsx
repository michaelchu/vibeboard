import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function Heading({ title }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800/20">
      <div className="container xl:max-w-7xl mx-auto px-4 py-2 lg:px-8 lg:py-4 ">
        <div className="sm:text-left sm:flex sm:items-center sm:justify-between py-2 lg:py-0 space-y-2 sm:space-y-0">
          <div className="pb-10 pt-20">
            <h1 className="text-4xl font-bold tracking-tight text-gray-300">
              VibeBoard
            </h1>
            <p className="mt-4 text-base text-gray-400">{title}</p>
            <div className="w-full mt-8">
              <label htmlFor="search" className="sr-only ">
                Search
              </label>
              <div className="relative text-gray-200 focus-within:text-gray-200">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                  id="search"
                  className="block w-full rounded-md border-0 bg-gray-800 focus:bg-gray-700/50 py-4 pl-10 pr-6 text-gray-300 focus:ring-1 focus:ring-gray focus:ring-offset-2 focus:ring-offset-gray-700 sm:text-sm sm:leading-6"
                  placeholder="Search"
                  type="search"
                  name="search"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
