import Heading from "../components/Heading.tsx";
import Header from "../components/Header.tsx";
import React from "react";
import { useKeyboardPaginated } from "../util/db.jsx";
import Meta from "../components/Meta.tsx";
import KeyboardCard from "../components/Keyboard/KeyboardCard.tsx";
import { KeyboardProps } from "../components/Keyboard/types.ts";
import Pagination from "../components/Pagination.tsx";
import MobileKeyboardCard from "../components/Keyboard/MobileKeyboardCard.tsx";

export default function IndexPage() {
  const { data, status } = useKeyboardPaginated(1, 10);

  return (
    <>
      <Meta />
      <Header />
      <Heading />
      <div className="sm:border-t sm:border-gray-700/70"></div>
      {status === "idle" || status === "loading" ? (
        <span>One moment please</span>
      ) : (
        <>
          <div className="hidden sm:block">
            <div className="container xl:max-w-7xl mx-auto py-10 px-4 lg:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10">
                {data.map((keyboard: KeyboardProps, idx: number) => (
                  <KeyboardCard key={idx} keyboard={keyboard} />
                ))}
              </div>
            </div>
          </div>
          <div className="block sm:hidden">
            {data.map((keyboard: KeyboardProps, idx: number) => (
              <MobileKeyboardCard key={idx} keyboard={keyboard} />
            ))}
          </div>
          <div className={"py-10 px-5 sm:p-20"}>
            <Pagination />
          </div>
        </>
      )}
    </>
  );
}
