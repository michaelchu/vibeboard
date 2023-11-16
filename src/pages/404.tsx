import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      {/* Pages: Errors: 404 */}

      {/* Page Container */}
      <div
        id="page-container"
        className="mx-auto flex min-h-screen w-full min-w-[320px] flex-col bg-gray-100 dark:bg-gray-900 dark:text-gray-100"
      >
        {/* Page Content */}
        <main id="page-content" className="flex max-w-full flex-auto flex-col">
          <div className="relative flex min-h-screen items-center overflow-hidden bg-white dark:bg-gray-800">
            {/* Left/Right Background */}
            <div
              className="absolute bottom-0 left-0 top-0 -ml-44 w-48 transform bg-rose-50 dark:bg-rose-500 dark:bg-opacity-10 md:-ml-28 md:skew-x-6"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-0 right-0 top-0 -mr-44 w-48 transform bg-rose-50 dark:bg-rose-500 dark:bg-opacity-10 md:-mr-28 md:skew-x-6"
              aria-hidden="true"
            />
            {/* END Left/Right Background */}

            {/* Error Content */}
            <div className="container relative mx-auto space-y-16 px-8 py-16 text-center lg:py-32 xl:max-w-7xl">
              <div>
                <div className="mb-5 text-rose-300 dark:text-rose-300/50">
                  <svg
                    className="hi-outline hi-document-magnifying-glass inline-block h-12 w-12"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                </div>
                <div className="text-6xl font-extrabold text-rose-600 dark:text-rose-500 md:text-7xl">
                  404
                </div>
                <div
                  className="mx-auto my-6 h-1.5 w-12 rounded-lg bg-gray-200 dark:bg-gray-700 md:my-10"
                  aria-hidden="true"
                />
                <h1 className="mb-3 text-2xl font-extrabold md:text-3xl">
                  Well, This is Awkward...
                </h1>
                <h2 className="mx-auto mb-5 font-medium text-gray-500 dark:text-gray-400 md:leading-relaxed lg:w-3/5">
                  Looks like we can&apos;t find the page you&apos;re looking
                  for.
                </h2>
              </div>
              <Link
                to="/"
                className="group inline-flex items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
              >
                <ArrowLeftIcon className={"h-5- w-5"} />
                <span>Back to Home</span>
              </Link>
            </div>
            {/* END Error Content */}
          </div>
        </main>
        {/* END Page Content */}
      </div>
      {/* END Page Container */}

      {/* END Pages: Errors: 404 */}
    </>
  );
}

export default NotFoundPage;
