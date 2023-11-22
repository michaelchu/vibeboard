import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import TrendList from "./TrendList.tsx";
import useMobile from "../hooks/useMobile.ts";

const userList = [
  {
    title: "Thomas Reynolds",
    subtitle: "@thomas",
    icon: "https://cdn.tailkit.com/media/placeholders/avatar-iFgRcqHznqg-160x160.jpg",
    href: "#",
  },
  {
    title: "Chad Hale",
    subtitle: "@chad",
    icon: "https://cdn.tailkit.com/media/placeholders/avatar-8PMvB4VyVXA-160x160.jpg",
    href: "#",
  },
  {
    title: "Angela Tong",
    subtitle: "@angela",
    icon: "https://cdn.tailkit.com/media/placeholders/avatar-bY4GXQKfZrA-160x160.jpg",
    href: "#",
  },
  {
    title: "James Ocampo",
    subtitle: "@james",
    icon: "https://cdn.tailkit.com/media/placeholders/avatar-euZ2n8dGUcQ-160x160.jpg",
    href: "#",
  },
  {
    title: "Debra Johnson",
    subtitle: "@debra",
    icon: "https://cdn.tailkit.com/media/placeholders/avatar-mEZ3PoFGs_k-160x160.jpg",
    href: "#",
  },
];

const collectionList = [
  {
    title: "Ocean Waves",
    subtitle: "by @thomas",
    icon: "https://cdn.tailkit.com/media/placeholders/avatar-iFgRcqHznqg-160x160.jpg",
    href: "#",
  },
  {
    title: "Holidays",
    subtitle: "by @chad",
    icon: "https://cdn.tailkit.com/media/placeholders/avatar-8PMvB4VyVXA-160x160.jpg",
    href: "#",
  },
  {
    title: "Fall Colors",
    subtitle: "by @angela",
    icon: "https://cdn.tailkit.com/media/placeholders/avatar-bY4GXQKfZrA-160x160.jpg",
    href: "#",
  },
  {
    title: "Moody",
    subtitle: "by @james",
    icon: "https://cdn.tailkit.com/media/placeholders/avatar-euZ2n8dGUcQ-160x160.jpg",
    href: "#",
  },
  {
    title: "Nightlife",
    subtitle: "by @debra",
    icon: "https://cdn.tailkit.com/media/placeholders/avatar-mEZ3PoFGs_k-160x160.jpg",
    href: "#",
  },
];
export default function Heading() {
  const isMobile = useMobile();
  return (
    <div className="bg-gray-50 dark:bg-gray-800/20 py-8">
      <div className="container xl:max-w-7xl mx-auto px-4 py-2 lg:px-8 lg:py-4 ">
        <div className={"grid grid-cols-1 lg:grid-cols-2 gap-10"}>
          <div className="sm:text-left sm:flex sm:items-center sm:justify-between py-2 lg:py-0 space-y-2 sm:space-y-0">
            <div className="sm:pb-10 sm:pt-20">
              <h1 className="text-4xl font-bold">VibeBoard</h1>
              <p className="mt-4 text-lg text-gray-400">
                The internet’s source for{" "}
                <span
                  className={
                    "font-bold bg-gradient-to-r from-red-500 via-lime-500 to-indigo-600 inline-block text-transparent bg-clip-text"
                  }
                >
                  RGB keyboard lighting
                </span>{" "}
                designs. Powered by creators everywhere.
              </p>
              <div className="w-full mt-8">
                <label htmlFor="search" className="sr-only ">
                  Search
                </label>
                <div className="relative text-gray-200 focus-within:text-gray-200">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
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
          {!isMobile && (
            <div className={"grid grid-cols-2 gap-5"}>
              <div className="rounded-xl">
                <TrendList title={"Trending Authors"} list={userList} />
              </div>
              <div className="rounded-xl">
                <TrendList
                  title={"Collections"}
                  list={collectionList}
                  iconStyle={"rounded-lg"}
                  placeholder={true}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
