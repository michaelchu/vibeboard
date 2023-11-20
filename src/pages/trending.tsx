import React from "react";
import Meta from "../components/Meta";
import Pagination from "../components/Pagination.tsx";
import KeyboardCardList from "../components/Keyboard/Card/KeyboardCardList.tsx";
import { useKeyboardPaginated } from "../util/db.jsx";
import Header from "../components/Header.tsx";
import Spinner from "../components/Spinner.tsx";

function TrendingPage() {
  const { data, status } = useKeyboardPaginated(1, 10);
  return (
    <>
      <Meta />
      <Header />
      {status === "idle" || status === "loading" ? (
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

export default TrendingPage;
