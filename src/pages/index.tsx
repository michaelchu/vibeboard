import Heading from "../components/Heading.tsx";
import Header from "../components/Header.tsx";
import React from "react";
import { useKeyboardPaginated } from "../util/db.jsx";
import Meta from "../components/Meta.tsx";
import KeyboardCardList from "../components/Keyboard/Card/KeyboardCardList.tsx";
import Pagination from "../components/Pagination.tsx";
import Spinner from "../components/Spinner.tsx";

export default function IndexPage() {
  const { data, isLoading } = useKeyboardPaginated(1, 10);

  return (
    <>
      <Meta />
      <Header />
      <Heading />
      <div className="sm:border-t sm:border-gray-700/70"></div>
      {isLoading ? (
        <div className="container xl:max-w-7xl mx-auto py-10 px-4 lg:p-8">
          <div className={"w-full h-full"}>
            <Spinner variant={"dark"} />
          </div>
        </div>
      ) : (
        <>
          <KeyboardCardList data={data} />
          <div className={"py-10 px-5 sm:p-20"}>
            <Pagination />
          </div>
        </>
      )}
    </>
  );
}
