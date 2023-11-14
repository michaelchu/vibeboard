import React from "react";
import Meta from "../components/Meta";
import { requireAuth } from "../util/auth.jsx";
import Pagination from "../components/Pagination.tsx";
import KeyboardCard from "../components/Keyboard/KeyboardCard.tsx";
import { KeyboardProps } from "../components/Keyboard/types.ts";
import { useKeyboardPaginated } from "../util/db.jsx";

function TopPage() {
  const { data, status } = useKeyboardPaginated(1, 10);
  return (
    <>
      <div className="container xl:max-w-7xl mx-auto py-10 px-4 lg:p-8">
        <div>
          <Meta />
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10">
            {status === "idle" || status === "loading" ? (
              <span>One moment please</span>
            ) : (
              data.map((keyboard: KeyboardProps, idx: number) => (
                <KeyboardCard key={idx} keyboard={keyboard} />
              ))
            )}
          </div>
          <div className={"py-10 px-5 sm:p-20"}>
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
}

export default TopPage;
