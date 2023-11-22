import React from "react";
import Meta from "../components/Meta";
import { requireAuth, useAuth } from "../util/auth.jsx";
import Dropdown from "../components/Dropdown.tsx";
import { Link } from "react-router-dom";
import KeyboardCardList from "../components/Keyboard/Card/KeyboardCardList.tsx";
import { useKeyboardByUser } from "../util/db.jsx";
import { PlusIcon } from "@heroicons/react/24/solid";
import Header from "../components/Header.tsx";
import Spinner from "../components/Spinner.tsx";
import Pagination from "../components/Pagination.tsx";

function DashboardPage() {
  const auth = useAuth();
  const { data, isLoading } = useKeyboardByUser(auth.user.id);
  return (
    <>
      <Header />
      <div className="bg-gray-50 dark:bg-gray-800/50">
        <div className="container xl:max-w-7xl mx-auto p-4 lg:p-8">
          <div className="text-center sm:text-left sm:flex sm:items-center sm:justify-between py-2 lg:py-0 space-y-2 sm:space-y-0">
            <div className="grow">
              <h1 className="text-xl font-bold mb-1">
                Your Keyboard Collection
              </h1>
            </div>
            <div className=" flex-col sm:flex-row sm:flex-none sm:flex items-center justify-center sm:justify-end sm:space-x-3 py-3 rounded sm:bg-transparent px-2 sm:px-0">
              <Dropdown />
              <Link
                to="/keyboard/add"
                className=" mt-3 sm:mt-0 block sm:inline-flex space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90"
              >
                <PlusIcon className="hi-mini hi-plus inline-block w-5 h-5 opacity-50" />
                <span>New Collection</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Meta title="Design your Keyboard" />
      {/* Page Section */}
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
      {/* END Page Section */}
    </>
  );
}

export default requireAuth(DashboardPage);
